import React from 'react'

const Home = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">student app</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Details</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link active" aria-disabled="true">register</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
<h1>Student page</h1>
<img src="images/img2.avif" alt="" />
<p><marquee>welcome to website</marquee></p>
    </div>
  )
}

export default Home