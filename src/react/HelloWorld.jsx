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


ReactDOM.render(<Heading/>, document.getElementById('app'));
