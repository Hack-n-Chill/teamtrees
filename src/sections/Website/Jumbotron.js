import React from 'react'
import {Link, useHistory} from "react-router-dom"

const Jumbotron = () => {
    const history = useHistory()
    return (
        <div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4" />
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <Link class="btn btn-primary btn-lg" onClick={() => history.push("/v0")}>Learn more</Link>
  </p>
</div>
    )
}

export default Jumbotron
