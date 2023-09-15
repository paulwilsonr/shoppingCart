import NavBar from '../components/NavBar'
import PropTypes from 'prop-types'

function AboutPage ({cartArr}) {
  return (
    <>
      <NavBar cartArr={cartArr} />
      <p>This is a fictional store</p>
      <p>The products in this store are not real, but are provided by Fake Store API</p>
      <footer>
        <p>Paul Wilson</p>
        <a href='https://github.com/paulwilsonr'><img src='src/assets/github-mark.svg' alt='link to my github'></img></a>
        </footer>
    </>
  )
}

AboutPage.propTypes = {
  cartArr: PropTypes.array,
}

export default AboutPage
