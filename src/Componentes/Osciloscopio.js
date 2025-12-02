
import "./Osiloscopio.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

export default function Osciloscopio() {

   const [modalImg, setModalImg] = useState(null);
  
    const abrirModal = (src) => setModalImg(src);

    const [imgModal, setImgModal] = useState(null);

const cerrarModal = () => {
  setImgModal(null);
};
 return (
     <div className="app-container">
      <nav className="navbar">
        <div className="nav-left">
          <img
            src={`${process.env.PUBLIC_URL}/logo.svg`}
            alt="logo"
            className="nav-logo"
            
          />
        </div>
        <Link to="/" className="regresar-btn">Regresar</Link>
        <div className="nav-right">
         
          <HashLink smooth to="/#sobre-mi">Sobre mí</HashLink>
          <Link to="/Osciloscopio#contacto">Contacto</Link>

          <div className="dropdown">
            <button className="dropbtn">Proyectos ▾</button>

            <div className="dropdown-content">
              <Link to="/ilustracion">Ilustración</Link>
              <Link to="/osciloscopio">Osciloscopio</Link>
              <Link to="/theroad">The Road</Link>
              <Link to="/malasjuntas">Malas Juntas</Link>
            </div>
          </div>
        </div>
      </nav>

     
      {/* HERO */}
     <section
  className="hero2"
    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/imagenes/osc.png)` }}
>
     <div className="hero2-center">
    <h1>“Osciloscopio”</h1>
    <p className="hero2-sub">“ Visuales reactivos en P5.js “</p>
    <p className="hero2-warning">" El sonido toma forma. "</p>
  </div>
</section>

      {/* Sintro */}
     <section id="Introduccion" className="Introduccion">
  <div className="Introduccion container">
    
    <div className="Introduccion-text-left">
      <p className="quote2">“ Donde la música dibuja la imagen. ”</p>
      <h2>Explorando la<br/>Forma del Sonido</h2>

      {/* SUBTEXTO DEBAJO DEL TÍTULO */}
      <p className="subAutor">
        Fransisca Huenullán
      </p>
       <img src= {`${process.env.PUBLIC_URL}/Svg iconos/estrella-03.svg`} className="Introduccion-star" />
    </div>

    {/* COLUMNA DERECHA */}
    <div className="Introduccion-text-right">

      <p className="bioMal">
        Este proyecto consiste en un generador de visuales interactivos 
        que responde al sonido en tiempo real, desarrollado íntegramente en p5.js. 
        Su diseño integra un enfoque artístico y técnico, inspirado en el funcionamiento 
        de osciloscopios analógicos en modo XY y en la gráfica sinestésica de 
        artistas como Jerobeam Fenderson.
        <br/>
        <br/>
        <br/>
        <br/>
      </p>

      {/* IMAGEN ALINEADA CON LA BIO */}
     <div className="imgBox">
  <img src="/imagenes/osc.png" className="zoom-img"
                onClick={() => abrirModal("imagenes/osc.png")}
                alt=""
   />
  <p className="imgText">
    <br/>
    <br/>
     A partir de estos referentes, se establecieron relaciones 
     directas entre parámetros sonoros —volumen, frecuencia y fase— y sus 
     equivalentes visuales —tamaño, color y forma—, creando un sistema en 
     el que el audio influye directamente en la composición gráfica.
  </p>
        </div>
      </div>
   </div>
</section>

 {/* caja */}
       <div className="caja-cta">
    <p>“ Cada sonido crea un universo en movimiento  ”</p>
  </div>

      {/* PROYECTOS */}
      <section id="proyecto2" className="proyecto2">
        <h2>Desarrollo del Osiloscopio</h2>
         <p className="proyecto2-sub">
         Exploración y Construcción
         </p>
    <div className="proyecto-item nuevo-proyecto2">
</div>
        {/* Galería inferior */}
        <div className="galeria2">

 <div className="galeria2-item">
    <img src="imagenes/osi1.png"  className="zoom-img"
                onClick={() => abrirModal("/imagenes/osi1.png")}
                alt="" />
    <h4>Diseño del concepto visual</h4>
    <p>
      Se define un sistema basado en el Golden Angle para crear una espiral 
      armónica de círculos que sirva como base del generador visual.
    </p>
  </div>

  {/* ITEM 2 */}
  <div className="galeria2-item">
    <img src="/imagenes/codigo.jpeg"className="zoom-img"
                onClick={() => abrirModal("/imagenes/codigo.jpeg")}
                alt="" />
    <h4>Programación en P5.js</h4>
    <p>
     Se implementa el algoritmo, se integran los parámetros de animación 
     y se conecta el visual con la amplitud del audio para generar reactividad en tiempo real.
    </p>
  </div>

  {/* ITEM 3 */}
  <div className="galeria2-item">
  <video
    src={process.env.PUBLIC_URL + "/miVideo/miVideo.mp4"}
    className="zoom-video"
    muted
    loop
    playsInline
    width="100%"
    onClick={() =>
      abrirModal(process.env.PUBLIC_URL + "/miVideo/miVideo.mp4")
    }
  />
    <h4>Integración audiovisual final</h4>
    <p>
      Se ajustan colores, tamaños y comportamientos según el sonido, 
      logrando una composición dinámica y coherente que responde directamente a la música.
    </p>
  </div>

</div>
</section>

 {/* PROTOTIPOOOOO */}
<section id="Prototipos" className="Prototipos">
  <div className="Prototipos-text-left">
     <div className="Prototipos container"></div>
   
  {/* BLOQUE PROTOTIPOS */}
  <div className="container"></div>
  <section className="prototipos-wrapper">

  {/* PROTOTIPO 4 */}
<section className="prototipo">

  {/* Texto final debajo de la galería que es la conclusion duh */}
  <p className="prototipo-final-text">
    El proyecto consiste en un generador de visuales reactivos al audio, construido en P5.js, 
    donde se emplea un algoritmo basado en el Golden Angle para distribuir círculos en espiral de forma armónica . 
    Estas formas cambian su tamaño, color y brillo según la amplitud del sonido, creando 
    una animación dinámica que responde en tiempo real a la música. El resultado es una composición visual 
    fluida y orgánica que integra matemáticas, diseño y programación para producir una experiencia audiovisual inmersiva .
     </p>
</section>
</section>
  </div>
</section>


{/* P5.js */}
<section className="p52-container">
  <h2 className="p52-title">Demo de Osciloscopio tektronicx</h2>

  <div className="p52-frame-box">
    <iframe
      src="https://editor.p5js.org/fransisca.huenullan/full/qW6CE2WNt"
      title="Osciloscopio tektronicx- p5.js"
      className="p52-frame"
      allow="fullscreen"
    ></iframe>
  </div>
</section>

          {/* CONTACTO */}
<footer id="contacto" className="footer">
  <div className="footer-cta">
    <p>¿Tienes un proyecto en mente?</p>
    <p>Conversemos y creemos algo increíble.</p>
  </div>

  <img
    src={`${process.env.PUBLIC_URL}/logo.svg`}
    alt="logo"
    className="nav-logo"
  />

  <div className="footer-columns">
    <div className="footer-col">
      <h4>CONTACTO</h4>
      <p>+56 9 6435 0081</p>

      {/* CORREO CLICKEABLE */}
      <p>
        <a href="mailto:fihg.diseno@gmail.com" className="footer-link">
          fihg.diseno@gmail.com
        </a>
      </p>
    </div>

    <div className="footer-col">
      <h4>Redes sociales</h4>

      {/* INSTAGRAM CLICKEABLE */}
      <p>
        <a
          href="https://www.instagram.com/fihg.diseno/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Instagram
        </a>
      </p>

      {/* GITHUB CLICKEABLE */}
      <p>
        <a
          href="https://github.com/franhuenu"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          GitHub
        </a>
      </p>
    </div>
  </div>

  <p className="footer-copy">
    © 2025 Fransisca Huenullán — Diseñado y desarrollado en ReactJS
  </p>
</footer>

  {/* MODAL */}
      {modalImg && (
        <div className="modal-overlay" onClick={() => setModalImg(null)}>
    {modalImg.endsWith(".mp4") ? (
      <video src={modalImg} className="modal-video" controls autoPlay />
    ) : (
      <img src={modalImg} className="modal-img" alt="" />
    )}
  </div>
      )}

    </div>
    
  );
}
