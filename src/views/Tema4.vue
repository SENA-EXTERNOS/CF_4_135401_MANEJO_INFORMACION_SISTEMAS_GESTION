<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Mantenimiento, conservación y divulgación de la información documentada
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/33.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Recordemos que el Sistema de Gestión de la Calidad de las empresas tiene que incluir toda la información documentada que requiere la norma ISO 9001, buscando que el SGC funcione bien. Dentro de este sistema, se requiere un proceso de mantenimiento, entendido como el proceso mediante el cual se presta el servicio para mejorar, adecuar y restablecer la conservación de la información documentada y se lleve a cabo de manera preventiva o correctiva. 

    p(data-aos="fade-down").mb-5 A continuación, se aborda cada uno de ellos: 

    .row.justify-content-center.align-items-stretch.mb-4.text-center         
      .col-lg-6.col-md-10.bg12.p-4.my-3
        img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/34.png', alt='')      
        h4.mb-4 Mantenimiento preventivo
        p Se le realiza a cualquier equipo o instalación física, con el fin de reducir la ocurrencia de una falla; a través de este mantenimiento se pueden identificar nuevos riesgos de falla o desgaste de partes en los equipos.

      .col-lg-6.col-md-10.bg13.p-4.my-3
        img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/35.png', alt='')      
        h4.mb-4 Mantenimiento correctivo
        p Es el mantenimiento que se realiza a cualquier equipo, inmueble o instalación, cuando se presenta una falla imprevista y es necesario corregirlo, sea temporal o definitivamente. 

    p(data-aos="fade-down").mb-5 Ahora, la preservación debe enfocarse en documentos analógicos y electrónicos para asegurar la veracidad, integridad, confiabilidad y preservación a largo plazo, de acuerdo con la Tabla de Retención Documental (TRD) y permitir procesos de migración de información, independientemente de la tecnología o del medio de almacenamiento utilizado.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .cajon.color-acento-botones.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Una tabla de retención documental se define como el listado de series, con sus correspondientes tipos documentales, a las cuales se asigna el tiempo de permanencia en cada etapa del ciclo vital de los documentos, es decir, se considera como el instrumento que permite establecer cuáles son los documentos de una entidad, su necesidad e importancia en términos de tiempo de conservación y preservación y qué debe hacerse con ellos, una vez finalice su vigencia o utilidad. (Archivo General de la Nación, s.f.)

    p(data-aos="fade-down").mb-5 Para la preservación de los documentos físicos, se deben tener en cuenta los siguientes ítems:

    .row.justify-content-center.align-items-start
      .col-lg-3
        img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/36.png', alt='')     
      .col-lg-9
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-acento-botones--borde.p-4(titulo="La tramitación de<br> la documentación")
            p Actuación que debe cumplir con las instrucciones de conservación, impartidas por un conservador y un archivero. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Prohibido comer,<br> beber o fumar")
            p Se debe evitar siempre comer, beber o fumar en la manipulación de documentos y durante cualquier trámite: consulta en puestos de trabajo, tramitación técnica, limpieza, higienización, embalaje, traslado, archivo, recepción, digitalización, etc. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Requerimientos para<br> el personal")
            p El personal deberá contar con los insumos de seguridad industrial, almacenamiento de documentos, mobiliario y sistemas de transporte de documentos necesarios para su adecuado manejo. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Manipulación de<br> documentos")
            p Los documentos deben manipularse con cuidado, debido a que pueden estar contaminados biológicamente.                               
    .list.mb-5(data-aos="fade-down")
      .list__item
        .list__item__icon
          img(src='@/assets/curso/temas/v.svg', alt='')
      .list__txt
        h3.mb-0 Divulgación de la información documentada

    p(data-aos="fade-down") Las empresas divulgan sus documentos a través de la plataforma digital, con la responsabilidad de garantizar el conocimiento y aplicación de los documentos validados, función que corresponde a los líderes de cada proceso, quienes deben divulgar e informar a sus colaboradores en reunión de grupo de mejoramiento, los procesos, antes de su implementación.

    p(data-aos="fade-down").mb-5 La metodología utilizada en la divulgación de la información documentada y cada uno de sus procesos que hacen parte de las organizaciones, van siempre encaminadas al sentido de pertenencia e identidad con la empresa.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Ha finalizado el estudio de este recurso educativo. Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal donde encontrará la síntesis, el material complementario, entre otros. Adicional, lo invitamos a resolver la actividad didáctica para reforzar los conceptos estudiados en el componente formativo.     

</template>

<script>
export default {
  name: 'Tema4',
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
