import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute} from '@angular/router';

import {PokemonsService} from '../pokemons.service';
import {DetailPokemonComponent} from './detail-pokemon.component';
import {PokemonTypeColorPipe} from '../pokemon-type-color.pipe';
import Pokemon from '../pokemon';

class MockPokemonsService {
	getPokemon(id: number): Pokemon {
		return {
			id,
			name: 'Bulbizarre',
			hp: 25,
			cp: 5,
			picture: '/assets/pokemons/001.png',
			types: ['Plante', 'Poison'],
			created: new Date()
		};
	}
}
const activatedRouteMock = {
	snapshot: {
		paramMap: {
			get(id: number) {
				return id;
			}
		}
	}
};
const datesAreOnSameDay = (first: Date, second: Date): boolean =>
	first.getFullYear() === second.getFullYear() &&
	first.getMonth() === second.getMonth() &&
	first.getDate() === second.getDate() &&
	first.getHours() === second.getHours() &&
	first.getMinutes() === second.getMinutes();

describe('DetailPokemonComponent', () => {
	let fixture: ComponentFixture<DetailPokemonComponent>;
	let instance: DetailPokemonComponent;
	let container: HTMLElement;
	let pokemonsService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			declarations: [DetailPokemonComponent, PokemonTypeColorPipe],
			providers: [
				{provide: PokemonsService, useClass: MockPokemonsService},
				{provide: ActivatedRoute, useValue: activatedRouteMock}
			]
		}).compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(DetailPokemonComponent);
		pokemonsService = TestBed.inject(PokemonsService);
		instance = fixture.componentInstance;
		container = fixture.nativeElement;
		fixture.detectChanges();
	});

	it('should create component', () => {
		expect(instance).toBeTruthy();
	});
	it('should initialize Pokemon', () => {
		expect(
			datesAreOnSameDay(
				instance.pokemon.created,
				pokemonsService.getPokemon(1).created
			)
		).toBe(true);
	});
	it('should print title with name of Pokemon', () => {
		expect(container.querySelector('h2').textContent).toBe(
			pokemonsService.getPokemon(1).name
		);
	});
	it('should print image of Pokemon', () => {
		expect(new URL(container.querySelector('img').src).pathname).toBe(
			pokemonsService.getPokemon(1).picture
		);
	});
});
