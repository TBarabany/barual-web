import React from 'react'
import BarualPropertiesService from '../../services/BarualService'
var FA = require('react-fontawesome')


class DetailChange extends React.Component {
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
      <div className="DetailChange">
        <div className="IconDetails"> 

          {this.state.property.rooms
            ? (
            <p> <i class="fa fa-bed"></i> {this.state.property.rooms} </p>
            )
            : null
          }

          {this.state.property.bathrooms
            ? (
            <p> <i class="fa fa-bath"></i> {this.state.property.bathrooms} </p>
            )
            : null
          }

          

          {this.state.property.gender === 'boys'? 
            (
              <p><i class="fa fa-male"></i></p>
            ):this.state.property.gender === 'girls'?
            (
              <p><i class="fa fa-female"></i></p>
            ):this.state.property.gender === 'both'?
            (
              <p>
                <i class="fa fa-male"></i>
                <i class="fa fa-female"></i>
              </p>
            ): null
          }

        </div>

        <div className="ExtraDetails">
          {this.state.property.minimumStay
            ? (
              <p>Estancia Mínima: {this.state.property.minimumStay} meses</p>
            )
            : null
          }

          {this.state.property.billsIncluded
            ? (
              <p>Facturas Incluidas</p>
            )
            : null
          }
          
          {this.state.property.smoking
            ? (
              <p>Fumadores</p>
            ):
            !this.state.property.smoking?
             (
              <p>Prohibido Fumar</p>

             ):null
          }

          {this.state.property.pets?
            (
              <p>Se admiten Mascotas</p>
            ):!this.state.property.pets?
            (
              <p>No se admiten Mascotas</p>
            )
            : null
          } 
          
          {this.state.property.largeCar
            ? (
              <p>Plaza para Coche Grande</p>
            )
            : null
          }

          {this.state.property.automaticDoor
            ? (
              <p>Puerta Automática</p>
            )
            : null
          }

          {this.state.property.security
              ? (
              <p>Con Alarma</p>
              )
              : null
            }

            {this.state.property.elevator
              ? (
              <p>Con Ascensor</p>
              )
              : null
            }

            {this.state.property.garage
              ? (
              <p>Con Garaje</p>
              )
              : null
            }

            {this.state.property.terrace
              ? (
              <p>Con Terraza</p>
              )
              : null
            }

            {this.state.property.doorman
              ? (
              <p>Con Portero</p>
              )
              : null
            }

          {this.state.property.furnished
            ? (
            <p>Amueblado</p>
            )
            : null
          }  

            {this.state.property.yearConstruction
              ? (
              <p>Construido en {this.state.property.yearConstruction} </p>
              )
              : null
            }

            {this.state.property.floor
              ? (
              <p>Piso: {this.state.property.floor}º</p>
              )
              : null
            }

            {this.state.property.smokeOutlet
              ? (
              <p>Salida de Humo</p>
              )
              : null
            }

            {this.state.property.windowDisplay
              ? (
              <p>{this.state.property.windowDisplay} Escaparates</p>
              )
              : null
            }

        </div>

        <div className="Costs">
          {this.state.property.heatingCost
            ? (
            <p>Coste de la Calefacción: {this.state.property.heatingCost}€/mes</p>
            )
            : null
          }

          {this.state.property.electricityCost
            ? (
            <p>Factura de la Luz: {this.state.property.electricityCost}€/mes</p>
            )
            : null
          }

          {this.state.property.communityCost
            ? (
            <p>Coste de Comunidad: {this.state.property.communityCost}€/mes</p>
            )
            : null
          }

          {this.state.property.waterCost
            ? (
            <p>Factura de Agua: {this.state.property.waterCost}€/mes</p>
            )
            : null
          }

        </div>
      </div>
     )
  }
}
  
  export default DetailChange