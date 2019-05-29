import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { CaretComponent } from './components/drop-down/caret/caret.component';

import { Filter } from './shared/pipes/filter.pipe';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent,
    CaretComponent,
    Filter,
    CheckboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
