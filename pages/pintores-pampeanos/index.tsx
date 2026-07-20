import React from "react";
import Layout from "../../components/Layout";
import styles from "./index.module.css";

export default function PintoresPampeanos() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Pintores pampeanos (2o edición)</h1>
        <p className={styles.subtitle}>Una residencia colaborativa de pintura de paisaje</p>

        <div className={styles.content}>
          <div className={styles.column}>
            <h2 className={styles.sectionTitle}>Sobre la Residencia</h2>
            <p>
              Del 16 al 21 de febrero de 2026 se llevará a cabo &quot;Pintores pampeanos&quot;, resultando de una
              convocatoria dirigida a artistas interesados en la pintura del paisaje. El propósito de esta
              residencia de seis días es la búsqueda e investigación del dibujo y pintura de la
              naturaleza, en un ambiente ameno de colegas y amigos. Esta iniciativa que empezó en 2025
              busca empalmarse con el movimiento actual de renovación del arte clásico/tradicional.
            </p>

            <h3 className={styles.subsectionTitle}>Metodología</h3>
            <p>
              Durante la residencia cada uno de los artistas está alentado a dibujar y pintar a partir de la observación de
              la naturaleza en &quot;plein air&quot;, como principal motor, además de participar en el intercambio de técnicas,
              ideas, conceptos, etc., todo aquello que resulte de utilidad y motivación para la nutrición artística personal,
              con el empuje que es el hacerlo de manera colectiva.
            </p>

            <h3 className={styles.subsectionTitle}>Ubicación</h3>
            <p>
              Los participantes que queden seleccionados para la residencia convivirán en una misma ubicación, convenientemente
              elegida en la pampa húmeda de la provincia de Buenos Aires. Aunque no haya relación institucional alguna, se debe
              mencionar que este proyecto está inspirado en su creación por otro muy anterior, la &quot;Hudson River Fellowship&quot;,
              una iniciativa de Grand Central Atelier en EE.UU.
            </p>
          </div>

          <div className={styles.column}>
            <h2 className={styles.sectionTitle}>Detalles para los Artistas</h2>
            <p>
              Diez aplicantes seleccionados convivirán y trabajarán juntos durante seis días, del 16 al 21 de febrero de 2026.
              Los artistas se alojarán en los dormitorios de &quot;La Rica&quot;, y pintarán en el entorno campestre de esta antigua
              estancia de 1838. A dos horas y media de C.A.B.A., &quot;La Rica&quot; se encuentra rodeada de animales de campo,
              un antiguo y pintoresco jardín adornado de aljibes, pilares y galerías, además de la amplia llanura pampeana.
            </p>

            <p>
              La residencia está diseñada para ser una experiencia colaborativa en vez de una instrucción formal.
              Aunque no haya un cronograma fijo más que para las comidas, habrán demostraciones varias, críticas grupales,
              momentos de pintar cercanamente en conjunto, o individualmente.
            </p>

            <h3 className={styles.subsectionTitle}>Información Práctica</h3>
            <ul className={styles.list}>
              <li>
                <strong>Alojamiento y comida:</strong> Se asignará a cada participante una habitación, que podrá ser individual
                o compartida. La comida será provista al mediodía y preparada en colaboración a la noche.
              </li>
              <li>
                <strong>Viajes:</strong> Los artistas son responsables de todos los gastos relacionados con el viaje.
              </li>
              <li>
                <strong>Tarifa:</strong> Al momento de la aceptación de aplicación, se requerirá abonar una tarifa de
                participación de $400 mil pesos en dos pagos, que cubre la comida y el alojamiento durante los 6 días.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.fullWidth}>
          <h2 className={styles.sectionTitle}>Acerca de la Aplicación</h2>
          <p>
            Además de responder algunas preguntas relacionadas con los objetivos e intereses artísticos, se
            solicita a los artistas que envíen 7 imágenes (indicando técnica, tamaño y fecha) con las siguientes
            especificaciones:
          </p>
          <ul className={styles.list}>
            <li>Se fomenta incluir paisajes, aunque no exclusivamente</li>
            <li>También puede incluir figuras, yesos, naturalezas muertas, interiores, etc.</li>
            <li>Lo ideal es que las obras se hayan dibujado o pintado del natural</li>
            <li>Se aprecian estudios en dibujo o pintura de pequeño formato</li>
            <li>No necesariamente deben ser de gran tamaño</li>
          </ul>

          <div className={styles.cta}>
            <p>
              <strong>Formulario de aplicación (abierto hasta el 30 de noviembre)</strong>
            </p>
            <a
              href="https://forms.gle/Y6GKRDd5dbisXMWX6"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Enviar Aplicación
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
