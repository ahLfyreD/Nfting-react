import './HomePage.css'
import TopHome from './content/TopHome'
import HomeTrend from './content/HomeTrend'
import HomeDrops from './content/HomeDrops'
import HomeOpt from './content/HomeOpt'
import HomeCreate from './content/HomeCreate'
import HomeNews from './content/HomeNews'
import About from './content/About'



const HomePage = () => {
  return (
    <div className="Page">

      <div>
        <TopHome />
      </div>

      <div>
        <HomeTrend />
      </div>

      <div>
        <HomeDrops />
      </div>

      <div>
        <HomeOpt />
      </div>

      <div>
        <HomeCreate />
      </div>

      <div>
        <HomeNews />
      </div>

      <div>
        <About />
      </div>
        
        

    </div>
  )
}

export default HomePage
