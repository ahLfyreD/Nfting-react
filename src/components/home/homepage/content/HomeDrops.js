import './HomeDrops.css';

const HomeDrops = () => {
  return (
    <div className="drops">

        <div className="head-drops">

            <h3>Lastest Drops / Notable Drops</h3>
            <h3>View All 
              <span>
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

export default HomeDrops
