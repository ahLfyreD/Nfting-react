import './HomeTrend.css'

const HomeTrend = () => {
  return (
    <div className="trend">

        <div className="head-trend">
            
            <h3>Trending / Featured NFT</h3>

            <h3>All Trending <span>
                                <i className="fas fa-arrow-right"></i>
                            </span>
            </h3>
            
        </div>

        <div className="row mx-5 mt-5">
            {/* Each column contains components with images, a radio button and a name of the collector. */}
            <div className="col">col-1</div>
            <div className="col">col-2</div>
            <div className="col">col-3</div>
            <div className="col">col-4</div>
            <div className="col">col-5</div>
            <div className="col">col-6</div>
        </div>
    
       
    </div>

  )
}

export default HomeTrend
