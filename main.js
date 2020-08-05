// Modules to control application life and create native browser window
// const { app, Tray, Menu, clipboard } = require("electron");
const app = require('electron').app
const Tray = require('electron').Tray
const Menu = require('electron').Menu
const clipboard = require('electron').clipboard
const path = require("path");
const { getLocalIp } = require("./utils.js");

let tray;
function createWindow() {
  app.dock.hide()
  tray = new Tray(path.join(__dirname, "./images/IP.png"));
  const contextMenu = Menu.buildFromTemplate([
    {
      label: "quit",
      type: "normal",
      click: () => {
        app.quit()
      }
    }
  ]);
  tray.setToolTip("复制本地IP地址");
  
  tray.on('click', () => {
    clipboard.writeText(getLocalIp());
  })
  tray.on('right-click', () => {
    tray.popUpContextMenu(contextMenu);
  })
}

app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function() {
  if (process.platform !== "darwin") app.quit();
});
