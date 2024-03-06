import { Component } from '@angular/core';
import { Cocktails } from '../interfaces/cocktails';

@Component({
  selector: 'app-cokctails-details',
  templateUrl: './cokctails-details.component.html',
  styleUrls: ['./cokctails-details.component.scss'],
})
export class CokctailsDetailsComponent {
  cocktail: Cocktails = {
    name: 'Margarita',
    img: 'https://cdn.shopify.com/s/files/1/0247/4681/9693/files/Margarita_Popular_Classic_Cocktail_large.jpg?v=1591992115',
    description:
      'Le cocktail Margarita classique a été l’un des cocktails les plus populaires en Amérique pendant des années et reste toujours un des premiers choix des clients. Bien qu’il existe de nombreuses variantes, la recette traditionnelle se compose de Tequila, Triple Sec et jus de citron vert. Il est également souvent servi avec un rebord de sel pour un parfait équilibre entre sucré, acide et salé.',
  };
}
