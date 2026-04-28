function sensorDrawerTemplate(sensor) {
  const poweredOn = isSensorPoweredOn(sensor);
  const currentValue = poweredOn
    ? sensor.heroValue
      ? escapeHtml(sensor.heroValue)
      : `${escapeHtml(sensor.value)} <span>${escapeHtml(sensor.unit)}</span>`
    : "OFF <span>Sensor</span>";
  const deviceName = sensor.deviceName || sensor.name;
  const powerMode = poweredOn ? "On" : "Off";
  const detailCards = [
    metricCardTemplate("Metric", sensor.name),
    metricCardTemplate("Sensor Device", deviceName),
    metricCardTemplate("Power", powerMode),
    ...(sensor.detailMetrics || []).map((item) => metricCardTemplate(item.label, item.value)),
  ].join("");

  return `
    <div class="overlay overlay--drawer">
      <aside class="drawer">
        <div class="drawer__header">
          <h3 class="section-title">${escapeHtml(sensor.name)}</h3>
          <button class="icon-button" type="button" data-action="close-sensor-detail">
            ${icon("close")}
          </button>
        </div>

        <div class="drawer__hero">
          <div class="section-copy">${escapeHtml(deviceName)}</div>
          <p class="drawer__hero-value">${currentValue}</p>
          <div class="progress-track">
            <div class="progress-fill ${progressClass(effectiveSensorStatus(sensor))}" style="width: ${effectiveSensorPercentage(sensor)}%"></div>
          </div>
        </div>

        <div class="page-stack" style="margin-top: 1.4rem;">
          <div>
            <h4 class="section-title">Sensor Details</h4>
            <p class="section-copy">${poweredOn ? "This sensor is active and currently sending data." : "This sensor is turned off from Sensor Management."}</p>
          </div>
          <div class="grid grid--cards">
            ${detailCards}
          </div>
        </div>

        <div class="drawer__actions">
          <button class="button button--secondary button--full" type="button" data-action="close-sensor-detail">
            Close
          </button>
          <button class="button button--primary button--full" type="button" data-view="sensors">
            Open Sensor Management
          </button>
        </div>
      </aside>
    </div>
  `;
}

function getSelectedSensor() {
  if (!state.selectedSensorId) {
    return null;
  }
  if (typeof findDashboardSensorById === "function") {
    return findDashboardSensorById(state.selectedSensorId);
  }
  return state.dashboardSensors.find((item) => item.id === state.selectedSensorId) || null;
}
