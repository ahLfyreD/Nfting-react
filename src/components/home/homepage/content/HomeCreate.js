import './HomeCreate.css'

const HomeCreate = () => {
  return (
    <div className="create">
        <h2>Create & Sell NFTs</h2>
        <div className="row mx-10 mt-3">
            {/* Each column contains components with images, a radio button and a name of the collector. */}
            <div className="col mx-4">
              <div class="card" style={{width: '10rem'}}>
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                <div class="card-body">
                <div className="display-content" ></div>
                    <h3>Setup Your Wallet</h3>
                    <p>Once you've set up the wallet of your choice, connect
                       it to NFTing by clicking the wallet icon in the
                       top right corner of the website.
                    </p>
                  
                </div>
              </div>
            </div>
            <div className="col mx-4">
            <div class="card" style={{width: '10rem'}}>
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                <div class="card-body">
                <div className="display-content"></div>
                    <h3>Create your collection</h3>
                    <p>Click my collection and setup your collection.
                       Add social links, a description, social & banner images,
                       and set a secondary sales fees.

                    </p>
                  
                </div>
              </div>            
            </div>
            <div className="col mx-4">
            <div class="card" style={{width: '10rem'}}>
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                <div class="card-body">
                <div className="display-content"></div>
                    <h3>Add your NFTs</h3>
                    <p>Upload your works(image, video, audio or 3D art), add a title 
                        and description, and customize your NFTs with properties with
                        properties, stats and unlockable contents.
                    </p>
                  
                </div>
              </div>            
            </div>
            <div className="col mx-4">
            <div class="card" style={{width: '10rem'}}>
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                <div class="card-body">
                <div className="display-content"></div>
                        <h3>List them for sale</h3>
                        <p>Choose between auctions, fixed-priced listing and declining price listing.
                            You choose how you want to sell your NFTingand we help you sell them. 
                        </p>
                  
                </div>
              </div>             
           </div>
        </div>
        {/* <div className="row">
            <div className="col">

            <div className="content">
                <div className="display-content"></div>
                    <h3>Setup Your Wallet</h3>
                    <p>Once you've set up the wallet of your choice, connect
                       it to NFTing by clicking the wallet icon in the
                       top right corner of the website.
                    </p>


            </div>

            </div>
            <div className="col">

            <div className="content">
                <div className="display-content"></div>
                    <h3>Create your collection</h3>
                    <p>Click my collection and setup your collection.
                       Add social links, a description, social & banner images,
                       and set a secondary sales fees.

                    </p>


            </div>

            </div>
            <div className="col">

            <div className="content">
                <div className="display-content"></div>
                    <h3>Add your NFTs</h3>
                    <p>Upload your works(image, video, audio or 3D art), add a title 
                        and description, and customize your NFTs with properties with
                        properties, stats and unlockable contents.
                    </p>


            </div>

            </div>
            <div className="col">

                <div className="content">
                    <div className="display-content"></div>
                        <h3>List them for sale</h3>
                        <p>Choose between auctions, fixed-priced listing and declining price listing.
                            You choose how you want to sell your NFTingand we help you sell them. 
                        </p>


            </div>

            </div>
        </div> */}
        

        <button type="button" 
                className="btn btn-secondary">
                
                Start 
        </button>

    </div>
  )
}

export default HomeCreate
