import { useContext, useState } from 'react';
import './App.css';
import { Context } from './context/Contex';

function App() {
const [ name, setName ] = useState('')
const [ surname, setSurname ] = useState('')
const [ age, setAge ] = useState('')

const cont = useContext(Context)

function submitHandler(event){
  event.preventDefault()
  cont.addPupil(name, surname, age)
}
function removePupil(id){
  cont.removePupil(id)
}

  return (
    <div className="App">
    <form onSubmit={submitHandler}>
    <input value={name} onChange={event => setName(event.target.value)} type="text" placeholder='name'/> <br/>
    <input value={surname} onChange={event => setSurname(event.target.value)} type="text" placeholder='surname'/> <br/>
    <input value={age} onChange={event => setAge(event.target.value)} type="number" placeholder='age'/> <br/>
    <button type='submit'>Send</button>
    </form>
    <ul>
    {
      cont.state.map((item, index) => {
        return <li onClick={() => removePupil(item.id)} key={index}>
        name: {item.name}, surname: {item.surname}, age: {item.age}
        </li>
      
      })}
    </ul>
    </div>
  );
}

export default App;
