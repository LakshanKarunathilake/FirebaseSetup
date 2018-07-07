import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { Observable } from 'rxjs/observable';

import {Item } from '../../models/item/item';
import { AngularFireList } from '../../../node_modules/angularfire2/database';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  shoppingList$: Observable<any[]>;

  constructor(public navCtrl: NavController,private shoppingService:ShoppingListService) {
    this.shoppingList$ = this.shoppingService    
    .getShoppingList()
    .valueChanges()
    
    
  }

  
}
