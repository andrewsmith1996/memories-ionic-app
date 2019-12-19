import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { isFulfilled } from 'q';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

    constructor() { }

    // Gets the current signed in user
    public getCurrentUser(){
        return firebase.auth().currentUser;
    }

    // Signs a user in using Firebase Auth
    public signInUser(email: string, password: string){
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    // Signs a user up using Firebase Auth
    public signUpUser(email: string, password: string){
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    } 

    // Signs a user Out
    public signOutUser(){
        return firebase.auth().signOut();
    }

    public forgottenPassword(email: string){
        return firebase.auth().sendPasswordResetEmail(email);
    }
}
