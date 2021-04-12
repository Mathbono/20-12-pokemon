import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {PokemonsService} from '../pokemons.service';
import {ListPokemonsComponent} from './list-pokemons.component';
import {PokemonTypeColorPipe} from '../pokemon-type-color.pipe';
import POKEMONS from '../mock-pokemons';
import Pokemon from '../pokemon';

class MockPokemonsService {
	getPokemons(): Pokemon[] {
		return POKEMONS;
	}
}

describe('ListPokemonsComponent', () => {
	let fixture: ComponentFixture<ListPokemonsComponent>;
	let instance: ListPokemonsComponent;
	let container: HTMLElement;
	let pokemonsService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			declarations: [ListPokemonsComponent, PokemonTypeColorPipe],
			providers: [{provide: PokemonsService, useClass: MockPokemonsService}]
		}).compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(ListPokemonsComponent);
		pokemonsService = TestBed.inject(PokemonsService);
		instance = fixture.componentInstance;
		container = fixture.nativeElement;
		fixture.detectChanges();
	});

	it('should create component', () => {
		expect(instance).toBeTruthy();
	});
	it('should initialize Pokemon', () => {
		expect(instance.pokemons).toBeTruthy();
	});
	it('should have a title for Pokemons', () => {
		expect(container.querySelector('h1').textContent).toEqual(instance.title);
	});
	it('should display good number of Pokemons', () => {
		expect(container.querySelectorAll('.row > div').length).toBe(
			instance.pokemons.length
		);
	});
});
