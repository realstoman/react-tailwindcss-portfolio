import { BrowserRouter as Router } from 'react-router-dom';
import './css/App.css';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Home from './pages';

function App() {
	return (
		<div className="App">
			<Router>
				<AppHeader></AppHeader>
				<Home />
				<AppFooter></AppFooter>
			</Router>
		</div>
	);
}

export default App;
