import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isNull } from 'util';

import { ModuleService } from '@services/module.service';
import { ToDoItem } from '../../store/models/todo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todoForm: FormGroup;
  items$: Observable<ToDoItem[]>;

  constructor(
    private moduleService: ModuleService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.items$ = this.moduleService.getTotos();
    this.createForm();

  }

  createForm():void {

    this.todoForm = this.fb.group({
      text : ['', [ Validators.minLength(3), Validators.maxLength(32), Validators.required ]]
    });

  }

  addTodo( todoForm: FormGroup ):void {

    if ( !isNull( todoForm.value.text ) ) {
      this.moduleService.addTodo( todoForm.value.text );
      this.todoForm.reset();
    }

  }

}
