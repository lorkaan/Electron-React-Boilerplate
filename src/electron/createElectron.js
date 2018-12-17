const {app, BrowserWindow}= require('electron');


const main_path = `dist/index.html`;

let win = null;

function createWindow(){
  win = new BrowserWindow({width: 800, height:600});
  win.loadFile(main_path);
  win.webContents.openDevTools();
  win.on('closed', ()=>{
    win = null;
  });
}

app.on('ready', createWindow);
