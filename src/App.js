import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Home from './pages/Home';
import About from './pages/about';

function App() {
	return (
		<div className="App">
			<Router>
				<AppHeader></AppHeader>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="about" element={<About />} />
				</Routes>
				<AppFooter></AppFooter>
			</Router>
		</div>
	);
}

export default App;
