import React from 'react';
import './QuienesSomos.css';
import nosotras from '../../assets/Nosotras.png'
import movete from '../../assets/MoveteSeguraFeliz.png'
import inseguras from '../../assets/55.png'

export default function QuienesSomos() {
  return (
    <div className='containerNosotras'>
      
{/*---------------------- INTRO ----------------------*/}    

      <div className="inicioNos">
        <div className="leftNos">
          <h1>Somos una startup de movilidad femenina ideada por mujeres, para mujeres.</h1>
        </div>
        <div className="rightNos">
          <img src={nosotras} alt="" width='500rem' />
        </div>
      </div>
 
{/*-------------------- NOSOTRAS --------------------*/}    
   
      <div className="inicioNos">
        <div className="rightNos">
          <img src={movete} alt="" width='400rem' />
        </div>
        <div className="leftNos">
          <span>Sora nace para que mujeres, madres y/o doglovers puedan trasladarse seguras y felices.</span>
          <span>En Sora, mujeres trasladan a mujeres.
          Porque queremos que llegues segura, tu bienestar SÍ nos importa.</span>
        </div>
      </div>

      <div className="inicioNos">
        <div className="leftNos">
          <span>Es preocupante los niveles de inseguridad que vivimos las mujeres cuando queremos tomar un taxi.
          </span>
          <span>Queremos viajar tranquilas, sin sentir miedo a que alguien nos puede acosar, violentar y/o abusar.</span>
          <span>Estamos aquí porque te queremos libre y feliz.</span>
        </div>
        <div className="rightNos">
          <img src={inseguras} alt="" width='400rem' />
        </div>
      </div>




    </div>
  )
}
