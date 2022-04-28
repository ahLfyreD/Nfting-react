import { Link } from 'react-router-dom'
import Search from './search/Search'
import img2 from './logo.png'
import Icon from './icon/Icon'
import './Header.css'
// import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'

const Header = () => {
  return (
    <div className="fixed-top">
      <nav className="navbar navbar-expand-lg bg-light mx-0 p-f d-flex">
        <div className="container-fluid d-flex">
    
          <div className="navbar-brand">
            <Link to="/"><img className='display' src={ img2 } alt="" /></Link>
      
          </div>

          <div>
    
            <Search />

          </div>

          <div >

            <Icon />

          </div>

        </div>
  
      </nav>

     </div> 
  )
}

export default Header
