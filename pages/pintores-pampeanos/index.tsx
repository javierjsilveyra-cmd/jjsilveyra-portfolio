import React from "react";
import Layout from "../../components/Layout";
import styles from "./index.module.css";
import PintoresPampeanosSlideshow from "../../components/PintoresPampeanosSlideshow";
import { getPintoresPampeanosGallery, type PintoresPampeanosImage } from "../../services/api";
import { GetStaticProps } from "next";

interface PintoresPampeanosProps {
  galleryImages: PintoresPampeanosImage[];
}

export default function PintoresPampeanos({
  galleryImages,
}: PintoresPampeanosProps) {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Pintores pampeanos (3º edición)</h1>
        <p className={styles.subtitle}>Una residencia colaborativa de pintura de paisaje</p>

        {/* Gallery at the top (hero-style) */}
        {galleryImages && galleryImages.length > 0 && (
          <section className={styles.galleryHero}>
            <PintoresPampeanosSlideshow images={galleryImages} />
          </section>
        )}

        <div className={styles.contentWithSidebar}>
          <main className={styles.mainColumn}>
            <section className={styles.intro}>
              <p className={styles.paragraph}>
                Pintores pampeanos (3º edición)
                <br />
                Una residencia colaborativa de pintura de paisaje
                <br />
                Del 8 al 13 de febrero de 2027 se llevará a cabo “Pintores pampeanos”, resultando de una convocatoria dirigida a artistas interesados en la pintura del paisaje. El propósito de esta residencia de seis días es la búsqueda e investigación del dibujo y pintura de la naturaleza, en un ambiente ameno de colegas y amigos. Esta iniciativa que empezó en 2025 busca empalmarse con el movimiento actual de renovación del arte clásico/tradicional:
                <br />
                Durante la residencia cada uno de los artistas está alentado a dibujar y pintar a partir de la observación de la naturaleza en “plein air”, como principal motor, además de participar en el intercambio de técnicas, ideas, conceptos, etc., todo aquello que resulte de utilidad y motivación para la nutrición artística personal, con el empuje que es el hacerlo de manera colectiva.
              </p>

              <p className={styles.paragraph}>
                Los participantes que queden seleccionados para la residencia convivirán en una misma ubicación, convenientemente elegida en la pampa húmeda de la provincia de Buenos Aires. Aunque no haya relación institucional alguna, se debe mencionar que este proyecto está inspirado en su creación por otro muy anterior, la “Hudson River Fellowship”, una iniciativa de Grand Central Atelier en EE.UU.
              </p>

              <h3 className={styles.subsectionTitle}>Detalles para los artistas:</h3>

              <p className={styles.paragraph}>
                Veinte aplicantes seleccionados convivirán y trabajarán juntos durante seis días, del 8 al 13 de febrero de 2026. Los artistas se alojarán en los dormitorios de “La Rica”, y pintarán en el entorno campestre de esta antigua estancia de 1838. A dos horas y media de C.A.B.A., “La Rica” se encuentra rodeada de animales de campo, un antiguo y pintoresco jardín adornado de aljibes, pilares y galerías, además de la amplia llanura pampeana.
              </p>

              <p className={styles.paragraph}>
                La residencia está diseñada para ser una experiencia colaborativa en vez de una instrucción formal. Aunque no haya un cronograma fijo más que para las comidas, habrán demostraciones varias, críticas grupales, momentos de pintar cercanamente en conjunto, o individualmente.
              </p>

              <h3 className={styles.subsectionTitle}>Alojamiento y comida:</h3>
              <p className={styles.paragraph}>
                Se asignará a cada participante una habitación, que podrá ser individual o compartida. La comida será provista al mediodía y preparada en colaboración a la noche.
                <br />
                https://www.argentina.gob.ar/capital-humano/cultura/monumentos/estancia-la-rica
              </p>

              <h3 className={styles.subsectionTitle}>Viajes:</h3>
              <p className={styles.paragraph}>
                Los artistas son responsables de todos los gastos relacionados con el viaje. Se coordinarán traslados grupales desde Buenos Aires a La Rica, para arribar durante el lunes 8 de febrero.
              </p>

              <h3 className={styles.subsectionTitle}>Tarifa:</h3>
              <p className={styles.paragraph}>
                Al momento de la aceptación de aplicación, se requerirá abonar una tarifa de participación de $500 mil pesos en dos pagos, que cubre la comida (desayuno, almuerzo y cena) y el alojamiento durante los 6 días.
              </p>

              <h3 className={styles.subsectionTitle}>Acerca de la aplicación:</h3>
              <p className={styles.paragraph}>
                Además de responder algunas preguntas relacionadas con los objetivos e intereses artísticos, se solicita a los artistas que envíen 7 imágenes (indicando técnica, tamaño y fecha) con las siguientes especificaciones:
                <br />
                Se fomenta incluir paisajes, aunque no exclusivamente, también puede incluir figuras, yesos, naturalezas muertas, interiores, etc. Lo ideal es que las obras se hayan dibujado o pintado del natural. Se aprecian estudios en dibujo o pintura de pequeño formato, no necesariamente deben ser de gran tamaño.
              </p>

              <p className={styles.paragraph}>
                Formulario de aplicación (abierto hasta el 30 de octubre)
              </p>
            </section>
          </main>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.cardTitle}>Próxima Edición</h3>
              <p className={styles.cardText}><strong>Fechas:</strong> 8–13 Febrero 2027</p>
              <p className={styles.cardText}><strong>Ubicación:</strong> La Rica, Provincia de Buenos Aires</p>
              <p className={styles.cardText}><strong>Plazas:</strong> 20 artistas</p>
              <a
                href="https://forms.gle/nVK8RAesWo4ARX4s7"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.applyButton}
              >
                Enviar Aplicación
              </a>
            </div>

            <div className={styles.sidebarCard}>
              <h4 className={styles.cardTitle}>Reglas de Convivencia</h4>
              <a
                href="https://docs.google.com/document/d/1Mce6ztDDUFuo-MvZaWwfWCHhmWJxv3uRSrHPFBLi5L0/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Descargar Documento
              </a>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<PintoresPampeanosProps> = async () => {
  try {
    const galleryImages = await getPintoresPampeanosGallery();

    return {
      props: { galleryImages },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Error fetching gallery data:", error);
    return {
      props: { galleryImages: [] },
      revalidate: 300,
    };
  }
};
