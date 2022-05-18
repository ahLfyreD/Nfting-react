import { Link } from 'react-router-dom'
// import Search from './search/Search'
import img2 from '@asset/images/logo.png'
// import Icon from './icon/Icon'
import './Header.css'
// import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'

const Header = () => {
  return (
    <nav>

      <label className='Logo'>
        <Link to="/"><img className='display' src={ img2 } alt="" /></Link>
      </label>

      <div className="search-container">
        <i class="fas fa-search"></i>
        <input className='search-box' type="text" placeholder='search' />
      </div>

      <div className="icon-container">
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" title={{}}>
          <i class="fas fa-globe"></i>
        </button>
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" title={{}}>
          <i class="fas fa-bell"></i>
        </button>
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" title={{}}>
          <i class="fas fa-wallet"></i>
        </button>
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" title={{}}>
          <i class="fas fa-user-circle"></i>
        </button>
      </div>
    </nav>
    // <div className="fixed-top">
      // <nav className="navbar navbar-expand-lg bg-light d-flex">
      //   <div className="container-fluid d-flex">
    
      //     <div className="navbar-brand">
      //       <Link to="/"><img className='display' src={ img2 } alt="" /></Link>
      
      //     </div>

      //     <div>
    
      //       <Search />

      //     </div>

      //     <div >

      //       <Icon />

      //     </div>

      //   </div>
  
      // </nav>

    //  </div> 
  )
}

export default Header
