import React from 'react'

const Details = () => {
  return (
    <div><h2>Details</h2>
        <form>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Student name:</label>
    <input type="text" className="form-control" id="name" aria-describedby=""/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="course" className="form-label">Course:</label>
    <input type="text" className="form-control" id="course" aria-describedby=""/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="address" className="form-label">Address:</label>
    <input type="text" className="form-control" id="address" aria-describedby=""/>
    
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <div className="d-flex justify-content-center">
  <button type="submit" className="btn btn-primary">Submit</button>
</div>
</form>
    </div>
  )
}

export default Details