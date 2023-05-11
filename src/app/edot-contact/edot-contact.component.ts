import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ContactSchema } from 'src/models/contactSchema';

@Component({
  selector: 'app-edot-contact',
  templateUrl: './edot-contact.component.html',
  styleUrls: ['./edot-contact.component.css']
})
export class EdotContactComponent implements OnInit {

  contact:ContactSchema={}
  groups:any=[]

  constructor(private editActivatedRoute:ActivatedRoute,private api:ApiService, private editRoute:Router){}

  ngOnInit(): void {
    this.editActivatedRoute.params.subscribe({
      next:(pathParameter:any)=>{
        const{id}=pathParameter
        console.log(id)
        this.api.viewContact(id).subscribe({
          next:(response:any)=>{
            this.contact=response
          }
        })
      },
      error(err:any){
        console.log(err)
      }
    })

    // get groups
    this.api.getGroup().subscribe({
      next:(allGroup:any)=>{
        this.groups=allGroup
        console.log(this.groups)
      }
    })

  }

  editContact(id:any){
    this.api.editContact(id,this.contact).subscribe({
      next:(response:any)=>{
        // navigate to all contact
        this.editRoute.navigateByUrl('')
      }
    })
  }
}
