<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Recursos y procesos
      
    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.png', alt='')      
      .col-lg-7
        p(data-aos="fade-down") Comencemos hablando sobre el concepto recurso, el cual hace referencia a los diferentes medios empleados por la organización para conseguir un objetivo o satisfacer una necesidad y alcanzar las metas trazadas. Por esta razón, la empresa debe asignar los recursos necesarios para establecer, implementar y buscar el mejoramiento continuo del Sistema de Gestión de la Calidad de la organización. Esto significa que se debe considerar la disponibilidad y las dificultades de los recursos con los que cuenta la empresa, tanto internos como externos.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 En general, las organizaciones cuentan con unos medios limitados para llevar a cabo sus actividades o para lograr sus objetivos a corto y largo plazo. La mayoría de estos recursos son parte de sus activos, es decir, le pertenecen a la empresa, o al menos están al servicio de ella y, por lo tanto, una buena gestión de los procesos conduce a mejores resultados. A grandes rasgos, las empresas cuentan con dos tipos de recursos: los tangibles, cosas que se pueden tocar, acumular, almacenar y mover, es decir, concretas y físicas, como el caso de las máquinas o el papel moneda; y los intangibles, los que no se pueden tocar, porque no son físicos ni concretos, pero no por ello menos valiosos, como es el caso de la información, el talento humano o el llamado saber hacer (<i>know how</i>). 

    p(data-aos="fade-down").mb-5 Es así como los considerados recursos básicos de una organización son:

    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.svg', alt='')

      .tarjeta.color-acento-botones.p-3(x="10.5%" y="9.5%" numero="1") 
        p.mb-0 Se refiere a todo el personal que ha sido contratado por la organización para cumplir con sus objetivos. El talento humano es el recurso principal y más importante de cualquier organización; dependiendo del tipo de empresa, se encarga de operar, controlar y supervisar la producción, incluso en algunos entornos altamente automatizados.  

      .tarjeta.color-acento-botones.p-3(x="90.5%" y="9.5%" numero="2") 
        p.mb-0 Son los bienes tangibles que requiere la empresa para desarrollar su actividad. Estos pueden ser maquinarias, inmuebles, insumos, elementos de oficina, entre otros.             

      .tarjeta.color-acento-botones.p-3(x="10.5%" y="92%" numero="3") 
        p.mb-0 Son el efectivo y los activos de la empresa, y con los que se cuenta para pagar sus obligaciones.  

      .tarjeta.color-acento-botones.p-3(x="90.5%" y="92%" numero="4") 
        p.mb-0 No se pueden percibir físicamente y se clasifican en legales y competitivos. Los primeros son derechos de marca o de autor, patentes, entre otros, mientras que los segundos hacen referencia a los conocimientos acumulados por la organización.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .cajon.color-acento-botones.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Teniendo claro el concepto de recurso, continuamos con los procesos en las organizaciones, los cuales son fundamentales, porque permiten desarrollar, implementar y mejorar la eficacia de los sistemas de gestión de la calidad.

    p(data-aos="fade-down").mb-5 La gestión por procesos, en las organizaciones, permite un valor agregado a las entradas, de modo que las salidas que se obtengan satisfagan las necesidades de los clientes, sin perder de vista las relaciones con los proveedores.
      br
      br
      |Lo siguiente es una representación esquemática de los procesos y muestra la interacción entre sus elementos, los puntos de control del seguimiento y la medición:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 1
          br
          span.fst-italic Representación esquemática de los elementos del proceso 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.svg', alt='').mb-3 
        figcaption #[b Nota.] Tomado y adaptado de ICONTEC (2015).     

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/5.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Si las organizaciones parten de los procesos, es necesario identificar los mapas, definidos como diagramas, en los cuales se puede visualizar, fácilmente, las relaciones de una organización, que se encuentran distribuidas en estratégicas, misionales y de apoyo. Cada uno debe contar con las entradas de solicitud (sea de producto o servicio), para entregar un producto terminado o un servicio al cliente, así como también, la diferenciación de cada uno de ellos, según su naturaleza.

    p(data-aos="fade-down").mb-5 A continuación, se amplía la información sobre los procesos involucrados:

    .row.justify-content-center.align-items-stretch.mb-4          
      .col-lg-4.col-md-10.bg1.p-4.my-3
        img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/6.png', alt='')      
        h4.mb-4 Procesos estratégicos
        p Orientados a la propia definición y control de las metas que la organización quiere lograr, así como también a las políticas a seguir y las estrategias a desarrollar. Son competencia directa de la alta dirección:
        ul.lista-ul
          li 
            i.fas.fa-angle-right.v
            p.mb-0 Gestión gerencial. 
          li 
            i.fas.fa-angle-right.v
            p.mb-0 Gestión calidad. 
          li 
            i.fas.fa-angle-right.v
            p.mb-0 Gestión administrativa. 
          li 
            i.fas.fa-angle-right.v
            p.mb-0 Auditorías internas.
          

      .col-lg-4.col-md-10.bg2.p-4.my-3
        img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/7.png', alt='')      
        h4.mb-4 Procesos misionales
        p Están relacionados con el objetivo fundamental de la empresa: el bien o servicio que presta. También se denominan procesos operativos o procesos claves, porque hacen referencia a la función sustantiva de la organización:
        ul.lista-ul
          li 
            i.fas.fa-angle-right.v
            p.mb-0 Departamento de ventas.
          li 
            i.fas.fa-angle-right.v
            p.mb-0 Departamento de diseño.
          li 
            i.fas.fa-angle-right.v
            p.mb-0 Departamento de producción.
         

      .col-lg-4.col-md-10.bg3.p-4.my-3
        img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')      
        h4.mb-4 Procesos de apoyo 
        p Como su nombre lo indica, son los procesos que se requieren para sustentar a los otros procesos, es decir, son aquellos procesos transversales que sirven de apoyo para que todo funcione con fluidez:
        ul.lista-ul
          li 
            i.fas.fa-angle-right.v
            p.mb-0 Departamento de sistemas.
          li 
            i.fas.fa-angle-right.v
            p.mb-0 Departamento de compras.
          li 
            i.fas.fa-angle-right.v
            p.mb-0 Departamento de comunicaciones.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/9.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Ahora podemos pasar a la implementación del sistema de información, el cual hace referencia a las actividades propuestas por la empresa, para la organización de datos e información, sea de forma física, digital o electrónica, y que pueda ser consultada en cualquier momento. Con este sistema se podrá controlar, conservar y disponer de la información que la organización requiere para su día a día. 
          
    p(data-aos="fade-down") En la actualidad, la implementación de un sistema de información es una obligación para cualquier empresa que quiera permanecer en el tiempo. Justamente, cuando una empresa se proyecta para implementar su propio sistema, debe hacerlo paso a paso, debido a que está transformando el que hacer de la empresa, la gestión de sus procesos y recursos, y las responsabilidades de sus colaboradores.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
