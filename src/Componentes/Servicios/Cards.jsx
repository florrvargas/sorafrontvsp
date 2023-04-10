import React from 'react';
import './Cards.css';

export default function Cards({nombre, imagen, info}) {
  return (
    <div className="card shadow">
        <div className="titleCard">
            <h1>{nombre}</h1>
        </div>
        <div className="infoCard">
            <span>{info}</span>
        </div>
        <div className="imageCard">
            <img src={imagen} alt="" width='155rem'/>
        </div>
    </div>
  )
}
