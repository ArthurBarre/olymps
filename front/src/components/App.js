import React from 'react';


import Navigation from './Navigation'
import { BrowserRouter as Router} from "react-router-dom";
function App() {
		return (
			<div>
				<Router>
					<Navigation/>
				</Router>
			</div>
		)
};

export default App;

