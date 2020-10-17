import React from 'react'
 import {Link} from "react-router-dom"

const Website = () => {
    return <div className="container"> 
    {/* ///// */}
       <div class="card text-center m-1">
  <div class="card-header">
    Template
  </div>
  <div class="card-body">
    <h5 class="card-title">Version 0</h5>
    <p class="card-text">A minimal portfolio for all users!</p>
    <Link to="/v0" class="btn btn-primary">View</Link>
  </div>
  <div class="card-footer text-muted">
  “ Choose a job you love, and you will never have to work a day in your life."
  </div>
</div>

<div class="card text-center m-1">
  <div class="card-header">
    Template
  </div>
  <div class="card-body">
    <h5 class="card-title">Version 1</h5>
    <p class="card-text">A picturesque portfolio for all users!</p>
    <Link to="/v1" class="btn btn-primary">View</Link>
  </div>
  <div class="card-footer text-muted">
  “ Work to become, not to acquire."
  </div>
</div>
    </div>
}

export default Website
