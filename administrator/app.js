const LOGO_PATH = "../assets/arucugreen-logo.png";
const SARATE_LOGO_PATH = "../assets/sarate-farm-logo.png";
const DA_LOGO_PATH = "../assets/da-logo-transparent.png";
const PROFILE_PHOTO_STORAGE_KEY = "arugula.profilePhotoDataUrl";

const ICONS = {
  dashboard: `
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="5"></rect>
    <rect x="14" y="12" width="7" height="9"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  `,
  activity: `
    <path d="M3 12h4l3-7 4 14 3-7h4"></path>
  `,
  droplets: `
    <path d="M12 3s6 6 6 10a6 6 0 0 1-12 0c0-4 6-10 6-10Z"></path>
  `,
  droplet: `
    <path d="M12 3s6 6 6 10a6 6 0 0 1-12 0c0-4 6-10 6-10Z"></path>
  `,
  sprout: `
    <path d="M12 20v-8"></path>
    <path d="M12 12c0-4.4 3.6-8 8-8 0 4.4-3.6 8-8 8Z"></path>
    <path d="M12 14c0-3.3-2.7-6-6-6 0 3.3 2.7 6 6 6Z"></path>
    <path d="M8 20h8"></path>
  `,
  leaf: `
    <path d="M12 19v-4.5"></path>
    <path d="M12 14.5c0-2.8 2.3-5 5.1-5.1 0 2.8-2.3 5.1-5.1 5.1Z"></path>
    <path d="M12 15.6c0-2.1-1.7-3.8-3.8-3.8 0 2.1 1.7 3.8 3.8 3.8Z"></path>
  `,
  users: `
    <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path>
    <circle cx="9.5" cy="7" r="3"></circle>
    <path d="M21 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 4.13a4 4 0 0 1 0 7.75"></path>
  `,
  settings: `
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 1-3 0 1.7 1.7 0 0 0-1-.6 1.7 1.7 0 0 0-1.82.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 1 0-3 1.7 1.7 0 0 0 .6-1 1.7 1.7 0 0 0-.34-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 1 3 0 1.7 1.7 0 0 0 1 .6 1.7 1.7 0 0 0 1.82-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c0 .38.14.75.4 1a1.7 1.7 0 0 1 0 3c-.26.25-.4.62-.4 1Z"></path>
  `,
  logout: `
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
    <path d="M10 17l5-5-5-5"></path>
    <path d="M15 12H3"></path>
  `,
  user: `
    <circle cx="12" cy="8" r="4"></circle>
    <path d="M5 20a7 7 0 0 1 14 0"></path>
  `,
  thermometer: `
    <path d="M14 14.76V5a2 2 0 1 0-4 0v9.76a4 4 0 1 0 4 0Z"></path>
  `,
  wind: `
    <path d="M3 8h11a3 3 0 1 0-3-3"></path>
    <path d="M2 13h15a3 3 0 1 1-3 3"></path>
    <path d="M4 18h9"></path>
  `,
  zap: `
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"></path>
  `,
  wifi: `
    <path d="M2 8.82A15 15 0 0 1 22 8.82"></path>
    <path d="M5 12.86a10 10 0 0 1 14 0"></path>
    <path d="M8.5 16.89a5 5 0 0 1 7 0"></path>
    <path d="M12 20h.01"></path>
  `,
  "wifi-off": `
    <path d="M2 8.82A15 15 0 0 1 22 8.82"></path>
    <path d="M8.5 16.89a5 5 0 0 1 4.95-.31"></path>
    <path d="M5 12.86a10 10 0 0 1 6.24-2.81"></path>
    <path d="M2 2l20 20"></path>
  `,
  "trending-up": `
    <path d="M3 17l6-6 4 4 7-7"></path>
    <path d="M14 8h6v6"></path>
  `,
  "trending-down": `
    <path d="M3 7l6 6 4-4 7 7"></path>
    <path d="M14 16h6v-6"></path>
  `,
  minus: `
    <path d="M5 12h14"></path>
  `,
  x: `
    <path d="M18 6 6 18"></path>
    <path d="m6 6 12 12"></path>
  `,
  "alert-triangle": `
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"></path>
    <path d="M12 9v4"></path>
    <path d="M12 17h.01"></path>
  `,
  "check-circle": `
    <circle cx="12" cy="12" r="9"></circle>
    <path d="m9 12 2 2 4-4"></path>
  `,
  "x-circle": `
    <circle cx="12" cy="12" r="9"></circle>
    <path d="m15 9-6 6"></path>
    <path d="m9 9 6 6"></path>
  `,
  calendar: `
    <rect x="3" y="5" width="18" height="16" rx="2"></rect>
    <path d="M16 3v4"></path>
    <path d="M8 3v4"></path>
    <path d="M3 11h18"></path>
  `,
  hand: `
    <path d="M7 11V5a1 1 0 1 1 2 0v6"></path>
    <path d="M11 11V4a1 1 0 1 1 2 0v7"></path>
    <path d="M15 12V6a1 1 0 1 1 2 0v9"></path>
    <path d="M7 11a3 3 0 0 0-3 3v1a5 5 0 0 0 5 5h5a5 5 0 0 0 5-5v-2a3 3 0 0 0-3-3"></path>
  `,
  clock: `
    <circle cx="12" cy="12" r="9"></circle>
    <path d="M12 7v5l3 2"></path>
  `,
  flask: `
    <path d="M10 3v5.4L5.4 17.1A2.2 2.2 0 0 0 7.37 20h9.26a2.2 2.2 0 0 0 1.97-2.9L14 8.4V3"></path>
    <path d="M9 3h6"></path>
    <path d="M8.7 13h6.6"></path>
  `,
  bell: `
    <path d="M15 17h5l-1.4-1.4a2 2 0 0 1-.6-1.41V11a6 6 0 0 0-12 0v3.19a2 2 0 0 1-.59 1.41L4 17h5"></path>
    <path d="M10 17a2 2 0 0 0 4 0"></path>
  `,
  history: `
    <path d="M3 12a9 9 0 1 0 3-6.71"></path>
    <path d="M3 3v5h5"></path>
    <path d="M12 7v5l3 2"></path>
  `,
  "user-plus": `
    <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path>
    <circle cx="9.5" cy="7" r="3"></circle>
    <path d="M19 8v6"></path>
    <path d="M16 11h6"></path>
  `,
  trash: `
    <path d="M3 6h18"></path>
    <path d="M8 6V4h8v2"></path>
    <path d="M19 6l-1 14H6L5 6"></path>
    <path d="M10 11v6"></path>
    <path d="M14 11v6"></path>
  `,
  shield: `
    <path d="M12 3 5 6v5c0 5 3.5 8.5 7 10 3.5-1.5 7-5 7-10V6l-7-3Z"></path>
  `,
  mail: `
    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
    <path d="m4 7 8 6 8-6"></path>
  `,
  camera: `
    <path d="M4 8h3l2-3h6l2 3h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z"></path>
    <circle cx="12" cy="13" r="4"></circle>
  `,
  lock: `
    <rect x="4" y="11" width="16" height="10" rx="2"></rect>
    <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
  `,
  eye: `
    <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  `,
  "eye-off": `
    <path d="m3 3 18 18"></path>
    <path d="M10.58 10.58a2 2 0 0 0 2.83 2.83"></path>
    <path d="M9.88 5.08A10.94 10.94 0 0 1 12 5c6 0 10 7 10 7a18.74 18.74 0 0 1-3.04 3.81"></path>
    <path d="M6.61 6.61A18.7 18.7 0 0 0 2 12s4 7 10 7a9.76 9.76 0 0 0 5.39-1.61"></path>
  `,
  info: `
    <circle cx="12" cy="12" r="9"></circle>
    <path d="M12 16v-4"></path>
    <path d="M12 8h.01"></path>
  `,
  close: `
    <path d="M18 6 6 18"></path>
    <path d="m6 6 12 12"></path>
  `,
};

const NAV_ITEMS = [
  { view: "dashboard", label: "Dashboard", icon: "dashboard" },
  { view: "history", label: "History", icon: "history" },
  { view: "sensors", label: "Sensors", icon: "activity" },
  { view: "irrigation", label: "Irrigation", icon: "droplets" },
  { view: "cultivation", label: "Cultivation", icon: "sprout" },
  { view: "manage-account", label: "Manage Account", icon: "users" },
];

const VIEW_HASHES = {
  dashboard: "#/",
  history: "#/history",
  sensors: "#/sensors",
  irrigation: "#/irrigation",
  cultivation: "#/cultivation",
  "manage-account": "#/manage-account",
};

const VIEW_INDEX = Object.fromEntries(NAV_ITEMS.map((item, index) => [item.view, index]));
const PAGE_TRANSITION_EXIT_MS = 180;

const ALERT_OPTIONS = ["SMS + Email", "Email Only", "SMS Only", "Disabled"];

const IRRIGATION_CHANNELS = [
  {
    key: "water",
    label: "Water",
    icon: "droplets",
    description: "Primary watering line",
    automaticDuration: "15",
    manualDuration: "15",
    scheduleStartTime: "06:00",
    scheduleDuration: "20",
    scheduleFrequency: "daily",
  },
  {
    key: "fertilizer",
    label: "Fertilizer",
    icon: "sprout",
    description: "Nutrient dosing line",
    automaticDuration: "10",
    manualDuration: "10",
    scheduleStartTime: "06:15",
    scheduleDuration: "15",
    scheduleFrequency: "every-2-days",
  },
  {
    key: "limeSolution",
    label: "Lime Solution",
    icon: "flask",
    description: "pH balancing solution line",
    automaticDuration: "8",
    manualDuration: "8",
    scheduleStartTime: "06:30",
    scheduleDuration: "10",
    scheduleFrequency: "weekly",
  },
];

const IRRIGATION_FREQUENCIES = [
  { value: "daily", label: "Daily" },
  { value: "every-2-days", label: "Every 2 days" },
  { value: "every-3-days", label: "Every 3 days" },
  { value: "weekly", label: "Weekly" },
];

const DEVELOPERS = [
  {
    name: "Chris",
    role: "Lead Developer",
    description: "Full-stack development and system architecture",
    avatar: "C",
    imagePath: "../assets/ChrisPic.png",
  },
  {
    name: "Sheila",
    role: "Group Leader / Paper Works",
    description: "Interface design and user experience",
    avatar: "S",
    imagePath: "../assets/sheilaPic.png",
    imageScale: "96%",
  },
  {
    name: "Jhonel",
    role: "Designer",
    description: "Server infrastructure and database management",
    avatar: "J",
    imagePath: "../assets/jhonelPic.png",
  },
  {
    name: "Eron Cataga",
    role: "Hardware Engineer",
    description: "Sensor integration and IoT systems",
    avatar: "E",
    imagePath: "../assets/EronPic.png",
  },
];

const SENSOR_HEALTH = [
  { key: "dht22", name: "DHT22" },
  { key: "moisture", name: "Soil Capacitive Sensor" },
  { key: "rs485", name: "RS485 Multi Sensor" },
];

const SENSOR_MANAGEMENT_CARDS = [
  {
    sensorId: "moisture",
    powerKey: "moisture",
    deviceName: "Soil Capacitive Sensor",
    readingLabel: "Soil Moisture",
    icon: "droplet",
    accent: "linear-gradient(135deg, var(--green-300), var(--green-600))",
  },
  {
    sensorId: "ph",
    powerKey: "ph",
    deviceName: "Soil pH RS485 Multi Sensor",
    readingLabel: "Soil pH",
    icon: "activity",
    accent: "linear-gradient(135deg, var(--purple-500), var(--green-900))",
  },
  {
    sensorId: "ec",
    powerKey: "ec",
    deviceName: "Soil EC RS485 Multi Sensor",
    readingLabel: "Soil EC",
    icon: "zap",
    accent: "linear-gradient(135deg, var(--amber-500), var(--green-600))",
  },
  {
    sensorId: "temp",
    powerKey: "dht22",
    deviceName: "DHT22",
    readingLabel: "Temperature",
    icon: "thermometer",
    accent: "linear-gradient(135deg, var(--green-600), var(--green-900))",
  },
  {
    sensorId: "humidity",
    powerKey: "dht22",
    deviceName: "DHT22",
    readingLabel: "Humidity",
    icon: "wind",
    accent: "linear-gradient(135deg, var(--green-300), var(--green-500))",
  },
];

const IOT_ROW_METRICS = [
  {
    key: "moisture",
    label: "Soil Moisture",
    unit: "%",
    icon: "droplet",
    deviceName: "Soil Capacitive Sensor",
    displayMin: 0,
    displayMax: 100,
    normalMin: 40,
    normalMax: 55,
  },
  {
    key: "ec",
    label: "Soil EC",
    unit: "mS/cm",
    icon: "zap",
    deviceName: "RS485 Multi Sensor",
    displayMin: 0,
    displayMax: 3,
    normalMin: 1.4,
    normalMax: 1.8,
  },
  {
    key: "ph",
    label: "Soil pH",
    unit: "pH",
    icon: "activity",
    deviceName: "RS485 Multi Sensor",
    displayMin: 4,
    displayMax: 9,
    normalMin: 6.2,
    normalMax: 6.8,
  },
  {
    key: "temp",
    label: "Temperature",
    unit: "\u00B0C",
    icon: "thermometer",
    deviceName: "DHT22",
    shared: true,
    displayMin: 10,
    displayMax: 40,
    normalMin: 24,
    normalMax: 29,
  },
  {
    key: "humidity",
    label: "Humidity",
    unit: "%",
    icon: "wind",
    deviceName: "DHT22",
    shared: true,
    displayMin: 0,
    displayMax: 100,
    normalMin: 55,
    normalMax: 70,
  },
];

const IOT_ROW_SENSOR_CONTROLS = [
  {
    key: "moisture",
    label: "Soil Moisture",
    deviceName: "Soil Capacitive Sensor",
    icon: "droplet",
    metricKeys: ["moisture"],
  },
  {
    key: "rs485",
    label: "RS485 Multi Sensor",
    deviceName: "RS485 Multi Sensor",
    icon: "activity",
    metricKeys: ["ec", "ph"],
  },
];

const IOT_DEVICE_ROWS = [
  { key: "row1", label: "Row 1", moisture: 45, ec: 1.8, ph: 6.5 },
  { key: "row2", label: "Row 2", moisture: 52, ec: 1.6, ph: 6.7 },
  { key: "row3", label: "Row 3", moisture: 48, ec: 1.9, ph: 6.3 },
  { key: "row4", label: "Row 4", moisture: 56, ec: 1.7, ph: 6.6 },
];

const SHARED_DHT22_METRICS = {
  temp: 28,
  humidity: 65,
};

const SENSOR_ACTUATORS = [
  {
    key: "fan",
    label: "Fan Control",
    icon: "wind",
    copy: "Choose Automatic, On, or Off for the cooling fan.",
    accent: "linear-gradient(135deg, var(--green-500), var(--green-800))",
  },
  {
    key: "light",
    label: "Light Control",
    icon: "zap",
    copy: "Choose Automatic, On, or Off for the grow light.",
    accent: "linear-gradient(135deg, var(--amber-500), var(--green-700))",
  },
];

const ACTIVE_CULTIVATIONS = [
  {
    crop: "Bok Choy",
    accent: "var(--green-500)",
    planted: "April 10, 2026",
    remaining: "15 days remaining",
    harvest: "May 10, 2026",
    remainingColor: "var(--green-600)",
  },
  {
    crop: "Mustasa",
    accent: "var(--amber-500)",
    planted: "April 8, 2026",
    remaining: "18 days remaining",
    harvest: "May 13, 2026",
    remainingColor: "var(--green-500)",
  },
  {
    crop: "Green Ice Lettuce",
    accent: "var(--blue-500)",
    planted: "April 4, 2026",
    remaining: "24 days remaining",
    harvest: "May 19, 2026",
    remainingColor: "var(--green-600)",
  },
  {
    crop: "Pechay",
    accent: "var(--purple-500)",
    planted: "April 12, 2026",
    remaining: "14 days remaining",
    harvest: "May 11, 2026",
    remainingColor: "var(--green-600)",
  },
];

