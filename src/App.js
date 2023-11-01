import './App.css'
import Collect from './collect'
import Arr from './array'
import Adder from './adder'
import Login from './login'
import ToDo from './toDo'

console.log(Arr)
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {Arr.map((ArrayItem) => {
          return (
            <div>
              <Collect
                key={ArrayItem.id}
                name={ArrayItem.name}
                age={ArrayItem.age}
                image={ArrayItem.image}
              />
            </div>
          )
        })}
        <Login />
        <Adder />
        <ToDo />
      </header>
    </div>
  )
}

export default App
