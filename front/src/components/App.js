import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/App.scss';
import Header from './Header';
import History from './History';
import Data from '../data.json';

class App extends React.Component {
	render() {
		return (
			<div className="Olymps">
				<div className="heroContainer">
					<Header />
					<History />
				</div>
			</div>
		)
	}
};

export default App;

