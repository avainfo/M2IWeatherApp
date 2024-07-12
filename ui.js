export const cardsContainer = document.getElementsByClassName('cards')[0];

export class Card {
	constructor(hour, icon, temp) {
		this._hour = hour;
		this._icon = icon;
		this._temp = temp;
	}

	createCard(parent) {
		parent.innerHTML += `
		<div class="card">
			<h3>${this._hour}</h3>
			<img src="${this._icon}" alt="">
			<h2>${this._temp}</h2>
		</div>`
	}

	toString() {
		return `${(this._hour)}:${(this._icon)}:${(this._temp)}`
	}

	static from(cardStr) {
		let cardInfo = cardStr.split(':')
		return new Card(cardInfo[0], cardInfo[2], cardInfo[3]);
	}
}

export function showCards(temps = [], icons = []) {
	temps.forEach((temp, index) => {
		let hour = "0".repeat(2 - `${index}`.length) + index;
		let card = new Card(hour, icons[index], temp);
		sessionStorage.setItem(hour, card.toString())
		card.createCard(cardsContainer)
	})
}