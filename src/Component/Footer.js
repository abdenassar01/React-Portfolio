import '../css/copm-footer.css'
import Nav from './Nav'
import SocialMedia from './SocialMedia'
import HireMe from './HireMe'

const Footer = (props) =>{
  return(
    <footer>
      <Nav class='footer-nav'/>
      <SocialMedia />
      <HireMe />
    </footer>
  )
}

export default Footer
