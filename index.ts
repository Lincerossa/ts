import axios from 'axios'

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}


function consoleLog({id, title, completed} : Todo) {

  console.log({id, title, completed})
}
axios.get("https://jsonplaceholder.typicode.com/todos/1").then(response => {
  const todo = response.data as Todo

  const id = todo.id
  const title = todo.title
  const completed = todo.completed

  consoleLog({id, title, completed})
})
