import * as FormActions from './form.actions';
import { formModel } from './form.model';

const initialState = {
  Data: [
    new formModel('mohit', 'sojitra'),
    new formModel('mohasait', 'sojitra'),
  ]
}


export function formReducer(state = initialState, Action: FormActions.FormActions) {
  switch (Action.type) {
    case FormActions.add_data:
      return {
        ...state,
        Data: [...state.Data, Action.payload]
      };

    case FormActions.add_multiple_data:
      return "chode";
      // return {
      //   ...state,
      //   Data: [...state.Data, ...Action.payload]
      // };

    case FormActions.delete_data:
      let newState = {
        ...state,
        Data: [...state.Data]
      }
      newState.Data.splice(Action.payload,1);
      console.log(newState);
      return newState;

    default:
      return state;
  }

}
