import NavBar from '../components/NavBar'
import PropTypes from 'prop-types'

function ErrorPage ({ cartArr }) {
  return (
    <>
      <NavBar cartArr={cartArr} />
      <h1>404 Page not found</h1>
    </>
  )
}

ErrorPage.propTypes = {
  cartArr: PropTypes.array
}

export default ErrorPage
