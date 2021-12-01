import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Home from './pages/Home';
import About from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
	return (
		<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
			<Router>
				<AppHeader></AppHeader>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="projects" element={<Projects />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
				</Routes>
				<AppFooter></AppFooter>
			</Router>
		</div>
	);
}

export default App;
