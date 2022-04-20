import './Search.css';

const Search = () => {
  return (
    <div class="input-group">

      <span class="input-group-text" id="basic-addon1">
        <i className="fas fa-search"></i>
      </span>

      <input type="text" class="form-control" 
      placeholder="Search" aria-label="Search" 
      aria-describedby="basic-addon1" />
    </div>
  )
}

export default Search
