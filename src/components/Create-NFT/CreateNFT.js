import { Link } from 'react-router-dom'

const Create = () => {
  return (
    <div className="container-fluid">
        <Link to="/"><i className="fas fa-arrow-left"></i></Link>

        <div className="container d-flex justify-content-center align-items-center">
            <h1>Create NFT</h1>
        </div>

    </div>
  )
}

export default Create
