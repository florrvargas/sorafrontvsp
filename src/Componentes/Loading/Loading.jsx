import React from 'react';
import './Loading.css'

export default function Loading() {
  return (
    <div id="container">
    <label class="loading-title">Cargando ...</label>
    <span class="loading-circle sp1">
      <span class="loading-circle sp2">
        <span class="loading-circle sp3"></span>
      </span>
    </span>
  </div>
  )
}
