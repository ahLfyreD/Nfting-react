import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";

// import Menu from '@components/home/menu/Menu'
// import img2 from '@asset/images/picture.jpg'
import { Link } from 'react-router-dom'
// import MyNFT from '@components/my-nft/MyNFT'
// import NewsFeed from '@components/news-feed/NewsFeed'
// import LiveEvent from '@components/live-event/LiveEvent'
// import MarketStat from '@components/market-stat/MarketStat'
// import CreateNFT from '@components/create-nft/CreateNFT'
// import Footer from '@components/layout/footer/Footer'
// import HomePage from '@components/home/homepage/HomePage'
import SideBar from '@components/layout/sidebar/SideBar'
// import Header from '@components/layout/head/Header'
// import Modal from '@components/modalContainer/Modal'
import { useState } from 'react'


function App() {

  const [open, setOpen] = useState(true);
  
  // const [openModal, setOpenModal] = useState(false);

  return (
<Router>

  
    <div className="d-flex w-100 h-100">
      <div>
        <SideBar />
      </div>
        
      
        
        <div className='p-10'>
          HomePage
          {/* <div className='flex bg-light items-center justify-between h-24  p-5 sticky top-0'>
            <div className='h-12 rounded-md items-center flex w-80 bg-white '>
              <input className='search rounded-md w-72 border-none' type="text" placeholder='search' />
              <AiIcons.AiOutlineSearch/>
            </div>

            <div className='flex w-64 justify-around'>
              <div className=''>
                <GiIcons.GiUsaFlag className='rounded-full' />
              </div>
              <div className=''>
                <GiIcons.GiUsaFlag className='rounded-full' />
              </div>
              <div className=''>
                <GiIcons.GiUsaFlag className='rounded-full' />
              </div>
              <div className=''>
                <GiIcons.GiUsaFlag className='rounded-full' />
              </div>

            </div>


        
          </div> */}
            


            {/* <div>
              <Routes>
                <Route path='/mynft' element={<MyNFT />} />
                <Route path='/liveevent' element={<LiveEvent />} />
                <Route path='/marketstatistics' element={<MarketStat />} />
                <Route path='/newsfeed' element={<NewsFeed />} />
                <Route path='/create' element={<CreateNFT />} />
                <Route path='/' element={<HomePage/>}/>
              </Routes>

            </div> */}
          </div>
    </div>
  {/* <div className="container">
    
    <div>
      <SideBar />
    </div>

    
    <div className="main-content">
      
      <div>
        <Header />
      </div>
      
      <div>
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
  
    <div>
      {openModal && <Modal />}
    </div>
  </div>
    <div>
      <div className="footer">
        <Footer />
      </div>
    </div>
     */}
  
  
</Router>
  );
}

export default App;
