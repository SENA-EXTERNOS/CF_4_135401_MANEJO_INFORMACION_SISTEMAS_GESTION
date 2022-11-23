<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde aprenderá sobre el control, conservación y disposición de la información documentada, lo cual permite mayor eficiencia y eficacia en cada uno de los procesos de la empresa. Estos procesos son soportados por documentos, físicos o digitales, entendidos como el registro materializado de una actividad específica realizada por una persona u organización. En los últimos años, la mayoría de los documentos de cualquier tipo se gestionan en soportes digitales, debido a que presentan mayores ventajas que los soportes físicos. Por esta situación, es importante estar a la vanguardia en la era de las tecnologías y la expansión del mundo globalizado, con una mejor organización en los procesos de información documentada, desarrollando estrategias para la conservación de información sobre los diferentes procesos de la organización.  

    p(data-aos="fade-down").mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)                       
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
