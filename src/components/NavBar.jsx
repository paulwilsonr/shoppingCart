import { NavLink } from 'react-router-dom'
import '../styles/navBar.css'
import CartCounter from './CartCounter'
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'

const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)){
        callback();
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick)
    };
  }, [ref])
  return ref;
}

function NavBar ({ cartArr }) {
  const [showNavMenu, setShowNavMenu] = useState(false)

  const handleClickOutside = () => {
    setShowNavMenu(false);
  }

  const ref = useOutsideClick(handleClickOutside);

  return (
    <div className='navBar'>
      <NavLink className='navLink storeNameLink' to='/'>
        <h1 className='storeName'>Fake Store</h1>
      </NavLink>
      <div className='burgerMenu' ref={ref}  onClick={() =>{
        if(window.innerWidth <= 480) {
          setShowNavMenu(!showNavMenu)
        } 
      }}> <img className='burgerMenuIcon smallIcon' src='/assets/menu.png'></img> 
        <nav className={showNavMenu ? 'shownNav' : ''}>
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
            className='navLink cartIcon'
            id='cart'
            to='/cart'
          >
            <img
              src='/assets/shopping-cart.png'
              className=' icon'
              alt='cart'
            ></img>
            <CartCounter cartArr={cartArr} />
          </NavLink>
          
        </nav>
      </div>
    </div>
  )
}

NavBar.propTypes = {
  cartArr: PropTypes.array
}

export default NavBar
