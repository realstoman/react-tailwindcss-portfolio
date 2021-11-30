import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
	const [theme, setTheme] = useState('dark');
	const activeTheme = theme === 'dark' ? 'light' : 'dark';

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove(activeTheme);
		root.classList.add(theme);
		localStorage.setItem('theme', theme);
	}, [theme, activeTheme]);

	return [activeTheme, setTheme];
};

export default ThemeSwitcher;
