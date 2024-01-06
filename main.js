const { app, BrowserWindow } = require('electron')
const path = require('path')

const urls = [
    "https://raumdoran.com"
]

const createWindow = () =>{
    win = new BrowserWindow({
        center: true,
        resizable: true,
        webPreferences:{
            nodeIntegration: false,
            show: false
        }
    });
    win.maximize();
    win.webContents.openDevTools();
    console.log(urls[0]);

    win.loadURL(urls[0]);
    win.once('ready-to-show',()=>{
        win.show()
    });

    win.on('closed',()=>{
        win = null;
    });
}

app.on('ready', createWindow);