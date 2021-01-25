// function statement
function getLincerossa(a: string) : string{
  return `${a} + rossa`
}
const test: string = "marci"
// function expression
const lincerossa : (a:string) => string = (a) => {
  return `${a} + rossa`
}

const lincerossa2 = (a: string) : string => {
  return `${a} + rossa`
} 


// promise 
const postpone = async(ms:number) : Promise<void> =>  {

  await new Promise((resolve): void => {
    setTimeout(() => {
      resolve(true)
    }, ms)
  })
}

type Data = {
  value: string
} 


const getData : (fixtures: Array<Data>) => Promise<Data[]> = async (fixtures) => {
  await postpone(500)
  return fixtures
}

const fixtures = [{value: "1123"}]
const calendars : Promise<Array<Data>> = getData(fixtures)