import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import * as GiIcons from "react-icons/gi";

// import Menu from '@components/home/menu/Menu'
// import img2 from '@asset/images/picture.jpg'
// import { Link } from 'react-router-dom'
import MyNFT from "@components/sections/my-nft/MyNFT";
import NewsFeed from "@components/sections/news-feed/NewsFeed";
import Explore from "@components/sections/live-event/Explore";
import MarketStat from "@components/sections/market-stat/MarketStat";
import CreateNFT from "@components/sections/create-nft/CreateNFT";
// import Footer from '@components/layout/footer/Footer'
import HomePage from "@components/home/homepage/HomePage";
import SideBar from "@components/layout/sidebar/SideBar";
import Header from "@components/layout/head/Header";

import { useState } from "react";

function App() {
  // const [open, setOpen] = useState(true);

  // const [openModal, setOpenModal] = useState(false);

  return (
    <Router>
      <div className="w-100 flex">
        <div className>
          <SideBar />
        </div>

        <div className="relative flex-1 flex-col">
          <div className="sticky top-0 bg-white z-10">
            <Header />
          </div>
          <div>
            <Routes>
              <Route path="/explore" element={<Explore />} />
              <Route path="/marketstatistics" element={<MarketStat />} />
              <Route path="/newsfeed" element={<NewsFeed />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
