import React from 'react'
import { Link } from 'react-router-dom'

const PropertyCard = ({ property }) => {
  const{ images, address, price, squareMeters, propertyType, id} = property

  return (
    <div className='PropertyCard card mb-3'>
      <div className="row no-gutters align-items-center">
        <Link to={`/properties/${id}`} className="col-md-4">
          <div>
            <img src={images[0]} className="card-img" alt="..."/>
          </div>
        </Link>
        <div className="col-md-8">
          <div className="card-body">
              <h5 className="card-title">{propertyType}</h5>
              <p className="card-text">{address}</p>
              <p className="card-text">{price}</p>
              <p className="card-text">{squareMeters}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard

