import User from './src/User'
import Company from './src/Company'
// import Map from './src/Map

const linceUser = new User()
const linceCompany = new Company()






// const myMap = new Map()
// myMap.addMarker(linceUser)


// If I want addMarker to be compatible with linceUser, in the User class I can say this:
// class User implements Mappable that tells ts that the user is compatible with the addMarker structure