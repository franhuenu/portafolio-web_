/*
react-router-dom sirve para que mi maldita página React
no se comporte como una página vieja del 2006 toda chanta,
sino como una app moderna donde si le hago click re click
deberia todo cambiar sin recargar como tarado.
*/

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./inicio.css";

export default function Inicio() {
  const [modalImg, setModalImg] = useState(null);

  return (
    <div className="app-container">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">
          <img
            src={`${process.env.PUBLIC_URL}/logo.svg`}
            alt="logo"
            className="nav-logo"
          />
        </div>

        <div className="nav-right">
          <a href="#sobre-mi">Sobre mí</a>
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
      <section className="hero">

        {/* SVG IZQUIERDO (ANIMACIÓN SOLO) */}
        <img
          src={`${process.env.PUBLIC_URL}/Svg iconos/Estrella+medio-01.svg`}
          className="hero-shape-left animated-svg"
          alt=""
        />

        <div className="hero-center">
          <h1>F.I.H.G.</h1>
          <p className="hero-sub">“ Diseño Que Conecta “</p>
          <p className="hero-warning">¡PELIGRO ! ... NO TOCAR</p>
        </div>

        {/* SVG DERECHO (ANIMACIÓN SOLO) */}
        <img
          src={`${process.env.PUBLIC_URL}/Svg iconos/medio+triangulo+estrella-02.svg`}
          className="hero-shape-right animated-svg"
          alt=""
        />

      </section>

      {/* SOBRE MI */}
      <section id="sobre-mi" className="sobre-mi">
        <div className="sobre-text-left">
          <p className="quote">“Transformando pixels en emociones”</p>
          <h2>
            Fransisca<br />Huenullán
          </h2>
        </div>

        <div className="sobre-text-right">
          <p className="bio">
            Diseñadora especializada en Multimedia, con enfoque en diseño 
            gráfico, ilustración y desarrollo de proyectos interactivos. 
            Mi trabajo se caracteriza por una identidad visual cuidada, 
            atención al detalle y un uso consciente de herramientas digitales 
            para crear soluciones claras, funcionales y estéticamente consistentes.
            
          </p>

          <ul className="skills">
            <li>Diseño Gráfico</li>
            <li>Ilustración</li>
            <li>Packaging</li>
            <li>p5.js</li>
            <li>Illustrator</li>
            <li>Photoshop</li>
          </ul>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="contenido">
        <img
          src={`${process.env.PUBLIC_URL}/Svg iconos/medio-04.svg`}
          className="figura-media"
          alt=""
        />

        <h2>Contenido</h2>

        <div className="contenido-grid">
          <ul>
            <li><span>01</span> Sobre mí</li>
            <li><span>02</span> Proyectos</li>
            <li className="sub">2.1 Packaging</li>
            <li className="sub">2.2 Ilustración</li>
            <li><span>03</span> Proceso y Metodología</li>
          </ul>
        </div>

        <img
          src={`${process.env.PUBLIC_URL}/Svg iconos/estrella-03.svg`}
          className="contenido-star"
          alt=""
        />
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="proyectos">
        <h2>Proyectos</h2>

        <div className="proyecto-item nuevo-proyecto">
          <div className="proyecto-carrusel">
            <div className="carrusel-inner">
              <img src="/imagenes/mj-1.jpg" alt="" />
              <img src="/imagenes/mj-2.jpg" alt="" />
              <img src="/imagenes/mj-3.jpg" alt="" />
              <img src="/imagenes/mj-4.jpg" alt="" />
              <img src="/imagenes/mj-5.png" alt="" />

              <img src="/imagenes/mj-1.jpg" alt="" />
              <img src="/imagenes/mj-2.jpg" alt="" />
              <img src="/imagenes/mj-3.jpg" alt="" />
              <img src="/imagenes/mj-4.jpg" alt="" />
              <img src="/imagenes/mj-5.png" alt="" />
            </div>
          </div>

          <div className="proyecto-info">
            <div className="info-top">
              <p className="label">Proyecto</p>
              <h3 className="titulo-proyecto">Malas Juntas</h3>
            </div>
          </div>

          <div className="proyecto-bottom">
            <div className="proyecto-izq">
              <p className="desc">
                CERVEZA ARTESANAL QUE CONECTA CON LA IDENTIDAD
                <br />
                DE CADA BARRIO DE SANTIAGO.
              </p>
            </div>

            <p className="proyecto-descripcion">
             Malas Juntas es una cerveza artesanal inspirada en los encuentros
             espontáneos y en la identidad de los barrios de Santiago. <br />
             Cada variedad se representa mediante un perro que simboliza la 
             personalidad de cada sector, convirtiéndose en un compañero que 
             celebra la diversidad, la vida cotidiana y los momentos que se 
             transforman en buenas historias.
            </p>
          </div>

          <Link className="ver" to="/malasjuntas">
            Ver Proyecto →
          </Link>
        </div>

        {/* GALERÍA */}
        <div className="galeria">
          <div className="galeria-item">
            <img
              src="/imagenes/juego.jpg"
              className="zoom-img"
              onClick={() => setModalImg("/imagenes/Juego.jpg")}
              alt=""
            />
            <Link to="/theroad">Ver Proyecto →</Link>
          </div>

          <div className="galeria-item">
            <img
              src="/imagenes/ilustracion.jpg"
              className="zoom-img"
              onClick={() => setModalImg("/imagenes/ilustracion.jpg")}
              alt=""
            />
            <Link to="/ilustracion">Ver Proyecto →</Link>
          </div>

          <div className="galeria-item">
            <img
              src="/imagenes/osc.png"
              className="zoom-img"
              onClick={() => setModalImg("/imagenes/osc.png")}
              alt=""
            />
            <Link to="/osciloscopio">Ver Proyecto →</Link>
          </div>
        </div>

        {/* MODAL */}
        {modalImg && (
          <div className="modal-overlay" onClick={() => setModalImg(null)}>
            <img src={modalImg} className="modal-img" alt="" />
          </div>
        )}
      </section>

      {/* PROCESO */}
      <section className="proceso">
        <div className="proceso-left">
          <p>

            Diseño y exploración visual<br />
            que dan forma a cada proyecto.<br />
            Creo soluciones claras, <br />
            intencionadas y bien ejecutadas.
          </p>

          <img
            src={`${process.env.PUBLIC_URL}/Svg iconos/traingulo+estrella-05.svg`}
            className="proceso-star"
            alt=""
          />
        </div>

        <div className="proceso-right">
          <div>
            <h2>Proceso</h2>
            <p className="p2">Iteraciones por proyecto para asegurar precisión visual.</p>
          </div>

          <div className="divider"></div>

          <div>
            <h2>3 etapas clave</h2>
            <p className="p2">Proceso estructurado y claro.</p>
          </div>

          <div className="divider"></div>

          <div>
            <h2>Metodología</h2>
            <p className="p2">
              Coherencia conceptual visual en cada paso.
            </p>
          </div>

          <div className="divider"></div>
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
    </div>
  );
}
