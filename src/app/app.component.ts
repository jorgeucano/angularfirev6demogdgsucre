import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '#GDGSUCRE.INIT()';

  user$: Observable<firebase.User>;
  userName: string;
  photoURL: string;
  items: Observable<any[]>;
  private itemsCollection: AngularFirestoreCollection<any>;

  constructor(db: AngularFirestore, private afAuth: AngularFireAuth,) {
    this.itemsCollection = db.collection<any>('photos');
    this.items = db.collection('photos').valueChanges();
  }

  ngOnInit() {
    // this.subscribeuser$();
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      (response) => {
        console.log(response.user);
        const v = response.user;
        this.itemsCollection.add({ displayName: v.displayName, photoURL: v.photoURL}).then(
          (response) => {
            console.log(response);
            this.userName = v.displayName;
          }
        );
      },
      (error) => {
        console.log('not login');
      }
    )
  }

  

}
