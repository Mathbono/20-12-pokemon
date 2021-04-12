import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import Pokemon from '../pokemon';
import {PokemonsService} from '../pokemons.service';

@Component({
	selector: 'edit-pokemon',
	templateUrl: './edit-pokemon.component.html',
	styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {
	pokemon: Pokemon = null;

	constructor(
		private route: ActivatedRoute,
		private pokemonsService: PokemonsService
	) {}

	ngOnInit(): void {
		let id = +this.route.snapshot.params['id'];
		this.pokemon = this.pokemonsService.getPokemon(id);
	}
}
