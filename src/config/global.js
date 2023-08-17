export default {
  global: {
    componenteFormativo:
      'Control, conservación y disposición de la información documentada',
    descripcionCurso:
      'El control, conservación y disposición de la información documental se fundamenta en la norma ISO 9001:2015, y su fin es fortalecer el sistema de gestión de calidad de las empresas. El buen funcionamiento de este sistema, posibilita mayor organización para proteger la documentación, su volumen depende del tamaño de la empresa, tipo de actividad que realiza, procesos, productos y servicios que presta.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Recursos y procesos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Matriz para la gestión de la información documentada',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Ciclo de vida del documento y control de la información documentada',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Mantenimiento, conservación y divulgación de la información documentada',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Recursos y procesos',
      referencia:
        'Sierra, L. F. (2017). <em>E-gestión documental: Líneas de trabajo para su implementación.</em> ',
      tipo: 'PDF',
      link:
        'https://revistas.sena.edu.co/index.php/ricga/article/view/1040/1158  ',
    },
    {
      tema: 'Recursos y procesos',
      referencia:
        'Hamidian, B. y Ospino, G. (2015). ¿Por qué los sistemas de información son esenciales? <em>Anuario</em>, 38, p. 161-183.',
      tipo: 'PDF',
      link: 'http://servicio.bc.uc.edu.ve/derecho/revista/idc38/art07.pdf  ',
    },
    {
      tema:
        'Ciclo de vida del documento y control de la información documentada',
      referencia:
        'Procuraduría General de la Nación. (2019). Programa de gestión documental PGD.',
      tipo: 'PDF',
      link:
        'https://www.procuraduria.gov.co/portal/media/docs/PGD%20v1_9_1%281%29.pdf',
    },
    {
      tema:
        'Ciclo de vida del documento y control de la información documentada',
      referencia:
        'Cámara de Comercio de Barranquilla. (2015). <em>Programa de Gestión Documental (PGD).</em> ',
      tipo: 'PDF',
      link:
        'https://www.camarabaq.org.co/wp-content/uploads/2019/01/Programa-Gestio%CC%81n-Documental-PGD_V1.pdf ',
    },
    {
      tema:
        'Mantenimiento, conservación y divulgación de la información documentada',
      referencia:
        'Mineducación. (2020). <em>Plan de Conservación Documental 2020.</em> ',
      tipo: 'PDF',
      link:
        'https://www.mineducacion.gov.co/1759/articles-362792_recurso_88.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Archivo',
      significado:
        'cualquier documento que almacene en su computadora, como música, video, fotos, archivos descargados de Internet o un documento de texto o una hoja de cálculo, se conoce como archivo.',
    },
    {
      termino: 'Calidad',
      significado:
        'grado en el que un conjunto de características inherentes, cumple con los requisitos.',
    },
    {
      termino: 'Caracterización',
      significado:
        'descripción de las características esenciales de un objeto, proceso de una situación, de una entidad en su Sistema de Gestión Integrado, se detallan entradas, salidas, recursos, entre otros.',
    },
    {
      termino: 'Documento',
      significado: 'dato que posee significado y medio de soporte.',
    },
    {
      termino: 'Documento externo',
      significado:
        'es la información documentada suministrada por entes o personas externas a la entidad; por ejemplo, puede ser por un usuario, un proveedor, o parte interesada en los procesos de la entidad.',
    },
    {
      termino: 'Empresa',
      significado:
        'es una organización formada por personas y recursos cuyo objetivo es conseguir beneficios económicos con el desarrollo de una determinada actividad. Esta unidad de producción puede tener una sola persona y debe buscar la rentabilidad y alcanzar una serie de metas previstas en su formación.',
    },
    {
      termino: 'Información',
      significado:
        'conjunto de datos que proporciona nueva información a un individuo o sistema sobre un tema, sustancia, fenómeno o entidad en particular, que ha sido previamente procesada y ordenada para su comprensión.',
    },
    {
      termino: 'Norma',
      significado:
        'se conoce como norma para regir o un conjunto de ellas, una ley, directriz o principio que se impone, adoptar y debe observarse para realizar correctamente una acción o también para orientar, dirigir o ajustar la conducta o el comportamiento de los individuos.',
    },
    {
      termino: 'Sistema',
      significado:
        'conjunto de elementos mutuamente relacionados o que interactúan.',
    },
    {
      termino: 'Sistemas de Gestión',
      significado:
        'sistema para establecer la política y los objetivos para lograr dichos objetivos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Archivo General de la Nación. (s.f.). <em>Tablas de Retención Documental (TRD).</em> ',
      link:
        'https://www.archivogeneral.gov.co/transparencia/gestion-informacion-publica/Tablas-de-Retencion-Documental-TRD#:~:text=Se%20define%20como%20el%20listado,su%20necesidad%20e%20importancia%20en',
    },
    {
      referencia:
        'Archivo General de la Nación. (2020). <i>Modelo de Gestión Documental y Administración de Archivos</i>.',
      link:
        'https://www.archivogeneral.gov.co/sites/default/files/Estructura_Web/5_Consulte/Recursos/Publicacionees/V3_MGDA-min.pdf',
    },
    {
      referencia:
        'García-Morales, E. (2017). <em>Información documentada y gestión del conocimiento en la ISO 9001:2015: aportación del profesional de la información. Anuario ThinkEPI, 11,</em> p. 269-273. ',
      link:
        'https://www.scipedia.com/wd/images/b/bb/Draft_Content_511082538-57988-9945-document.pdf',
    },
    {
      referencia:
        'Universidad de Pamplona. (s.f.). <em>Elaboración y Control de la Información Documentada del Sistema Integrado de Gestión.</em>',
      link:
        'https://www.unipamplona.edu.co/unipamplona/portalIG/home_13/recursos/sistema_integrado_gestion/procedimientos/24052018/pac_01_control_documentos.pdf',
    },
    {
      referencia:
        'Varela, J. y Carrillo, J. (2020). Estrategias para la identificación y divulgación del patrimonio documental de la ciudad de Ibagué. <i>Revista Vía Innova</i>, 7(1), p. 51-65.',
      link: 'https://revistas.sena.edu.co/index.php/RVI/article/view/3367/4951',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
