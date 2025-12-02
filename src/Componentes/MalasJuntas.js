
/*
react-router-dom sirve para que mi maldita página React
no se comporte como una página vieja del 2006 toda chanta,
sino como una app moderna (aja claro moderna) donde si le hago click re click
deneria todo cambiar sin recargar como tarado.

Es literalmente eso lo que yo entedi.
*/

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MalasJuntas.css";
import { HashLink } from "react-router-hash-link";

export default function MalasJuntas() {
  const [modalImg, setModalImg] = useState(null);

  const abrirModal = (src) => setModalImg(src);

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

        <Link to="/" className="regresar-btn">Regresar</Link>

        <div className="nav-right">
          <HashLink smooth to="/#sobre-mi">Sobre mí</HashLink>
          <Link to="/MalasJuntas#contacto">Contacto</Link>
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
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/imagenes/VentanadeInicioMJ.jpg)`
        }}
      >
        <div className="hero2-center">
          <h1>Malas Juntas</h1>
          <p className="hero2-sub">“ Diseño de Packaging “</p>
          <p className="hero2-warning">" Juntas que saben diferente "</p>
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section id="Introduccion" className="Introduccion">
        <div className="Introduccion container">

          {/* COLUMNA IZQUIERDA */}
          <div className="Introduccion-text-left">
            <p className="quote2">“No somos perfectos, somos Malas Juntas.”</p>
            <h2>De Dónde Surge<br />Malas Juntas</h2>

            <p className="subAutor">
              Fransisca Huenullán<br />
              Javiera Vera
            </p>

            <img
              src={`${process.env.PUBLIC_URL}/Svg iconos/estrella-03.svg`}
              className="Introduccion-star"
              alt=""
            />
          </div>

          {/* COLUMNA DERECHA */}
          <div className="Introduccion-text-right">

            <p className="bioMal">
              Malas Juntas es un colectivo de diseño que trabaja desde la
              colaboración y la creatividad como pilares centrales del proceso.
              El proyecto se enfocó en el desarrollo de un packaging innovador
              para cervezas artesanales, integrando diseño estructural y gráfico
              con una visión moderna. <br />
              La intención fue crear una solución visual que no solo destacara en
              el mercado, sino que también respondiera a necesidades funcionales,
              estéticas y normativas.
              <br/>
              <br/>
              <br/>
            </p>

            {/* IMAGEN + TEXTO */}
            <div className="imgBox">
              <img
                src="/imagenes/malasjuntasIntro.jpg"
                className="zoom-img"
                onClick={() => abrirModal("/imagenes/malasjuntasIntro.jpg")}
                alt=""
              />
              <p className="imgText">
                <br/>
                <br/>
                El enfoque del equipo se basó en la complementariedad de roles:
                investigación, diseño estructural, diseño gráfico y producción
                digital. Esta dinámica permitió abordar el proyecto de manera integral.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CAJA FRASE */}
      <div className="caja-cta">
        <p>“Lo rebelde también se diseña.”</p>
      </div>

      {/* DESARROLLO DEL DISEÑO */}
      <section id="proyecto2" className="proyecto2">
        <h2>Desarrollo del Diseño</h2>
        <p className="proyecto2-sub">Exploración y Construcción</p>

        {/* GALERÍA */}
        <div className="galeria2">

          {/* ITEM 1 */}
          <div className="galeria2-item">
            <img
              src="/imagenes/boceto.jpg"
              className="zoom-img"
              onClick={() => abrirModal("/imagenes/boceto.jpg")}
              alt=""
            />
            <h4>Exploración Inicial</h4>
            <p>
              Se realizaron múltiples pruebas estructurales para los formatos 
              de pack de 6 y pack de 12, ajustando medidas para botellas de 500 y 330 cc.
               La etapa inicial se centró en pruebas de corte, doblez y ensamblaje básico, 
               buscando eficiencia y resistencia.
            </p>
          </div>

          {/* ITEM 2 */}
          <div className="galeria2-item">
            <img
              src="/imagenes/packing.jpg"
              className="zoom-img"
              onClick={() => abrirModal("/imagenes/packing.jpg")}
              alt=""
            />
            <h4>Refinamiento del Diseño</h4>
            <p>
              En esta fase se ajustaron proporciones, se optimizaron los pliegues
              y se mejoró la ergonomía del empaque.
            </p>
          </div>

          {/* ITEM 3 */}
          <div className="galeria2-item">
            <img
              src="/imagenes/maqueta.jpg"
              className="zoom-img"
              onClick={() => abrirModal("/imagenes/maqueta.jpg")}
              alt=""
            />
            <h4>Integración Gráfica y Prototipado</h4>
            <p>
              Finalmente se integraron propuestas gráficas preliminares en prototipos
              avanzados.
            </p>
          </div>
        </div>
      </section>

      {/* PROTOTIPOS */}
      <section id="Prototipos" className="Prototipos">

        <div className="Prototipos-text-left">
          <h2>Evolución de<br />Prototipos</h2>
        </div>

        <div className="Prototipos-text-right">

          <p className="bioMal2">
            La evolución de los prototipos permitió refinar progresivamente el diseño 
            estructural y gráfico del packaging. Desde primeras pruebas enfocadas en 
            estabilidad y medidas, pasando por mejoras en resistencia, precisión de 
            cortes y pruebas de impresión, cada etapa aportó ajustes clave para optimizar 
            funcionalidad y estética. El proceso culminó en un prototipo final sólido, 
            visualmente coherente y adaptable a los formatos de 330 cc y 500 cc, 
            consolidando una propuesta eficiente y atractiva para el producto.
          </p>

          <div className="prototipos-wrapper">

            {/* PROTOTIPO 1 */}
            <section className="prototipo">
              <h3 className="prototipo-title">Prototipo 1</h3>

              <p className="prototipo-desc">
              Primer acercamiento gráfico. Permite identificar ajustes necesarios en composición, legibilidad y jerarquía visual..
              </p>

              <div className="prototipo-img">
                <img
                  src={process.env.PUBLIC_URL + "/Proceso/etiqueta 0.jpg"}
                  alt="Prototipo 1 A"
                  className="zoom-img"
                  onClick={() => abrirModal(process.env.PUBLIC_URL + "/Proceso/etiqueta 0.jpg")}
                />
                <img
                  src={process.env.PUBLIC_URL + "/Proceso/etiqueta 0.1.jpg"}
                  alt="Prototipo 1 B"
                  className="zoom-img"
                  onClick={() => abrirModal(process.env.PUBLIC_URL + "//Proceso/etiqueta 0.1.jpg")}
                />
              </div>
            </section>

            {/* PROTOTIPO 2 */}
            <section className="prototipo">
              <h3 className="prototipo-title">Prototipo 2</h3>

              <p className="prototipo-desc">
                Segundo ajuste gráfico. Se optimiza la estructura visual y el balance del diseño.
              </p>

              <div className="prototipo-img">
                <img
                  src={process.env.PUBLIC_URL + "/Proceso/etiqueta.jpg"}
                  className="zoom-img"
                  alt="Prototipo 2 A"
                  onClick={() => abrirModal(process.env.PUBLIC_URL + "/Proceso/etiqueta.jpg")}
                />

                <img
                  src={process.env.PUBLIC_URL + "/Proceso/etiqueta2.jpg"}
                  className="zoom-img"
                  alt="Prototipo 2 B"
                  onClick={() => abrirModal(process.env.PUBLIC_URL + "/Proceso/etiqueta2.jpg")}
                />
              </div>
            </section>

            {/* PROTOTIPO 3 */}
            <section className="prototipo">
              <h3 className="prototipo-title">Prototipo 3</h3>

              <p className="prototipo-desc">
                Refinamiento final del diseño, mejor contraste, jerarquía y coherencia visual.
              </p>

              <div className="prototipo-img">
                <img
                  src={process.env.PUBLIC_URL + "/Proceso/corte.jpg"}
                  className="zoom-img"
                  alt="Prototipo 3 A"
                  onClick={() => abrirModal(process.env.PUBLIC_URL + "/Proceso/corte.jpg")}
                />

                <img
                  src={process.env.PUBLIC_URL + "/Proceso/montaje botella.jpg"}
                  className="zoom-img"
                  alt="Prototipo 3 B"
                  onClick={() => abrirModal(process.env.PUBLIC_URL + "/Proceso/montaje botella.jpg")}
                />
              </div>
            </section>

            {/* PROTOTIPO 4 */}
            <section className="prototipo">
              <h3 className="prototipo-title">Galería</h3>
                {/* Galería de 6 imágenes (3 arriba + 3 abajo) */}
    <div className="prototipo-grid-6">
      {[
        "/Proceso/corte 2.jpg",
        "/Proceso/montaje.jpg",
        "/Proceso/boceto 1.jpg",
        "/Proceso/boceto 2.jpg",
        "/Proceso/boceto3.jpg",
        "/Proceso/boceto 4.jpg"
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

              <p className="prototipo-final-text">
                Se consolidó una etiqueta visualmente atractiva, con identidad clara, 
                buena legibilidad y coherencia con la narrativa de la marca. El resultado 
                final equilibra estética, funcionalidad y personalidad artesanal.
              </p>
            </section>
          </div>
        </div>
      </section>

{/* MOCKUP */}
<div className="prototipo">
  <div className="Prototipos container"></div>
  <h3 className="mockup-title">Mockup</h3>

  <div className="prototipo-img prototipo-img-4">

    {[
      "/Mockup/mj-1.jpg",
      "/Mockup/mj-2.jpg",
      "/Mockup/mj-3.jpg",
      "/Mockup/mj-4.jpg",
    ].map((img, i) => (
      <img
        key={i}
        src={process.env.PUBLIC_URL + img}
        alt={`mockup-${i}`}
        className="zoom-img"
        onClick={() => setModalImg(process.env.PUBLIC_URL + img)}
      />
    ))}

  </div>
</div>


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
          <img src={modalImg} className="modal-img" alt="" />
        </div>
      )}

    </div>
  );
}
