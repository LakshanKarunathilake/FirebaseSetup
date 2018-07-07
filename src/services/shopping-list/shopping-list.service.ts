import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import {Item} from '../../models/item/item'

@Injectable()
export class ShoppingListService {

    private shoppingListRef = this.fdb.list<Item>    
    ('shopping-list');

    constructor(private fdb:AngularFireDatabase){

    }

    getShoppingList(){
        return this.shoppingListRef;
    }

    addItem(item:Item){
        return this.shoppingListRef.push(item);
    }
}