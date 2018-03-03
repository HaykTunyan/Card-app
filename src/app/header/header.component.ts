import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

users = 'Users name';


  public cards = []

  constructor(private _cardService: CardService) {}

  ngOnInit() {
     this._cardService.getCards()
     .subscribe(data => this.cards = data);
  }

}
