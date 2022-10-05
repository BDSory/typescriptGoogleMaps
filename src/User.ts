import faker from 'faker';

//if file purpose is to create and export a class, upperCase Name.
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor(){
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()), 
      lng: parseFloat(faker.address.longitude()),
    }
  }
  markerContent(): string {
    return `User Name: ${this.name}`
  }
}