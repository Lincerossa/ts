import faker from 'faker'

export default class User {
  name: string
  location: {
    lat: number
    lng: number
    
  }

  constructor(){
    this.name = faker.name.firstName(1)
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())  
    }
  }
}


