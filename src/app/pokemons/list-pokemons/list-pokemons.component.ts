import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Router} from '@angular/router';

import Pokemon from '../pokemon';
import {PokemonsService} from '../pokemons.service';

@Component({
	selector: 'list-pokemons',
	templateUrl: './list-pokemons.component.html',
	styleUrls: ['./list-pokemons.component.css']
})
export class ListPokemonsComponent implements OnInit {
	public pokemons: Pokemon[];

	public title: string;

	constructor(
		private router: Router,
		private pokemonsService: PokemonsService
	) {}

	ngOnInit(): void {
		this.pokemons = this.pokemonsService.getPokemons();
		this.title = 'Liste des Pokemons';
	}

	selectPokemon(pokemon: Pokemon): void {
		let link = ['/pokemon', pokemon.id];
		this.router.navigate(link);
	}
}
