

import React, { useState } from "react";
import "./Ilustracion.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Ilustracion() {
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
    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/imagenes/VentanadeInicio.jpg)` }}
>
     <div className="hero2-center">
    <h1>“Lo que no fue”</h1>
    <p className="hero2-sub">“ Ilustración “</p>
    <p className="hero2-warning">" El eco de lo que pudo ser. "</p>
  </div>
</section>

      {/* Sintro */}
     <section id="Introduccion" className="Introduccion">
  <div className="Introduccion container">
    
    <div className="Introduccion-text-left">
      <p className="quote2">“La memoria del vacío que dejó.”</p>
      <h2>Una Sinfonía<br/>Visual y Emocional</h2>

      {/* SUBTEXTO DEBAJO DEL TÍTULO */}
      <p className="subAutor">
        Fransisca Huenullán<br/>
      </p>
       <img src= {`${process.env.PUBLIC_URL}/Svg iconos/estrella-03.svg`} className="Introduccion-star" />
    </div>

    {/* COLUMNA DERECHA */}
    <div className="Introduccion-text-right">

      <p className="bioMal">
        Este proyecto nace como una exploración íntima para representar emociones profundas a través de un 
        relato breve y una ilustración que dialogan entre sí. Los conceptos —vacío, penumbra, aceptación,
        perdón y superación— fueron seleccionados desde una experiencia personal, dando forma a un recorrido
        simbólico y emocional.
        <br/>
        <br/>
        <br/>
      </p>

      {/* IMAGEN ALINEADA CON LA BIO */}
     <div className="imgBox">
  <img src="/Mockup/cuadro ilustracion.jpg" className="zoom-img"
                onClick={() => abrirModal("/Mockup/cuadro ilustracion.jpg")}
                alt=""
   />
  <p className="imgText">
    <br/>
    <br/>
    "Relato: “Lo que no fue”<br/>

          <br/>“Una brisa arrastró el eco al amanecer.<br/>
                 El paisaje permanece sereno.<br/>
                 El silencio abrazó el vacío que dejó la memoria,<br/>
                 susurrando que en la penumbra se esconde lo que no fue.”
  </p>
        </div>
      </div>
   </div>
</section>

 {/* caja */}
       <div className="caja-cta">
    <p>“Las vivencias también se diseñan.”</p>
  </div>

      {/* PROYECTOS */}
      <section id="proyecto2" className="proyecto2">
        <h2>Desarrollo de la ilusatrción</h2>
         <p className="proyecto2-sub">
         Exploración y Construcción
         </p>
    <div className="proyecto-item nuevo-proyecto2">
</div>
        {/* Galería inferior */}
        <div className="galeria2">

 <div className="galeria2-item">
    <img src="/imagenes/Paleta de color.jpg"  className="zoom-img"
                onClick={() => abrirModal("/imagenes/Paleta de color.jpg")}
                alt="" />
    <h4>Ilustración</h4>
    <p>
      La ilustración utiliza una paleta fría de morados, violetas 
      y amarillos suaves, escogidos para reflejar introspección,
      melancolía y un proceso de reconciliación interna. Se incorporaron
      texturas creadas con pinceles personalizados en Photoshop para
      aportar profundidad en elementos como el volumen del pájaro, 
      las flores en el cabello y los fondos que evocan la penumbra.
    </p>
  </div>

  {/* ITEM 2 */}
  <div className="galeria2-item">
    <img src="/imagenes/texto.jpg"className="zoom-img"
                onClick={() => abrirModal("/imagenes/texto.jpg")}
                alt="" />
    <h4>Conexión Texto–Imagen</h4>
    <p>
      Texto e ilustración se complementan, construyendo una narrativa donde lo 
      emocional se transforma en visual. Mientras el relato describe el vacío y 
      la oscuridad, la imagen materializa estos sentimientos y simboliza el proceso
      de superación a través del surgimiento de la luz y el florecimiento.
    </p>
  </div>

  {/* ITEM 3 */}
  <div className="galeria2-item">
    <img src="/imagenes/Paleta Emocional y Sim.jpg" className="zoom-img"
                onClick={() => abrirModal("/imagenes/Paleta Emocional y Sim.jpg")}
                alt=""/>
    <h4>Paleta Emocional y Simbólica</h4>
    <p>
      La ilustración usa morados y violetas para transmitir introspección y 
      serenidad, y amarillos fríos para simbolizar esperanza y consuelo. 
      Las flores en el cabello representan superación y crecimiento, mientras
      la combinación cromática guía al espectador desde la penumbra hacia la aceptación y reconciliación.
      <br/>Conceptos: Superación – Aceptación – Perdonarse 
      – Consuelo – Reflexión – Serenidad – Penumbra
    </p>
  </div>

</div>
</section>

 {/* PROTOTIPOOOOO */}
<section id="Prototipos" className="Prototipos">
  <div className="Prototipos-text-left">
     <div className="Prototipos container"></div>
    <h2>Evolución de<br/>Proceso Creativo</h2>
  </div>

  <div className="Prototipos-text-right">
    <p className="bioMal2">
      El desarrollo completo —bocetos, exploraciones y obra final— se encuentra 
      documentado en carpetas de Drive, evidenciando cómo texto e imagen evolucionaron 
      en conjunto a lo largo del proceso creativo.
    </p>
  
  {/* BLOQUE PROTOTIPOS */}
  <div className="container"></div>
  <section className="prototipos-wrapper">

  {/* PROTOTIPO 4 */}
<section className="prototipo">

      {/* Galería de 6 imágenes (3 arriba + 3 abajo) */}
    <div className="prototipo-grid-6">
      {[
        "/Proceso/escrito.png",
        "/Proceso/Boceto.jpg",
        "/Proceso/Vector blanco y negro.jpg",
        "/Proceso/ilucatracion paleta de color.jpg",
        "/Proceso/vector a color.jpg",
        "/Proceso/Resultado.jpg"
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
   Este proyecto logra articular relato e ilustración en una experiencia
  emocional coherente, donde cada elemento refuerza y amplifica al otro.
  El texto transmite la introspección y el vacío, mientras que la ilustración 
  materializa estas emociones y sugiere la reconciliación y el crecimiento personal.
  La paleta de colores, las texturas y los detalles simbólicos permiten al espectador 
  conectar de manera profunda con la narrativa, mostrando cómo la creación artística
 puede transformar experiencias íntimas en una sinfonía visual y emocional.
     </p>
</section>
</section>


<div className="prototipo">
      <div className="Prototipos container"></div>
  <h3 className="mockup-title">Mockup</h3>
  <div className="prototipo-img prototipo-img-4">
    <img src= {process.env.PUBLIC_URL + "/Mockup/cuaderno 2.jpg"} alt="p3-f"/>
    <img src= {process.env.PUBLIC_URL + "/Mockup/cuadro ilustracion.jpg"} alt="p3-f"/>
    <img src= {process.env.PUBLIC_URL + "/Mockup/mockup libreta 1.jpg"} alt="p3-f"/>
    <img src= {process.env.PUBLIC_URL + "/Mockup/poster.jpg"} alt="p3-f"/>
  </div>
</div>
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
