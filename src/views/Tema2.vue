<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Matriz para la gestión de la información documentada
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/10.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Ahora, la matriz de gestión documental y los administradores documentales ayudan a detectar y conceptualizar diagramas de flujo y clasificaciones finales de la información, lo que permite a la organización especificar, de manera óptima, su ubicación y, de esta forma, tener un control total de los procesos que allí se desarrollan y se ejecutan.

    p(data-aos="fade-down") Existen diferentes clases de matrices utilizadas por las empresas, lo que les permite poder controlar toda la información documentada para realizar la planificación y operación del Sistema de Gestión de la Calidad (SGC).

    p(data-aos="fade-down").mb-5 A continuación, se presentan algunos ejemplos de matrices que hacen parte del SGC en una organización:

    .row.justify-content-center.align-items-start.mb-5   
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/11.png', alt='')     
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center.align-items-center(titulo="Matriz de procesos claves")
            .col-10
              P Contiene información directamente vinculada con los bienes producidos y percibidos por los clientes. 
          .row.justify-content-center.align-items-center(titulo="Matriz de procesos estratégicos")
            .col-10
              P Está directamente relacionada con las políticas internas, estratégicas, objetivos y metas de la organización.  
          .row.justify-content-center.align-items-center(titulo="Matriz de indicadores de gestión")
            .col-10
              P Es la encargada de registrar los datos y muestra el estado de una actividad y/o si requiere medir las características específicas y observables, para demostrar los cambios.  
          .row.justify-content-center.align-items-center(titulo="Matriz de riesgos en gestión documental")
            .col-10
              P Ayuda a identificar los organigramas y las clasificaciones finales de la información, permitiéndole a la organización, de manera óptima, tener un control total de los procesos que se ejecutan y su ubicación.  
          .row.justify-content-center.align-items-center(titulo="Matriz de riesgos de gestión")
            .col-10
              P Es una herramienta que permite determinar objetivamente, cuáles son los riesgos que afrontan las empresas en la seguridad y salud de los trabajadores. 
          .row.justify-content-center.align-items-center(titulo="Matriz de riesgos de corrupción")
            .col-10
              P Es la posibilidad para que la entidad pueda identificar, analizar y evaluar la ocurrencia de corrupción en los procesos de su gestión.  
          .row.justify-content-center.align-items-center(titulo="Matriz de identificación de partes interesadas")
            .col-10
              P Es una herramienta que permite consultar por procesos y subprocesos, qué impacta interna o externamente, por las actividades misionales y administrativas que se ejecutan. 
          .row.justify-content-center.align-items-center(titulo="Matriz de comunicaciones")
            .col-10
              P Describe toda la información que se debe comunicar de manera interna y externa, a todos los procesos de la organización y hace parte de los sistemas de gestión. 
          .row.justify-content-center.align-items-center(titulo="Matriz de caracterización del proceso. Ciclo PHVA")
            .col-10
              P Es una herramienta importante que facilita la descripción de cómo funciona el proceso de una empresa a través de la identificación de elementos esenciales que permiten la gestión y control de los procesos.  
                                                                              .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Se debe tener en cuenta que el control de otras salidas de los procesos misionales, se da a través de puntos de control documentados en los procedimientos o reglamentos pertinentes.

    p(data-aos="fade-down") En el caso de la información documentada, la matriz de riesgos de la gestión documental, posibilita a la empresa prevenir la pérdida de información. Para ello, se puede crear una matriz en la que se identifiquen los conceptos de probabilidad e impacto, lo que posibilita reconocer cuáles son las prioridades frente a la mitigación de los posibles riesgos, para evitar que ocurran o para encontrar soluciones antes que lleguen a suceder.
    p(data-aos="fade-down").mb-5 Para lograr que esta matriz cumpla con su misión, debe contener mínimo los siguientes datos:  

    .row.text-center.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-down")
        .tarjeta.tarjeta-slide.arriba.color-primario.bg7(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4 Identificación del riesgo
              p.mb-0 En esta parte se debe dar una descripción del riesgo. Señalar cuál es el impacto del riesgo identificado, cuál es su causa y cuál su efecto.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/12.svg')})`}")

      .col-sm-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-down")
        .tarjeta.tarjeta-slide.arriba.color-primario.bg8(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/13.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4 Análisis del riesgo inherente
              p.mb-0 En esta parte se revisa cuál es la probabilidad, el impacto, y la zona de riesgo inherente.

      .col-sm-6.col-xl-3.mb-4.mb-sm-0(data-aos="fade-down")
        .tarjeta.tarjeta-slide.arriba.color-primario.bg9(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/14.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4 Evaluación del riesgo
              p.mb-0 Aquí se debe describir el control que se realiza frente al riesgo.

      .col-sm-6.col-xl-3(data-aos="fade-down")
        .tarjeta.tarjeta-slide.arriba.color-primario.bg10(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/15.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4 Plan de acción
              p.mb-0 Esta parte debe generar las propuestas para evitar los riesgos frente al archivo documental. Se debe mostrar el responsable, la fecha de inicio y de terminación del plan, e incluir el seguimiento que se realiza a esos posibles riesgos.

    p(data-aos="fade-down").mb-5 Implementar actividades de control de creación, modificación, actualización, obsolescencia, revisión, aprobación, formalización, identificación, distribución, almacenamiento, de los documentos internos que se gestionan en la empresa, asegura su administración entre los actores. 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Por consiguiente, un sistema de gestión de documentos le permite a la empresa u organización, proteger la información confidencial a través de estrictas políticas de seguridad y control de acceso basado en roles, donde solo los usuarios autorizados pueden ver ciertos archivos o documentos.    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
