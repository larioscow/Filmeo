import iso from 'iso-3166-1';
export const language =
	navigator.languages && navigator.languages[0]
		? iso.whereAlpha2(navigator.languages[0].slice(-2))
		: iso.whereAlpha2(navigator.language[0].slice(-2));
