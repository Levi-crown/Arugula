function notificationDrawerTemplate() {
  const notifications = [...state.notifications].sort(
    (left, right) => new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime()
  );

  return `
    <div class="overlay overlay--drawer">
      <aside class="drawer">
        <div class="drawer__header">
          <div>
            <h3 class="section-title">Notifications</h3>
            <p class="section-copy">Open alerts and recent dashboard activity.</p>
          </div>
          <button class="icon-button" type="button" data-action="close-notifications">
            ${icon("close")}
          </button>
        </div>

        <div class="drawer__hero notification-drawer__hero">
          <div class="section-copy">Alert Overview</div>
          <p class="drawer__hero-value">${state.notifications.length} <span>active alerts</span></p>
          <p class="section-copy">Unread in history: ${unreadNotificationCount()}</p>
        </div>

        ${notifications.length ? `
          <div class="notification-list notification-list--compact">
            ${notifications.map((notification) => notificationItemTemplate(notification)).join("")}
          </div>
        ` : `
          <div class="center-banner">No active notifications right now.</div>
        `}

        <div class="drawer__actions">
          <button class="button button--secondary button--full" type="button" data-action="close-notifications">
            Close
          </button>
          <button class="button button--primary button--full" type="button" data-view="history">
            ${icon("history")}
            <span>View History</span>
          </button>
        </div>
      </aside>
    </div>
  `;
}

function notificationItemTemplate(notification, showNewBadge = false) {
  return `
    <article class="notification-item notification-item--${notification.type}">
      <div class="notification-item__meta">
        <span class="notification-item__icon">${icon(toastIconName(notification.type))}</span>
        <div class="notification-item__content">
          <div class="notification-item__row">
            <p class="notification-item__title">${escapeHtml(notification.message)}</p>
            ${showNewBadge && !notification.read ? '<span class="notification-item__badge">New</span>' : ""}
          </div>
          <p class="notification-item__time">${escapeHtml(formatNotificationTimestamp(notification.createdAt))}</p>
        </div>
      </div>
      <span class="pill ${notificationPillClass(notification.type)}">${escapeHtml(capitalize(notification.type))}</span>
    </article>
  `;
}

function toastTemplate(notification) {
  return `
    <div class="toast toast--${notification.type} ${notification.exiting ? "is-exiting" : ""}">
      <span class="toast__icon toast__icon--${notification.type}">${icon(toastIconName(notification.type))}</span>
      <div class="toast__body">
        <p class="toast__title">${escapeHtml(notification.message)}</p>
      </div>
      <button class="icon-button" type="button" data-action="dismiss-toast" data-id="${notification.id}">
        ${icon("close")}
      </button>
    </div>
  `;
}

function pushNotification(type, message) {
  const createdAt = new Date().toISOString();
  const isRead = state.notificationsOpen || state.activeView === "history";
  const notification = {
    id: `note-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    type,
    message,
    createdAt,
    exiting: false,
  };

  state.notifications = [...state.notifications, notification];
  state.notificationHistory = [
    {
      id: notification.id,
      type: notification.type,
      message: notification.message,
      createdAt,
      read: isRead,
    },
    ...state.notificationHistory,
  ];

  renderHeader();
  if (state.activeView === "history") {
    renderPage();
  }
  if (state.notificationsOpen) {
    renderOverlays();
  }
  renderToasts();

  if (state.isAuthenticated && !state.notificationsOpen) {
    startNotificationTimer(notification.id);
  }
}

function startNotificationTimer(id) {
  clearNotificationTimer(id);
  const timer = window.setTimeout(() => beginNotificationExit(id), 5000);
  notificationTimers.set(id, timer);
}

function beginNotificationExit(id) {
  const notification = state.notifications.find((item) => item.id === id);
  if (!notification || notification.exiting) {
    return;
  }

  notification.exiting = true;
  renderToasts();
  clearNotificationTimer(id);

  const timer = window.setTimeout(() => {
    state.notifications = state.notifications.filter((item) => item.id !== id);
    renderToasts();
    notificationTimers.delete(id);
  }, 240);

  notificationTimers.set(id, timer);
}

function clearNotificationTimer(id) {
  const timer = notificationTimers.get(id);
  if (timer) {
    window.clearTimeout(timer);
    notificationTimers.delete(id);
  }
}

function clearAllNotificationTimers() {
  notificationTimers.forEach((timer) => window.clearTimeout(timer));
  notificationTimers.clear();
  state.notifications = state.notifications.filter((notification) => !notification.exiting);
}

function restartDashboardNotificationTimers() {
  clearAllNotificationTimers();
  if (!state.isAuthenticated || state.notificationsOpen) {
    renderToasts();
    return;
  }

  renderToasts();
  state.notifications.forEach((notification) => startNotificationTimer(notification.id));
}

function sortedNotificationHistory() {
  return [...state.notificationHistory].sort(
    (left, right) => new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime()
  );
}

function unreadNotificationCount() {
  return state.notificationHistory.filter((notification) => !notification.read).length;
}

function markAllNotificationsRead(shouldRender = true) {
  let hasChanges = false;

  state.notificationHistory = state.notificationHistory.map((notification) => {
    if (notification.read) {
      return notification;
    }

    hasChanges = true;
    return {
      ...notification,
      read: true,
    };
  });

  if (!shouldRender || !hasChanges) {
    return;
  }

  renderHeader();
  if (state.activeView === "history") {
    renderPage();
  }
  if (state.notificationsOpen) {
    renderOverlays();
  }
}
