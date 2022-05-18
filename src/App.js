import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '@components/layout/head/Header'
import MyNFT from '@components/my-nft/MyNFT'
import NewsFeed from '@components/news-feed/NewsFeed'
import LiveEvent from '@components/live-event/LiveEvent'
import MarketStat from '@components/market-stat/MarketStat'
import CreateNFT from '@components/create-nft/CreateNFT'
import Menu from '@components/home/menu/Menu'
import Footer from '@components/layout/footer/Footer'
import HomePage from '@components/home/homepage/HomePage'


function App() {

  return (
<Router>
  <div className="main-container">
    <div className="nav">  
          <Header /> 
    </div>


    <div className="main-content">
     
      
       <div className="sidebar">
            <Menu />
        </div>
        <div className="content-inner">
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
    <div className="footer">
      <Footer />
    </div>
  </div>
  
</Router>
  );
}

export default App;
