import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { formReducer } from './form.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({formStore : formReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
