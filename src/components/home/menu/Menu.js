import './Menu.css';
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-list">
        <ul>
            <li><Link className="link" to="/"><i class="fas fa-home"></i>Home Page</Link></li>
            <li><Link className="link" to="/mynft"><i class="fas fa-receipt"></i>My NFT</Link></li>
            <li><Link className="link" to="/create"><i class="far fa-plus-square"></i>Create/Mint NFT</Link></li>
            <li><Link className="link" to="/newsfeed"><i class="fas fa-newspaper"></i>NFT News Feed</Link></li>
            <li><Link className="link" to="/liveevent"><i class="fas fa-rss"></i>Live Event</Link></li>
            <li><Link className="link" to="/marketstatistics"><i class="fas fa-angle-double-up"></i>Market Statistics</Link></li>
        </ul>
      </div>
      <div className="menu-profile">
        <ul>
            <li><Link className="link" to="/"><i class="fas fa-user-circle"></i>My Profile</Link></li>
            <li><Link className="link" to="/"><i class="fas fa-bell"></i>Notifications</Link></li>
            <li><Link className="link" to="/mynft"><i class="fas fa-receipt"></i>My NFTs</Link></li>
            <li><Link className="link" to="/create"><i class="far fa-plus-square"></i>Watchlist</Link></li>
            <li><Link className="link" to="/newsfeed"><i class="fas fa-wallet"></i>Wallet</Link></li>
            <li><Link className="link" to="/liveevent"><i class="fas fa-heart"></i>Following</Link></li>
            <li><Link className="link" to="/marketstatistics"><i class="fas fa-cog"></i>Settings</Link></li>
            <li><Link className="link" to="/marketstatistics"><i class="fas fa-history"></i>Transaction</Link></li>
        </ul>
    </div>
    </div>
    
  )
}

export default Menu
