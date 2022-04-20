import './HomePage.css'
import TopHome from './content/TopHome'
import HomeTrend from './content/HomeTrend'
import HomeName from './content/HomeName'
import HomeDrops from './content/HomeDrops'
import HomeOpt from './content/HomeOpt'
import HomeCreate from './content/HomeCreate'
import HomeNews from './content/HomeNews'


const HomePage = () => {
  return (
    <div className="container-fluid-lg">
      <div>
        <TopHome />
      </div>

      <div>
        <HomeTrend />
      </div>

      <div>
        <HomeName />
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
        
        

    </div>
  )
}

export default HomePage
