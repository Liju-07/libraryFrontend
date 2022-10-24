import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  constructor(private api:ApiService) { }


  price=""
  author=""
  pdate=""
name=""

read()
{
  let data={

    "price":this.price,
    "author":this.author,
    "pdate":this.pdate,
    "name":this.name

  }
  this.api.add(data).subscribe()
  alert("Book Added")
  this.price=""
  this.author=""
  this.pdate=""
  this.name=""
}

  ngOnInit(): void {
  }

}
