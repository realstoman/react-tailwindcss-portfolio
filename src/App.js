import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import AppHeader from './components/shared/AppHeader';
import AppFooter from './components/shared/AppFooter';
import Home from './pages/Home';
import About from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectSingle from './pages/ProjectSingle';
import ScrollToTop from './components/ScrollToTop';

function App() {
	return (
		<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
			<Router>
				<ScrollToTop />
				<AppHeader></AppHeader>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="projects" element={<Projects />} />
					<Route
						path="projects/single-project"
						element={<ProjectSingle />}
					/>

					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
				</Routes>
				<AppFooter></AppFooter>
			</Router>
		</div>
	);
}

export default App;
