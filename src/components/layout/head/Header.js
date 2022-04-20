// import Logo from './logo/Logo'
import Search from './search/Search'
import img2 from './logo.png'
import Icon from './icon/Icon'
import './Header.css'
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'

const Header = () => {
  return (
    // <div className="fixed-top">
      <nav className="navbar navbar-expand-lg bg-light mx-0 p-f">
        <div className="container-fluid">
    
          <div className="navbar-brand">
            <a href="#"><img className='image' src={ img2 } alt="" /></a>
      
          </div>

          <div>
    
            <Search />

          </div>

          <div >

            <Icon />

          </div>

        </div>
  
      </nav>

    // </div>
  )
}

export default Header
