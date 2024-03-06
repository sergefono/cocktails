import { Component } from '@angular/core';
import { Cocktails } from '../interfaces/cocktails';

@Component({
  selector: 'app-cokctails-list',
  templateUrl: './cokctails-list.component.html',
  styleUrls: ['./cokctails-list.component.scss'],
})
export class CokctailsListComponent {
  cocktails: Cocktails[] = [
    {
      name: 'Margarita',
      img: 'https://cdn.shopify.com/s/files/1/0247/4681/9693/files/Margarita_Popular_Classic_Cocktail_large.jpg?v=1591992115',
      description:
        'Le cocktail Margarita classique a été l’un des cocktails les plus populaires en Amérique pendant des années et reste toujours un des premiers choix des clients. Bien qu’il existe de nombreuses variantes, la recette traditionnelle se compose de Tequila, Triple Sec et jus de citron vert. Il est également souvent servi avec un rebord de sel pour un parfait équilibre entre sucré, acide et salé.',
    },
    {
      name: 'Daiquiri',
      img: 'https://cdn.shopify.com/s/files/1/0247/4681/9693/files/Daiquiri_Summer_Cocktail_8a2a0474-bf6e-40db-80a5-e6e6d5a5a7e8_large.jpg?v=1591992228',
      description:
        'Quand vous pensez au Daiquiri, votre esprit voyage vers les plages de sable blanc de Cuba surplombées par un ciel bleu clair. Bien qu’il puisse sembler un cocktail parmi les plus adaptés à une escapade tropicale, le Daiquiri est en fait le cocktail au rhum le plus commandé dans les pubs et les bars du monde entier.',
    },
    {
      name: 'Manhattan',
      img: 'https://cdn.shopify.com/s/files/1/0247/4681/9693/files/Manhattan_Popular_Classic_Cocktail_large.jpg?v=1591992382',
      description:
        'Le cocktail classique de Manhattan a survécu à d’innombrables tendances, a résisté à la Prohibition, et est maintenant connu comme l’un des plus grands cocktails jamais réalisé. Je crois que nous pouvons tous convenir qu’il mérite certainement sa place parmi les cocktails les plus célèbres du monde ! Réalisé avec du whisky, du vermouth sucré et amer, le Manhattan est la boisson parfaite après mangé.',
    },
  ];
}
