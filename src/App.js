import './css/App.css';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Home from './pages';

function App() {
	return (
		<div className="App">
			<AppHeader></AppHeader>
			<Home />
			<AppFooter></AppFooter>
		</div>
	);
}

export default App;
