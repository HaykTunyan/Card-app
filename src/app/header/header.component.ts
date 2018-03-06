// import component for header.

import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

// class MyDatepicker {
//   date = new Date();
// }

export class HeaderComponent implements OnInit {

users = 'Users name';

public cards = []

  // isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _cardService: CardService, private _formBuilder: FormBuilder) {}
  
  
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }




ngOnInit() {
  this._cardService.getCards()
  .subscribe(data => this.cards = data);

  this.firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });

  this.secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });
}

// 

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  fruits = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' },
  ];


  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    let index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

}
