import { NavLink } from 'react-router-dom'
import '../styles/navBar.css'
import CartCounter from './CartCounter'
import PropTypes from 'prop-types'

function NavBar ({ cartArr }) {
  return (
    <div className='navBar'>
      <NavLink className='navLink storeNameLink' to='/'>
        <h1 className='storeName'>Fake Store</h1>
      </NavLink>
      <nav>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'navLink currentPageLink' : 'navLink'
          }
          id='home'
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'navLink currentPageLink' : 'navLink'
          }
          id='store'
          to='/store'
        >
          Store
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'navLink currentPageLink' : 'navLink'
          }
          id='about'
          to='/about'
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'navLink white' : 'navLink offWhite'
          }
          id='cart'
          to='/cart'
        >
          <img
            src='src/assets/shopping-cart.png'
            className=' icon'
            alt='cart'
          ></img>
        </NavLink>
        <CartCounter cartArr={cartArr} />
      </nav>
    </div>
  )
}

NavBar.propTypes = {
  cartArr: PropTypes.array
}

export default NavBar
