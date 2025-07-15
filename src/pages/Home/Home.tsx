import { Link } from "react-router";
import { useEffect, useRef } from "react";

import SearchIcon from "assets/search.svg";
import CategoryIcon from "assets/category.svg";
import { Button } from "components/Button/Button";

import "./Home.css";

const Home = () => {
	const installButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		let installPrompt: Event | null = null;

		window.addEventListener("beforeinstallprompt", (event) => {
			event.preventDefault();
			installPrompt = event;
			installButtonRef.current?.removeAttribute("hidden");
		});

		installButtonRef.current?.addEventListener("click", async () => {
			if (!installPrompt) {
				return;
			}
			//@ts-expect-error поддержка этого события еще экспериментальна, нет в ff
			const choiceResult = await installPrompt.prompt?.();
			if (choiceResult.outcome === "accepted") {
				console.log("Пользователь установил PWA");
				installPrompt = null;
				installButtonRef.current?.setAttribute("hidden", "");
			} else {
				console.log("Пользователь отказался");
			}
			installPrompt = null;
			installButtonRef.current?.setAttribute("hidden", "");
		});
	}, []);

	return (
		<div className="home-wrapper">
			<span className="home-store-name">ГМ №1 Калуга</span>
			<Link to="/search" className="home-button">
				<SearchIcon />
				<span className="home-button__text">Поиск</span>
			</Link>
			<Link to="/categories" className="home-button">
				<CategoryIcon />
				<span>Категории</span>
			</Link>
			<Button className="home_install-button" ref={installButtonRef} hidden>
				Установить приложение
			</Button>
		</div>
	);
};

export default Home;
