const {app, BrowserWindow}= require('electron');

const main_path = "index.html";

let win = null;

function createWindow(){
  win = new BrowserWindow({width: 800, height:600});
  win.loadFile(main_path);
  win.on('closed', ()=>{
    win = null;
  });
}

app.on('ready', createWindow);
