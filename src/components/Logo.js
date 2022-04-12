import img1 from './images/logo.png'

const Logo = () => {
  return (
    <div className="logo">
        <img src={ img1 } alt="" />
        <div className="icon"><i className="fas fa-bars"></i></div>
    </div>
  )
}

export default Logo
