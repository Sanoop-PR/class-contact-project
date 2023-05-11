import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit{

  contact:any={}
  errmgs:any=''
  group:string=''
  constructor(private api:ApiService, private viewRoute:ActivatedRoute){}

  ngOnInit(): void {
    // 
    this.viewRoute.params.subscribe((data:any)=>{
      // destructuring data object
      const {id}=data
      console.log(id)

      // api call to get a particular contact details
      this.api.viewContact(id).subscribe({
        next:(response:any)=>{
          console.log(response);
          this.contact=response
          const {groupId}=response
          this.api.groupView(groupId).subscribe((data:any)=>{
            console.log(data)
            const {name} = data
            console.log(name)
            this.group=name

          })
        },
        error:(err:any)=>{
          console.log(err.message);
          this.errmgs=err.message
        }
      })
    })
    
  }

}
