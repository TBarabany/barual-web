import React from 'react'
import BarualPropertiesService from '../../services/BarualService'
import PropertyCard from '../misc/PropertyCard'
import {Link} from 'react-router-dom'

const PROPERTY_TYPES = [
  {
    type: 'flat',
    name: 'Piso'
  },
  {
    type: 'room',
    name: 'Habitación'
  },
  {
    type: 'garage',
    name: 'Garaje'
  },
  {
    type: 'commercialSpace',
    name: 'Local'
  },
  {
    type: null,
    name: 'Reset'
  }
]


class Properties extends React.Component {
  state = {
    properties: [],
    loading: true,
    propertyType: null
  }

  componentDidMount() {
    BarualPropertiesService.getProperties()
      .then(properties => {
        this.setState({ properties, loading:false})
      })
  }

  componentDidUpdate(_, prevState) {
    if (prevState.propertyType !== this.state.propertyType) {
      BarualPropertiesService.getProperties(this.state.propertyType)
        .then(properties => this.setState({ properties }))
    }
  }

  handlePropertyType = (propertyType) => {
    this.setState({ propertyType })
  }

  render() {
    if (this.state.loading){
     return (
      <p>Loading...</p> 
     )
    } 

    return (
      <div className="Properties" >
        <div className="Filters btn-toolbar justify-content-between" style={{ marginBottom: '10px' }}>
          {PROPERTY_TYPES.map(({ type, name }) => (
            <button className='btn btn-outline-success' onClick={() => this.handlePropertyType(type)}>{name}</button>
          ))}
        </div>
        
        {this.state.properties.map((property,i) => (
          <PropertyCard property={property} key={i}/>
        )
        )}
      </div>
    )
 
  }

}
  
  export default Properties



