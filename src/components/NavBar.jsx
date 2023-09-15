import { NavLink } from 'react-router-dom'
import '../styles/navBar.css'

function NavBar () {
 
  return (
    <div className='navBar'>
      <NavLink className='navLink'  to='/'>
        <h1>Store Name</h1>
      </NavLink>
      <nav>
        <NavLink
          className={({isActive}) => (isActive ? 'navLink currentPageLink' : 'navLink')}
          id='home'
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({isActive}) => (isActive ? 'navLink currentPageLink' : 'navLink')}
          id='store'
          to='/store'
        >
          Store
        </NavLink>
        <NavLink
          className={({isActive}) => (isActive ? 'navLink currentPageLink' : 'navLink')}
          id='about'
          to='/about'
        >
          About
        </NavLink>
        <NavLink
          className={({isActive}) => (isActive ? 'navLink currentPageLink' : 'navLink')}
          id='cart'
          to='/cart'
        >
          Cart
        </NavLink>
      </nav>
    </div>
  )
}

export default NavBar
