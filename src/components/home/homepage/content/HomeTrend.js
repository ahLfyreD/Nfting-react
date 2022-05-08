import './HomeTrend.css'
import load from '@asset/images/image2.jpg'

const HomeTrend = () => {
  return (
    <div className="trend">

        <div className="head-trend">
            
            <h3>Trending / Featured NFT</h3>

            <button type='button'
                    className='click'>
              All Trending 
              <span>
                <i className="fas fa-arrow-right"></i>
              </span>
           </button>
            
        </div>

        <div className="row mt-5">
            {/* Each column contains components with images, a radio button and a name of the collector. */}
            <div className="col">
              <div className="card" style={{width: '10rem'}}>
                <img src={load} className="card-img-top" alt="..."/>
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <a href="/" className="btn btn-primary btn-sm" style={{float: 'right'}}>click</a>
                </div>
              </div>
            </div>
            <div className="col">
            <div className="card" style={{width: '10rem'}}>
                <img src={load} className="card-img-top" alt="..."/>
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <a href="/" className="btn btn-primary btn-sm" style={{float: 'right'}}>click</a>
                </div>
              </div>            
            </div>
            <div className="col">
            <div className="card" style={{width: '10rem'}}>
                <img src={load} className="card-img-top" alt="..."/>
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <a href="/" className="btn btn-primary btn-sm" style={{float: 'right'}}>click</a>
                </div>
              </div>            
            </div>
            <div className="col">
            <div className="card" style={{width: '10rem'}}>
                <img src={load} className="card-img-top" alt="..."/>
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <a href="/" className="btn btn-primary btn-sm" style={{float: 'right'}}>click</a>
                </div>
              </div>             
           </div>
            <div className="col">
            <div className="card" style={{width: '10rem'}}>
                <img src={load} className="card-img-top" alt="..."/>
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <a href="/" className="btn btn-primary btn-sm" style={{float: 'right'}}>click</a>
                </div>
              </div>             
            </div>
        </div>
    
       
    </div>

  )
}

export default HomeTrend
