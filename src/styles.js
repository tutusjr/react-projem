import Boostrap from './Bootstrap'
import Tailwind from './tailwind'
import './style.scss'
import Test from './Test'
import logo from './logo.svg'
import { Title } from './Components'
import styles from './App.module.css'
import './tailwind.css'



function Styles() {
    return(
<div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>    {/* components.js de tasarladigim ozelliklere Title adi vererek ozellikleri ilgili yaziya vermis oldum. */}
      <Title theme = 'dark'>{process.env.NODE_ENV}</Title>
      <p className='env'>
      {process.env.REACT_APP_API_URL}
      <span>Test</span>
      </p>
      <h3>{process.env.NODE_ENV}</h3>
      <p>
        {process.env.REACT_APP_API_URL}
      </p>
      <Test/>
      {process.env.NODE_ENV ==='production' && (
        <>
          <h1>BURASI PRODUCTION KISMIDIR.</h1>
          <img src={logo} alt='#'></img>
          <img src="/logo192.png" alt='#'></img>
        </>
      )}
      {process.env.NODE_ENV === 'development' && (
        <h1>BURASI DEVELOPMENT KISMIDIR.</h1>
      )}
      <Boostrap/>
      <Tailwind/>
    </div>
    )
}

export default Styles