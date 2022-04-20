import Header from './components/layout/head/Header'
import Menu from './components/home/menu/Menu'
import Recommend from './components/home/recommend/Recommend'
import Profile from './components/home/profile/Profile'
import Footer from './components/layout/footer/Footer'
import HomePage from './components/home/homepage/HomePage'


function App() {

  return (
    // note that in React, we use the className instead of className and also htmlFor instead of For 
<div class="container-fluid mx-0">
  <div className="fixed-position">

  <div class="row">
    <div class="col">

      <Header />

    </div>
  </div>

  </div>

  <div class="row mt-2">
    <div class="col-2 mx-3 bg-light" >

      <Menu />

      <Recommend />

      <Profile />

    </div>

    <div class="col-9 mx-4">

      <HomePage />

    </div>

  </div>
  <div className="row">

    <div className="col">

      <Footer />

    </div>
  </div>
</div>
  );
}

export default App;
