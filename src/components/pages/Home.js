import React from 'react'
import {Link} from 'react-router-dom'


class Home extends React.Component {
  render() {
    return (
      <div className='Home' > 
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className=""></li>
            <li data-target="#myCarousel" data-slide-to="1" className=""></li>
            <li data-target="#myCarousel" data-slide-to="2" className="active"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item">
              <img src="/edificios.jpg" className="bd-placeholder-img w-100 h-100" alt="..."/>
              <div className="container">
                <div className="carousel-caption text-left">
                  <h1> Todos nuestros pisos a tu disposicón</h1>
                  <p> Conoce nuestro catálogo de pisos disponibles para todos los gustos y presupuestos</p>
                  <p><Link className="btn btn-lg btn btn-info" to="/properties" role="button">Todos los pisos</Link></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/kitchen.jpg" className="bd-placeholder-img w-100 h-100" alt="..."/>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Los mejores profesionales</h1>
                  <p>Con mas de 50 años en el sector, te ayudamos a encontrar la casa de tus sueños.</p>
                  <p><Link className="btn btn-lg btn btn-info" to="/" role="button">Conócenos</Link></p>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
             <img src="/store.jpg" className="bd-placeholder-img w-100 h-100" alt="..."/>
              <div className="container">
                <div className="carousel-caption text-right">
                  <h1>Quieres abrir tu negocio?</h1>
                  <p>Te ayudamos a encontrar el mejor local para acceder a tus clientes.</p>
                  <p><Link className="btn btn-lg btn btn-info" to="/properties" role="button">Nuestros locales</Link></p>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="container marketing m-5">
          <div className="row">
            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img src="/pablo.jpg" className="bd-placeholder-img w-50 h-50 bd-placeholder-img rounded-circle" alt="..."/>
              <h2>Pablo López</h2>
              <p className="text-center">Llevo más de 10 años ayudando a mis clientes a encontar la case de los sueños</p>
              <p><Link className="btn btn-secondary" to="#" role="button">Contáctame</Link></p>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img src="/julian.jpg" className="bd-placeholder-img w-50 h-50 bd-placeholder-img rounded-circle" alt="..."/>
              <h2>Julian Martins</h2>
              <p className="text-center">Especialista en ayudarte a encontrar el local que necesitas</p>
              <p><Link className="btn btn-secondary" to="#" role="button">Contáctame</Link></p>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center">
              <img src="/maria.jpg" className="bd-placeholder-img w-50 h-50 bd-placeholder-img rounded-circle" alt="..."/>
              <h2>Maria Gomez</h2>
              <p className="text-center">Cualquier reforma soy la especialista en Barual para ayudarte</p>
              <p><Link className="btn btn-secondary" to="#" role="button">Contáctame</Link></p>
            </div>
          </div>
        </div>

        <hr className="featurette-divider"></hr>
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Te ayudamos a encontrar una hipoteca. <span className="text-muted">Todo lo que necesitas!</span></h2>
            <p className="lead">Te ayudamos a conseguir la mejor hipoteca, para que disfrutes lo antes posible de tu nuevo hogar. Nos peleamos con los bancos para conseguirte la mejor hipoteca. Y nos ocupamos de todo el papeleo.</p>
          </div>
          <div className="col-md-5">
            <img src="/bank.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="..."/>
          </div>
        </div>
        <hr className="featurette-divider"></hr>
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Todas las noticias. <span className="text-muted">Matente informado!</span></h2>
            <p className="lead">Noticias, artículos e informes para estar al día sobre el mercado inmobiliario.</p>
          </div>
          <div className="col-md-5">
            <img src="/news.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="..."/>
          </div>
        </div>
        <hr className="featurette-divider"></hr>
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Te ayudamos con la Reforma. <span className="text-muted">Una casa a tu medida!</span></h2>
            <p className="lead">Nuestro proceso de trabajo nos permite adelantarnos a los imprevistos evitando retrasos y sobrecostes.Cuidamos de los detalles y acabados de tu reforma ofreciéndote siempre un precio competitivo.</p>
          </div>
          <div className="col-md-5">
            <img src="/reform.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="..."/>
          </div>
        </div>
        <hr className="featurette-divider"></hr>
      </div>
      
      
  )
    
  }
}

export default Home