import NavBar from '../components/NavBar'

function AboutPage () {
  return (
    <>
      <NavBar />
      <p>This is a fictional store</p>
      <p>The products in this store are not real, but are provided by Fake Store API</p>
      <footer>
        <p>Paul Wilson</p>
        <a href='https://github.com/paulwilsonr'><img src='src/assets/github-mark.svg' alt='link to my github'></img></a>
        </footer>
    </>
  )
}

export default AboutPage
