import { formModel } from './form.model';
import { Action } from '@ngrx/store';

export const add_data = 'ADD_DATA';
export const add_multiple_data = 'ADD_MULTIPLE_DATA';
export const delete_data = 'DELETE_DATA';

export class AddDataAction implements Action{
  readonly type = add_data;

  constructor(public payload: formModel){}
}

export class AddMultipleDataAction implements Action{
  readonly type = add_multiple_data;

  constructor(public payload: formModel[]){}
}

export class DeleteAction implements Action{
  readonly type = delete_data;

  constructor(public payload: number){}
}

export type FormActions =
  | AddDataAction
  | AddMultipleDataAction
  | DeleteAction
 ;
