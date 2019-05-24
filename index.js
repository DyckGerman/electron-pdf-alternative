const { app, BrowserWindow } = require('electron')

app.once('ready', () => {
    let win = new BrowserWindow({
        webPreferences: {
            plugins: true
        }
    });

    win.webContents.openDevTools();
    console.log(__dirname);
    win.loadURL(`file://${__dirname}/viewer.html`);
    // win.loadURL(`file://${__dirname}/pdf-viewer.html`);
})