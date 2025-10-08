const fs = require("fs");
const path = require("path");

const os = require("os");

const dataPath = path.join(os.homedir(), "Documents", "GastroTracker");
if (!fs.existsSync(dataPath)) fs.mkdirSync(dataPath);

const electron = require("electron");

function createWindow() {

	const window = new electron.BrowserWindow({
		width: 1200,
		height: 650,
		icon: path.join(__dirname, "icon", "icon.png"),
		webPreferences: {
			contextIsolation: false,
			enableRemoteModule: true,
			nodeIntegration: true
		}
	});

	window.removeMenu();
	window.loadFile(path.join("page", "index.html"));
	window.maximize();
}

electron.app.whenReady().then(createWindow);

process.on("uncaughtException", console.error);