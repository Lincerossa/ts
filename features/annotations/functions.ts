export {}

const add : (a:number, b:number) => number = (a, b) => {
  return a + b

}

const neverFunction : (message: string) => never = (message: string) => {
  throw new Error(message)
}


const never : (a: string,  b: Array<string>) => void = (a, b) => {
  console.log({a,b})
}