
import './tailwind.css'
import Button from './components/Button';

// function Button(props){
//   return <button>{props.text}</button>
// }

function App() {

  const todos = ['todo1','todo2','todo3']
  // const button = createElement(Button, {
  //   text:'Button text'
  // }, null)
  // const ul = createElement('ul', null, todos.map((todo, index) => createElement('li', {key: index}, todo)))
  // const h1 = createElement('h1', null, 'main content')
  // return createElement('main', { 
  //   className:'test',
  //   id:'main'
  // }, h1 , ul)



  return (
    <>
      <div style={{padding:20}}>
      <Button>
        Button ornegi
      </Button>
      <Button variant='success'>
        Button ornegi
      </Button>
      <Button variant='warning'>
        Button ornegi
      </Button>
      <Button variant='danger'>
        Button ornegi
      </Button>
      </div>
      <h1 tabIndex={3} style={{color: 'red', backgroundColor:'yellow'}}>main content</h1>
      <label tabIndex={2} htmlFor='search'>Arama</label>
      <input tabIndex={1} type='text' id='search'></input>
      <ul>
        
      {todos.map((todo, index) =>(
        <li key={index}>
            {todo}
        </li>
      ))}
    </ul>
    </>
    
  );
}

export default App;
