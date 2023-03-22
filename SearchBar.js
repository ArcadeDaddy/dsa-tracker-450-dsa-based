import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function SearchBar() {
  return (
    <form>
  <div className="form-group">
    <input type="text" className="form-control" placeholder="Search" />
    <div className="input-group-prepend">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Filter
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="/matrix">Option 1</a>
        <a className="dropdown-item" href="/string">Option 2</a>
        <a className="dropdown-item" href="/array">Option 3</a>

      </div>
    </div>
  </div>
</form>

  )
}

export default SearchBar;