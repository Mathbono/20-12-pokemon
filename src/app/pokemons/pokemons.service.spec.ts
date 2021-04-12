import {TestBed} from '@angular/core/testing';

import {PokemonsService} from './pokemons.service';

describe('PokemonsService', () => {
	let service: PokemonsService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(PokemonsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
	it('#getValue should return real value', () => {
		expect(service.getPokemonTypes()).toEqual([
			'Plante',
			'Poison',
			'Feu',
			'Eau',
			'Insecte',
			'Normal',
			'Electrik',
			'Oiseau',
			'Fée',
			'Vol'
		]);
	});
});
