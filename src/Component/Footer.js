import '../css/copm-footer.css'
import SocialMedia from './SocialMedia'
import HireMe from './HireMe'
import FooterNav from './FooterNav'

const Footer = (props) =>{
  return(
    <footer>
      <FooterNav class='footer-nav'/>
      <SocialMedia />
      <HireMe />
    </footer>
  )
}

export default Footer
