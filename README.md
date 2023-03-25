# THIS IS MY SECOND TRY FOR REACT PROJECT

Last time i broke vscode when i try to install styled companents. It give me an couple errors and i couldn't reset my vscode so here we are.

!!! Css kismi icin 

- module.css de kullanabilirsin. 
- Styled-components de kullanabilirsin 
- react-Bootstrap kullanabilirsin.
- Tailwindcss kullanabilirsin.
- Sass kullanabilirsin.(Bence gereksiz)
 


 Eger jsx olmasaydi app.js icerisinde olusturulan kodlar su sekilde yazilmak zorunda kalinirdi.


```javascript
function App() {

  const todos = ['todo1','todo2','todo3']
  
   const ul = createElement('ul', null, todos.map((todo, index) => createElement('li', {key: index}, todo))) // burada kullanilan key, maplenen bir degiskenin her bir alt parametresine ayri ayri keyler vermemizi ve reactin daha duzgun calismasini saglar

  const h1 = createElement('h1', null, 'main content')

  return createElement('main', { 
    className:'test',
    id:'main'
  }, h1 , ul)

}
```
Jsx sayesinde su sekilde yazabiliyoruz.

```javascript

function App(){

const todos = ['todo1','todo2','todo3']

  return (
    <main>
      <h1>main content</h1>
      <ul>
      {todos.map((todo, index) =>( 
        <li key={index}> 
            {todo}
        </li> 
      ))}
    </ul>
    </main>
    
  );
}
```
Daha kolay ve daha basit\

# JSX ILE BIRLIKTE OLAN DEGISIKLIKLER

- class => classname
- for => htmlFor --->

```javascript
<label htmlFor='search'>arama </label>
<input text='text' id='search'></input>
```
- style= " " => style={}
- tabindex => tabIndex --> camelCase
- onclick => onClick

# Component Olustururken

```javascript

<div style={{padding:20}}>
      <Button text="Button ornegi" variant="success"/>
      <Button text="Button ornegi" variant="danger"/>
      <Button text="Button ornegi" variant="warning"/>
      <Button text="Button ornegi"/>
</div>
```
Boyle bir divim ve icinde de 4 tane buttonum var.\
Oncelikle bir components adinda klasor olusturdum ve ardindan icine bir tane Button.js adinda bir js uzantili dosyam olusturdum ve icine asagidaki kodlari yazdim.
```JAVASCRIPT
import classNames from "classnames"


function Button ({text , variant = 'default'}) {
    
    return(
        <button className={classNames({
            "p-4 h-10 flex items-center bg-gray-300 rounded": true,
            "bg-gray-100": variant === 'default',
            "bg-green-600 text-white": variant === 'success',
            "bg-red-600 text-white": variant === 'danger',
            "bg-yellow-400": variant === 'warning'
        })}>{text}</button>
    )
}

export default Button
```
burada classNames kutuphanesini yukledim ve stillerimi vermeye basladim.\
Eger text yerine children isteseydim su sekilde yazabilirdim.\
\
Artik kodlarim su sekilde olacak
```Javascript
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
```
ardindan Button.js klasorumdeki kodum ise
```Javascript
import classNames from "classnames"


function Button ({children, variant = 'default'}) {
    
    return(
        <button className={classNames({
            "p-4 h-10 flex items-center bg-gray-300 rounded": true,
            "bg-gray-100": variant === 'default',
            "bg-green-600 text-white": variant === 'success',
            "bg-red-600 text-white": variant === 'danger',
            "bg-yellow-400": variant === 'warning'
        })}>{children}</button>
    )
}

export default Button
```
Text yerine children geldi ve artik icerigi neyse children da oldu. \
Sadece degisen text yerine cildren yazmam oldu.

