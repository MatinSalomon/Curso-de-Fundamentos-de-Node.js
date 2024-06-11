const { app, BrowserWindow} = require('electron');

let mainView;

function createView() {
    mainView = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainView.loadFile('index.html');
}

app.on('ready', createView)