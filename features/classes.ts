// FUNCTIONS

class Car {
  drive(): void {
    console.log("brum brum")
  }
} 

const peugeut = new Car()

peugeut.drive()

class AmazingCar extends Car {
  speed(): number {
    return 212
  }
}

const swiffer = new AmazingCar()
console.log(swiffer.speed())


// public
class House {

  public getPrice(): number {
    return 1200
  }
}

const myHouse = new House()
myHouse.getPrice()
// private

class HouseChild extends House {
  private getPriceChild(): number {
    return 1200
  }
}

const myHouseChild = new HouseChild()
// ⛔️ myHouseChild.getPriceChild()
myHouseChild.getPrice()

// protected
class Scooter {
  protected getScooterPrice(): number {
    return 1200
  }

}

class Gilera extends Scooter {

  public getFinalPrice(): number {
    return this.getScooterPrice() + 100
  }
}

const myGilera = new Gilera()
console.log("my gilera price:", myGilera.getFinalPrice())





// PROTERTY

class Supercar {
  color: string = "white"
  public getPrice(): number {
    return 100
  }
}

// BAD
class CustomSupercar {
  color : string
  constructor(color: string) {
    this.color = color
  }
  public getPrice(): number {
    return 100
  }
}

// NICE
class CustomSupercar2 {
  constructor(public color: string) {
  }
  public getPrice(): number {
    return 100
  }
}









class Outer {
  constructor(protected parentItem: string){}
  protected getOuterParentItem(): string {
    return this.parentItem
  }
}

class Inner extends Outer {

  constructor(public outerItem: string, parentItem: string){
    super(parentItem)
  }
  public getInnerFoo() : string {
    return `${this.getOuterParentItem()} AND ${this.outerItem}`
  }
}

const innerInstance = new Inner("marcello", "luatti")
console.log("instance:", innerInstance.getInnerFoo())





/// RESTRICTING ACCESS TO CLASS METHODS USING GENERAL INTERFACES!!!! Super Important
// Interfaces could be more generics with less types

