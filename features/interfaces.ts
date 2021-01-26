interface Cat {
  name: string;
  summary(): number
}
const test : (cat: Cat) => void = (cat) => {
  console.log(cat.summary())
}

//NB: functions that accept arguments that are typed with interfaces so all the different functions we're
// going to create are going to accept interfaces AS MUCH AS POSSIBLE!


interface Summary {
  name: string;
  summary(): number
}

const test2: (item: Summary) => void = (item) => {
  console.log(item.summary())
}

test2({name: 'gatto', summary:  () => 2})