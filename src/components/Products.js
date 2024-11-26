import React from "react";
import '../styles/test.css';

import Calabaza01 from '../img/calabaza-carbon.png';
import Calabaza02 from '../img/calabaza-rosa.png';
import Calabaza03 from '../img/calabaza-manzana.png';
import Calabaza04 from '../img/calabaza-cafe.png';
import Calabaza05 from '../img/calabaza-vainilla.png';
import Calabaza06 from '../img/calabaza-lavanda.png';

const Products = () => {
  return (
    <div id="lista-products" class="containerizacion">
        <h1 id="encabezado" class="encabezado">Arenas para Gato</h1>
        <div class="row">
            <div class="four columns">
                <div class="card">
                    <div class="info-card">
                        <h4>Arena calabaza carbón 25kg</h4>
                        <img width="250" height="200" src={Calabaza01}></img>
                        <p class="precio"> <span class="u-pull-right ">$60.000</span></p>
                    </div>
                </div>
            </div>
            <div class="four columns">
                <div class="card">
                    <div class="info-card">
                        <h4>Arena calabaza manzana 25kg</h4>
                        <img width="250" height="200" src={Calabaza03}></img>
                        <p class="precio"> <span class="u-pull-right ">$60.000</span></p>
                    </div>
                </div>
            </div>
            <div class="four columns">
                <div class="card">
                    <div class="info-card">
                        <h4>Arena calabaza rosa 25kg</h4>
                        <img width="250" height="200" src={Calabaza02}></img>
                        <p class="precio"> <span class="u-pull-right ">$60.000</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="four columns">
                <div class="card">
                    <div class="info-card">
                        <h4>Arena calabaza café 25kg</h4>
                        <img width="250" height="200" src={Calabaza04}></img>
                        <p class="precio"> <span class="u-pull-right ">$60.000</span></p>
                    </div>
                </div>
            </div>
            <div class="four columns">
                <div class="card">
                    <div class="info-card">
                        <h4>Arena calabaza vainilla 25kg</h4>
                        <img width="250" height="200" src={Calabaza05}></img>
                        <p class="precio"> <span class="u-pull-right ">$60.000</span></p>
                    </div>
                </div>
            </div>
            <div class="four columns">
                <div class="card">
                    <div class="info-card">
                        <h4>Arena calabaza lavanda 25kg</h4>
                        <img width="250" height="200" src={Calabaza06}></img>
                        <p class="precio"> <span class="u-pull-right ">$60.000</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
);
};

export default Products;
