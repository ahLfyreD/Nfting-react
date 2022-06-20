import './Modal.css'

const Modal = () => {
  return (
    <div className='bg-modal'>
        <div className="modal-container">
            <div className="wallet-name">
                <i className="fas fa-user-circle"></i>
                <h4>My Wallet</h4>
            </div>
            <div className="wallet-connect">
                <h6>Connect wallet with one of our available wallet provider or create a new one</h6>
                <div className="connect">
                    <button>MetaMask <span>Popular</span></button>
                    <button>Coinbase Wallet</button>
                    <button>WalletConnect</button>
                    <button>Phantom <span>Solana</span></button>
                    <button>Glow <span>Solana</span></button>
                    <button className='btn-option'>Show More Option</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Modal
