import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

constructor(props)  {
  super(props)
  this.state= {
    bookings: [],
    idDetilBooking:''
  }
}

handleChange = (event) => {
  var name = event.target.name
  var value = event.target.value
  this.setState({ [name] : value })
}

componentDidMount() {
  var config = {
    method: 'GET',
    url: 'https://esbbcext01.beacukai.go.id:8082/DetilBooking/',
    headers: {'Content-Type':'application/json'}
  }  
  this.ambil_data(config)
}

ambil_data(config) {

  axios.request(config).then(response => {
    // console.log('response: ', response)
    var bookings = [...this.state.bookings]
    var idDetilBooking = [...this.state.idDetilBooking]

    bookings = response.data
    this.setState({
          bookings,
          idDetilBooking:''
      })
    console.log("ok",this.state.bookings)
  }).catch(error => {
    console.log('error: ',error)
  })

    console.log(this.state.bookings)
}

  render()  {
    return (
   
   <div className= "App">
      <nav className="navbar fixed-top navbar-light bg-dark">
        <a className="navbar-brand">
          <img src={require('./ceisa.png')} width="160" height="50"/>
        </a>
        
        
        
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    
      <div className= "container" style={{marginTop:"100px"}}>
        <div className="row">
          <div className= "col-md-12">
            <div className="card">
                  <div className="card-header">
                    <a className="offset-md-1">BOOK TRUCK</a>
                  </div>
                  <div className="card-body">
                    <form>

                  <div className="row">
                    <div className= "col-md-3">
                    <div className="form-group">
                      <label>B/L Number</label>
                      <input type="text" className="form-control"/>
                    </div>
                    </div>
                    <div className= "col-md-3">
                    <div className="form-group">
                      <label>From</label>
                      <input type="text" className="form-control"/>
                    </div>
                    </div>
                    <div className= "col-md-3">
                    <div className="form-group">
                      <label>To</label>
                      <input type="text" className="form-control"/>
                    </div>
                    </div>
                    <div className= "col-md-3">
                    <div className="form-group">
                      <label>Dipo</label>
                      <input type="text" className="form-control"/>
                    </div>
                    </div>
                  </div>   

                  <div className="row">
                    <div className= "col-md-3">
                    <div className="form-group">
                      <label>Plan Date</label>
                      <input type="date" className="form-control"/>
                    </div>
                    </div>
                    <div className= "col-md-3">
                    <div className="form-group">
                      <label>Booking Date</label>
                      <input type="date" className="form-control"/>
                    </div>
                    </div>
                    <div className= "col-md-3">
                    <div className="form-group">
                      <label>B/L Date</label>
                      <input type="date" className="form-control"/>
                    </div>
                    </div>
                  </div>

                  <div className="row">  
                    <div className= "col-md-3">
                    <div className="form-group">
                      <label>SP2 Valid Date</label>
                      <input type="date" className="form-control"/>
                    </div>
                    </div>
                    <div className= "col-md-3">
                    <div className="form-group">
                      <label>SPC Valid Date</label>
                      <input type="date" className="form-control"/>
                    </div>
                    </div>
                  </div>  

                  <div className="row">
                    <div className= "col-md-4">
                    <div className="form-group">
                      <label>Container Number</label>
                      <input type="text" className="form-control"/>
                    </div>
                    </div>
                    <div className= "col-md-4">
                    <div className="form-group">
                      <label>Container Size</label>
                      <input type="text" className="form-control"/>
                    </div>
                    </div>
                    <div className= "col-md-4">
                    <div className="form-group">
                      <label>Container Type</label>
                      <input type="text" className="form-control"/>
                    </div>
                    </div>
                  </div>  
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                  </div>
            </div>
          </div>
        </div>
        <br/>

        <div className="row">
          <div className="col-md-6">
            <div className= "card">
              <div className="card-body">
              <div className= "card">
              <div className="card-body">
                <div class="embed-responsive embed-responsive-1by1">
                  <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4322741323062!2d106.87309111427254!3d-6.206572495506975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f48566a071ef%3A0x600f3ad15637ed13!2sDirektorat%20Jenderal%20Bea%20dan%20Cukai!5e0!3m2!1sid!2sid!4v1573171263944!5m2!1sid!2sid" allowfullscreen></iframe>
                </div>
              </div>
              </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className= "card">
              <div className="card-body"> <p>Data</p>{
              this.state.bookings.map(data =>
                 <div className= "card">
                    <div className="card-body">
                      <div className="row">
                      <div className="col-md-4">
                      <h5>{data.booking.depo}</h5>
                      <h8>{data.booking.bl_no}</h8>
                      </div>
                      <div className="col-md-4">
                      <h5>{data.booking.destination}</h5>
                      <h8>Rp. {data.hargaPenawaran}</h8>
                      </div>
                      <div className="col-md-4">
                      <button className="btn btn-success">Edit</button>
                      <br/>
                      <button className="btn btn-danger">Delete</button>
                      </div>
                      </div>
                    </div>
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
  }
}

export default App;