import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {

  constructor(private api:ApiService) { }


  name=""
Data:any=[]

  read=()=>{
    let data={
      "name":this.name
    }
    this.api.search(data).subscribe(
      (res)=>{
        this.Data=res
      }
    )
  }
  ngOnInit(): void {
  }




}
