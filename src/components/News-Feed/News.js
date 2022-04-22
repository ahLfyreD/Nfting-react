import { Link } from 'react-router-dom'

const News = () => {
  return (
    <div className="container-fluid">
        <Link to="/"><i className="fas fa-arrow-left"></i></Link>

        <div className="container d-flex justify-content-center align-items-center">
            <h1>News Feed</h1>
        </div>

    </div>
  )
}

export default News