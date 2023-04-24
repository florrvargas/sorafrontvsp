import React from 'react';
import './Pago.css';
import mercadoPago from '../../../../assets/mercadoPago.png';
import efectivo from '../../../../assets/efectivo.png';
import tarjeta from '../../../../assets/tarjeta.png';


export default function Pago() {
    return(
        <div className="containerPago">
            <h1>Opciones de pago</h1>
            <ul className='opciones'>
                <li className='metodo'>
                    <img src={mercadoPago}width='80rem'/>
                    <a href="">
                        <span>Mercado Pago</span>
                    </a>
                    <input type="checkbox" />
                </li>
                <li className='metodo'>
                    <img src={efectivo}width='80rem'/>
                    <a href="">
                        <span>Efectivo</span>
                    </a>
                    <input type="checkbox" />

                </li>
                <li className='metodo'>
                    <img src={tarjeta}width='80rem'/>
                    <a href="">
                        <span>•••• 4465</span>
                    </a>
                    <input type="checkbox" />

                </li>
            </ul>
        </div>
    )
}