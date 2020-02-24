<<<<<<< HEAD
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
=======
import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/App.scss';
import Navigation from './Navigation'
import { BrowserRouter as Router} from "react-router-dom";
function App() {
		return (
			<Router>
				<Navigation/>
			</Router>
		)
>>>>>>> e8c47e5ffe52b813dfb0c66c8ee4b885071a05c3
};

export default App;

