import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {PokemonsModule} from './pokemons/pokemons.module';
import {LayoutComponent} from './layout/layout.component';
import {NotFoundComponent} from './not-found/not-found.component';

@NgModule({
	declarations: [LayoutComponent, NotFoundComponent],
	imports: [BrowserModule, PokemonsModule, AppRoutingModule],
	providers: [],
	bootstrap: [LayoutComponent]
})
export class AppModule {}
