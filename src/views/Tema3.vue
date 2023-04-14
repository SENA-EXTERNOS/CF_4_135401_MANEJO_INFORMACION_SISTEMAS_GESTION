<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Ciclo de vida del documento y control de la información documentada
    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/16.png', alt='')      
      .col-lg-7
        p(data-aos="fade-down") Por otra parte, ciclo de vida de los documentos, es el nombre que se le da a las diferentes etapas por las que pasa el documento, desde su creación hasta su destrucción o selección para almacenamiento permanente, y está determinado por el valor y la frecuencia de uso de los documentos.

        p(data-aos="fade-down") El ciclo de vida de los documentos, debe considerar los tipos de archivos existentes, con el fin de conservarlos y controlarlos.

    p(data-aos="fade-down").mb-5 Ahora, se dan a conocer las etapas sucesivas por las que atraviesan los documentos, desde su producción o recepción, hasta su disposición final. 


    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/17.svg', alt='')

      .tarjeta.color-acento-botones.p-3(x="29.5%" y="32.5%" numero="1") 
        p.mb-0 Agrupa los documentos de los diferentes archivos de gestión de la organización. Su consulta no es común, no obstante, siguen siendo vigentes, por lo que son objeto de consulta por diferentes áreas y usuarios en general.  
      .tarjeta.color-acento-botones.p-3(x="44%" y="32.5%" numero="2") 
        p.mb-0 Abarca toda la documentación que se utiliza continuamente y que es consultada por las áreas que la soliciten. Su circulación o trámite da respuesta o solución a asuntos iniciados. 
      .tarjeta.color-acento-botones.p-3(x="58%" y="32.5%" numero="3") 
        p.mb-0 Como su nombre lo indica, es el archivo que contiene los documentos que deben conservarse permanentemente, por su valor histórico dentro de la organización.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .cajon.color-acento-botones.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Cabe destacar que la norma ISO 9001:2015 en el numeral 7.5.3, señala que la información documentada que es requerida por el Sistema de Gestión de la Calidad y por la Norma Internacional, debe ser controlada para asegurarse que esté disponible y sea idónea para su uso y se encuentre protegida adecuadamente, que se evite la pérdida de la confidencialidad y el uso inadecuado o la privación de integridad. Para ello, toda organización debe mantener al día los documentos seleccionados en el listado maestro, (índice de documentos que apoyan el control y la operación de los procesos garantizando su actualización, disponibilidad y su uso) para llevar un control de la información documentada. 
    p(data-aos="fade-down").mb-5 Es así como la organización debe tener en cuenta las siguientes actividades:
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12.text-center
        .row.justify-content-center.mb-5
          .col-md-4.col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="fade-left")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/18.svg', style="width: 102px")
              .tarjeta.color-acento-contenido1
                .p-4
                  p.mb-0 Distribuir los documentos para acceder a ellos, recuperarlos y usarlos.
          .col-md-4.col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/19.svg', style="width: 102px")
              .tarjeta.color-acento-contenido1
                .p-4
                  p.mb-0 Almacenar y preservar, incluyendo la protección de la legibilidad.
          .col-md-4.col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="fade-left")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/20.svg', style="width: 102px")
              .tarjeta.color-acento-contenido1
                .p-4
                  p.mb-0 Controlar los cambios como el control de versión, conservarlos y disponerlos de modo que se puedan recuperar versiones específicas más adelante.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 La información documentada, de origen externo, que la organización determine como necesaria para la planificación y operación del Sistema de Gestión de la Calidad, se debe identificar, según sea apropiado y controlar la preservación de los documentos, o el control de cambios de una versión a otra.  

    p(data-aos="fade-down").mb-5 La información documentada requerida por el Sistema de Gestión de la Calidad y por la Norma Internacional, se debe controlar para asegurar que:   

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8.text-center
        .row.justify-content-center.mb-5
          .col-md-6.col-lg-6.col-lg.mb-5.mb-lg-0(data-aos="fade-left")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/21.svg', style="width: 102px")
              .tarjeta.color-acento-contenido1
                .p-4
                  p.mb-0 Esté disponible y sea idónea para su uso, dónde y cuándo se necesite.
          .col-md-6.col-lg-6.col-lg.mb-5.mb-lg-0(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/22.svg', style="width: 102px")
              .tarjeta.color-acento-contenido1
                .p-4
                  p.mb-0 Esté protegida adecuadamente, contra pérdida de la confidencialidad, uso inadecuado, o pérdida de integridad. 

    p(data-aos="fade-down") Para poder controlar la información documentada, la empresa tiene que abordar todas las actividades que realice, según corresponda: acceso, distribución, recuperación y utilización; almacenamiento y conservación de la legibilidad o control de cambio. Para esto, es importante tener en cuenta cuáles son los documentos obligatorios requeridos, y los no requeridos por la norma.

    p(data-aos="fade-down").mb-5 Los documentos obligatorios requeridos por la Norma ISO 9001:2015 son:  

    .row.justify-content-center.align-items-start
      .col-lg-9
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-acento-botones--borde.p-4(titulo="Alcance del <br>  sistema de<br>  gestión <br> de calidad")
            h4.mb-4 Cláusula ISO 9001:2015 (4.3)
            p La organización debe determinar los límites y la aplicabilidad del SGC para establecer su alcance. Cuando se determina este alcance, la organización debe considerar el seguimiento y revisión de la información sobre las cuestiones internas y externas, como los requisitos de las partes interesadas pertinentes, indicados en el apartado 4.2 y los productos y servicios ofrecidos por la organización.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Política de <br> calidad")
            h4.mb-4 Cláusula ISO 9001:2015 (5.2)
            p La alta dirección debe establecer, implementar y mantener la política de calidad. Para ello se requiere que sea apropiada al propósito y contexto de la organización y apoye su dirección estratégica; que incluya un compromiso de cumplir los requisitos aplicables y que proporcione un marco de referencia para el establecimiento de los objetivos de la calidad.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Objetivos de<br>calidad y<br>  planes para <br>alcanzarlos")
            h4.mb-4 Cláusula ISO 9001:2015 (6.2)
            p Los objetivos de calidad se refieren al medio con el que la empresa puede enfilar todos sus esfuerzos para cumplir con la política de calidad; de aquí que, mediante la medición de los objetivos y los indicadores que contienen, se consiga determinar el grado de cumplimiento de la política de calidad.                       
      .col-lg-3
        img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/23.png', alt='') 

    .row.justify-content-center.align-items-center          
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-5.mb-4.mb-lg-0
              h4.mb-0 Igualmente, la norma ISO 9001:2015, contiene una lista de los requisitos para su implementación, de los cuales también existen muchos documentos que no son obligatorios, pero pueden ser usados en la implementación. A continuación, se relacionan algunos de los documentos que no son obligaciones por norma:
            .col-lg-7
              .bloque-texto-a__texto.p-4
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right.v
                    p.mb-0 Determinar el contexto de la organización y las partes interesadas. Cláusula ISO 9001:2015 (4.1 - 4.2).

                  li 
                    i.fas.fa-angle-right.v
                    p.mb-0 Procedimientos para abordar los riesgos y oportunidades. Cláusula ISO 9001:2015 (6.1).

                  li 
                    i.fas.fa-angle-right.v
                    p.mb-0 Procedimiento para el control de documentos y registros. Cláusula ISO 9001:2015 (7.2 - 7.3).

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/24.png', alt='')      
      .col-lg-7
        p(data-aos="fade-down") Es importante tener presente que, en el mundo globalizado de hoy, la calidad se ha convertido en una necesidad inevitable de mantener en el mercado, y la documentación es el soporte del Sistema de Gestión de la Calidad, porque refleja no solo el funcionamiento de la organización, sino también toda la información que permite desarrollar cada uno de los procesos y toma de decisiones.

        p(data-aos="fade-down") El proceso metodológico aquí propuesto sirve como guía para la implementación de sistemas de documentación que cumplan con los requisitos de la norma ISO 9001, y puedan ser utilizados por los profesionales de la calidad, de cualquier organización que se enfrente a la compleja tarea de establecer un SGC.

    p(data-aos="fade-down").mb-5 Para obtener un adecuado desarrollo del sistema de conservación de la información documentada, se deben tener en cuenta las siguientes etapas:

    .row.justify-content-center.align-items-start.mb-5   
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/25.png', alt='')     
      .col-lg-7
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg11")
          .row.justify-content-center.align-items-center(titulo="Diseño")
            .col-10
              P Funciona como un conjunto de actividades y procesos de preservación y conservación preventiva, estratégicamente diseñados, con el objetivo de garantizar la integridad física y funcional del medio, desde el momento de su producción, recepción, período de vigencia, hasta su eliminación definitiva, lo que asegura la sostenibilidad de la información y garantiza la adecuada conservación documental.     
          .row.justify-content-center.align-items-center(titulo="Mantenimiento")
            .col-10
              P Se relaciona con los requisitos para mantener la integridad, autenticidad y disponibilidad de los documentos en el marco del plan de protección digital a largo plazo, y de acuerdo con las diferentes etapas de la gestión documental. 
          .row.justify-content-center.align-items-center(titulo="Difusión")
            .col-10
              P Abarca el establecimiento de las acciones para la sensibilización interna y externa, en torno al sistema integrado de conservación en pro del aseguramiento de la información. 
          .row.justify-content-center.align-items-center(titulo="Administración")
            .col-10
              P Hace referencia a los lineamientos que permitan administrar todas las operaciones técnicas relativas al Sistema Integrado de Conservación, Plan de Conservación Documental y el Plan de Preservación Digital a Largo Plazo y en concordancia con el Programa de Gestión Documental.   

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 En cuanto al <i>software</i> de administración de documentos, es una herramienta muy útil para distribuir y compartir archivos y documentos comerciales que los miembros del equipo necesitan tener a mano. Es un programa informático que permite consultar, editar y acceder a los documentos creados en una empresa y, por lo general, tienen escáneres o buscadores y necesitan proporcionar medios de almacenamiento para la recuperación de archivos. 

    p(data-aos="fade-down").mb-5 Existen varios programas de gestión documental con características muy específicas según la necesidad: el tamaño del almacenamiento, la disponibilidad, la seguridad, y algunos de ellos que son especialmente útiles cuando se necesita la colaboración de la herramienta entre diferentes usuarios.

    SlyderF.custom.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.tarjeta--slyder.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/26.png", alt="alt").img100.m-auto     
        p.text-center.mb-0 Alfresco

      .tarjeta.tarjeta--slyder.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/27.png", alt="alt").img100.m-auto        
        p.text-center.mb-0.fst-italic Google Apps for Work

      .tarjeta.tarjeta--slyder.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/28.png", alt="alt").img100.m-auto       
        p.text-center.mb-0.fst-italic Microsoft Office 365

      .tarjeta.tarjeta--slyder.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/29.png", alt="alt").img100.m-auto       
        p.text-center.mb-0.fst-italic Microsoft SharePoint Online 

      .tarjeta.tarjeta--slyder.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/30.png", alt="alt").img100.m-auto       
        p.text-center.mb-0.fst-italic Open Text Content Suite 

      .tarjeta.tarjeta--slyder.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/31.png", alt="alt").img100.m-auto       
        p.text-center.mb-0.fst-italic Documentum 

    .list.mb-5(data-aos="fade-down")
      .list__item
        .list__item__icon
          img(src='@/assets/curso/temas/v.svg', alt='')
      .list__txt
        h3.mb-0 Listado maestro de información documentada  

    p(data-aos="fade-down") Finalicemos el tema de estudio del listado maestro de información documentada, el cual es un formato que contiene un registro de documentos establecidos por una organización, que respaldan la gestión y operación de los procesos, garantizan su actualización, disponibilidad y uso.
      br
      br
      |Para conocer más sobre esta temática, lo invitamos a ver el siguiente video:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/mp8ww1eALFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  

    .row.justify-content-center.align-items-start.mb-5   
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/32.png', alt='')     
      .col-lg-7
        p(data-aos="fade-down") En conclusión, el listado maestro de información documentada, mostrará exactamente qué documentos y registros son obligatorios para ISO 9001:2015, y cómo estructurar cada documento. Este informe es importante para todas las organizaciones que están empezando a implementar su SGC, ofreciéndoles una amplia visión acerca de:

        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta.colorv
              span 1
            p.mb-0 A qué cláusula de la Norma ISO 9001 se refiere cada documento obligatorio.
          li 
            .lista-ol--cuadro__vineta.colorv
              span 2
            p.mb-0 Cuáles documentos no obligatorios son comúnmente usados.
          li 
            .lista-ol--cuadro__vineta.colorv
              span 3
            p.mb-0 Cómo estructurar documentos y registros.
          li 
            .lista-ol--cuadro__vineta.colorv
              span 4
            p.mb-0 Dónde encontrar documentos de muestra. 

        p(data-aos="fade-down") Recuerde, los tipos de documentos del sistema de gestión de una organización son: 
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta.colorv
              span 
                i.fas.fa-circle.fa-xs 
            p.mb-0 Caracterización del proceso.
          li 
            .lista-ol--cuadro__vineta.colorv
              span
                i.fas.fa-circle.fa-xs  
            p.mb-0 Manuales.
          li 
            .lista-ol--cuadro__vineta.colorv
              span
                i.fas.fa-circle.fa-xs  
            p.mb-0 Procedimiento.
          li 
            .lista-ol--cuadro__vineta.colorv
              span 
                i.fas.fa-circle.fa-xs  
            p.mb-0 Instructivo.
          li 
            .lista-ol--cuadro__vineta.colorv
              span
                i.fas.fa-circle.fa-xs  
            p.mb-0 Guía.
          li 
            .lista-ol--cuadro__vineta.colorv
              span
                i.fas.fa-circle.fa-xs  
            p.mb-0 Formato.
          li 
            .lista-ol--cuadro__vineta.colorv
              span
                i.fas.fa-circle.fa-xs  
            p.mb-0 Documentos de apoyo.

</template>
<script>
export default {
  name: 'Tema3',
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
