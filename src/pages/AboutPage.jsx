import NavBar from '../components/NavBar'
import PropTypes from 'prop-types'
import '../styles/aboutPage.css'

function AboutPage ({ cartArr }) {
  return (
    <>
      <NavBar cartArr={cartArr} />
      <div className='aboutPage'>
        <p className='aboutText'>This is a fictional store</p>
        <p className='aboutText'>
          The products in this store are not real, but are provided by Fake
          Store API
        </p>
        <a
          className='aboutText'
          href='https://www.flaticon.com/free-icons/smart-cart'
          title='smart cart icons'
        >
          <a
            href='https://www.flaticon.com/free-icons/navigation'
            title='navigation icons'
          >
            Navigation icons created by Andy Horvath - Flaticon
          </a>
          Smart cart icons created by Freepik - Flaticon
        </a>
        <footer className='aboutText'>
          <p>Paul Wilson</p>
          <a href='https://github.com/paulwilsonr'>
            <img
              className='smallIcon'
              src='src/assets/github-mark.svg'
              alt='link to my github'
            ></img>
          </a>
        </footer>
      </div>
    </>
  )
}

AboutPage.propTypes = {
  cartArr: PropTypes.array
}

export default AboutPage
