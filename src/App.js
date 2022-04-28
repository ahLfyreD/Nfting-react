import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '@components/layout/head/Header'
import MyNFT from '@components/My-NFT/MyNFT'
import NewsFeed from '@components/News-Feed/NewsFeed'
import LiveEvent from '@components/Live-Event/LiveEvent'
import MarketStat from '@components/Market-Stat/MarketStat'
import CreateNFT from '@components/Create-NFT/CreateNFT'
import Menu from '@components/home/menu/Menu'
import Recommend from '@components/home/recommend/Recommend'
import Profile from '@components/home/profile/Profile'
import Footer from '@components/layout/footer/Footer'
import HomePage from '@components/home/homepage/HomePage'


function App() {

  return (
<Router>
  <div className="container-fluid mx-0">

   <div className="fixed-position">

   <div className="row">
     <div className="col">

      <Header />

      </div>
    </div>

    </div>

   <div className="row mt-2">
     <div className="col-2 mx-3 bg-light" >

      <Menu />

      <Recommend />

      <Profile />

      </div>

     <div className="col-9 mx-4">
       <Routes>
     
        <Route path='/mynft' element={<MyNFT />} />
        <Route path='/liveevent' element={<LiveEvent />} />
        <Route path='/marketstatistics' element={<MarketStat />} />
        <Route path='/newsfeed' element={<NewsFeed />} />
        <Route path='/create' element={<CreateNFT />} />
        <Route path='/' element={<HomePage/>}/>

      </Routes>
      

      

      </div>

    </div>
   <div className="row">

     <div className="col">

      <Footer />

      </div>
    </div>
  </div>
</Router>
  );
}

export default App;
