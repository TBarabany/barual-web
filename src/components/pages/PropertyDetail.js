import React from 'react'
import BarualPropertiesService from '../../services/BarualService'
import DetailFixed from '../misc/DatailFixed'
import DetailChange from '../misc/DetailChange'
import Message from '../misc/Message'

class PropertyDetail extends React.Component {
  state = {
    property: {},
    loading: true
  }
  componentDidMount() {
    BarualPropertiesService.getProperty(this.props.match.params.id)
      .then(property => {
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
      <div className="PropertyDetail">
        <DetailFixed id={this.props.match.params.id}></DetailFixed>
        <DetailChange id={this.props.match.params.id}></DetailChange>
        <Message id={this.props.match.params.id} />


      </div>
     )
  }
}
  
  export default PropertyDetail