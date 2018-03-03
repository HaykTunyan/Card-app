import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public cards = []

  constructor(private _cardService: CardService) { }

  ngOnInit() {
    this._cardService.getCards()
    .subscribe(data => this.cards = data)
  }

}
