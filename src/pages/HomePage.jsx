import NavBar from '../components/NavBar'
import PropType from 'prop-types'
import { Link } from 'react-router-dom'
import '../styles/homePage.css'

function HomePage ({ cartArr }) {
  return (
    <>
      <NavBar cartArr={cartArr} />
      <div className='homePage'>
        <h2 className='welcome'>Welcome to Fake Store</h2>
        <p className='welcomeText'>
          Fake Store is your one stop destination for all your fake need. Shop
          around for anything your fake heart could desire so long as your heart
          desires something that we sell. If that&apos;s the case, the we have
          exactly what you need.
        </p>
        <Link to={'/store'}>
          <button className='shopNowButton pointer'>SHOP NOW</button>
        </Link>
      </div>
    </>
  )
}

HomePage.propTypes = {
  cartArr: PropType.array
}

export default HomePage
