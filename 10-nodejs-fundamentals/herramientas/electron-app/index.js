const { app, BrowserWindow } = require('electron')

let ventanaPrincipal;

function crearVentana() {
    ventanaPrincipal = new BrowserWindow({
        width: 800,
        height: 600
        // webPreferences: {
        //     preload
        // }
    })

    ventanaPrincipal.loadFile('index.html')
}

app.on('ready', crearVentana)