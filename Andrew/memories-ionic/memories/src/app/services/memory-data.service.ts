import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MemoryDataService {

    constructor(public http: HttpClient) { }

    // Adds a new memory to Firebase
    public addMemory(userId:string, memory: { title: string; photo_url: string; date: Date; description: string; friends: string[]; location?: string; lat: string; long: string; username: string; }){

        return firebase.database().ref("memories").push({
            userId: userId,
            memory_title: memory.title,
            photo_url: memory.photo_url,
            memory_date: (memory.date).toString(),
            memory_description : memory.description,
            memory_friends: memory.friends,
            memory_lat: memory.lat,
            memory_long: memory.long,
            username: memory.username
        });
    }

    // Updates a memory's photo url field to what has been uploaded
    public updatePhotoUrl(memoryId: string){
        return firebase.database().ref("memories").child(memoryId).update({photo_url:memoryId});
    }

    // Gets all memories for a user
    public getMemories(userId: string){
        return firebase.database().ref("memories").orderByChild('userId').equalTo(userId);
    }

    // Gets a memory's image/download URL
    public getImage(memory_id: string){
        return firebase.storage().ref().child(memory_id + '.jpg').getDownloadURL();
    }

    // Returns all memories
    public searchMemories(userId: string){
        return firebase.database().ref("memories").orderByChild('userId').equalTo(userId);
    }
    
    // Gets a memory by its ID
    public getMemoryById(id: string){
        return firebase.database().ref("memories").child(id);
    }

    // Uploads an image to Firebase Storage
    public uploadImage(base64_string: string, photo_id: string){
        return firebase.storage().ref().child(photo_id + '.jpg').putString(base64_string, firebase.storage.StringFormat.DATA_URL);
    }

    // Gets all nearby places from Google Maps using the users location
    public getNearbyLocations(lat: number, lng: number){
       
        // Options - CORS (what a pain)
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'ccess-Control-Allow-Headers': '*'
            })
        };

        return this.http.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=restaurant&key=API_KEY`, httpOptions);
    }
}
