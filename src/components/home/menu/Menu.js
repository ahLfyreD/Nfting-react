import './Menu.css';
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="menu">
        <ul>
            <li><Link className="link" to="/">Home Page</Link></li>
            <li><Link className="link" to="/mynft">My NFT</Link></li>
            <li><Link className="link" to="/create">Create/Mint NFT</Link></li>
            <li><Link className="link" to="/newsfeed">NFT News Feed</Link></li>
            <li><Link className="link" to="/liveevent">Live Event</Link></li>
            <li><Link className="link" to="/marketstatistics">Market Statistics</Link></li>
        </ul>

    </div>
  )
}

export default Menu
