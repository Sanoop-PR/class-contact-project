import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ContactSchema } from 'src/models/contactSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL = 'https://contact-class-project-app.onrender.com'
  constructor(private http:HttpClient) { }


  // handle error
  handleError(error:HttpErrorResponse){
    let errorMsg:string=''
    if (error.error) {
      // client error
      errorMsg=`Error : ${error.message}`
    } else {
      errorMsg=`Status : ${error.status} \n Error:${error.message} `
    }
    return throwError(()=>errorMsg)
  }

  getAllContacts(){
    // api call : url= http://localhost:3000/contacts reg :get
    return this.http.get(`${this.BASE_URL}/contacts`)
    // .pipe(catchError(this.handleError))
  }

  viewContact(id:any){
    // api call : url= http://localhost:3000/contacts/id reg :get
    return this.http.get(`${this.BASE_URL}/contacts/${id}`)

  }

  groupView(id:any){
    // api call : url= http://localhost:3000/groups/id reg :get
    return this.http.get(`${this.BASE_URL}/groups/${id}`)
  }

  // get all group (add-contact-components)
  getGroup(){
    // api call : http://localhost:3000/groups
    return this.http.get(`${this.BASE_URL}/groups`)
  }

  // add contact (post)
  addContact(contact:ContactSchema){
    return this.http.post(`${this.BASE_URL}/contacts`,contact)
  }

  // delete contact
  deleteContact(id:any){
    return this.http.delete(`${this.BASE_URL}/contacts/${id}`)
  }

  // edit (update) contact
  editContact(id:any,contact:ContactSchema){
    return this.http.put(`${this.BASE_URL}/contacts/${id}`,contact)
  }

}
