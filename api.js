import {Card, cardsContainer, showCards} from "./ui.js";

export default class Api {
	baseUrl = "https://api.open-meteo.com/v1/"

	getHourly() {
		if (Date.now() / 1000 - parseInt(sessionStorage.getItem("lastTime")) / 1000 > 60 * 1) {
			fetch(this.baseUrl + "forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,weather_code&forecast_days=1")
				.then(resp => resp.json())
				.then(json => {
					console.log(json)
					showCards(json.hourly.temperature_2m, Array(24).fill("https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png", 0, 24))

					sessionStorage.setItem("lastTime", Date.now().toString())
				})
		} else {
			for (let i = 0; i < 24; i++) {
				let index = "0".repeat(2 - `${i}`.length) + i;
				let card = Card.from(sessionStorage[index])
				console.log(index)
				console.log(sessionStorage[index])
				card.createCard(cardsContainer)
			}
		}

	}
}