// A] SCAFFOLDING


// PHASE 1
// export default class Sorter {
//   collection: number[]
//   constructor(collection: number[]){
//     this.collection = collection
//   }
// }

// PHASE 2
export default class Sorter {
  constructor(public collection: number[]){ }

  sort(): (number)[]{
    const { length } = this.collection
    let result = this.collection
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        const a: number = result[j]
        const b: number = result[j+1]
        result[j]= a > b ? b : a
        result[j+1] = a > b ? a : b
      }
    }
    return result
  }
}


const result = new Sorter([1000, 0, 0, 4, 0, -3, 10, 100,])
console.log(result.sort())