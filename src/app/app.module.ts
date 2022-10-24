import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookviewComponent } from './bookview/bookview.component';
import { NavbarComponent } from './navbar/navbar.component';
import{HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { SearchBookComponent } from './search-book/search-book.component';


const app:Routes=[
  {
    path:"",component:BookviewComponent
  },
  {
    path:"viewb",component:BookviewComponent
  }
  ,
  {
    path:"addb",component:BookAddComponent
  } ,
  {
    path:"search",component:SearchBookComponent
  }


]

@NgModule({
  declarations: [
    AppComponent,
    BookAddComponent,
    BookviewComponent,
    NavbarComponent,
    SearchBookComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(app),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
