import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import '../scss/App.scss';
import Header from './Header';
import History from './History';
import Data from './Data';
import Map from './Map';
import Loader  from './Loader'
import GoogleMap from './Map/GoogleMap'

function App() {
		return (
			<div className="Olymps">
				<div className="heroContainer">
					<Header /> 
					<History />
				</div>
				<Loader/>
				<GoogleMap/>
				<Map/>
				<Data/>
			</div>
		)
};

export default App;

