import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import '../scss/App.scss';
import Header from './Header';
import History from './History';
import Data from './Data';
import Map from './Map';
import Loader  from './Loader'
import GoogleMap from './Map/GoogleMap'
import GameHistory from "./GameHistory";

function App() {
		return (

			<div className="Olymps">
				{/*<History />*/}
				<div className="heroContainer">
					<Header />
				</div>
				<GameHistory/>
				<Loader/>
				<GoogleMap/>
				<Map/>
				<Data/>
			</div>
		)
};

export default App;

