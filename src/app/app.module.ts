import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MyComponentComponent } from './my-component/my-component.component';
import { TodosComponent } from './MyComponents/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    // MyComponentComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
