import { formModel } from './../form.model';
import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import * as formAction from '../form.actions'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  fname:string;
  lname:string;
  constructor(private store: Store<{ formStore: { Data: formModel[] } }>) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.store.dispatch(new formAction.AddDataAction(new formModel(this.fname,this.lname)));
  }
  on2Submit(){
   let data : formModel[] = [
      new formModel(this.fname,this.lname),
      new formModel(this.fname,this.lname),
    ]

    this.store.dispatch(new formAction.AddMultipleDataAction(data));
  }

}
