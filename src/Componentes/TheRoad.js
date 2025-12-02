/*Informacion de codigo para estilos en https://www.w3.org/ */

/*  Como puse un p5.js aqui , venga y sientese porque le explicare 

tengo mi jueguito en p5.js que vive en un link.
Ese link es básicamente una página web sola, pero sola, como una mini web donde corre mi canvas.

React, por su lado, es mi página principal.
Entonces, ¿cómo mete una página dentro de otra página?

Faciiiil,mentira no lo fue... :C

utilice un  iframe sacado de lo nativo del HTML en W3 ...use w3 para todo, ni al caso.

Volvamos ,Un iframe es como poner una ventanam, osea como decir :
“oye, React, ábreme una ventanita aquí y muéstrame esta otra página adentro de mi portafolio”.

Y React dice...creo que dice:
“ya dale, pásame el link”.

Entonces yo le puse mi link:

https://editor.p5js.org/Atelier/full/4tQe_VaL8


y React abre la ventanita con mi juego adentro y en el css debo darle el tamaño del cancas y su posición.

FIN.

*/

import React, { useState } from "react";
import "./TheRoad.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function TheRoad() {
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
          <a href="#contacto">Contacto</a>

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
    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/imagenes/inicoTheRoad.jpg)` }}
>
     <div className="hero2-center">
    <h1>“The Road”</h1>
    <p className="hero2-sub">“ Terror Psicológico P5.js “</p>
    <p className="hero2-warning">" Retrazos de un mundo que ya no existe "</p>
  </div>
</section>

      {/* Sintro */}
     <section id="Introduccion" className="Introduccion">
  <div className="Introduccion container">
    
    <div className="Introduccion-text-left">
      <p className="quote2">“Tripas, Flotando en un espiral....”</p>
      <h2>Una Sinfonía<br/>Novela visual<br/>Interactiva</h2>

      {/* SUBTEXTO DEBAJO DEL TÍTULO */}
      <p className="subAutor">
        Fransisca Huenullán<br/>Sofía Garrido
      </p>
       <img src= {`${process.env.PUBLIC_URL}/Svg iconos/estrella-03.svg`} className="Introduccion-star" />
    </div>

    {/* COLUMNA DERECHA */}
    <div className="Introduccion-text-right">

      <p className="bioMal">
        The Road es una novela visual interactiva de terror psicológico desarrollada en p5.js, 
        que invita al jugador a sumergirse en una historia oscura y envolvente.
         A medida que avanza la narrativa, el usuario toma decisiones que afectan 
         el curso de los acontecimientos, desbloqueando distintos finales posibles.
        Este enfoque interactivo no solo fomenta la rejugabilidad, sino que también 
        crea una experiencia más personal e inmersiva. El estilo visual, el diseño sonoro y 
        la atmósfera inquietante están cuidadosamente trabajados para reforzar la tensión propia del género.
        <br/>
        <br/>
        <br/>
        <br/>
      </p>

      {/* IMAGEN ALINEADA CON LA BIO */}
     <div className="imgBox">
  <img src="/imagenes/Kataleya.jpg" className="zoom-img"
                onClick={() => abrirModal("/imagenes/Kataleya.jpg")}
                alt=""
   />
  <p className="imgText">
    <br/>
    <br/>
    La atmósfera —sostenida por ilustraciones, sonido y composición visual— 
    refuerza la tensión característica del género.
  </p>
        </div>
      </div>
   </div>
</section>

 {/* caja */}
       <div className="caja-cta">
    <p>“ Retrazos de un mundo que ya no existe.<br/>
         Obra visual integrada al juego The Road (2025) ”</p>
  </div>

      {/* PROYECTOS */}
      <section id="proyecto2" className="proyecto2">
        <h2>Desarrollo de la Novela</h2>
         <p className="proyecto2-sub">
         Exploración y Construcción
         </p>
    <div className="proyecto-item nuevo-proyecto2">
</div>
        {/* Galería inferior */}
        <div className="galeria2">

 <div className="galeria2-item">
    <img src="/imagenes/referente.jpg"  className="zoom-img"
                onClick={() => abrirModal("/imagenes/referente.jpg")}
                alt="" />
    <h4>Construcción visual y estilo</h4>
    <p>
      Se definió una estética retro en blanco y negro en base a la referencias visuales
      como Word of Horror,creando ilustraciones a mano, fondos fotográficos editados y una interfaz 
      coherente para reforzar la atmósfera de terror psicológico.
    </p>
  </div>

  {/* ITEM 2 */}
  <div className="galeria2-item">
    <img src="/imagenes/codigo.jpeg"className="zoom-img"
                onClick={() => abrirModal("/imagenes/codigo.jpeg")}
                alt="" />
    <h4>Conexión Texto–Imagen</h4>
    <p>
      Se desarrolló el sistema para poder crear los estados, botones, música reactiva y 
      efectos como tipeo, transiciones y animaciones tipo GIF, organizando todo el código 
      en módulos y archivos externos para mantener claridad.
    </p>
  </div>

  {/* ITEM 3 */}
  <div className="galeria2-item">
    <img src="/imagenes/Grafica Diagrama de Flujo Profesional Beige.png" className="zoom-img"
                onClick={() => abrirModal("/imagenes/Grafica Diagrama de Flujo Profesional Beige.png")}
                alt=""/>
    <h4>Integración narrativa y finales</h4>
    <p>
      Se implementó la historia ramificada: decisiones del jugador, 
      escenas, eventos y múltiples finales (incluyendo varios Game Over),
      controlados con tiempos, imágenes, sonido y texto progresivo.
    </p>
  </div>

</div>
</section>

 {/* PROTOTIPOOOOO */}
<section id="Prototipos" className="Prototipos">
  <div className="Prototipos-text-left">
     <div className="Prototipos container"></div>
    <h2>Construyendo de la<br/>Atmósfera Visual<br/>Proceso Creativo</h2>
  </div>

  <div className="Prototipos-text-right">
    <p className="bioMal2">
      El equipo creativo Atelier continuó explorando estéticas de terror y estilo retro en The Road, 
      utilizando una paleta en blanco y negro inspirada en lo analógico y lo vintage, con efectos como 
      halftone y pixeles para acentuar la nostalgia y el aire perturbador. Todo el material visual 
      fue creado por el equipo: ilustraciones dibujadas en Procreate, fondos desarrollados a partir 
      de fotografías propias editadas para unificar el estilo, y las interfaces diseñadas en Illustrator.
      Esta dedicación permitió construir un lenguaje visual coherente que refuerza 
      la atmósfera inquietante del juego.
    </p>
  
  {/* BLOQUE PROTOTIPOS */}
  <div className="container"></div>
  <section className="prototipos-wrapper">

  {/* PROTOTIPO 4 */}
<section className="prototipo">

      {/* Galería de 6 imágenes (3 arriba + 3 abajo) */}
    <div className="prototipo-grid-6">
      {[
        "/Proceso/Kata.jpg",
        "/Proceso/Personajes.jpg",
        "/Proceso/Personaje 2.jpg",
        "/Proceso/Portada.jpg",
        "/Proceso/Todas las vistas.jpg",
        "/Proceso/Finales.jpg"
      ].map((ruta, index) => (
        <img
          key={index}
          src={process.env.PUBLIC_URL + ruta}
          alt={`p3-${index}`}
          className="zoom-img"
          onClick={() => abrirModal(process.env.PUBLIC_URL + ruta)}
        />
      ))}
    </div>
 

  {/* Texto final debajo de la galería que es la conclusion duh */}
  <p className="prototipo-final-text">
    El desarrollo del juego integró una estética retro en blanco y negro con 
    ilustraciones y fondos propios, la programación de un sistema interactivo
    basado en estados, animaciones y efectos narrativos, y la construcción de
    una historia ramificada con múltiples finales, logrando una experiencia 
    inmersiva y coherente tanto visual como narrativamente.
     </p>
</section>
</section>
  </div>
</section>


{/* P5.js */}
<section className="p5-container">
  <h2 className="p5-title">Demo del Juego The Road ATELIER</h2>

  <div className="p5-frame-box">
    <iframe
      src="https://editor.p5js.org/Atelier/full/4tQe_VaL8"
      title="The Road - p5.js"
      className="p5-frame"
      allow="fullscreen"
    ></iframe>
  </div>
</section>

          {/* FOOTER */}
      <footer id="contacto" className="footer">
        <div className="footer-cta">
          <p>¿Tienes un proyecto en mente?</p>
          <p>Conversemos sobre cómo podemos crear algo increíble juntos</p>
        </div>

        <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="logo" className="nav-logo" />

        <div className="footer-columns">
          <div className="footer-col">
            <h4>CONTACTO</h4>
            <p>+56 9 6435 0081</p>
            <p>fihg.diseno@gmail.com</p>
          </div>

          <div className="footer-col">
            <h4>Redes sociales</h4>
            <p>Instagram</p>
            <p>GitHub</p>
          </div>
        </div>

        <p className="footer-copy">
          © 2025 Fransisca Huenullán • Diseñado y desarrollado con ReactJS — Reservados todos los derechos
        </p>
      </footer>

  {/* MODAL */}
      {modalImg && (
        <div className="modal-overlay" onClick={() => setModalImg(null)}>
          <img src={modalImg} className="modal-img" alt="" />
        </div>
      )}


    </div>
    
  );
}
