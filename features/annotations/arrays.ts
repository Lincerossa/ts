// ts inference in action (if you hover on things,  ts tells you that things : (number | string)[] )
const things : (string | number)[] = ['micio', 'micin', 3]
const cats  : string[] = ['micio', 'micin', 'micinoino']
const dates : Date[] = [new Date(), new Date()]

const nestedArray : number[][]= [
  [1,2,3],
]


const catsToNumber : number[] = cats.map((cat: string, i: number) : number  => {
  return i
})