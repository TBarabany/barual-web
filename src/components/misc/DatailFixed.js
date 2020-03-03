import React from 'react'
import BarualPropertiesService from '../../services/BarualService'

const CarouselImage = ({ img, active }) => (
  <div className={`carousel-item ${active ? 'active' : ''}`}>
    <img src={img} className="d-block w-100" alt="..." />
  </div>
)

class DetailFixed extends React.Component {
  state = {
    property: {},
    loading: true
  }

  componentDidMount() {
    BarualPropertiesService.getProperty(this.props.id)
      .then(property => {
        console.log(property)
        this.setState({ property, loading: false })
      })
  }
  render() {

    if (this.state.loading){
      return (
       <p>Loading...</p> 
      )
     } 
 
     return (
      <div className="DetailFixed">

        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {
              this.state.property.images.length
                ? this.state.property.images.map((img, i) => (
                  <CarouselImage img={img} active={i === 0} />
                ))
                : <CarouselImage img="/white.jpg" active />
            }
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="top-box"> 
          <h4> 
            {this.state.property.modality === 'rent' ? 'Alquiler' : 'Venta'}
            {' '}de{' '}
            {this.state.property.propertyType === 'Room' ? 'habitación' : 'Flat' ? 'piso' : 'CommercialSpace' ? 'local' : 'garaje'} 
            {' '}en{' '}
            {this.state.property.address}
          </h4>
          <p>Precio: {this.state.property.price}€</p>
          <p>{this.state.property.squareMeters} m<sup>2</sup></p>
        </div>
        <div className="description"> 
          <p> 
            {this.state.property.description}
          </p>       
        </div>
      </div>
     )
  }
}
  
  export default DetailFixed

