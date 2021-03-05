import { Store } from '@ngrx/store';
import { formModel } from './../form.model';
import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import * as formAction from '../form.actions'


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  Data: Observable<{ Data: formModel[] }>;
  constructor(private store: Store<{ formStore: { Data: formModel[] } }>) { }

  ngOnInit(): void {
    this.Data = this.store.select('formStore');

  }

  Ondelete(i){
    console.log("deleting"+i);
    this.store.dispatch(new formAction.DeleteAction(i));
  }


}
