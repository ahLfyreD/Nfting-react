import './HomeNews.css'

const HomeNews = () => {
  return (
    <div className="news">
        <div className="head-news">
           <h3>News Feed and Blogs</h3>
           <button type='button'
                    className='click'>
              View All 
              <span>
                <i className="fas fa-arrow-right"></i>
              </span>
           </button>
        </div>
        <div className="row mx-5 mt-5">
            {/* Each column contains components with images, a radio button and a name of the collector. */}
            <div className="col">
              <div class="card" style={{width: '10rem'}}>
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col">
            <div class="card" style={{width: '10rem'}}>
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>            
            </div>
            <div className="col">
            <div class="card" style={{width: '10rem'}}>
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>            
            </div>
            <div className="col">
            <div class="card" style={{width: '10rem'}}>
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>             
           </div>
            <div className="col">
            <div class="card" style={{width: '10rem'}}>
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>             
            </div>
        </div>
        

    </div>
  )
}

export default HomeNews
