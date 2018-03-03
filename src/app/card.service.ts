import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICard } from './cards';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class CardService {

  private _url: string = "/assets/data/cards.json";

  constructor(private http: HttpClient) { }

  getCards() : Observable<ICard[]> {
    return this.http.get<ICard[]>(this._url);
  }

}
