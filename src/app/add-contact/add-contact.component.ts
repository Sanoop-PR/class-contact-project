import { Component, OnInit } from '@angular/core';
import { ContactSchema } from 'src/models/contactSchema';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contact:ContactSchema={}

  groups:any=[]

  constructor(private api:ApiService, private addContactRouter:Router){
    this.contact.groupId='choose...'
  }

  ngOnInit(): void {
    this.api.getGroup().subscribe({
      next:(response:any)=>{
        console.log(response)
        this.groups=response
      },
      error:(err:any)=>{
        console.log(err.message)
      }
    })
  }

  addContact(contact:ContactSchema){
    this.api.addContact(contact).subscribe({
      next:(response:any)=>{
        // data added to server
        console.log(response)
        this.addContactRouter.navigateByUrl('')
      },
      error:(err:any)=>{
        console.log(err.message)
      }
    })
  }
  
  
}
