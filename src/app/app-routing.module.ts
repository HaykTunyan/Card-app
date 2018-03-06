// import routing component.

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { FriendComponent } from './friend/friend.component';
import { TablelistComponent } from './tablelist/tablelist.component';

const routes: Routes = [
  { path: 'headers', component: HeaderComponent },
  { path: 'cards', component: CardComponent },
  { path: 'friends', component: FriendComponent },
  { path: 'tablelists', component: TablelistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [ HeaderComponent, CardComponent, FriendComponent, TablelistComponent ]