const CROP_GROWTH_PERIODS = {
  bok_choy: 30,
  mustasa: 35,
  green_ice_lettuce: 45,
  pechay: 30,
};

const CROP_LABELS = {
  bok_choy: "Bok Choy",
  mustasa: "Mustasa",
  green_ice_lettuce: "Green Ice Lettuce",
  pechay: "Pechay",
  custom: "Custom Plant",
};

const CULTIVATION_PARAMETER_FIELDS = [
  { key: "moisture", sensorId: "moisture", label: "Soil Moisture", unit: "%", icon: "droplet", step: "1" },
  { key: "ph", sensorId: "ph", label: "pH Level", unit: "pH", icon: "activity", step: "0.1" },
  { key: "temp", sensorId: "temp", label: "Temperature", unit: "\u00B0C", icon: "thermometer", step: "1" },
  { key: "humidity", sensorId: "humidity", label: "Humidity", unit: "%", icon: "wind", step: "1" },
  { key: "ec", sensorId: "ec", label: "EC Level", unit: "mS/cm", icon: "zap", step: "0.1" },
];

const CULTIVATION_PARAMETER_PRESETS = {
  bok_choy: {
    moisture: { min: 60, max: 75 },
    ph: { min: 6, max: 7 },
    temp: { min: 18, max: 26 },
    humidity: { min: 60, max: 80 },
    ec: { min: 1.2, max: 1.8 },
  },
  mustasa: {
    moisture: { min: 55, max: 70 },
    ph: { min: 6, max: 7.2 },
    temp: { min: 18, max: 28 },
    humidity: { min: 55, max: 75 },
    ec: { min: 1.2, max: 1.9 },
  },
  green_ice_lettuce: {
    moisture: { min: 65, max: 80 },
    ph: { min: 5.8, max: 6.8 },
    temp: { min: 16, max: 24 },
    humidity: { min: 60, max: 85 },
    ec: { min: 1.0, max: 1.6 },
  },
  pechay: {
    moisture: { min: 60, max: 75 },
    ph: { min: 6, max: 7 },
    temp: { min: 18, max: 27 },
    humidity: { min: 60, max: 80 },
    ec: { min: 1.1, max: 1.7 },
  },
  custom: {
    moisture: { min: 55, max: 75 },
    ph: { min: 6, max: 7 },
    temp: { min: 18, max: 28 },
    humidity: { min: 55, max: 80 },
    ec: { min: 1.0, max: 1.8 },
  },
};

const CULTIVATION_PARAMETER_MODE_LABELS = {
  recommended: "Recommended",
  custom: "Custom",
};

const DEFAULT_PROFILE_NAME = "Procy Sarate";
const DEFAULT_PROFILE_ROLE = "Administrator";

const initialOtpCode = () => ["", "", "", "", "", ""];

function minutesAgoIso(minutes) {
  return new Date(Date.now() - (minutes * 60000)).toISOString();
}

const initialNotifications = () => [
  {
    id: "1",
    type: "warning",
    message: "Low Soil Moisture Detected",
    createdAt: minutesAgoIso(18),
    exiting: false,
  },
  {
    id: "2",
    type: "success",
    message: "Irrigation Completed Successfully",
    createdAt: minutesAgoIso(6),
    exiting: false,
  },
];

function initialNotificationHistory(notifications = initialNotifications()) {
  return notifications.map((notification) => ({
    id: notification.id,
    type: notification.type,
    message: notification.message,
    createdAt: notification.createdAt,
    read: false,
  }));
}

function initialNotificationState() {
  const notifications = initialNotifications();
  return {
    notifications,
    history: initialNotificationHistory(notifications),
  };
}

const initialUsers = () => [
  { id: "1", name: "Procy Sarate", email: "procysarate@gmail.com", role: "admin" },
  { id: "2", name: "User 1", email: "user1@gmail.com", role: "user" },
  { id: "3", name: "User 2", email: "user2@gmail.com", role: "user" },
];

const initialNewUser = () => ({
  name: "",
  email: "",
  role: "user",
  password: "",
  confirmPassword: "",
  otpCode: ["", "", "", "", "", ""],
});

const initialSensorsPageState = () => ({
  sensorPower: {
    moisture: "on",
    ph: "on",
    ec: "on",
    dht22: "on",
  },
  rowSensorPower: {
    "row1-moisture": "on",
    "row1-rs485": "on",
    "row2-moisture": "on",
    "row2-rs485": "on",
    "row3-moisture": "on",
    "row3-rs485": "on",
    "row4-moisture": "on",
    "row4-rs485": "on",
    dht22: "on",
  },
  actuatorMode: {
    fan: "automatic",
    light: "automatic",
  },
});

function initialIrrigationChannels() {
  return IRRIGATION_CHANNELS.reduce((channels, channel) => {
    channels[channel.key] = {
      automaticDuration: channel.automaticDuration,
      manualDuration: channel.manualDuration,
      scheduleStartTime: channel.scheduleStartTime,
      scheduleDuration: channel.scheduleDuration,
      scheduleFrequency: channel.scheduleFrequency,
    };
    return channels;
  }, {});
}

const initialIrrigationPageState = () => ({
  mode: "automatic",
  autoEnabled: true,
  activeManualLine: "",
  overlayMode: "",
  channels: initialIrrigationChannels(),
});

function cultivationParametersFor(cropType) {
  const preset = CULTIVATION_PARAMETER_PRESETS[cropType] || CULTIVATION_PARAMETER_PRESETS.bok_choy;

  return CULTIVATION_PARAMETER_FIELDS.reduce((parameters, field) => {
    parameters[field.key] = {
      min: preset[field.key].min,
      max: preset[field.key].max,
    };
    return parameters;
  }, {});
}

function isCustomCultivation(cropType) {
  return cropType === "custom";
}

function supportsRecommendedCultivation(cropType) {
  return Boolean(cropType) && !isCustomCultivation(cropType);
}

function isCultivationParameterModeAvailable(mode, cultivation = state.cultivation) {
  if (!mode) {
    return false;
  }

  if (mode === "custom") {
    return Boolean(cultivation.cropType);
  }

  if (mode === "recommended") {
    return supportsRecommendedCultivation(cultivation.cropType);
  }

  return false;
}

function updateIrrigationPageField(target) {
  if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement)) {
    return false;
  }

  const { irrigationChannel, irrigationField } = target.dataset;

  if (irrigationChannel && irrigationField && state.irrigationPage.channels[irrigationChannel]) {
    state.irrigationPage.channels[irrigationChannel][irrigationField] = target.value;
    return true;
  }

  return false;
}

function effectiveCultivationParameterMode(cultivation = state.cultivation) {
  return cultivation.parameterMode;
}

function recommendedCultivationParameters(cultivation = state.cultivation) {
  return cultivationParametersFor(cultivation.cropType || "custom");
}

function activeCultivationParameters(cultivation = state.cultivation) {
  return effectiveCultivationParameterMode(cultivation) === "recommended"
    ? recommendedCultivationParameters(cultivation)
    : cultivation.parameters;
}

function selectedCultivationName(cultivation = state.cultivation) {
  if (!cultivation.cropType) {
    return "";
  }

  if (isCustomCultivation(cultivation.cropType)) {
    return cultivation.customPlantName.trim() || CROP_LABELS.custom;
  }

  return CROP_LABELS[cultivation.cropType] || CROP_LABELS.custom;
}

function daysBetweenDateInputs(startDate, endDate) {
  if (!startDate || !endDate) {
    return Number.NaN;
  }

  const start = parseDateInput(startDate);
  const end = parseDateInput(endDate);
  const diff = end.getTime() - start.getTime();
  return Math.round(diff / 86400000);
}

function selectedCultivationGrowthDays(cultivation = state.cultivation) {
  if (isCustomCultivation(cultivation.cropType)) {
    return daysBetweenDateInputs(cultivation.plantingDate, cultivation.customHarvestTargetDate);
  }

  return CROP_GROWTH_PERIODS[cultivation.cropType];
}

function canCalculateCultivation(cultivation = state.cultivation) {
  if (!cultivation.cropType) {
    return false;
  }

  if (!isCultivationParameterModeAvailable(effectiveCultivationParameterMode(cultivation), cultivation)) {
    return false;
  }

  if (!cultivation.plantingDate) {
    return false;
  }

  if (!isCustomCultivation(cultivation.cropType)) {
    return true;
  }

  const growthDays = selectedCultivationGrowthDays(cultivation);
  return Boolean(cultivation.customPlantName.trim()) && Number.isFinite(growthDays) && growthDays > 0;
}

const initialCultivationState = () => ({
  cropType: "",
  customPlantName: "",
  customHarvestTargetDate: "",
  plantingDate: "",
  harvestDate: "",
  daysToHarvest: 0,
  parameterMode: "",
  parameters: cultivationParametersFor("custom"),
  successMessage: "",
  setupOpen: false,
  successOpen: false,
  parameterPreviewMode: "",
});

const initialLoginFormState = () => ({
  email: "",
  password: "",
});
const initialSensors = () => [
  {
    id: "moisture",
    name: "Soil Moisture",
    deviceName: "Soil Capacitive Sensor",
    powerKey: "moisture",
    value: 45,
    unit: "%",
    icon: "droplet",
    status: "normal",
    min: 30,
    max: 70,
    percentage: 65,
    alertMode: "SMS + Email",
  },
  {
    id: "ph",
    name: "pH Level",
    deviceName: "Soil pH RS485 Multi Sensor",
    powerKey: "ph",
    value: 6.5,
    unit: "pH",
    icon: "activity",
    status: "normal",
    min: 6,
    max: 7.5,
    percentage: 70,
    alertMode: "SMS + Email",
  },
  {
    id: "temp",
    name: "Temperature",
    deviceName: "DHT22",
    powerKey: "dht22",
    value: 28,
    unit: "\u00B0C",
    icon: "thermometer",
    status: "normal",
    min: 20,
    max: 35,
    percentage: 53,
    alertMode: "SMS + Email",
  },
  {
    id: "humidity",
    name: "Humidity",
    deviceName: "DHT22",
    powerKey: "dht22",
    value: 65,
    unit: "%",
    icon: "wind",
    status: "normal",
    min: 40,
    max: 80,
    percentage: 81,
    alertMode: "SMS + Email",
  },
  {
    id: "ec",
    name: "EC Level",
    deviceName: "Soil EC RS485 Multi Sensor",
    powerKey: "ec",
    value: 1.8,
    unit: "mS/cm",
    icon: "zap",
    status: "warning",
    min: 1,
    max: 2.5,
    percentage: 53,
    alertMode: "SMS + Email",
  },
];

const externalTemplateCache = new Map();

function createInitialState() {
  const notificationState = initialNotificationState();

  return {
    isAuthenticated: true,
    activeView: "dashboard",
    settingsOpen: false,
    notificationsOpen: false,
    activeSettingsTab: "profile",
    profileName: DEFAULT_PROFILE_NAME,
    profilePhotoDataUrl: readStoredProfilePhoto(),
    currentPassword: "",
    newPassword: "",
    otpCode: initialOtpCode(),
    passwordChangeOtpRequested: false,
    dashboardSensors: initialSensors(),
    selectedSensorId: null,
    sensorDraft: null,
    notifications: notificationState.notifications,
    notificationHistory: notificationState.history,
    users: initialUsers(),
    showAddUserModal: false,
    newUser: initialNewUser(),
    loginForm: initialLoginFormState(),
    sensorsPage: initialSensorsPageState(),
    irrigationPage: initialIrrigationPageState(),
    cultivation: initialCultivationState(),
  };
}

let state = createInitialState();

const notificationTimers = new Map();
let pendingRouteTransition = null;
let routeTransitionTimer = 0;

const elements = {};

document.addEventListener("DOMContentLoaded", init);

async function init() {
  elements.sidebar = document.querySelector(".sidebar");
  elements.topbar = document.querySelector(".topbar");
  elements.appMain = document.querySelector(".app-main");
  elements.sidebarNav = document.getElementById("sidebar-nav");
  elements.pageContent = document.getElementById("page-content");
  elements.overlayRoot = document.getElementById("overlay-root");
  elements.toastRoot = document.getElementById("toast-root");
  elements.headerProfileName = document.getElementById("header-profile-name");
  elements.headerProfileRole = document.getElementById("header-profile-role");
  elements.headerProfileAvatar = document.getElementById("header-profile-avatar");
  elements.headerNotificationButton = document.getElementById("header-notification-button");
  elements.headerNotificationIcon = document.getElementById("header-notification-icon");
  elements.headerNotificationCount = document.getElementById("header-notification-count");

  bindEvents();
  await preloadExternalTemplates();
  syncViewFromHash(true);
}

function bindEvents() {
  document.addEventListener("click", handleClick);
  document.addEventListener("change", handleChange);
  document.addEventListener("input", handleInput);
  document.addEventListener("submit", handleSubmit);
  document.addEventListener("keydown", handleKeyDown);
  window.addEventListener("hashchange", () => syncViewFromHash());
}

function handleClick(event) {
  const target = event.target;
  const viewButton = target.closest("[data-view]");
  if (viewButton) {
    navigateTo(viewButton.dataset.view);
    return;
  }

  const tabButton = target.closest("[data-tab]");
  if (tabButton) {
    state.activeSettingsTab = tabButton.dataset.tab;
    renderOverlays();
    return;
  }

  const actionButton = target.closest("[data-action]");
  if (!actionButton || actionButton.disabled) {
    return;
  }

  const { action, id, mode } = actionButton.dataset;

  switch (action) {
    case "open-settings":
      openSettings();
      return;
    case "open-notifications":
      if (state.notificationsOpen) {
        closeNotificationsDrawer();
      } else {
        openNotificationsDrawer();
      }
      return;
    case "open-profile-settings":
      openSettings();
      return;
    case "change-profile-photo": {
      const fileInput = document.getElementById("profile-photo-input");
      if (fileInput instanceof HTMLInputElement) {
        fileInput.click();
      }
      return;
    }
    case "close-settings":
      closeSettings();
      return;
    case "close-notifications":
      closeNotificationsDrawer();
      return;
    case "logout":
      logoutUser();
      return;
    case "forgot-password":
      requestPasswordReset();
      return;
    case "toggle-password-visibility":
      togglePasswordVisibility(actionButton.dataset.target);
      return;
    case "open-sensor-detail":
      openSensorDetail(id);
      return;
    case "close-sensor-detail":
      closeSensorDetail();
      return;
    case "save-profile":
      renderHeader();
      renderOverlays();
      pushNotification("success", "Profile updated successfully");
      return;
    case "change-password":
      requestPasswordChange();
      return;
    case "cancel-password-change-otp":
      resetPasswordChangeState(false);
      renderOverlays();
      return;
    case "verify-otp":
      completePasswordChange();
      return;
    case "set-irrigation-mode":
      state.irrigationPage.mode = mode;
      if (mode === "automatic") {
        state.irrigationPage.overlayMode = "";
        state.irrigationPage.activeManualLine = "";
        renderPage();
        renderOverlays();
        return;
      }

      state.irrigationPage.overlayMode = mode;
      if (mode !== "manual") {
        state.irrigationPage.activeManualLine = "";
      }
      renderPage();
      renderOverlays();
      return;
    case "close-irrigation-overlay":
      state.irrigationPage.overlayMode = "";
      state.irrigationPage.mode = "automatic";
      state.irrigationPage.activeManualLine = "";
      renderPage();
      renderOverlays();
      return;
    case "toggle-auto-irrigation":
      state.irrigationPage.autoEnabled = !state.irrigationPage.autoEnabled;
      renderPage();
      return;
    case "toggle-manual-irrigation": {
      const channel = actionButton.dataset.channel;
      if (!channel || !state.irrigationPage.channels[channel]) {
        return;
      }

      state.irrigationPage.activeManualLine = state.irrigationPage.activeManualLine === channel ? "" : channel;
      renderPage();
      renderOverlays();
      return;
    }
    case "calculate-harvest":
      calculateHarvest();
      return;
    case "select-crop-type":
      selectCultivationCrop(actionButton.dataset.value || "");
      return;
    case "open-cultivation-setup":
      if (state.cultivation.cropType) {
        state.cultivation.setupOpen = true;
        state.cultivation.parameterPreviewMode = "";
        renderOverlays();
      }
      return;
    case "close-cultivation-setup":
      state.cultivation.setupOpen = false;
      state.cultivation.parameterPreviewMode = "";
      renderOverlays();
      return;
    case "close-cultivation-parameter-preview":
      state.cultivation.parameterPreviewMode = "";
      renderOverlays();
      return;
    case "open-cultivation-parameter-preview":
      if (!isCultivationParameterModeAvailable(state.cultivation.parameterMode, state.cultivation)) {
        return;
      }
      state.cultivation.parameterPreviewMode = state.cultivation.parameterMode;
      renderOverlays();
      return;
    case "open-add-user":
      state.newUser = initialNewUser();
      state.showAddUserModal = true;
      renderOverlays();
      return;
    case "close-add-user":
      state.newUser = initialNewUser();
      state.showAddUserModal = false;
      renderOverlays();
      return;
    case "submit-add-user":
      addUser();
      return;
    case "delete-user":
      deleteUser(id);
      return;
    case "dismiss-toast":
      beginNotificationExit(id);
      return;
    default:
      return;
  }
}

