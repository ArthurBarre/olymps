import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import '../scss/App.scss';
import Header from './Header';
import History from './History';
import Data from './Data';
// import Map from './Map/Map';
import Loader  from './Loader'
import TestMap from './Map/TestMap'

function App() {
		return (
			<div className="Olymps">
				{/* <div className="heroContainer">
					<Header />
					<History />
				</div> */}
				{/* <Data/> */}
				{/* <Map/> */}
				<Loader/>
				<TestMap/>
			</div>
		)
};

export default App;

