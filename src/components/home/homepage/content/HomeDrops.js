import './HomeDrops.css';
import world from '@asset/images/image3.jpg'

const HomeDrops = () => {
  return (
    <div className="drops">

        <div className="head-drops">

            <h3>Lastest Drops / Notable Drops</h3>
            <button type='button'
                    className='click'>
              View All 
              <span>
                <i className="fas fa-arrow-right"></i>
              </span>
           </button>
        </div>

        <div className="row mt-5">
            {/* Each column contains components with images, a radio button and a name of the collector. */}
            <div className="col">
              <div className="card" style={{width: '10rem'}}>
                <img src={world} className="card-img-top" alt="..."/>
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <a href="/" className="btn btn-primary btn-sm" style={{float: 'right'}}>click</a>                </div>
              </div>
            </div>
            <div className="col">
            <div className="card" style={{width: '10rem'}}>
                <img src={world} className="card-img-top" alt="..."/>
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <a href="/" className="btn btn-primary btn-sm" style={{float: 'right'}}>click</a>                </div>
              </div>            
            </div>
            <div className="col">
            <div className="card" style={{width: '10rem'}}>
                <img src={world} className="card-img-top" alt="..."/>
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <a href="/" className="btn btn-primary btn-sm" style={{float: 'right'}}>click</a>                </div>
              </div>            
            </div>
            <div className="col">
            <div className="card" style={{width: '10rem'}}>
                <img src={world} className="card-img-top" alt="..."/>
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <a href="/" className="btn btn-primary btn-sm" style={{float: 'right'}}>click</a>                </div>
              </div>             
           </div>
            <div className="col">
            <div className="card" style={{width: '10rem'}}>
                <img src={world} className="card-img-top" alt="..."/>
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <a href="/" className="btn btn-primary btn-sm" style={{float: 'right'}}>click</a>                </div>
              </div>             
            </div>
        </div>

    


    </div>
    
  )
}

export default HomeDrops