function handleSubmit(event) {
  const target = event.target;
  if (!(target instanceof HTMLFormElement) || target.id !== "login-form") {
    return;
  }

  event.preventDefault();
  loginUser();
}

function handleChange(event) {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  if (updateIrrigationPageField(target)) {
    renderPage();
    renderOverlays();
    return;
  }

  if (target.dataset.sensorPower) {
    state.sensorsPage.sensorPower[target.dataset.sensorPower] = target.value;
    renderPage();
    renderOverlays();
    return;
  }

  if (target.dataset.rowSensorPower) {
    state.sensorsPage.rowSensorPower[target.dataset.rowSensorPower] = target.value;
    renderPage();
    renderOverlays();
    return;
  }

  if (target.dataset.actuatorMode) {
    state.sensorsPage.actuatorMode[target.dataset.actuatorMode] = target.value;
    renderPage();
    return;
  }

  switch (target.id) {
    case "cultivation-crop-type-select":
      if (target.value) {
        selectCultivationCrop(target.value);
      }
      return;
    case "cultivation-parameter-mode-select":
      if (!target.value) {
        state.cultivation.parameterMode = "";
        state.cultivation.parameterPreviewMode = "";
        state.cultivation.successMessage = "";
        state.cultivation.successOpen = false;
        renderOverlays();
        return;
      }

      if (!isCultivationParameterModeAvailable(target.value, state.cultivation)) {
        return;
      }

      state.cultivation.parameterMode = target.value;
      state.cultivation.parameterPreviewMode = target.value;
      state.cultivation.successMessage = "";
      state.cultivation.successOpen = false;
      renderOverlays();
      return;

    case "new-user-role":
      state.newUser.role = target.value;
      return;
    case "profile-photo-input":
      if (target instanceof HTMLInputElement) {
        handleProfilePhotoSelection(target);
      }
      return;
    default:
      return;
  }
}

function handleInput(event) {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  if (updateIrrigationPageField(target)) {
    return;
  }

  if (/^otp-\d$/.test(target.id)) {
    handleOtpInput(target);
    return;
  }

  if (target.dataset.cultivationField && target.dataset.cultivationBound) {
    const { cultivationField, cultivationBound } = target.dataset;
    if (state.cultivation.parameters[cultivationField]) {
      state.cultivation.parameters[cultivationField][cultivationBound] = target.value;
      state.cultivation.successMessage = "";
      state.cultivation.successOpen = false;
    }
    return;
  }

  if (/^new-user-otp-\d$/.test(target.id)) {
    handleAddUserOtpInput(target);
    return;
  }

  switch (target.id) {
    case "profile-name-input":
      state.profileName = target.value;
      updateProfilePreview();
      return;
    case "current-password-input": {
      const shouldResetOtp = state.passwordChangeOtpRequested;
      state.currentPassword = target.value;
      if (shouldResetOtp) {
        state.passwordChangeOtpRequested = false;
        state.otpCode = initialOtpCode();
        renderOverlays();
        return;
      }
      updateSettingsButtonStates();
      return;
    }
    case "new-password-input": {
      const shouldResetOtp = state.passwordChangeOtpRequested;
      state.newPassword = target.value;
      if (shouldResetOtp) {
        state.passwordChangeOtpRequested = false;
        state.otpCode = initialOtpCode();
        renderOverlays();
        return;
      }
      updateSettingsButtonStates();
      return;
    }
    case "new-user-name":
      state.newUser.name = target.value;
      updateAddUserButtonState();
      return;
    case "new-user-email":
      state.newUser.email = target.value;
      updateAddUserButtonState();
      return;
    case "new-user-password":
      state.newUser.password = target.value;
      updateAddUserButtonState();
      return;
    case "new-user-confirm-password":
      state.newUser.confirmPassword = target.value;
      updateAddUserButtonState();
      return;
    case "login-email-input":
      state.loginForm.email = target.value;
      updateLoginButtonState();
      return;
    case "login-password-input":
      state.loginForm.password = target.value;
      updateLoginButtonState();
      return;
    case "planting-date-input":
      state.cultivation.plantingDate = target.value;
      state.cultivation.harvestDate = "";
      state.cultivation.daysToHarvest = 0;
      state.cultivation.successMessage = "";
      state.cultivation.successOpen = false;
      updateHarvestButtonState();
      return;
    case "custom-plant-name-input":
      state.cultivation.customPlantName = target.value;
      state.cultivation.harvestDate = "";
      state.cultivation.daysToHarvest = 0;
      state.cultivation.successMessage = "";
      state.cultivation.successOpen = false;
      updateHarvestButtonState();
      return;
    case "custom-harvest-date-input":
      state.cultivation.customHarvestTargetDate = target.value;
      state.cultivation.harvestDate = "";
      state.cultivation.daysToHarvest = 0;
      state.cultivation.successMessage = "";
      state.cultivation.successOpen = false;
      updateHarvestButtonState();
      return;
    default:
      return;
  }
}

function handleKeyDown(event) {
  const target = event.target;
  if (target instanceof HTMLElement && target.dataset.action === "open-profile-settings") {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openSettings();
      return;
    }
  }

  if (!(target instanceof HTMLElement) || !/^otp-\d$/.test(target.id)) {
    if (!(target instanceof HTMLElement) || !/^new-user-otp-\d$/.test(target.id)) {
      return;
    }

    const newUserIndex = Number(target.id.split("-")[3]);
    if (event.key === "Backspace" && !target.value && newUserIndex > 0) {
      const previousNewUser = document.getElementById(`new-user-otp-${newUserIndex - 1}`);
      previousNewUser?.focus();
    }
    return;
  }

  const index = Number(target.id.split("-")[1]);
  if (event.key === "Backspace" && !target.value && index > 0) {
    const previous = document.getElementById(`otp-${index - 1}`);
    previous?.focus();
  }
}

function applyShellState() {
  const authScreen = !state.isAuthenticated;
  document.body.classList.toggle("is-auth-screen", authScreen);
  elements.sidebar?.toggleAttribute("hidden", authScreen);
  elements.topbar?.toggleAttribute("hidden", authScreen);
  elements.appMain?.classList.toggle("app-main--auth", authScreen);
  elements.pageContent?.classList.toggle("page-content--auth", authScreen);
}

function renderSidebar() {
  applyShellState();

  if (!state.isAuthenticated) {
    elements.sidebarNav.innerHTML = "";
    return;
  }

  const navMarkup = NAV_ITEMS.map((item) => {
    const activeClass = item.view === state.activeView ? "is-active" : "";
    return `
      <button class="nav-button ${activeClass}" type="button" data-view="${item.view}">
        <span class="nav-button__icon" aria-hidden="true">${icon(item.icon)}</span>
        <span>${item.label}</span>
      </button>
    `;
  }).join("");

  elements.sidebarNav.innerHTML = navMarkup;

  const settingsButtonIcon = document.querySelector('[data-action="open-settings"] .nav-button__icon');
  const logoutButtonIcon = document.querySelector('[data-action="logout"] .nav-button__icon');
  if (settingsButtonIcon) {
    settingsButtonIcon.innerHTML = icon("settings");
  }
  if (logoutButtonIcon) {
    logoutButtonIcon.innerHTML = icon("logout");
  }
}

function renderHeader() {
  applyShellState();

  if (!state.isAuthenticated) {
    return;
  }

  const unread = unreadNotificationCount();

  elements.headerProfileName.textContent = state.profileName.trim() || DEFAULT_PROFILE_NAME;
  if (elements.headerProfileRole) {
    elements.headerProfileRole.textContent = DEFAULT_PROFILE_ROLE;
  }
  syncProfileAvatarElement(elements.headerProfileAvatar, "profile-pill__avatar");
  if (elements.headerNotificationIcon) {
    elements.headerNotificationIcon.innerHTML = icon("bell");
  }
  if (elements.headerNotificationCount) {
    elements.headerNotificationCount.textContent = unread > 99 ? "99+" : String(unread);
    elements.headerNotificationCount.hidden = unread === 0;
  }
  if (elements.headerNotificationButton) {
    elements.headerNotificationButton.classList.toggle("is-active", state.notificationsOpen);
    elements.headerNotificationButton.setAttribute("aria-pressed", String(state.notificationsOpen));
    elements.headerNotificationButton.setAttribute(
      "aria-label",
      unread > 0
        ? `Open notifications, ${unread} unread`
        : "Open notifications"
    );
  }
}

function renderPage() {
  applyShellState();

  if (!state.isAuthenticated) {
    pendingRouteTransition = null;
    elements.pageContent?.classList.remove(
      "page-content--transition-out",
      "page-content--transition-forward",
      "page-content--transition-backward"
    );
    elements.pageContent.innerHTML = loginTemplate();
    syncPasswordToggleButtons(elements.pageContent);
    updateLoginButtonState();
    return;
  }

  const templates = {
    dashboard: dashboardTemplate,
    history: historyTemplate,
    sensors: sensorsTemplate,
    irrigation: irrigationTemplate,
    cultivation: cultivationTemplate,
    "manage-account": manageAccountTemplate,
  };

  const template = templates[state.activeView] || dashboardTemplate;
  const shouldResetScroll = Boolean(pendingRouteTransition);
  elements.pageContent.innerHTML = renderPageSceneMarkup(template(), state.activeView);
  if (state.activeView === "cultivation") {
    updateHarvestButtonState();
  }
  finalizeRouteTransition();

  if (shouldResetScroll) {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  }
}

function renderOverlays() {
  if (!state.isAuthenticated) {
    elements.overlayRoot.innerHTML = "";
    return;
  }

  const overlays = [];
  const selectedSensor = getSelectedSensor();

  if (state.settingsOpen) {
    overlays.push(settingsModalTemplate());
  }

  if (state.settingsOpen && state.passwordChangeOtpRequested) {
    overlays.push(passwordChangeOtpModalTemplate());
  }

  if (state.showAddUserModal) {
    overlays.push(addUserModalTemplate());
  }

  if (state.activeView === "cultivation" && state.cultivation.cropType && state.cultivation.setupOpen) {
    overlays.push(cultivationSetupModalTemplate());
  }

  if (state.activeView === "cultivation" && state.cultivation.cropType && state.cultivation.setupOpen && state.cultivation.parameterPreviewMode) {
    overlays.push(cultivationParameterPreviewModalTemplate());
  }

  if (selectedSensor && state.sensorDraft) {
    overlays.push(sensorDrawerTemplate(selectedSensor));
  }

  if (state.notificationsOpen) {
    overlays.push(notificationDrawerTemplate());
  }

  if (
    state.activeView === "irrigation" &&
    (state.irrigationPage.overlayMode === "schedule" || state.irrigationPage.overlayMode === "manual")
  ) {
    overlays.push(irrigationControlModalTemplate());
  }

  elements.overlayRoot.innerHTML = overlays.join("");

  if (state.settingsOpen) {
    updateProfilePreview();
    updateSettingsButtonStates();
  }

  if (state.showAddUserModal) {
    updateAddUserButtonState();
  }

  if (state.activeView === "cultivation" && state.cultivation.setupOpen) {
    updateHarvestButtonState();
  }
}

function renderToasts() {
  if (!state.isAuthenticated || state.notificationsOpen) {
    elements.toastRoot.innerHTML = "";
    return;
  }

  elements.toastRoot.innerHTML = state.notifications
    .map((notification) => toastTemplate(notification))
    .join("");
}

function dashboardTemplate() {
  return `
    <section class="page-stack page-stack--dashboard">
      <article class="glass-card card dashboard-panel dashboard-panel--iot-rows page-stack">
        <div class="card-head">
          <div>
            <h3 class="section-title">IoT Device Rows</h3>
            <p class="section-copy">Monitor every grow row with live Normal or Warning status for moisture, EC, pH, temperature, and humidity.</p>
          </div>
        </div>
        <div class="iot-row-dashboard-grid">
          ${IOT_DEVICE_ROWS.map(iotDashboardRowCardTemplate).join("")}
        </div>
      </article>

      <div class="grid grid--two dashboard-grid">
        <article class="glass-card card dashboard-panel dashboard-panel--health">
          <div class="card-head">
            <div>
              <h3 class="section-title">Sensor Health</h3>
            </div>
          </div>
          <div class="health-grid">
            ${sensorHealthItems().map(healthItemTemplate).join("")}
          </div>
        </article>

        <article class="glass-card card dashboard-panel dashboard-panel--tanks">
          <div class="card-head">
            <div>
              <h3 class="section-title">Tank Levels</h3>
            </div>
          </div>
          <div class="tank-grid tank-grid--triple">
            ${tankTemplate("Water", "2.4L", "/ 3L", "80% Full", 80, "water")}
            ${tankTemplate("Fertilizer", "1.8L", "/ 3L", "60% Full", 60, "fertilizer")}
            ${tankTemplate("Lime Solution", "2.1L", "/ 3L", "70% Full", 70, "solution")}
          </div>
        </article>
      </div>
    </section>
  `;
}

function historyTemplate() {
  const history = sortedNotificationHistory();
  const unread = unreadNotificationCount();

  return `
    <section class="page-stack">
      <div class="page-heading">
        <div>
          <h1>Notification History</h1>
          <p>Review all alerts, updates, and recent system activity from your dashboard.</p>
        </div>
        <div class="chip-row">
          <span class="chip">${history.length} total</span>
          <span class="chip">${state.notifications.length} active now</span>
          <span class="chip">${unread} unread</span>
        </div>
      </div>

      <article class="glass-card card page-stack">
        <div class="card-head">
          <div>
            <h3 class="section-title">Recent Notifications</h3>
            <p class="section-copy">This page stores the history of your notification alerts.</p>
          </div>
          <button class="button button--secondary" type="button" data-action="open-notifications">
            ${icon("bell")}
            <span>Open Bell Panel</span>
          </button>
        </div>

        ${history.length ? `
          <div class="notification-list">
            ${history.map((notification) => notificationItemTemplate(notification, true)).join("")}
          </div>
        ` : `
          <div class="center-banner">No notification history yet.</div>
        `}
      </article>
    </section>
  `;
}

