import React from 'react';
import './Conductoras.css';
import conductora from '../../assets/Conductora.jpg';
import mujeres from '../../assets/Mujeres.png';
import asistencia from '../../assets/Asistencia.png';
import auto from '../../assets/Auto.png'

export default function Conductoras() {
  return (
    <div className='containerConductora'>

{/*---------------------- INTRO ----------------------*/}    
        <div className="introCond">
            <div className="leftCond">
                <h1>¿Quieres conducir con nosotras?</h1>
                <a href="/Registro">
                <button className='button'>Regístrate para conducir </button>
                </a>
                </div>

                <div className="rightCond">
                    <img src={conductora} alt="" width='600rem'/>
                </div>
            </div>

 {/*--------------------- REQUISITOS ---------------------*/}
    <div className="requisitosCond">
        <div className="reqCond">
            <div className="infoReq">
                <div className="leftReq">
                    <h1>¿Qué necesitas para ser parte de Sora?</h1><br/>
                    <span> ● Ser mayor de 18 años.</span>
                    <span> ● Puntualidad.</span>
                    <span> ● Vehículo propio.</span>
                    <span> ● Responder un formulario para saber si cumples con los requisitos.</span>
                </div>
                <div className="rigthReq">
                        <img src={auto} alt="" width='180rem'/>
                </div>
            </div>
        </div>
        <div className="reqCond">
            <div className="infoReq">
                <div className="rigthReq">
                    <img src={asistencia} alt="" width='220rem'/>
                </div>
                <div className="leftReq">
                    <h1>¿Qué te ofrecemos?</h1><br />
                    <span> ● Comisiones mejores que la del mercado.</span>
                    <span> ● Asistencia mecánica online en ruta.</span>
                    <span> ● Seguridad en tu traslado.</span>
                </div>
            </div>
        </div>
        <div className="reqCond">
            <div className="infoReq">
                <div className="leftReq">
                    <h1>¿Quiénes irán contigo?</h1> <br />
                    <span> ● MUJERES y/o integrantes de la comunidad LGBT</span>
                    <span> ● MADRES</span>
                    <span> ● DOGLOVERS</span>
                </div>
                <div className="rightReq">
                    <img src={mujeres} alt="" width='200rem'/>
                </div>
                
            </div>
        </div>

        <div className="reqCond2">
            <div className="infoReq">
                <div className="leftReq">
                    <h1>¿Qué necesitas para ser parte de Sora?</h1><br/>
                    <span> ● Ser mayor de 18 años.</span>
                    <span> ● Puntualidad.</span>
                    <span> ● Vehículo propio.</span>
                    <span> ● Responder un formulario para saber si cumples con los requisitos.</span>
                </div>
                <div className="rigthReq">
                        <img src={auto} alt="" width='180rem'/>
                </div>
            </div>
        </div>
        <div className="reqCond2">
            <div className="infoReq">
                <div className="leftReq">
                    <h1>¿Qué te ofrecemos?</h1><br />
                    <span> ● Comisiones mejores que la del mercado.</span>
                    <span> ● Asistencia mecánica online en ruta.</span>
                    <span> ● Seguridad en tu traslado.</span>
                </div>
                <div className="rigthReq">
                    <img src={asistencia} alt="" width='220rem'/>
                </div>
            </div>
        </div>
        <div className="reqCond2">
            <div className="infoReq">
                <div className="leftReq">
                    <h1>¿Quiénes irán contigo?</h1> <br />
                    <span> ● MUJERES y/o integrantes de la comunidad LGBT</span>
                    <span> ● MADRES</span>
                    <span> ● DOGLOVERS</span>
                </div>
                <div className="rightReq">
                    <img src={mujeres} alt="" width='200rem'/>
                </div>
                
            </div>
        </div>
    </div>

 {/*--------------------- SGDF ---------------------*/}
    </div>
  )
}
