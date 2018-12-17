const {app, BrowserWindow}= require('electron');
//import {Heading} from 'HelloWorld.jsx';

/*
import React from 'react';
import ReactDOM from 'react-dom';

export class Heading extends React.Component{

	render(){
		return (<div>
				<Phrase name="Hello World!"/>
			</div>);
	}
}

function Phrase(props){
	return (<h1>{props.name}</h1>);
}
*/

const main_path = `dist/index.html`;

let win = null;

function createWindow(){
  win = new BrowserWindow({width: 800, height:600});
  win.loadFile(main_path);
  win.webContents.openDevTools();
  //ReactDOM.render(<Heading/>, document.getElementById('app'));
  win.on('closed', ()=>{
    win = null;
  });
}

app.on('ready', createWindow);