function sensorsTemplate() {
  return `
    <section class="page-stack">
      <div class="page-heading">
        <div>
          <h1>Sensor Management</h1>
          <p>Turn sensor devices on or off and choose the fan and light mode.</p>
        </div>
      </div>

      <article class="glass-card card page-stack">
        <div>
          <h3 class="section-title">IoT Device Rows</h3>
          <p class="section-copy">Each row has its own Soil Moisture, Soil pH, and Soil EC sensor. DHT22 is shared across all rows.</p>
        </div>
        <div class="sensor-row-grid">
          ${IOT_DEVICE_ROWS.map(sensorRowManagementCardTemplate).join("")}
          ${sharedDht22ManagementCardTemplate()}
        </div>
      </article>

      <article class="glass-card card page-stack">
        <div>
          <h3 class="section-title">Fan and Light</h3>
          <p class="section-copy">Choose how the fan and light should run.</p>
        </div>
        <div class="grid grid--two sensor-actuator-grid">
          ${SENSOR_ACTUATORS.map(actuatorControlCardTemplate).join("")}
        </div>
      </article>
    </section>
  `;
}

function irrigationTemplate() {
  const {
    mode,
    autoEnabled,
    channels,
  } = state.irrigationPage;
  return `
    <section class="page-stack">
      <div class="page-heading">
        <div>
          <h1>Irrigation Control</h1>
          <p>Manage your irrigation system settings</p>
        </div>
      </div>

      <article class="glass-card card page-stack">
        <div>
          <h3 class="section-title">Control Mode</h3>
        </div>
        <div class="mode-grid">
          ${modeCardTemplate("automatic", "Automatic", "System-triggered irrigation", "droplets", mode)}
          ${modeCardTemplate("schedule", "Schedule", "Time-based irrigation", "calendar", mode)}
          ${modeCardTemplate("manual", "Manual", "Direct line control", "hand", mode)}
        </div>
      </article>

      ${mode === "automatic" ? irrigationAutomaticTemplate(autoEnabled, channels) : ""}
    </section>
  `;
}

function cultivationCropSelectTemplate(cropKeys, selectedCropType) {
  return `
    <select class="select cultivation-crop-select" id="cultivation-crop-type-select">
      <option value="">Select crop type</option>
      ${cropKeys.map((value) => {
        const label = CROP_LABELS[value];
        const meta = Number.isFinite(CROP_GROWTH_PERIODS[value])
          ? `${CROP_GROWTH_PERIODS[value]} days`
          : "Custom";

        return `
          <option value="${value}" ${selectedCropType === value ? "selected" : ""}>
            ${escapeHtml(`${label} (${meta})`)}
          </option>
        `;
      }).join("")}
    </select>
  `;
}

function cultivationTemplate() {
  const {
    cropType,
    plantingDate,
    successMessage,
  } = state.cultivation;
  const hasCropSelection = Boolean(cropType);
  const cropName = selectedCultivationName() || "No crop selected";
  return `
    <section class="page-stack cultivation-page">
      <div class="page-heading">
        <div>
          <h1>Cultivation Planning</h1>
          <p>Set cultivation parameters and track your crop schedule</p>
        </div>
      </div>

      <article class="glass-card card page-stack cultivation-panel cultivation-panel--setup">
        <div class="card-head">
          <div class="inline-copy">
            <div class="spot-icon">${icon("sprout")}</div>
            <h3 class="section-title">Set New Cultivation</h3>
          </div>
        </div>

        <div class="center-banner">
          ${
            hasCropSelection
              ? "Crop selected. Click Open Setup when you're ready to continue."
              : "Select a crop type first, then open the setup."
          }
        </div>

        <div class="input-grid input-grid--two cultivation-picker-grid">
          <div class="field">
            <label class="field__label">Crop Type</label>
            ${cultivationCropSelectTemplate(Object.keys(CROP_LABELS), cropType)}
          </div>
          ${
            hasCropSelection
              ? `
                <div class="cultivation-setup-summary">
                  <div>
                    <h4 class="section-title">${escapeHtml(cropName)}</h4>
                    <p class="section-copy">
                      ${
                        plantingDate
                          ? `Planting Date: ${escapeHtml(formatLongDate(plantingDate))}`
                          : "No planting date set yet."
                      }
                    </p>
                  </div>
                  <button class="button button--secondary" type="button" data-action="open-cultivation-setup">
                    ${successMessage ? "Edit Parameters" : "Open Setup"}
                  </button>
                </div>
              `
              : ""
          }
        </div>

        ${
          hasCropSelection
            ? `
            `
            : `
              <div class="center-banner cultivation-empty-state">
                <strong>No crop selected yet.</strong>
                <span>Select a plant above to open the parameter editor.</span>
              </div>
            `
        }
      </article>

      <article class="glass-card card page-stack cultivation-panel cultivation-panel--active">
        <h3 class="section-title">Active Cultivations</h3>
        ${ACTIVE_CULTIVATIONS.map(activeCultivationTemplate).join("")}
      </article>
    </section>
  `;
}

function manageAccountTemplate() {
  return `
    <section class="page-stack">
      <div class="page-heading">
        <div>
          <h1>Manage Accounts</h1>
          <p>Add and manage user accounts</p>
        </div>
        <button class="button button--primary" type="button" data-action="open-add-user">
          ${icon("user-plus", "icon")}
          <span>Add User</span>
        </button>
      </div>

      <article class="glass-card card page-stack">
        <h3 class="section-title">User Accounts</h3>
        ${state.users.map(userRowTemplate).join("")}
      </article>
    </section>
  `;
}

