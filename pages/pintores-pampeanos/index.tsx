import React from "react";
import Layout from "../../components/Layout";
import styles from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PintoresPampeanosSlideshow from "../../components/PintoresPampeanosSlideshow";
import { getPintoresPampeanosGallery, type PintoresPampeanosImage } from "../../services/api";
import { GetStaticProps } from "next";

interface PintoresPampeanosProps {
  galleryImages: PintoresPampeanosImage[];
}

export default function PintoresPampeanos({
  galleryImages,
}: PintoresPampeanosProps) {
  const staticImages = [
    { src: "/pintores-pampeanos/horse.jpg", alt: "Artista pintando caballo" },
    { src: "/pintores-pampeanos/artists.jpg", alt: "Artistas pintando en grupo" },
    { src: "/pintores-pampeanos/easel.jpg", alt: "Caballete con pintura de paisaje" },
    { src: "/pintores-pampeanos/forest.jpg", alt: "Caballete pintando en bosque" },
  ];

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Pintores Pampeanos (3º edición)</h1>
        <p className={styles.subtitle}>Una residencia colaborativa de pintura de paisaje</p>

        <div className={styles.content}>
          <div className={styles.column}>
            <h2 className={styles.sectionTitle}>Sobre la Residencia</h2>
            <p className={styles.paragraph}>
              Del 8 al 13 de febrero de 2027 se llevará a cabo &quot;Pintores Pampeanos&quot;, resultando de una convocatoria dirigida a artistas interesados en la pintura del paisaje. El propós[...]
            </p>

            <p className={styles.italic}>
              Durante la residencia cada uno de los artistas está alentado a dibujar y pintar a partir de la observación de la naturaleza en &quot;plein air&quot;, como principal motor, además [...]
            </p>

            <h3 className={styles.subsectionTitle}>Ubicación</h3>
            <p className={styles.paragraph}>
              Los participantes que queden seleccionados para la residencia convivirán en una misma ubicación, convenientemente elegida en la pampa húmeda de la provincia de Buenos Aires. Aunqu[...]
            </p>
          </div>

          <div className={styles.column}>
            <h2 className={styles.sectionTitle}>Detalles para los Artistas</h2>
            <p className={styles.paragraph}>
              Veinte aplicantes seleccionados convivirán y trabajarán juntos durante seis días, del 8 al 13 de febrero de 2027. Los artistas se alojarán en los dormitorios de &quot;La Rica&quot;[...]
            </p>

            <p className={styles.paragraph}>
              La residencia está diseñada para ser una experiencia colaborativa en vez de una instrucción formal. Aunque no haya un cronograma fijo más que para las comidas, habrán demostraci[...]
            </p>

            <h3 className={styles.subsectionTitle}>Información Práctica</h3>
            <ul className={styles.list}>
              <li>
                <strong>Alojamiento y comida:</strong> Se asignará a cada participante una habitación, que podrá ser individual o compartida. La comida será provista al mediodía y preparada e[...]
              </li>
              <li>
                <strong>Viajes:</strong> Los artistas son responsables de todos los gastos relacionados con el viaje. Se coordinarán traslados grupales desde Buenos Aires a La Rica, para arribar [...]
              </li>
              <li>
                <strong>Tarifa:</strong> Al momento de la aceptación de aplicación, se requerirá abonar una tarifa de participación de $500 mil pesos en dos pagos, que cubre la comida (desayun[...]
              </li>
            </ul>
          </div>
        </div>

        {/* Gallery from Contentful */}
        {galleryImages && galleryImages.length > 0 && (
          <>
            <h2 className={styles.galleryTitle}>Galería de la Residencia</h2>
            <PintoresPampeanosSlideshow images={galleryImages} />
          </>
        )}

        {/* Static slideshow */}
        <div className={styles.slideshow}>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop
            className={styles.swiper}
          >
            {staticImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image.src} alt={image.alt} className={styles.slideImage} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.fullWidth}>
          <h2 className={styles.sectionTitle}>Acerca de la Aplicación</h2>
          <p className={styles.paragraph}>
            Además de responder algunas preguntas relacionadas con los objetivos e intereses artísticos, se solicita a los artistas que envíen 7 imágenes (indicando técnica, tamaño y fecha)[...]
          </p>
          <ul className={styles.list}>
            <li>Se fomenta incluir paisajes, aunque no exclusivamente, también puede incluir figuras, yesos, naturalezas muertas, interiores, etc.</li>
            <li>Lo ideal es que las obras se hayan dibujado o pintado del natural</li>
            <li>Se aprecian estudios en dibujo o pintura de pequeño formato, no necesariamente deben ser de gran tamaño</li>
          </ul>

          <div className={styles.cta}>
            <p className={styles.paragraph}>
              <strong>Formulario de aplicación (abierto hasta el 30 de octubre)</strong>
            </p>
            <a
              href="https://forms.gle/nVK8RAesWo4ARX4s7"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Enviar Aplicación
            </a>
          </div>

          <div className={styles.cta}>
            <p className={styles.paragraph}>
              <strong>Reglas de Convivencia</strong>
            </p>
            <a
              href="https://docs.google.com/document/d/1Mce6ztDDUFuo-MvZaWwfWCHhmWJxv3uRSrHPFBLi5L0/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Descargar Documento
            </a>
          </div>
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
