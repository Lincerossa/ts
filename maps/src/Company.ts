import faker from "faker"

export default class Company {

  companyName: string
  description: string
  address : {
    lat: number
    lng: number
  }
  constructor(){

    this.companyName = faker.company.companyName()
    this.description = faker.company.catchPhraseDescriptor()
    this.address = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
}


