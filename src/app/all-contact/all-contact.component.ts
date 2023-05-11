import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contact',
  templateUrl: './all-contact.component.html',
  styleUrls: ['./all-contact.component.css']
})
export class AllContactComponent implements OnInit{

  allContact:any=[]
  isLoading:boolean=true
  errorMSg:string='';
  searchKey:string='';

  constructor(private api:ApiService){}
  
  ngOnInit(): void {
    this.getAllContact()
  }

  // get all contact
  getAllContact(){
    this.api.getAllContacts().subscribe({
      next:(response:any)=>{
        // console.log(response);
        setTimeout(() => {
          this.allContact=response
          this.isLoading=false
        }, 2000);
      },
      error:(err:any)=>{
        console.log(err.message);
        this.errorMSg=err.message
        this.isLoading = false
      }
    })
  }

  // deleteContact.
  deleteContact(id:any){
    this.api.deleteContact(id).subscribe({
      next:(response:any)=>{
        this.getAllContact()
      }
    })
  }


  search(){
    
  }


}
