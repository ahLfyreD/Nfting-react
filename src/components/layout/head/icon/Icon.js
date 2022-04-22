
const Icon = () => {
  return (
    <div className="container d-flex">

      <select className="form-select form-select-sm" 
              aria-label=".form-select-sm example">

        <option selected>lang</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>

      </select>

      <button type="button" 
              className="btn-lg btn-light">

        <i className="fas fa-bell"></i>

      </button>

      <button type="button" className="btn-lg btn-light" 
              data-bs-toggle="tooltip" data-bs-html="true" 
              title= {{ }}>
        
        <i className="fas fa-user-circle"></i>

      </button>

    </div>
  )
}

export default Icon
