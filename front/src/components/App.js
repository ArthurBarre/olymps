import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../scss/App.scss';
import Header from './Header';
import History from './History';
import Three from './ThreeJs/Three';
import Data from './Data';
import MapPage from './Map/MapPage';
import Loader from './Loader';
import GoogleMap from './Map/GoogleMap';

function App() {
	return (
		<div className="Olymps">
			<div className="heroContainer">
				<Header />
				<History />
				<Three />
			</div>
		</div>
	)
};

export default App;

