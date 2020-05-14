import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '@enviroments/environment';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule }  from '@ngrx/store-devtools';
import * as fromTodo from './store/reducers/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './store/effects/todo.effects';

import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { DinamikaRoutingModule } from './dinamika-routing.module';
import { ListComponent } from '@components/list/list.component';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTodo.todoFeatureKey, fromTodo.reducer),
    EffectsModule.forFeature([TodosEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ReactiveFormsModule,
    MatFormFieldModule,
    DinamikaRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule
  ]
})
export class DinamikaModule { }
