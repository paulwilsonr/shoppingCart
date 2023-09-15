import NavBar from '../components/NavBar'
import PropType from 'prop-types'


function HomePage ({cartArr}) {
  
  return (
    <>
      <NavBar cartArr={cartArr} />
      <h2>Home</h2>
    </>
  )
}

HomePage.propTypes = {
  cartArr: PropType.array,
}

export default HomePage
