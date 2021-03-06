import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import Pokemon from '../pokemon';
import {PokemonsService} from '../pokemons.service';

@Component({
	selector: 'detail-pokemon',
	templateUrl: './detail-pokemon.component.html',
	styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {
	public pokemon: Pokemon;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private pokemonsService: PokemonsService
	) {}

	ngOnInit(): void {
		let id = +this.route.snapshot.paramMap.get('id');
		this.pokemon = this.pokemonsService.getPokemon(id);
	}

	goBack(): void {
		this.router.navigate(['/pokemons']);
	}

	goEdit(pokemon: Pokemon): void {
		let link = ['/pokemon/edit', pokemon.id];
		this.router.navigate(link);
	}
}
