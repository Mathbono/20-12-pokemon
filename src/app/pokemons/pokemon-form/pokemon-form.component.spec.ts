import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';

import {PokemonsService} from '../pokemons.service';
import {PokemonFormComponent} from './pokemon-form.component';
import {PokemonTypeColorPipe} from '../pokemon-type-color.pipe';
import Pokemon from '../pokemon';

class MockPokemonsService {
	getPokemonTypes(): string[] {
		return [
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
		];
	}
}
const MockPokemon: Pokemon = {
	id: 1,
	name: 'Bulbizarre',
	hp: 25,
	cp: 5,
	picture: '/assets/pokemons/001.png',
	types: ['Plante', 'Poison'],
	created: new Date()
};

describe('PokemonFormComponent', () => {
	let fixture: ComponentFixture<PokemonFormComponent>;
	let instance: PokemonFormComponent;
	let container: HTMLElement;
	let pokemonsService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule, FormsModule],
			declarations: [PokemonFormComponent, PokemonTypeColorPipe],
			providers: [{provide: PokemonsService, useClass: MockPokemonsService}]
		}).compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(PokemonFormComponent);
		pokemonsService = TestBed.inject(PokemonsService);
		instance = fixture.componentInstance;
		container = fixture.nativeElement;
		instance.pokemon = MockPokemon;
		fixture.detectChanges();
	});

	it('should create component', () => {
		expect(instance).toBeTruthy();
	});
	it('should initialize Pokemon', () => {
		expect(instance.pokemon).toBeTruthy();
	});
	it('should have checkboxes with types of Pokemon checked', () => {
		for (let type of instance.pokemon.types) {
			expect(
				(<HTMLInputElement>container.querySelector('#' + type)).checked
			).toBe(true);
		}
	});
});
