import './Header.css'
import Profile from './profile/Profile'
// import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'

const Header = ({ onAdd }) => {
 
  

  return (
    <div>
      <header>
        
          <div>
            <input className='search-box' type="text" placeholder='search' />
            <i class="fas fa-search"></i>
         </div>

          <div>
            <Profile onClick={onAdd}/>
          </div>
        

      </header>
      
    {/* <header className='nav'>
      <div className="search-container">
        <i class="fas fa-search"></i>
        <input className='search-box' type="text" placeholder='search' />
      </div>

      <div className="icon-container">
        <Profile onClick={onAdd}/>
      </div>
    </header> */}

    </div>

    

  )
}

export default Header
