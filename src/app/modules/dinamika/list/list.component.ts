import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { Item } from '../models/item.model';
import { Observable, pipe, of } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todoForm: FormGroup;

  items$: Observable<Item[]>;

  constructor(
    private listService: ListService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

/*     this.items$ = this.listService.getItems(pipe(
      map( items => of(items) )
    ));
 */
    //this.createForm();

  }

  createForm():void {

    this.fb.group({
      title : ['test', [ Validators.minLength(3), Validators.maxLength(16), Validators.required ]]
    });

  }

  addTodo( item: Item ):void {
    this.listService.addTodoItem( item );
  }

}
