import {PokemonTypeColorPipe} from './pokemon-type-color.pipe';

describe('TitleCasePipe', () => {
	const colorPipe = new PokemonTypeColorPipe();

	it('transforms "Feu"', () => {
		expect(colorPipe.transform('Feu')).toBe('chip red lighten-1');
	});
	it('transforms "Eau"', () => {
		expect(colorPipe.transform('Eau')).toBe('chip blue lighten-1');
	});
});
