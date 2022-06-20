import './Menu.css';
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Menu = ({ textDisplay }) => {
  // const [showItems, setShowItems] = useState(false)
  return (
    <div className="menu">
      
      <div className="menu-list">
        <ul>
            <li >
              <Link className="link" to="/">
                <i className="fas fa-home icons"></i>
                <span className='text' style={{ display: textDisplay }}>Home</span>
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                <i className="fas fa-receipt icons"></i>
                <span className='text' style={{ display: textDisplay }}>My NFT</span>
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                <i className="fas fa-plus-circle icons"></i>
                <span className='text' style={{ display: textDisplay }}>Create NFTs</span>
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                <i className="fas fa-newspaper icons"></i>
                <span className='text' style={{ display: textDisplay }}>News Feed</span>
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                <i className="fas fa-rss icons"></i>
                <span className='text'style={{ display: textDisplay }}>Live Event</span>
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                <i className="fas fa-angle-double-up icons"></i>
                <span className='text'style={{ display: textDisplay }}>Market Statistics</span>
              </Link>
            </li>
        </ul>
      </div>
      <div className="menu-profile">
        <ul>
            <li>
              <Link className="link" to="/">
                <i className="fas fa-user-circle icons"></i>
                <span className='text'style={{ display: textDisplay }}>My Profile</span>
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                <i className="fas fa-bell icons"></i>
                <span className='text'style={{ display: textDisplay }}>Notification</span>
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                <i className="fas fa-heart icons"></i>
                <span className='text'style={{ display: textDisplay }}>Following</span>
              </Link>
            </li>

            <li>
              <Link className="link" to="/">
                <i className="fas fa-wallet icons"></i>
                <span className='text'style={{ display: textDisplay }}>Wallet</span>
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                <i className="fas fa-cog icons"></i>
                <span className='text'style={{ display: textDisplay }}>Settings</span>
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                <i className="fas fa-history icons"></i>
                <span className='text'style={{ display: textDisplay }}>Transactions</span>
              </Link>
            </li>
        </ul>
      </div>
      {/* <div className="menu-profile">
        <ul>
            <li><Link className="link" to="/"><i class="fas fa-user-circle"></i>My Profile</Link></li>
            <li><Link className="link" to="/"><i class="fas fa-bell"></i>Notification</Link></li>
            <li><Link className="link" to="/mynft"><i class="fas fa-receipt"></i>My NFT</Link></li>
            <li><Link className="link" to="/create"><i class="far fa-plus-square"></i>Watchlist</Link></li>
            <li><Link className="link" to="/newsfeed"><i class="fas fa-wallet"></i>Wallet</Link></li>
            <li><Link className="link" to="/liveevent"><i class="fas fa-heart"></i>Following</Link></li>
            <li><Link className="link" to="/marketstatistics"><i class="fas fa-cog"></i>Settings</Link></li>
            <li><Link className="link" to="/marketstatistics"><i class="fas fa-history"></i>Transaction</Link></li>
        </ul>
    </div> */}
    </div>
    
  )
}

export default Menu
