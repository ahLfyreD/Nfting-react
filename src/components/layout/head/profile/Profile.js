import './profile.css'
import picture from '@asset/images/picture.jpg'
import PropTypes from 'prop-types'

const profile = ({ onClick }) => {
  

  return (
    <div>

    <div className="dropdown-section">
      <button className="btn" onClick={onClick} type="button">
          <i className="fas fa-wallet"></i>
        </button>
      <div className="dropdown mx-2">
        <button className="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="fas fa-user-circle"></i>
        </button>
        <ul className="dropdown-menu mt-3" aria-labelledby="dropdownMenuButton1">
          <li>
            <h3>Account</h3>
            <div className="profile-account">
              <img src={ picture } alt="" />
              <div className="profile-wallet">
                <h3>John Doe</h3>
                <span>...<i class="far fa-copy"></i></span>
              </div>
            </div>
          </li>
          <li>
            <div className="bal">
              <div className="balance">
                <h4>Balance</h4>
                <span>View Wallet</span>
              </div>
              <div className="balance-account">
                <h2>4.123ETH</h2>
              </div>
            </div>
          </li>
          <li><a href="">Profile</a></li>
          <li><a href="">Collections</a></li>
          <li><a href="">Settings</a></li>
          <li><a href="">Disconnect</a> </li>
        </ul>
      </div>
        
    </div>
    </div>
  )
}

profile.propTypes = {
  onClick: PropTypes.func
}

export default profile