import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  items: Item[];

  todoUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(
    private httpClient: HttpClient
  ) { }

  getItems():Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.todoUrl);
  }

  addTodoItem( item: Item ):void {
    this.items.push( item );
  }

}
