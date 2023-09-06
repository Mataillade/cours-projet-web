import { Injectable } from '@angular/core';
import {Firestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class UploadService {


  //uploadFirebase fonction for firebase

  upload(name: string, url: string, categorie: string): void {
    //this.firestore.collection('image').add({name, url, categorie});
  }

  constructor(
    private firestore: Firestore
  ) {}
}
