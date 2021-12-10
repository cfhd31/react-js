import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

export default function Formulario({envio, change}) {

    const {formData } = useCartContext()
    return (
        <div className="rowAcomodar">
                  <div className="formu">
                        <form id="contact" onSubmit={envio} onChange={change}>
                            <h3>Complete el formulario para finalizar compra</h3>
                            <fieldset>
                                <input placeholder="Nick del Piloto" name="name"  type="text" tabIndex="1" required autoFocus defaultValue={formData.name}/>
                            </fieldset>
                            <fieldset>
                                <input placeholder="Numero de telefono" name="phone"   type="tel" tabIndex="2" min="6" max="50" required defaultValue={formData.phone}/>
                            </fieldset>
                            <fieldset>
                                <input placeholder="Email" name="email" type="email" tabIndex="3" required defaultValue={formData.email}/>
                            </fieldset>
                            <fieldset>
                                <input placeholder="Vuelva a ingresar el Email" name="email2" type="email" tabIndex="4" required defaultValue={formData.email2}/>
                            </fieldset>
                            <fieldset>
                                <textarea placeholder="Algun comentario que nos quiera dejar?" name="comentario" type="text" tabIndex="5" defaultValue={formData.comentario}></textarea>
                            </fieldset>
                            <p>
                                <input type="checkbox" name="terminos" value="1" required />
                                Acepta términos y condiciones
                            </p>

                            <fieldset>
                                <button disabled={formData.name === "" || formData.phone === "" || formData.email === "" || formData.email!==formData.email2 ? true : false} name="Enviar" type="submit" id="contact-submit" data-submit="...Sending" variant="success">Generar Orden</button>
                                <p className="copyright">volver a<Link to={`/`} className="waves-effect waves-light btn">Inicio</Link></p>
                            </fieldset>  
                        </form>
                    </div>
        </div>
    )
}
