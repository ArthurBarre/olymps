import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import '../scss/App.scss';
import Header from './Header';
import History from './History';
import Data from './Data'

function App() {
		return (
			<div className="Olymps">
				{/* <div className="heroContainer">
					<Header />
					<History />
				</div> */}
				<Data/>
			</div>
		)
};

export default App;

