import Header from './components/Header'
import Menu from './components/Menu'
import Recommend from './components/Recommend'
import Profile from './components/Profile'
import HomeAbout from './components/HomeAbout'
import HomePage from './components/HomePage'

function App() {
  return (
    // note that in React, we use the className instead of className and also htmlFor instead of For 
<div className="container">
  <div className="hd">
    <Header />

  </div>
  <div className="sd">
    <Menu />
    <Recommend />
    <Profile />
  </div>
  <div className="cb">
    <HomePage />
    {/* <router-view></router-view > */}
    
  </div>
  
  
  
  <footer>
    <HomeAbout />
  </footer>
</div>
  );
}

export default App;