function cultivationSetupModalTemplate() {
  const {
    cropType,
    customPlantName,
    customHarvestTargetDate,
    plantingDate,
  } = state.cultivation;
  const showCustomFields = isCustomCultivation(cropType);
  const hasRecommendedProfile = supportsRecommendedCultivation(cropType);
  const currentParameterMode = effectiveCultivationParameterMode(state.cultivation);
  const cropName = selectedCultivationName() || "Cultivation";
  const growthDays = CROP_GROWTH_PERIODS[cropType];
  const selectedParameterLabel = CULTIVATION_PARAMETER_MODE_LABELS[currentParameterMode] || "";

  return `
    <div class="overlay overlay--center">
      <div class="modal modal--cultivation">
        <div class="modal__header">
          <div class="card-head">
            <div>
              <h3 class="section-title cultivation-modal__title">${escapeHtml(cropName)} Setup</h3>
              <p class="section-copy">Choose the crop details and parameter mode here, then press Start when you're ready.</p>
            </div>
            <button class="icon-button" type="button" data-action="close-cultivation-setup">
              ${icon("close")}
            </button>
          </div>
        </div>

        <div class="modal__body page-stack cultivation-modal__body">
          <div class="center-banner cultivation-inline-banner">
            ${
              showCustomFields
                ? "Set your custom plant details and target parameter range below."
                : `Default growth period for ${escapeHtml(cropName)} is ${escapeHtml(growthDays)} days.`
            }
          </div>

          <div class="input-grid input-grid--two cultivation-modal__fields">
            <div class="field">
              <label class="field__label" for="planting-date-input">Planting Date</label>
              <input class="input" id="planting-date-input" type="date" value="${escapeHtml(plantingDate)}" />
            </div>
            ${
              showCustomFields
                ? `
                  <div class="field">
                    <label class="field__label" for="custom-plant-name-input">Custom Plant Name</label>
                    <input
                      class="input"
                      id="custom-plant-name-input"
                      type="text"
                      placeholder="e.g. Tomato"
                      value="${escapeHtml(customPlantName)}"
                    />
                  </div>
                `
                : `
                  <div class="field">
                    <label class="field__label">Selected Crop</label>
                    <div class="center-banner cultivation-selected-crop">${escapeHtml(cropName)}</div>
                  </div>
                `
            }
          </div>

          <div class="page-stack cultivation-mode-panel">
            <div>
              <h4 class="section-title">Choose Parameters</h4>
              <p class="section-copy">
                ${
                  hasRecommendedProfile
                    ? "Pick the setup you want to use for this crop."
                    : "Custom crops use your own settings. Choose Custom to set the target range."
                }
              </p>
            </div>

            <div class="field cultivation-mode-select-field">
              <label class="field__label" for="cultivation-parameter-mode-select">Parameter Mode</label>
              <select class="select cultivation-mode-select" id="cultivation-parameter-mode-select">
                <option value="" ${!currentParameterMode ? "selected" : ""}>Select parameter mode</option>
                ${
                  hasRecommendedProfile
                    ? `<option value="recommended" ${currentParameterMode === "recommended" ? "selected" : ""}>Recommended</option>`
                    : ""
                }
                <option value="custom" ${currentParameterMode === "custom" ? "selected" : ""}>Custom</option>
              </select>
            </div>

            <div class="cultivation-parameter-selection ${selectedParameterLabel ? "is-selected" : ""}">
              <div class="cultivation-parameter-selection__header">
                <strong>
                  ${selectedParameterLabel ? `${escapeHtml(selectedParameterLabel)} Selected` : "No Parameter Profile Selected"}
                </strong>
                <div class="cultivation-parameter-selection__actions">
                  ${
                    selectedParameterLabel
                      ? `<span class="cultivation-parameter-selection__tag">${escapeHtml(cropName)} Target Range</span>`
                      : ""
                  }
                  ${
                    selectedParameterLabel
                      ? `
                        <button
                          class="button button--secondary cultivation-parameter-selection__button"
                          type="button"
                          data-action="open-cultivation-parameter-preview"
                        >
                          Review
                        </button>
                      `
                      : ""
                  }
                </div>
              </div>
              <p class="section-copy">
                ${
                  selectedParameterLabel
                    ? currentParameterMode === "recommended"
                      ? `${escapeHtml(cropName)} will use the Department of Agriculture reference range. Click Review if you want to check the values again.`
                      : `${escapeHtml(cropName)} will use the custom range you set. Click Review if you want to update the values again.`
                    : hasRecommendedProfile
                      ? "Choose a setup first, then review the values before starting."
                      : "Choose Custom first to set the target range."
                }
              </p>
            </div>
          </div>

          ${
            showCustomFields
              ? `
                <div class="field">
                  <label class="field__label" for="custom-harvest-date-input">Estimated Harvest Date</label>
                  <input
                    class="input"
                    id="custom-harvest-date-input"
                    type="date"
                    lang="en-US"
                    value="${escapeHtml(customHarvestTargetDate)}"
                  />
                  <div class="field__hint">Use the calendar or type a date in mm/dd/yyyy format if supported.</div>
                </div>
              `
              : ""
          }

          <div class="modal__actions cultivation-modal__actions">
            <button class="button button--secondary" type="button" data-action="close-cultivation-setup">Cancel</button>
            <button
              class="button button--primary"
              type="button"
              data-action="calculate-harvest"
              ${!canCalculateCultivation() ? "disabled" : ""}
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function cultivationParameterPreviewModalTemplate() {
  const {
    cropType,
    parameterPreviewMode,
    parameters,
  } = state.cultivation;

  if (!isCultivationParameterModeAvailable(parameterPreviewMode, state.cultivation)) {
    return "";
  }

  const cropName = selectedCultivationName() || CROP_LABELS[cropType] || "Cultivation";
  const isRecommendedPreview = parameterPreviewMode === "recommended";
  const displayedParameters = isRecommendedPreview
    ? recommendedCultivationParameters(state.cultivation)
    : parameters;
  const previewTitle = isRecommendedPreview ? "Recommended Parameters" : "Custom Parameters";
  const previewCopy = isRecommendedPreview
    ? `Department of Agriculture reference range for ${cropName}.`
    : `Set the target range for ${cropName}.`;

  return `
    <div class="overlay overlay--center overlay--cultivation-preview">
      <div class="modal modal--cultivation cultivation-preview-modal">
        <div class="modal__header">
          <div class="card-head">
            <div>
              <p class="cultivation-preview-modal__eyebrow">${escapeHtml(cropName)} Target Range</p>
              <h3 class="section-title cultivation-modal__title">${previewTitle}</h3>
              <p class="section-copy">${escapeHtml(previewCopy)}</p>
            </div>
            <button class="icon-button" type="button" data-action="close-cultivation-parameter-preview">
              ${icon("close")}
            </button>
          </div>
        </div>

        <div class="modal__body page-stack cultivation-preview-modal__body">
          ${
            isRecommendedPreview
              ? `
                <div class="cultivation-da-reference cultivation-da-reference--preview">
                  <img
                    class="cultivation-da-reference__logo"
                    src="${DA_LOGO_PATH}"
                    alt="Department of Agriculture logo"
                  />
                  <div>
                    <h5 class="cultivation-da-reference__title">Department of Agriculture Reference Profile</h5>
                    <p class="section-copy">
                      The recommended values below will be used as the active monitoring range for ${escapeHtml(cropName)}.
                    </p>
                  </div>
                </div>
              `
              : `
                <div class="center-banner cultivation-da-reference cultivation-da-reference--custom">
                  <span class="nav-button__icon" aria-hidden="true">${icon("info")}</span>
                  <span>Update the target range below.</span>
                </div>
              `
          }

          <div class="grid cultivation-parameter-grid">
            ${CULTIVATION_PARAMETER_FIELDS.map((field) =>
              isRecommendedPreview
                ? cultivationRecommendedParameterCardTemplate(field, displayedParameters[field.key], cropName)
                : cultivationParameterCardTemplate(field, displayedParameters[field.key]),
            ).join("")}
          </div>

          <div class="modal__actions cultivation-modal__actions cultivation-preview-modal__actions">
            <button class="button button--primary" type="button" data-action="close-cultivation-parameter-preview">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function loginTemplate() {
  return `
    <section class="login-screen">
      <article class="glass-card login-card">
        <div class="login-card__brand">
          <img class="login-card__logo" src="${LOGO_PATH}" alt="ArCuGreen Logo" />
          <p class="login-card__eyebrow">Smart Agriculture</p>
          <h1 class="login-card__title">Login to ArCuGreen</h1>
          <p class="login-card__copy">Sign in to access your monitoring dashboard.</p>
        </div>

        <form class="login-form" id="login-form">
          <label class="field">
            <span class="field__label">Email</span>
            <div class="login-input">
              <span class="login-input__icon" aria-hidden="true">${icon("mail")}</span>
              <input
                class="input login-input__control"
                id="login-email-input"
                type="email"
                inputmode="email"
                autocomplete="email"
                placeholder="Enter your email"
                value="${escapeHtml(state.loginForm.email)}"
                required
              />
            </div>
          </label>

          <label class="field">
            <span class="field__label">Password</span>
            <div class="login-input login-input--password">
              <span class="login-input__icon" aria-hidden="true">${icon("lock")}</span>
              <input
                class="input login-input__control login-input__control--password"
                id="login-password-input"
                type="password"
                autocomplete="current-password"
                placeholder="Enter your password"
                value="${escapeHtml(state.loginForm.password)}"
                required
              />
              <button
                class="login-input__toggle"
                type="button"
                data-action="toggle-password-visibility"
                data-target="login-password-input"
                aria-label="Show password"
              >
                <span class="login-input__toggle-icon" data-password-icon aria-hidden="true">${icon("eye-off")}</span>
              </button>
            </div>
          </label>

          <div class="login-form__meta">
            <button class="login-link" type="button" data-action="forgot-password">Forgot Password?</button>
          </div>

          <button class="button button--primary button--full" type="submit" data-action="submit-login">
            Login
          </button>
        </form>
      </article>
    </section>
  `;
}

function sensorCardTemplate(sensor) {
  const displayStatus = effectiveSensorStatus(sensor);
  const statusLabel = effectiveSensorStatusLabel(sensor);
  const currentValue = effectiveSensorValue(sensor);
  const currentUnit = effectiveSensorUnit(sensor);
  const progressValue = effectiveSensorPercentage(sensor);
  return `
    <article class="glass-card card sensor-card sensor-card--compact ${glowClass(displayStatus)}" data-action="open-sensor-detail" data-id="${sensor.id}">
      <div class="sensor-card__top">
        <div class="sensor-card__icon">${icon(sensor.icon)}</div>
        <div class="pill ${pillClass(displayStatus)}">
          ${icon(statusIconName(displayStatus), "icon")}
          <span>${escapeHtml(statusLabel)}</span>
        </div>
      </div>
      <div>
        <div class="sensor-card__name">${escapeHtml(sensor.name)}</div>
        <p class="sensor-card__value">${escapeHtml(currentValue)}${currentUnit ? ` <span>${escapeHtml(currentUnit)}</span>` : ""}</p>
      </div>
      <div class="progress-track">
        <div class="progress-fill ${progressClass(displayStatus)}" style="width: ${progressValue}%"></div>
      </div>
    </article>
  `;
}

function sensorHealthItems() {
  return SENSOR_HEALTH.map((item) => ({
    name: item.name,
    ...sensorHealthStatus(item.key),
  }));
}

function sensorHealthStatus(sensorKey) {
  if (sensorKey === "dht22") {
    return isRowSensorPoweredOn("row1", "temp")
      ? { status: "online", detail: "Shared across all rows", badge: "Online" }
      : { status: "offline", detail: "Shared across all rows", badge: "Offline" };
  }

  const poweredCount = IOT_DEVICE_ROWS.filter((row) => isRowSensorPoweredOn(row.key, sensorKey)).length;
  if (poweredCount === IOT_DEVICE_ROWS.length) {
    return { status: "online", detail: `${poweredCount}/${IOT_DEVICE_ROWS.length} rows online`, badge: "Online" };
  }
  if (poweredCount === 0) {
    return { status: "offline", detail: "All rows are off", badge: "Offline" };
  }
  return { status: "partial", detail: `${poweredCount}/${IOT_DEVICE_ROWS.length} rows online`, badge: "Partial" };
}

function iotRowMetricConfig(metricKey) {
  return IOT_ROW_METRICS.find((metric) => metric.key === metricKey) || IOT_ROW_METRICS[0];
}

function rowSensorPowerStorageKey(rowKey, metricKey) {
  if (metricKey === "temp" || metricKey === "humidity" || metricKey === "dht22") {
    return "dht22";
  }

  if (metricKey === "ec" || metricKey === "ph" || metricKey === "rs485") {
    return `${rowKey}-rs485`;
  }

  return `${rowKey}-${metricKey}`;
}

function rowSensorPowerMode(rowKey, metricKey) {
  return state.sensorsPage.rowSensorPower[rowSensorPowerStorageKey(rowKey, metricKey)] || "on";
}

function isRowSensorPoweredOn(rowKey, metricKey) {
  return rowSensorPowerMode(rowKey, metricKey) === "on";
}

function iotRowMetricValue(row, metricKey) {
  if (metricKey === "temp" || metricKey === "humidity") {
    return SHARED_DHT22_METRICS[metricKey];
  }

  return row[metricKey];
}

function iotRowMetricStatus(row, metric) {
  if (!isRowSensorPoweredOn(row.key, metric.key)) {
    return "critical";
  }

  const value = iotRowMetricValue(row, metric.key);
  if (value < metric.normalMin || value > metric.normalMax) {
    return "warning";
  }

  return "normal";
}

function iotRowMetricStatusLabel(row, metric) {
  const status = iotRowMetricStatus(row, metric);
  if (status === "critical") {
    return "Off";
  }
  if (status === "warning") {
    return "Warning";
  }
  return "Normal";
}

function iotRowMetricPercentage(row, metric) {
  if (!isRowSensorPoweredOn(row.key, metric.key)) {
    return 0;
  }

  const value = iotRowMetricValue(row, metric.key);
  const span = metric.displayMax - metric.displayMin;
  if (!span) {
    return 0;
  }

  const percent = ((value - metric.displayMin) / span) * 100;
  return Math.max(0, Math.min(100, percent));
}

function iotRowWarningCount(row) {
  return IOT_ROW_METRICS.filter((metric) => iotRowMetricStatus(row, metric) === "warning").length;
}

function iotMonitorGroupStatus(row, metricKeys) {
  const statuses = metricKeys.map((metricKey) => iotRowMetricStatus(row, iotRowMetricConfig(metricKey)));
  if (statuses.every((status) => status === "critical")) {
    return "critical";
  }
  if (statuses.includes("critical") || statuses.includes("warning")) {
    return "warning";
  }
  return "normal";
}

function iotMonitorGroupPercentage(row, metricKeys) {
  return Math.max(...metricKeys.map((metricKey) => iotRowMetricPercentage(row, iotRowMetricConfig(metricKey))));
}

function iotRowStatusTone(row) {
  const statuses = IOT_ROW_METRICS.map((metric) => iotRowMetricStatus(row, metric));
  if (statuses.every((status) => status === "critical")) {
    return "critical";
  }
  if (statuses.includes("critical") || statuses.includes("warning")) {
    return "warning";
  }
  return "normal";
}

function iotRowStatusLabel(row) {
  const activeCount = IOT_ROW_METRICS.filter((metric) => isRowSensorPoweredOn(row.key, metric.key)).length;
  if (!activeCount) {
    return "All Off";
  }

  const warnings = iotRowWarningCount(row);
  if (warnings) {
    return `${warnings} Warning${warnings > 1 ? "s" : ""}`;
  }

  return "Normal";
}

function iotRowSensorDetail(row, metricKey) {
  const metric = iotRowMetricConfig(metricKey);
  return {
    id: `${row.key}-${metric.key}`,
    name: metric.label,
    deviceName: metric.shared ? `${row.label} Shared DHT22` : `${row.label} ${metric.deviceName}`,
    powerKey: rowSensorPowerStorageKey(row.key, metric.key),
    value: iotRowMetricValue(row, metric.key),
    unit: metric.unit,
    icon: metric.icon,
    status: iotRowMetricStatus(row, metric),
    percentage: iotRowMetricPercentage(row, metric),
    min: metric.normalMin,
    max: metric.normalMax,
    alertMode: "SMS + Email",
  };
}

function iotRowRs485Detail(row) {
  const ecMetric = iotRowMetricConfig("ec");
  const phMetric = iotRowMetricConfig("ph");
  return {
    id: `${row.key}-rs485`,
    name: "RS485 Multi Sensor",
    deviceName: `${row.label} RS485 Multi Sensor`,
    powerKey: rowSensorPowerStorageKey(row.key, "rs485"),
    value: row.ec,
    unit: ecMetric.unit,
    heroValue: `EC ${row.ec} ${ecMetric.unit}  |  pH ${row.ph} ${phMetric.unit}`,
    icon: "activity",
    status: iotMonitorGroupStatus(row, ["ec", "ph"]),
    percentage: iotMonitorGroupPercentage(row, ["ec", "ph"]),
    min: ecMetric.normalMin,
    max: ecMetric.normalMax,
    alertMode: "SMS + Email",
    detailMetrics: [
      { label: "Soil EC", value: `${row.ec} ${ecMetric.unit}` },
      { label: "Soil pH", value: `${row.ph} ${phMetric.unit}` },
    ],
  };
}

function findIotRowSensorById(sensorId) {
  const row = IOT_DEVICE_ROWS.find((item) => sensorId.startsWith(`${item.key}-`));
  if (!row) {
    return null;
  }

  const metricKey = sensorId.slice(`${row.key}-`.length);
  if (metricKey === "rs485") {
    return iotRowRs485Detail(row);
  }

  if (!IOT_ROW_METRICS.some((metric) => metric.key === metricKey)) {
    return null;
  }

  return iotRowSensorDetail(row, metricKey);
}

function findDashboardSensorById(sensorId) {
  return state.dashboardSensors.find((item) => item.id === sensorId) || findIotRowSensorById(sensorId);
}

function iotDashboardMetricTemplate(row, metric) {
  const status = iotRowMetricStatus(row, metric);
  const poweredOn = status !== "critical";
  const value = iotRowMetricValue(row, metric.key);
  const percentage = iotRowMetricPercentage(row, metric);
  return `
    <article class="metric-card iot-monitor-card ${glowClass(status)} ${poweredOn ? "" : "iot-monitor-card--off"}" data-action="open-sensor-detail" data-id="${row.key}-${metric.key}">
      <div class="sensor-card__top iot-monitor-card__top">
        <span class="sensor-card__icon iot-row-metric__icon">${icon(metric.icon)}</span>
        <span class="pill ${pillClass(status)}">${escapeHtml(iotRowMetricStatusLabel(row, metric))}</span>
      </div>
      <div>
        <div class="sensor-card__name">${escapeHtml(metric.label)}</div>
        <p class="sensor-card__value iot-monitor-card__value">
        ${poweredOn ? `${escapeHtml(String(value))}${metric.unit ? ` <span>${escapeHtml(metric.unit)}</span>` : ""}` : "OFF"}
        </p>
      </div>
      <div class="progress-track">
        <div class="progress-fill ${progressClass(status)}" style="width: ${percentage}%"></div>
      </div>
      <div class="section-copy iot-monitor-card__source">${escapeHtml(metric.shared ? "Shared DHT22 Monitor" : metric.deviceName)}</div>
    </article>
  `;
}

function iotDashboardRs485Template(row) {
  const status = iotMonitorGroupStatus(row, ["ec", "ph"]);
  const poweredOn = status !== "critical";
  const percentage = iotMonitorGroupPercentage(row, ["ec", "ph"]);
  return `
    <article class="metric-card iot-monitor-card iot-monitor-card--group ${glowClass(status)} ${poweredOn ? "" : "iot-monitor-card--off"}" data-action="open-sensor-detail" data-id="${row.key}-rs485">
      <div class="sensor-card__top iot-monitor-card__top">
        <span class="sensor-card__icon iot-row-metric__icon">${icon("activity")}</span>
        <span class="pill ${pillClass(status)}">${escapeHtml(status === "warning" ? "Warning" : poweredOn ? "Normal" : "Off")}</span>
      </div>
      <div>
        <div class="sensor-card__name">RS485 Multi Sensor</div>
        <p class="section-copy iot-monitor-card__source">Soil EC and Soil pH monitor</p>
      </div>
      <div class="iot-monitor-card__group-values">
        <div class="iot-monitor-card__group-item">
          <span>Soil EC</span>
          <strong>${poweredOn ? `${escapeHtml(String(row.ec))} <small>${escapeHtml(iotRowMetricConfig("ec").unit)}</small>` : "OFF"}</strong>
        </div>
        <div class="iot-monitor-card__group-item">
          <span>Soil pH</span>
          <strong>${poweredOn ? `${escapeHtml(String(row.ph))} <small>${escapeHtml(iotRowMetricConfig("ph").unit)}</small>` : "OFF"}</strong>
        </div>
      </div>
      <div class="progress-track">
        <div class="progress-fill ${progressClass(status)}" style="width: ${percentage}%"></div>
      </div>
    </article>
  `;
}

function iotDashboardRowCardTemplate(row) {
  const tone = iotRowStatusTone(row);
  const warnings = iotRowWarningCount(row);
  return `
    <article class="glass-card card page-stack iot-row-card ${glowClass(tone)}">
      <div class="card-head iot-row-card__head">
        <div>
          <div class="iot-row-card__eyebrow">Monitoring Row</div>
          <h3 class="section-title">${escapeHtml(row.label)}</h3>
          <p class="section-copy iot-row-card__subcopy">${warnings ? `${warnings} metric warning${warnings > 1 ? "s" : ""} detected in this row.` : "All monitored values are within the normal range."}</p>
        </div>
        <div class="iot-row-card__summary">
          <span class="pill ${pillClass(tone)}">${escapeHtml(iotRowStatusLabel(row))}</span>
        </div>
      </div>
      <div class="iot-row-card__metrics">
        ${iotDashboardMetricTemplate(row, iotRowMetricConfig("moisture"))}
        ${iotDashboardRs485Template(row)}
        ${iotDashboardMetricTemplate(row, iotRowMetricConfig("temp"))}
        ${iotDashboardMetricTemplate(row, iotRowMetricConfig("humidity"))}
      </div>
    </article>
  `;
}

function sensorPowerKey(sensorOrKey) {
  if (typeof sensorOrKey === "object" && sensorOrKey) {
    return sensorOrKey.powerKey || sensorOrKey.id || "";
  }
  return sensorOrKey === "temp" || sensorOrKey === "humidity" ? "dht22" : String(sensorOrKey || "");
}

function sensorPowerMode(sensorOrKey) {
  const key = sensorPowerKey(sensorOrKey);
  return state.sensorsPage.sensorPower[key] || state.sensorsPage.rowSensorPower?.[key] || "on";
}

function isSensorPoweredOn(sensorOrKey, useDirectKey = false) {
  const key = useDirectKey ? String(sensorOrKey || "") : sensorPowerKey(sensorOrKey);
  return sensorPowerMode(key) === "on";
}

function effectiveSensorStatus(sensor) {
  return isSensorPoweredOn(sensor) ? sensor.status : "critical";
}

function effectiveSensorStatusLabel(sensor) {
  return isSensorPoweredOn(sensor) ? capitalize(sensor.status) : "Off";
}

function effectiveSensorValue(sensor) {
  return isSensorPoweredOn(sensor) ? String(sensor.value) : "OFF";
}

function effectiveSensorUnit(sensor) {
  return isSensorPoweredOn(sensor) ? sensor.unit : "";
}

function effectiveSensorPercentage(sensor) {
  return isSensorPoweredOn(sensor) ? sensor.percentage : 0;
}

function currentSensorReadingMarkup(sensor, readingLabel) {
  if (!sensor) {
    return "Unavailable";
  }

  if (!isSensorPoweredOn(sensor)) {
    return "Sensor is off";
  }

  return `${escapeHtml(readingLabel)}: ${escapeHtml(sensor.value)} ${escapeHtml(sensor.unit)}`;
}

function sensorManagementCardTemplate(config) {
  const sensor = state.dashboardSensors.find((item) => item.id === config.sensorId);
  const powerMode = sensorPowerMode(config.powerKey);
  const poweredOn = powerMode === "on";

  return `
    <article class="glass-card card page-stack sensor-management-card">
      <div class="card-head sensor-management-card__head">
        <div class="inline-copy sensor-management-card__copy">
          <div class="sensor-card__icon sensor-management-card__icon">${icon(config.icon)}</div>
          <div class="sensor-management-card__meta">
            <h3 class="section-title sensor-management-card__title">${escapeHtml(config.deviceName)}</h3>
            <p class="section-copy sensor-management-card__reading">${currentSensorReadingMarkup(sensor, config.readingLabel)}</p>
          </div>
        </div>
        <span class="pill ${poweredOn ? "pill--normal" : "pill--critical"} sensor-management-card__pill">${poweredOn ? "On" : "Off"}</span>
      </div>
      <div class="field sensor-management-card__field">
        <label class="field__label" for="sensor-power-${config.sensorId}">Sensor Power</label>
        <select class="select sensor-management-card__select" id="sensor-power-${config.sensorId}" data-sensor-power="${config.powerKey}">
          <option value="on" ${powerMode === "on" ? "selected" : ""}>On</option>
          <option value="off" ${powerMode === "off" ? "selected" : ""}>Off</option>
        </select>
      </div>
      <div class="timeline-card sensor-management-card__state">
        <div class="section-copy">Current State</div>
        <p class="sensor-management-card__state-value" style="color: ${poweredOn ? "var(--green-800)" : "var(--red-500)"};">
          ${poweredOn ? "Running" : "Disabled"}
        </p>
      </div>
    </article>
  `;
}

function sensorRowControlTemplate(row, control) {
  const powerKey = rowSensorPowerStorageKey(row.key, control.key);
  const powerMode = rowSensorPowerMode(row.key, control.key);
  const poweredOn = powerMode === "on";
  const isGroupedRs485 = control.key === "rs485";
  return `
    <div class="timeline-card sensor-row-control">
      <div class="sensor-row-control__head">
        <div>
          <strong>${escapeHtml(control.label)}</strong>
          ${isGroupedRs485
            ? `
              <div class="sensor-row-control__reading-grid">
                <p class="section-copy sensor-row-control__reading">${poweredOn ? `Soil EC: ${escapeHtml(String(row.ec))} ${escapeHtml(iotRowMetricConfig("ec").unit)}` : "Soil EC: OFF"}</p>
                <p class="section-copy sensor-row-control__reading">${poweredOn ? `Soil pH: ${escapeHtml(String(row.ph))} ${escapeHtml(iotRowMetricConfig("ph").unit)}` : "Soil pH: OFF"}</p>
              </div>
            `
            : `<p class="section-copy sensor-row-control__reading">${poweredOn ? `${escapeHtml(String(iotRowMetricValue(row, "moisture")))} ${escapeHtml(iotRowMetricConfig("moisture").unit)}` : "Sensor is off"}</p>`}
        </div>
        <span class="pill ${poweredOn ? "pill--normal" : "pill--critical"}">${poweredOn ? "On" : "Off"}</span>
      </div>
      <div class="field sensor-row-control__field">
        <label class="field__label" for="${escapeHtml(powerKey)}">${escapeHtml(control.deviceName)}</label>
        <select class="select sensor-management-card__select" id="${escapeHtml(powerKey)}" data-row-sensor-power="${escapeHtml(powerKey)}">
          <option value="on" ${powerMode === "on" ? "selected" : ""}>On</option>
          <option value="off" ${powerMode === "off" ? "selected" : ""}>Off</option>
        </select>
      </div>
    </div>
  `;
}

function sensorRowManagementCardTemplate(row) {
  const tone = iotRowStatusTone(row);
  return `
    <article class="glass-card card page-stack sensor-row-card ${glowClass(tone)}">
      <div class="card-head sensor-row-card__head">
        <div>
          <h3 class="section-title">${escapeHtml(row.label)}</h3>
          <p class="section-copy">Per-row Soil Moisture control plus one RS485 Multi Sensor for both EC and pH.</p>
        </div>
        <span class="pill ${pillClass(tone)}">${escapeHtml(iotRowStatusLabel(row))}</span>
      </div>
      <div class="sensor-row-card__controls">
        ${IOT_ROW_SENSOR_CONTROLS.map((control) => sensorRowControlTemplate(row, control)).join("")}
      </div>
    </article>
  `;
}

function sharedDht22ManagementCardTemplate() {
  const powerMode = state.sensorsPage.rowSensorPower.dht22 || "on";
  const poweredOn = powerMode === "on";
  return `
    <article class="glass-card card page-stack sensor-row-card sensor-row-card--shared ${glowClass(poweredOn ? "normal" : "critical")}">
      <div class="card-head sensor-row-card__head">
        <div>
          <h3 class="section-title">Shared DHT22</h3>
          <p class="section-copy">Temperature and humidity are shared across all 4 rows.</p>
        </div>
        <span class="pill ${poweredOn ? "pill--normal" : "pill--critical"}">${poweredOn ? "On" : "Off"}</span>
      </div>
      <div class="sensor-row-card__controls sensor-row-card__controls--shared">
        ${IOT_ROW_METRICS.filter((metric) => metric.shared).map((metric) => `
          <div class="metric-card iot-row-metric ${poweredOn ? "" : "iot-row-metric--off"}">
            <div class="iot-row-metric__top">
              <span class="sensor-card__icon iot-row-metric__icon">${icon(metric.icon)}</span>
              <span class="iot-row-metric__label">${escapeHtml(metric.label)}</span>
            </div>
            <div class="iot-row-metric__value">
              ${poweredOn ? `${escapeHtml(String(SHARED_DHT22_METRICS[metric.key]))} <span>${escapeHtml(metric.unit)}</span>` : "OFF"}
            </div>
            <div class="section-copy iot-row-metric__device">${escapeHtml(metric.deviceName)}</div>
          </div>
        `).join("")}
        <div class="field sensor-row-control__field sensor-row-control__field--shared">
          <label class="field__label" for="shared-dht22-power">Sensor Power</label>
          <select class="select sensor-management-card__select" id="shared-dht22-power" data-row-sensor-power="dht22">
            <option value="on" ${powerMode === "on" ? "selected" : ""}>On</option>
            <option value="off" ${powerMode === "off" ? "selected" : ""}>Off</option>
          </select>
        </div>
      </div>
    </article>
  `;
}

function actuatorModeLabel(mode) {
  if (mode === "automatic") {
    return "Automatic";
  }
  if (mode === "on") {
    return "On";
  }
  return "Off";
}

function actuatorControlCardTemplate(control) {
  const mode = state.sensorsPage.actuatorMode[control.key] || "automatic";

  return `
    <article class="glass-card card page-stack sensor-management-card sensor-management-card--actuator">
      <div class="card-head sensor-management-card__head">
        <div class="inline-copy sensor-management-card__copy">
          <div class="sensor-card__icon sensor-management-card__icon">${icon(control.icon)}</div>
          <div class="sensor-management-card__meta">
            <h3 class="section-title sensor-management-card__title">${escapeHtml(control.label)}</h3>
            <p class="section-copy sensor-management-card__reading">${escapeHtml(control.copy)}</p>
          </div>
        </div>
        <span class="pill ${mode === "off" ? "pill--critical" : "pill--normal"} sensor-management-card__pill">${escapeHtml(actuatorModeLabel(mode))}</span>
      </div>
      <div class="field sensor-management-card__field">
        <label class="field__label" for="actuator-mode-${control.key}">Mode</label>
        <select class="select sensor-management-card__select" id="actuator-mode-${control.key}" data-actuator-mode="${control.key}">
          <option value="automatic" ${mode === "automatic" ? "selected" : ""}>Automatic</option>
          <option value="on" ${mode === "on" ? "selected" : ""}>On</option>
          <option value="off" ${mode === "off" ? "selected" : ""}>Off</option>
        </select>
      </div>
      <div class="timeline-card sensor-management-card__state">
        <div class="section-copy">Current Mode</div>
        <p class="sensor-management-card__state-value" style="color: ${mode === "off" ? "var(--red-500)" : "var(--green-800)"};">
          ${escapeHtml(actuatorModeLabel(mode))}
        </p>
      </div>
    </article>
  `;
}

function healthItemTemplate(sensor) {
  const online = sensor.status === "online";
  const partial = sensor.status === "partial";
  const pillTone = partial ? "pill--warning" : online ? "pill--normal" : "pill--critical";
  const dotClass = partial ? "status-dot--warning" : online ? "status-dot--online" : "status-dot--offline";
  const iconColor = partial ? "var(--amber-500)" : online ? "var(--green-600)" : "var(--red-500)";
  return `
    <div class="health-item">
      <div class="health-item__meta">
        <span class="status-dot ${dotClass}"></span>
        <span class="nav-button__icon" style="color: ${iconColor}">${icon(online || partial ? "wifi" : "wifi-off")}</span>
        <div>
          <strong>${escapeHtml(sensor.name)}</strong>
          <div class="section-copy">${escapeHtml(sensor.detail)}</div>
        </div>
      </div>
      <span class="pill ${pillTone}">${escapeHtml(sensor.badge)}</span>
    </div>
  `;
}

function tankTemplate(title, amount, max, status, percentage, tone = "water") {
  return `
    <div class="tank-card tank-card--compact">
      <div class="tank tank--${tone}">
        <div class="tank__fill tank__fill--${tone}" style="height: ${percentage}%">
          <span class="tank__wave tank__wave--back"></span>
          <span class="tank__wave tank__wave--front"></span>
          <span class="tank__glow"></span>
          <span class="tank__bubble tank__bubble--1"></span>
          <span class="tank__bubble tank__bubble--2"></span>
          <span class="tank__bubble tank__bubble--3"></span>
        </div>
        <div class="tank__content">
          <div class="tank__reading">
            <strong>${escapeHtml(amount)}</strong>
            <div class="section-copy">${escapeHtml(max)}</div>
          </div>
        </div>
      </div>
      <div class="tank-card__meta">
        <strong>${escapeHtml(title)}</strong>
        <div class="section-copy">${escapeHtml(status)}</div>
      </div>
    </div>
  `;
}

function soilAutomaticTemplate() {
  return `
    <div class="input-grid input-grid--two">
      <div class="field">
        <label class="field__label">Min Threshold (%)</label>
        <input class="input" type="number" value="30" />
      </div>
      <div class="field">
        <label class="field__label">Max Threshold (%)</label>
        <input class="input" type="number" value="70" />
      </div>
    </div>
  `;
}

function soilScheduleTemplate() {
  return `
    <div class="input-grid input-grid--two">
      <div class="field">
        <label class="field__label">Start Time</label>
        <input class="input" type="time" value="06:00" />
      </div>
      <div class="field">
        <label class="field__label">Duration (minutes)</label>
        <input class="input" type="number" value="30" />
      </div>
    </div>
  `;
}

function ecAutomaticTemplate() {
  return `
    <div class="input-grid input-grid--two">
      <div class="field">
        <label class="field__label">Min EC (mS/cm)</label>
        <input class="input" type="number" value="1.0" step="0.1" />
      </div>
      <div class="field">
        <label class="field__label">Max EC (mS/cm)</label>
        <input class="input" type="number" value="2.5" step="0.1" />
      </div>
    </div>
  `;
}

function modeCardTemplate(value, label, copy, iconName, currentMode) {
  return `
    <button
      class="mode-card ${value === currentMode ? "is-active" : ""}"
      type="button"
      data-action="set-irrigation-mode"
      data-mode="${value}"
    >
      <div class="mode-card__icon">${icon(iconName)}</div>
      <strong>${escapeHtml(label)}</strong>
      <p class="section-copy">${escapeHtml(copy)}</p>
    </button>
  `;
}

function irrigationChannelMeta(channelKey) {
  return IRRIGATION_CHANNELS.find((channel) => channel.key === channelKey) || IRRIGATION_CHANNELS[0];
}

function irrigationFrequencyLabel(value) {
  return IRRIGATION_FREQUENCIES.find((option) => option.value === value)?.label || IRRIGATION_FREQUENCIES[0].label;
}

function formatTimeDisplay(value) {
  if (!value) {
    return "--:--";
  }

  const [hours = "0", minutes = "00"] = value.split(":");
  const date = new Date();
  date.setHours(Number(hours), Number(minutes), 0, 0);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function irrigationScheduleSummary(channelState) {
  const duration = channelState.scheduleDuration || "0";
  const durationUnit = Number(duration) === 1 ? "minute" : "minutes";
  return `${irrigationFrequencyLabel(channelState.scheduleFrequency).toLowerCase()} at ${formatTimeDisplay(channelState.scheduleStartTime)} for ${duration} ${durationUnit}`;
}

function irrigationTypeCardTemplate(channel, bodyMarkup, active = false) {
  return `
    <div class="irrigation-type-card ${active ? "is-active" : ""}">
      <div class="irrigation-type-card__head">
        <div class="irrigation-type-card__icon">${icon(channel.icon)}</div>
        <div>
          <h4 class="irrigation-type-card__title">${escapeHtml(channel.label)}</h4>
          <p class="irrigation-type-card__copy">${escapeHtml(channel.description)}</p>
        </div>
      </div>
      ${bodyMarkup}
    </div>
  `;
}

function irrigationAutomaticTemplate(autoEnabled, channels) {
  const bannerCopy = autoEnabled
    ? "Automatic mode is active. Each line will run using the duration you set below."
    : "Automatic mode is off. Turn the switch on when you want the system to use these durations.";

  return `
    <article class="glass-card card page-stack">
      <div class="card-head">
        <div>
          <h3 class="section-title">Automatic Settings</h3>
          <p class="section-copy">Set the automatic duration for water, fertilizer, and lime solution</p>
        </div>
        <button
          class="switch ${autoEnabled ? "is-on" : ""}"
          type="button"
          data-action="toggle-auto-irrigation"
          aria-pressed="${String(autoEnabled)}"
        >
          <span class="switch__thumb"></span>
        </button>
      </div>
      <div class="irrigation-type-grid">
        ${IRRIGATION_CHANNELS.map((channel) =>
          irrigationTypeCardTemplate(
            channel,
            `
              <div class="field">
                <label class="field__label">Duration (minutes)</label>
                <input
                  class="input"
                  type="number"
                  min="1"
                  value="${escapeHtml(channels[channel.key].automaticDuration)}"
                  data-irrigation-channel="${channel.key}"
                  data-irrigation-field="automaticDuration"
                />
                <div class="field__hint">Enter how long ${escapeHtml(channel.label.toLowerCase())} should run in automatic mode.</div>
              </div>
            `,
          ),
        ).join("")}
      </div>
      <div class="center-banner"><strong>Automatic mode:</strong> ${escapeHtml(bannerCopy)}</div>
    </article>
  `;
}

function irrigationScheduleTemplate(channels) {
  return `
    <section class="page-stack">
      <div class="irrigation-type-grid">
        ${IRRIGATION_CHANNELS.map((channel) =>
          irrigationTypeCardTemplate(
            channel,
            `
              <div class="field">
                <label class="field__label">Start Time</label>
                <input
                  class="input"
                  type="time"
                  value="${escapeHtml(channels[channel.key].scheduleStartTime)}"
                  data-irrigation-channel="${channel.key}"
                  data-irrigation-field="scheduleStartTime"
                />
              </div>
              <div class="field">
                <label class="field__label">Duration (minutes)</label>
                <input
                  class="input"
                  type="number"
                  min="1"
                  value="${escapeHtml(channels[channel.key].scheduleDuration)}"
                  data-irrigation-channel="${channel.key}"
                  data-irrigation-field="scheduleDuration"
                />
              </div>
              <div class="field">
                <label class="field__label">Frequency</label>
                <select
                  class="select"
                  data-irrigation-channel="${channel.key}"
                  data-irrigation-field="scheduleFrequency"
                >
                  ${IRRIGATION_FREQUENCIES.map(
                    (option) => `
                      <option value="${option.value}" ${channels[channel.key].scheduleFrequency === option.value ? "selected" : ""}>
                        ${escapeHtml(option.label)}
                      </option>
                    `,
                  ).join("")}
                </select>
              </div>
              <div class="center-banner"><strong>Scheduled run:</strong> ${escapeHtml(irrigationScheduleSummary(channels[channel.key]))}</div>
            `,
          ),
        ).join("")}
      </div>
    </section>
  `;
}

function irrigationManualTemplate(activeManualLine, channels) {
  const activeChannel = activeManualLine ? irrigationChannelMeta(activeManualLine) : null;
  const statusLabel = activeChannel ? `${activeChannel.label} is running` : "Idle";
  const statusCopy = activeChannel
    ? "Press the active button below if you want to stop the current manual run."
    : "Choose a line below, set the duration, and start the manual run when needed.";

  return `
    <section class="page-stack">
      <div class="timeline-card">
        <div class="section-copy">Current Status</div>
        <p class="sensor-card__value" style="margin-top: 0.4rem; color: var(--green-800)">
          ${escapeHtml(statusLabel)}
        </p>
        <div class="field__hint">${escapeHtml(statusCopy)}</div>
      </div>
      <div class="irrigation-type-grid">
        ${IRRIGATION_CHANNELS.map((channel) => {
          const isActive = activeManualLine === channel.key;
          return irrigationTypeCardTemplate(
            channel,
            `
              <div class="field">
                <label class="field__label">Duration (minutes)</label>
                <input
                  class="input"
                  type="number"
                  min="1"
                  value="${escapeHtml(channels[channel.key].manualDuration)}"
                  data-irrigation-channel="${channel.key}"
                  data-irrigation-field="manualDuration"
                />
              </div>
              <div class="irrigation-status ${isActive ? "is-active" : ""}">
                ${isActive ? "Running now" : "Ready to start"}
              </div>
              <button
                class="button ${isActive ? "button--danger" : "button--primary"} button--full"
                type="button"
                data-action="toggle-manual-irrigation"
                data-channel="${channel.key}"
              >
                ${isActive ? `Stop ${escapeHtml(channel.label)}` : `Start ${escapeHtml(channel.label)}`}
              </button>
            `,
            isActive,
          );
        }).join("")}
      </div>
    </section>
  `;
}

function irrigationControlModalTemplate() {
  const { overlayMode, activeManualLine, channels } = state.irrigationPage;
  const isSchedule = overlayMode === "schedule";
  const title = isSchedule ? "Schedule Control" : "Manual Control";
  const copy = isSchedule
    ? "Separate time-based settings open here instead of appearing in the page section below."
    : "Manual controls open in their own transparent card so they stay separate from the automatic section.";
  const bodyMarkup = isSchedule
    ? irrigationScheduleTemplate(channels)
    : irrigationManualTemplate(activeManualLine, channels);

  return `
    <div class="overlay overlay--center">
      <div class="modal irrigation-modal">
        <div class="modal__header">
          <div class="card-head">
            <div>
              <h3 class="section-title">${escapeHtml(title)}</h3>
              <p class="section-copy">${escapeHtml(copy)}</p>
            </div>
            <button class="icon-button" type="button" data-action="close-irrigation-overlay">
              ${icon("close")}
            </button>
          </div>
        </div>
        <div class="modal__body page-stack irrigation-modal__body">
          ${bodyMarkup}
        </div>
      </div>
    </div>
  `;
}

function metricCardTemplate(label, value) {
  return `
    <div class="metric-card">
      <div class="metric-label">${escapeHtml(label)}</div>
      <p class="metric-value">${escapeHtml(value)}</p>
    </div>
  `;
}

function cultivationParameterCardTemplate(field, values) {
  return `
    <div class="metric-card page-stack cultivation-parameter-card">
      <div class="inline-copy">
        <span class="nav-button__icon" style="color: var(--green-600)">${icon(field.icon)}</span>
        <div>
          <div class="metric-label">${escapeHtml(field.label)}</div>
          <p class="section-copy">Editable target range</p>
        </div>
      </div>
      <div class="input-grid input-grid--two">
        <div class="field">
          <label class="field__label" for="cultivation-${field.key}-min">Min</label>
          <input
            class="input"
            id="cultivation-${field.key}-min"
            type="number"
            step="${field.step}"
            inputmode="decimal"
            data-cultivation-field="${field.key}"
            data-cultivation-bound="min"
            value="${escapeHtml(values.min)}"
          />
        </div>
        <div class="field">
          <label class="field__label" for="cultivation-${field.key}-max">Max</label>
          <input
            class="input"
            id="cultivation-${field.key}-max"
            type="number"
            step="${field.step}"
            inputmode="decimal"
            data-cultivation-field="${field.key}"
            data-cultivation-bound="max"
            value="${escapeHtml(values.max)}"
          />
        </div>
      </div>
      <div class="field__hint">Unit: ${escapeHtml(field.unit)}</div>
    </div>
  `;
}

function cultivationRecommendedParameterCardTemplate(field, values, cropName) {
  return `
    <div class="metric-card page-stack cultivation-parameter-card cultivation-parameter-card--recommended">
      <div class="inline-copy">
        <span class="nav-button__icon" style="color: var(--green-600)">${icon(field.icon)}</span>
        <div>
          <div class="metric-label">${escapeHtml(field.label)}</div>
          <p class="section-copy">Reference range for ${escapeHtml(cropName)}</p>
        </div>
      </div>
      <div class="cultivation-parameter-static">
        <div class="cultivation-parameter-static__item">
          <span>Min</span>
          <strong>${escapeHtml(values.min)}</strong>
        </div>
        <div class="cultivation-parameter-static__item">
          <span>Max</span>
          <strong>${escapeHtml(values.max)}</strong>
        </div>
      </div>
      <div class="field__hint">Unit: ${escapeHtml(field.unit)}</div>
    </div>
  `;
}

function cultivationParameterSummaryCardTemplate(field, values) {
  return `
    <div class="metric-card">
      <div class="inline-copy">
        <span class="nav-button__icon" style="color: var(--green-600)">${icon(field.icon)}</span>
        <div class="metric-label">${escapeHtml(field.label)}</div>
      </div>
      <p class="metric-value" style="font-size: 1.35rem; margin-top: 0.8rem;">
        ${escapeHtml(values.min)} - ${escapeHtml(values.max)} <span>${escapeHtml(field.unit)}</span>
      </p>
    </div>
  `;
}

function cultivationResultsTemplate(cropType, plantingDate, harvestDate, daysToHarvest, parameters) {
  const cropName = selectedCultivationName({
    cropType,
    customPlantName: state.cultivation.customPlantName,
  });
  return `
    <article class="glass-card card page-stack">
      <div>
        <h3 class="section-title">Cultivation Timeline</h3>
        <p class="section-copy">Selected crop: ${escapeHtml(cropName)}</p>
      </div>
      <div class="grid grid--cards">
        <div class="timeline-card">
          <div class="inline-copy">
            <span class="nav-button__icon" style="color: var(--green-800)">${icon("calendar")}</span>
            <strong>Planting Date</strong>
          </div>
          <p class="sensor-card__value" style="font-size: 1.35rem; margin-top: 0.8rem; color: var(--green-800)">
            ${escapeHtml(formatLongDate(plantingDate))}
          </p>
        </div>
        <div class="timeline-card timeline-card--green">
          <div class="inline-copy">
            <span class="nav-button__icon" style="color: var(--green-600)">${icon("clock")}</span>
            <strong>Growth Period</strong>
          </div>
          <p class="sensor-card__value" style="font-size: 1.35rem; margin-top: 0.8rem; color: var(--green-600)">
            ${escapeHtml(daysToHarvest)} days
          </p>
        </div>
        <div class="timeline-card timeline-card--amber">
          <div class="inline-copy">
            <span class="nav-button__icon" style="color: var(--amber-500)">${icon("sprout")}</span>
            <strong>Estimated Harvest</strong>
          </div>
          <p class="sensor-card__value" style="font-size: 1.35rem; margin-top: 0.8rem; color: var(--amber-500)">
            ${escapeHtml(formatLongDate(harvestDate))}
          </p>
        </div>
      </div>
      <div class="timeline-bar">
        <div class="timeline-bar__track">
          <div class="timeline-bar__fill"></div>
        </div>
        <div class="timeline-bar__labels">
          <div>
            <div class="timeline-bar__marker timeline-bar__marker--start"></div>
            <span>Start</span>
          </div>
          <div class="text-right">
            <div class="timeline-bar__marker timeline-bar__marker--end"></div>
            <span>Harvest</span>
          </div>
        </div>
      </div>
      <div class="center-banner">
        Dashboard monitoring ranges are now using the cultivation parameters for ${escapeHtml(cropName)}.
      </div>
    </article>

    <article class="glass-card card page-stack">
      <div>
        <h3 class="section-title">Applied Parameters</h3>
        <p class="section-copy">Current operating range for your selected cultivation</p>
      </div>
      <div class="grid grid--cards">
        ${CULTIVATION_PARAMETER_FIELDS.map((field) =>
          cultivationParameterSummaryCardTemplate(field, parameters[field.key]),
        ).join("")}
      </div>
    </article>
  `;
}

function activeCultivationTemplate(item) {
  return `
    <div class="cultivation-item">
      <div class="cultivation-item__meta">
        <div class="cultivation-item__icon" aria-hidden="true">
          ${icon("leaf")}
        </div>
        <div>
          <p class="user-row__name">${escapeHtml(item.crop)}</p>
          <p class="section-copy">Planted: ${escapeHtml(item.planted)}</p>
        </div>
      </div>
      <div class="text-right">
        <p class="user-row__name" style="color: ${item.remainingColor}; margin: 0;">${escapeHtml(item.remaining)}</p>
        <p class="section-copy">Harvest: ${escapeHtml(item.harvest)}</p>
      </div>
    </div>
  `;
}

function userRowTemplate(user) {
  const isAdmin = user.role === "admin";
  const roleLabel = isAdmin ? "Administrator" : "User";
  return `
    <div class="user-row">
      <div class="user-row__meta">
        <div class="user-row__avatar">${escapeHtml(user.name.charAt(0).toUpperCase())}</div>
        <div>
          <p class="user-row__name">
            ${escapeHtml(user.name)}
            ${isAdmin ? `<span class="role-badge">${icon("shield", "icon")}${roleLabel}</span>` : ""}
          </p>
          <p class="user-row__email">
            <span class="nav-button__icon">${icon("mail")}</span>
            ${escapeHtml(user.email)}
          </p>
        </div>
      </div>
      <button
        class="icon-button icon-button--danger"
        type="button"
        data-action="delete-user"
        data-id="${user.id}"
        ${isAdmin ? "disabled aria-disabled=\"true\"" : ""}
      >
        ${icon("trash")}
      </button>
    </div>
  `;
}

function settingsModalTemplate() {
  return `
    <div class="overlay overlay--center">
      <div class="modal modal--settings">
        <div class="modal__header">
          <div class="card-head">
            <h3 class="section-title">Settings</h3>
            <button class="icon-button" type="button" data-action="close-settings">
              ${icon("close")}
            </button>
          </div>
          <div class="tab-row">
            ${settingsTabButton("profile", "Profile", "user")}
            ${settingsTabButton("about", "About Us", "info")}
            ${settingsTabButton("developers", "Developers", "users")}
          </div>
        </div>
        <div class="modal__body">
          ${state.activeSettingsTab === "profile" ? settingsProfileTemplate() : ""}
          ${state.activeSettingsTab === "about" ? settingsAboutTemplate() : ""}
          ${state.activeSettingsTab === "developers" ? settingsDevelopersTemplate() : ""}
        </div>
      </div>
    </div>
  `;
}

function passwordChangeOtpModalTemplate() {
  const otpInputs = state.otpCode
    .map((digit, index) => `
      <input
        class="otp-input"
        id="otp-${index}"
        type="text"
        inputmode="numeric"
        autocomplete="${index === 0 ? "one-time-code" : "off"}"
        maxlength="1"
        value="${escapeHtml(digit)}"
      />
    `)
    .join("");

  return `
    <div class="overlay overlay--center overlay--dialog">
      <div class="modal modal--sm password-otp-modal">
        <div class="modal__header">
          <div class="card-head">
            <div>
              <h3 class="section-title">OTP Verification</h3>
              <p class="section-copy">Enter the 6-digit code to confirm your new password.</p>
            </div>
            <button class="icon-button" type="button" data-action="cancel-password-change-otp">
              ${icon("close")}
            </button>
          </div>
        </div>
        <div class="modal__body password-otp-modal__body">
          <article class="glass-card card password-otp-card">
            <div class="password-otp-card__copy">
              <span class="spot-icon">${icon("mail")}</span>
              <div>
                <h4 class="section-title">Verification Code</h4>
                <p class="section-copy">Complete all 6 digits. It will apply automatically once the code is complete.</p>
              </div>
            </div>
            <div class="otp-row otp-row--modal">
              ${otpInputs}
            </div>
          </article>
          <div class="modal__actions password-otp-modal__actions">
            <button class="button button--secondary button--full" type="button" data-action="cancel-password-change-otp">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function settingsTabButton(tab, label, iconName) {
  return `
    <button class="tab-button ${state.activeSettingsTab === tab ? "is-active" : ""}" type="button" data-tab="${tab}">
      <span class="nav-button__icon">${icon(iconName)}</span>
      <span>${label}</span>
    </button>
  `;
}

function openSettings() {
  closeNotificationsDrawer();
  state.settingsOpen = true;
  state.activeSettingsTab = "profile";
  resetPasswordChangeState();
  renderOverlays();
}

function closeSettings() {
  state.settingsOpen = false;
  resetPasswordChangeState();
  renderOverlays();
}

function navigateTo(view) {
  if (!view) {
    return;
  }

  closeNotificationsDrawer(false, false);

  const nextHash = VIEW_HASHES[view] || VIEW_HASHES.dashboard;
  if (window.location.hash === nextHash) {
    syncViewFromHash();
    return;
  }

  window.clearTimeout(routeTransitionTimer);

  if (!primeRouteExitAnimation(view)) {
    window.location.hash = nextHash;
    return;
  }

  routeTransitionTimer = window.setTimeout(() => {
    window.location.hash = nextHash;
  }, PAGE_TRANSITION_EXIT_MS);
}

function openSensorDetail(sensorId) {
  const sensor = findDashboardSensorById(sensorId);
  if (!sensor) {
    return;
  }

  closeNotificationsDrawer();
  state.selectedSensorId = sensorId;
  state.sensorDraft = {
    min: sensor.min,
    max: sensor.max,
    alertMode: sensor.alertMode,
  };
  renderOverlays();
}

function closeSensorDetail(shouldRender = true) {
  state.selectedSensorId = null;
  state.sensorDraft = null;
  if (shouldRender) {
    renderOverlays();
  }
}

function openNotificationsDrawer() {
  state.settingsOpen = false;
  state.showAddUserModal = false;
  closeSensorDetail(false);
  clearAllNotificationTimers();
  state.notificationsOpen = true;
  markAllNotificationsRead(false);
  renderHeader();
  renderOverlays();
  renderToasts();
  if (state.activeView === "history") {
    renderPage();
  }
}

function closeNotificationsDrawer(shouldRender = true, shouldRestartTimers = shouldRender) {
  if (!state.notificationsOpen) {
    return;
  }

  state.notificationsOpen = false;

  if (shouldRender) {
    renderHeader();
    renderOverlays();
    renderToasts();
  }

  if (shouldRestartTimers) {
    restartDashboardNotificationTimers();
  }
}

function normalizeCultivationParameters(parameters) {
  const normalized = {};

  for (const field of CULTIVATION_PARAMETER_FIELDS) {
    const values = parameters[field.key];
    const min = Number.parseFloat(values?.min);
    const max = Number.parseFloat(values?.max);

    if (!Number.isFinite(min) || !Number.isFinite(max)) {
      return null;
    }

    if (min >= max) {
      return null;
    }

    normalized[field.key] = { min, max };
  }

  return normalized;
}

function applyCultivationParametersToSensors(parameters) {
  state.dashboardSensors = state.dashboardSensors.map((sensor) => {
    const field = CULTIVATION_PARAMETER_FIELDS.find((item) => item.sensorId === sensor.id);
    if (!field) {
      return sensor;
    }

    return {
      ...sensor,
      min: parameters[field.key].min,
      max: parameters[field.key].max,
    };
  });
}

function calculateHarvest() {
  if (!state.cultivation.cropType) {
    window.alert("Please select a crop type first.");
    return;
  }

  if (!state.cultivation.plantingDate) {
    window.alert("Please choose a planting date.");
    return;
  }

  if (isCustomCultivation(state.cultivation.cropType)) {
    if (!state.cultivation.customPlantName.trim()) {
      window.alert("Please enter a custom plant name.");
      return;
    }

    const customGrowthDays = selectedCultivationGrowthDays();
    if (!Number.isFinite(customGrowthDays) || customGrowthDays <= 0) {
      window.alert("Please choose a valid estimated harvest date.");
      return;
    }
  }

  const selectedParameterMode = effectiveCultivationParameterMode(state.cultivation);
  if (!isCultivationParameterModeAvailable(selectedParameterMode, state.cultivation)) {
    window.alert("Please select Recommended or Custom parameters first.");
    return;
  }

  const parameters = normalizeCultivationParameters(activeCultivationParameters(state.cultivation));
  if (!parameters) {
    window.alert("Please enter valid cultivation parameter values. Minimum should be lower than maximum.");
    return;
  }

  const growthDays = selectedCultivationGrowthDays();
  const planting = parseDateInput(state.cultivation.plantingDate);
  let harvest;

  if (isCustomCultivation(state.cultivation.cropType) && state.cultivation.customHarvestTargetDate) {
    harvest = parseDateInput(state.cultivation.customHarvestTargetDate);
  } else {
    harvest = new Date(planting);
    harvest.setDate(harvest.getDate() + growthDays);
  }

  if (selectedParameterMode === "custom") {
    state.cultivation.parameters = parameters;
  }
  state.cultivation.daysToHarvest = growthDays;
  state.cultivation.harvestDate = formatDateInput(harvest);
  if (isCustomCultivation(state.cultivation.cropType)) {
    state.cultivation.customHarvestTargetDate = formatDateInput(harvest);
  }
  state.cultivation.successMessage = `${selectedCultivationName()} cultivation started successfully.`;
  state.cultivation.setupOpen = false;
  state.cultivation.parameterPreviewMode = "";
  state.cultivation.successOpen = false;
  applyCultivationParametersToSensors(parameters);
  pushNotification("success", state.cultivation.successMessage);
  renderPage();
  renderOverlays();
}

function selectCultivationCrop(cropType) {
  if (!Object.prototype.hasOwnProperty.call(CROP_LABELS, cropType)) {
    return;
  }

  state.cultivation.cropType = cropType;
  state.cultivation.parameters = cultivationParametersFor(cropType || "custom");
  state.cultivation.harvestDate = "";
  state.cultivation.daysToHarvest = 0;
  state.cultivation.parameterMode = "";
  state.cultivation.parameterPreviewMode = "";
  state.cultivation.successMessage = "";
  state.cultivation.setupOpen = true;
  state.cultivation.successOpen = false;
  renderPage();
  renderOverlays();
}

function resetViewState(view) {
  switch (view) {
    case "dashboard":
      return;
    case "sensors":
      state.sensorsPage = initialSensorsPageState();
      return;
    case "irrigation":
      state.irrigationPage = initialIrrigationPageState();
      return;
    case "cultivation":
      state.cultivation = initialCultivationState();
      return;
    case "manage-account":
      state.users = initialUsers();
      state.showAddUserModal = false;
      state.newUser = initialNewUser();
      return;
    default:
      return;
  }
}

function syncViewFromHash(force = false) {
  const nextView = viewFromHash();
  window.clearTimeout(routeTransitionTimer);
  routeTransitionTimer = 0;

  if (!state.isAuthenticated) {
    state.activeView = nextView;
    state.notificationsOpen = false;
    closeSensorDetail(false);
    renderSidebar();
    renderHeader();
    renderPage();
    renderOverlays();
    renderToasts();
    return;
  }

  if (!force && nextView === state.activeView) {
    renderSidebar();
    renderHeader();
    renderPage();
    renderOverlays();
    renderToasts();
    restartDashboardNotificationTimers();
    return;
  }

  clearAllNotificationTimers();

  if (nextView === "history") {
    markAllNotificationsRead(false);
  }

  if (!pendingRouteTransition) {
    setPendingRouteTransition(state.activeView, nextView);
  }

  state.notificationsOpen = false;
  state.activeView = nextView;
  resetViewState(nextView);
  closeSensorDetail(false);
  renderSidebar();
  renderHeader();
  renderPage();
  renderOverlays();
  renderToasts();
  restartDashboardNotificationTimers();
}

function viewFromHash() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  if (!hash) {
    return "dashboard";
  }

  return NAV_ITEMS.some((item) => item.view === hash) ? hash : "dashboard";
}

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function viewIndex(view) {
  return VIEW_INDEX[view] ?? 0;
}

function routeTransitionDirection(fromView, toView) {
  return viewIndex(toView) >= viewIndex(fromView) ? "forward" : "backward";
}

function setPendingRouteTransition(fromView, toView) {
  if (!state.isAuthenticated || prefersReducedMotion() || fromView === toView) {
    pendingRouteTransition = null;
    return null;
  }

  pendingRouteTransition = {
    direction: routeTransitionDirection(fromView, toView),
  };
  return pendingRouteTransition;
}

function primeRouteExitAnimation(nextView) {
  const transition = setPendingRouteTransition(state.activeView, nextView);
  if (!transition || !elements.pageContent) {
    return false;
  }

  const currentScene = elements.pageContent.querySelector(".page-scene") || elements.pageContent.firstElementChild;
  if (!currentScene) {
    return false;
  }

  elements.pageContent.classList.remove(
    "page-content--transition-out",
    "page-content--transition-forward",
    "page-content--transition-backward"
  );

  void elements.pageContent.offsetWidth;

  elements.pageContent.classList.add(
    "page-content--transition-out",
    `page-content--transition-${transition.direction}`
  );

  return true;
}

function renderPageSceneMarkup(content, view) {
  const transition = pendingRouteTransition;
  const sceneClasses = ["page-scene"];

  if (transition) {
    sceneClasses.push("page-scene--incoming", `page-scene--${transition.direction}`);
  }

  return `
    <div class="${sceneClasses.join(" ")}" data-scene-view="${view}">
      ${content}
    </div>
  `;
}

function finalizeRouteTransition() {
  if (!elements.pageContent) {
    pendingRouteTransition = null;
    return;
  }

  elements.pageContent.classList.remove(
    "page-content--transition-out",
    "page-content--transition-forward",
    "page-content--transition-backward"
  );

  const scene = elements.pageContent.querySelector(".page-scene--incoming");
  if (!scene) {
    pendingRouteTransition = null;
    return;
  }

  window.requestAnimationFrame(() => {
    scene.classList.add("page-scene--ready");
  });

  pendingRouteTransition = null;
}

function updateProfilePreview() {
  const preview = document.getElementById("settings-avatar-preview");
  if (preview) {
    syncProfileAvatarElement(preview, "avatar-circle settings-profile-avatar");
  }
}

function syncProfileAvatarElement(element, baseClassName) {
  if (!(element instanceof HTMLElement)) {
    return;
  }

  const className = baseClassName || element.className;
  element.className = className;
  const initial = (state.profileName.trim() || "J").charAt(0).toUpperCase();

  if (state.profilePhotoDataUrl) {
    element.innerHTML = `<img src="${escapeHtml(state.profilePhotoDataUrl)}" alt="Profile photo" />`;
    element.setAttribute("aria-label", "Profile photo");
    return;
  }

  element.textContent = initial;
  element.setAttribute("aria-label", "Profile initial");
}

function updateSettingsButtonStates() {
  const passwordButton = document.querySelector('[data-action="change-password"]');
  if (passwordButton) {
    passwordButton.disabled = !state.currentPassword || !state.newPassword;
  }

  const verifyButton = document.querySelector('[data-action="verify-otp"]');
  if (verifyButton) {
    verifyButton.disabled = state.otpCode.some((digit) => !digit);
  }
}

function updateLoginButtonState() {
  const button = document.querySelector('[data-action="submit-login"]');
  if (button) {
    button.disabled = !state.loginForm.email.trim() || !state.loginForm.password;
  }
}

function togglePasswordVisibility(targetId) {
  if (!targetId) {
    return;
  }

  const input = document.getElementById(targetId);
  if (!(input instanceof HTMLInputElement)) {
    return;
  }

  input.type = input.type === "password" ? "text" : "password";
  syncPasswordToggleButtons(input.closest(".page-content") || document);
  input.focus({ preventScroll: true });
  const valueLength = input.value.length;
  if (typeof input.setSelectionRange === "function") {
    input.setSelectionRange(valueLength, valueLength);
  }
}

function syncPasswordToggleButtons(root = document) {
  const scope = root instanceof Element || root instanceof Document ? root : document;
  scope.querySelectorAll("[data-action='toggle-password-visibility']").forEach((button) => {
    const targetId = button.dataset.target;
    if (!targetId) {
      return;
    }

    const input = document.getElementById(targetId);
    if (!(input instanceof HTMLInputElement)) {
      return;
    }

    const visible = input.type === "text";
    button.setAttribute("aria-label", visible ? "Hide password" : "Show password");
    const iconSlot = button.querySelector("[data-password-icon]");
    if (iconSlot) {
      iconSlot.innerHTML = icon(visible ? "eye" : "eye-off");
    }
  });
}

function updateHarvestButtonState() {
  const button = document.querySelector('[data-action="calculate-harvest"]');
  if (button) {
    button.disabled = !canCalculateCultivation();
  }
}

function loginUser() {
  const email = state.loginForm.email.trim();
  const password = state.loginForm.password;
  if (!email || !password) {
    updateLoginButtonState();
    return;
  }

  state.isAuthenticated = true;
  state.loginForm.password = "";
  state.settingsOpen = false;
  state.notificationsOpen = false;
  state.showAddUserModal = false;
  closeSensorDetail(false);
  navigateTo("dashboard");
}

function logoutUser() {
  window.sessionStorage.removeItem("arugula.isAuthenticated");
  window.sessionStorage.removeItem("arugula.postLoginHash");
  window.location.href = "./dashboard.html";
}

function requestPasswordReset() {
  if (!state.loginForm.email.trim()) {
    window.alert("Enter your email first before resetting your password.");
    return;
  }

  window.alert(`Password reset link sent to ${state.loginForm.email.trim()}.`);
}

function handleProfilePhotoSelection(input) {
  const [file] = Array.from(input.files || []);
  if (!file) {
    return;
  }

  if (!file.type.startsWith("image/")) {
    input.value = "";
    pushNotification("warning", "Please choose a valid image file.");
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    if (typeof reader.result !== "string") {
      input.value = "";
      return;
    }

    state.profilePhotoDataUrl = reader.result;
    storeProfilePhoto(reader.result);
    renderHeader();
    renderOverlays();
    pushNotification("success", "Profile photo updated");
    input.value = "";
  });
  reader.readAsDataURL(file);
}

function readStoredProfilePhoto() {
  try {
    return window.localStorage.getItem(PROFILE_PHOTO_STORAGE_KEY) || "";
  } catch (error) {
    return "";
  }
}

function storeProfilePhoto(value) {
  try {
    window.localStorage.setItem(PROFILE_PHOTO_STORAGE_KEY, value);
  } catch (error) {
    console.warn("Unable to persist profile photo.", error);
  }
}

function requestPasswordChange() {
  if (!state.currentPassword || !state.newPassword) {
    updateSettingsButtonStates();
    return;
  }

  state.passwordChangeOtpRequested = true;
  state.otpCode = initialOtpCode();
  renderOverlays();

  const firstOtpInput = document.getElementById("otp-0");
  if (firstOtpInput instanceof HTMLInputElement) {
    firstOtpInput.focus();
  }
}

function completePasswordChange() {
  if (!state.passwordChangeOtpRequested || state.otpCode.some((digit) => !digit)) {
    updateSettingsButtonStates();
    return;
  }

  resetPasswordChangeState();
  renderOverlays();
  pushNotification("success", "Password changed successfully");
}

function handleOtpInput(target) {
  const index = Number(target.id.split("-")[1]);
  const sanitized = target.value.replace(/\D/g, "").slice(0, 1);
  target.value = sanitized;
  state.otpCode[index] = sanitized;
  updateSettingsButtonStates();

  if (state.passwordChangeOtpRequested && state.otpCode.every(Boolean)) {
    completePasswordChange();
    return;
  }

  if (sanitized && index < state.otpCode.length - 1) {
    const next = document.getElementById(`otp-${index + 1}`);
    next?.focus();
  }
}

function resetPasswordChangeState(clearPasswords = true) {
  if (clearPasswords) {
    state.currentPassword = "";
    state.newPassword = "";
  }

  state.otpCode = initialOtpCode();
  state.passwordChangeOtpRequested = false;
}

function glowClass(status) {
  if (status === "warning") {
    return "glow-warning";
  }
  if (status === "critical") {
    return "glow-critical";
  }
  return "glow-normal";
}

function pillClass(status) {
  if (status === "warning") {
    return "pill--warning";
  }
  if (status === "critical") {
    return "pill--critical";
  }
  return "pill--normal";
}

function progressClass(status) {
  if (status === "warning") {
    return "progress-fill--warning";
  }
  if (status === "critical") {
    return "progress-fill--critical";
  }
  return "";
}

function statusIconName(status) {
  if (status === "warning") {
    return "trending-down";
  }
  if (status === "critical") {
    return "trending-up";
  }
  return "minus";
}

function toastIconName(type) {
  if (type === "warning") {
    return "alert-triangle";
  }
  if (type === "critical") {
    return "x-circle";
  }
  return "check-circle";
}

function notificationPillClass(type) {
  if (type === "warning") {
    return "pill--warning";
  }
  if (type === "critical") {
    return "pill--critical";
  }
  return "pill--normal";
}

function parseDateInput(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDateInput(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatLongDate(value) {
  const date = parseDateInput(value);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatNotificationTimestamp(value) {
  return new Date(value).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function icon(name, className = "icon") {
  const markup = ICONS[name] || ICONS.info;
  return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${markup}</svg>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function preloadExternalTemplates() {
  const sections = Object.entries(window.settingsSectionRegistry || {});
  await Promise.all(
    sections.map(async ([key, section]) => {
      const template = await readExternalTemplate(section.path);
      if (template) {
        externalTemplateCache.set(key, template);
      }
    }),
  );
}

async function readExternalTemplate(path) {
  try {
    const response = await fetch(path, { cache: "no-store" });
    if (response.ok) {
      return await response.text();
    }
  } catch (error) {
    const fallback = readExternalTemplateSync(path);
    if (fallback) {
      return fallback;
    }
    console.warn(`Unable to fetch external template: ${path}`, error);
  }

  return "";
}

function readExternalTemplateSync(path) {
  try {
    const request = new XMLHttpRequest();
    request.open("GET", path, false);
    request.send(null);

    if ((request.status >= 200 && request.status < 300) || request.status === 0) {
      return request.responseText;
    }
  } catch (error) {
    console.warn(`Unable to synchronously load external template: ${path}`, error);
  }

  return "";
}

function renderExternalTemplate(sectionKey) {
  const section = window.settingsSectionRegistry?.[sectionKey];
  if (!section) {
    return `
      <div class="center-banner">
        This settings section is not available right now.
      </div>
    `;
  }

  let template = externalTemplateCache.get(sectionKey);
  if (!template) {
    template = readExternalTemplateSync(section.path);
    if (template) {
      externalTemplateCache.set(sectionKey, template);
    }
  }

  if (!template) {
    return `
      <div class="center-banner">
        Unable to load the ${escapeHtml(sectionKey)} section template.
      </div>
    `;
  }

  return section.render(template);
}

function replaceTemplateTokens(template, tokens) {
  return Object.entries(tokens).reduce(
    (markup, [token, value]) => markup.replaceAll(`{{${token}}}`, value ?? ""),
    template,
  );
}
