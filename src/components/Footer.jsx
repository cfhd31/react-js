import React from "react";

export default function Footer() {
  return (
    <footer className='page-footer greybg-dark text-white'>
      <div className='container'>
        <div className='row'>
          <div className='col l6 s12'>
            <h5 className='white-text'>MERCADO NEGRO</h5>
            <p className='grey-text text-lighten-4'>
                Somos un equipo de mineros e industriales de la Corporacion Primera Orden [ORDN], en la Alianza Bot5
            </p>
          </div>
          
          <div className='col l6 s12'>
            <h5 className='white-text'>CONTACTO</h5>
            <p><i className="tiny material-icons">Nick de contacto:</i> MixtiK S.A.</p>
            <p><i className="tiny material-icons">email:</i> contacto@mercadonegro.com</p>
            <p><i className="tiny material-icons">Sistema: </i> Decklein y Fade </p>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container'>
          Hecho por <span className='blue-text text-lighten-3'>Francisco Herrera (cfhd31)</span>
        </div>
      </div>
    </footer>
  );
}