import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.css']
})
export class BookviewComponent implements OnInit {

  constructor(private api:ApiService) { 
this.fetch()

  }
  fetch=()=>{
    this.api.view().subscribe(
      (data)=>{this.Data=data}
    )
    this.status=true
  }


  delete=(Bid:any)=>{
   let data={
"id":Bid
   }
    this.api.delete(data).subscribe()
    alert("Book Deleted")
    

  }



status:boolean=false
  Data:any=[]
  ngOnInit(): void {
  }

}
