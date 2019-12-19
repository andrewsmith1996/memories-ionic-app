export class Memory {
    id:string;
    title: string;
    photo_url: string;
    date: string;
    description: string;
    location: string;
    friends: string[];
    lat:number;
    long:number;
    user_name: string;

    constructor(id: string, title: string, photo_url: string, date: string, description: string, location: string, friends: string[], lat: number, long: number, username: string) {
        this.id = id;
        this.title = title;
        this.photo_url = photo_url;
        this.date = date;
        this.description = description;
        this.location = location;
        this.friends = friends;
        this.lat = lat;
        this.long = long;
        this.user_name = username;
    }
}
