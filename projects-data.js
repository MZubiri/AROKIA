/* ============================================
   AROKIA — Ingeniería Inmobiliaria S.A.C.
   Data Master de Obras y Proyectos de Construcción
   ============================================ */

const AROKIA_PROJECTS = [
  {
    id: "vista-verde",
    name: "Edificio Residencial Vista Verde",
    projectType: "Edificación Multifamiliar Premium",
    tagline: "Construcción integral de torre residencial de 18 niveles con aisladores sísmicos elastoméricos y certificación EDGE",
    client: "Inversiones Inmobiliarias Pezet S.A.",
    location: "San Isidro, Lima",
    address: "Av. Pezet 840, San Isidro",
    status: "construction",
    statusLabel: "En Construcción",
    badgeClass: "construction",
    builtArea: "14,850 m²",
    totalLevels: "18 pisos + 4 sótanos",
    contractType: "Suma Alzada — Contratista General (EPC)",
    executionPeriod: "20 meses (Entrega: Dic 2026)",
    concreteVolume: "4,200 m³ F'c 350-420 kg/cm²",
    steelWeight: "480 Toneladas de acero corrugado",
    safetyRecord: "185,000 Horas Hombre (0 accidentes)",
    bimLOD: "BIM LOD 400 (Coordinación MEP y Estructuras)",
    certification: "Certificación EDGE Sostenible (28% ahorro de agua, 24% energía)",
    imageMain: "assets/projects/project-1.jpg",
    gallery: [
      { url: "assets/projects/project-1.jpg", caption: "Perspectiva de Fachada y Volumetría Estructural", category: "fachada" },
      { url: "assets/projects/project-2.jpg", caption: "Lobby de Doble Altura y Control Estructural", category: "comunes" },
      { url: "assets/hero/hero-main.jpg", caption: "Rooftop y Estructura Superior de Remate", category: "comunes" },
      { url: "assets/projects/project-4.jpg", caption: "Instalaciones MEP y Acabados de Alta Gama", category: "interiores" }
    ],
    description: "AROKIA actúa como Contratista General para la edificación de este complejo residencial de alta complejidad en San Isidro. El proyecto incorpora cimentación profunda mediante muros pantalla anclados en 4 niveles de sótano, sistema de aislamiento sísmico en base con aisladores elastoméricos con núcleo de plomo (LRB), losas postensadas para grandes luces sin vigas peraltadas y fachada ventilada termo-acústica.",
    scopeServices: [
      { title: "Excavación y Muros Pantalla", desc: "Ejecución de 4 sótanos bajo el nivel de calle con muros anclados postensados autoportantes." },
      { title: "Estructuras de Concreto Armado", desc: "Vaciado de 18 losas de concreto de alta resistencia con tecnología de encofrados trepantes." },
      { title: "Aislamiento Sísmico en Base", desc: "Instalación y calibración de aisladores sísmicos elastoméricos importados certificados." },
      { title: "Instalaciones Electromecánicas (MEP)", desc: "Red contra incendios presurizada NFPA, grupos electrógenos de respaldo y subestación eléctrica." },
      { title: "Gerencia de Construcción Last Planner", desc: "Gestión de producción semanal para cumplimiento estricto del cronograma contractual." }
    ],
    technicalHighlights: [
      { label: "Área Total Construida", value: "14,850 m²" },
      { label: "Niveles", value: "18 pisos + 4 sótanos" },
      { label: "Sistema Estructural", value: "Aisladores Sísmicos LRB + Muros de Concreto" },
      { label: "Volumen de Concreto", value: "4,200 m³ (F'c 350 - 420 kg/cm²)" },
      { label: "Metodología", value: "VDC / BIM LOD 400 + Lean Construction" },
      { label: "Seguridad y Salud (HSE)", value: "Norma G.050 / Cero Accidentes Incapacitantes" }
    ],
    engineeringDrawings: [
      {
        id: "estructuras-planta",
        title: "Planta Estructural Típica — Losas y Muros",
        category: "Estructuras",
        desc: "Distribución de muros de corte de ductilidad optimizada y losas postensadas de 22 cm de espesor libre de vigas colgantes.",
        svgCode: "plan-estructural"
      },
      {
        id: "cimentacion-muros",
        title: "Cimentación y Muros Pantalla Anclados",
        category: "Geotecnia",
        desc: "Detalle de anclajes postensados activos temporales de 4 torones con capacidad de carga de 60 toneladas.",
        svgCode: "plan-cimentacion"
      },
      {
        id: "aisladores-detalle",
        title: "Disposición de Aisladores Sísmicos en Base",
        category: "Aislamiento",
        desc: "Montaje sobre capiteles de concreto armado con holgura de desplazamiento sísmico de 35 cm.",
        svgCode: "plan-aislador"
      }
    ],
    progress: {
      total: 35,
      phases: [
        { name: "Movimiento de Tierras y Excavación Masiva", percent: 100, status: "Concluido" },
        { name: "Muros Anclados y Sótanos (4 niveles)", percent: 100, status: "Concluido" },
        { name: "Estructura de Concreto Pisos 1 a 10", percent: 45, status: "En ejecución" },
        { name: "Albañilería y Mampostería", percent: 10, status: "En ejecución" },
        { name: "Instalaciones Sanitarias, Eléctricas y Clima", percent: 15, status: "En ejecución" },
        { name: "Acabados Arquitectónicos de Fachada", percent: 0, status: "Programado" }
      ]
    }
  },
  {
    id: "parque-central",
    name: "Edificio Residencial Parque Central",
    projectType: "Edificación Residencial de Alta Complejidad",
    tagline: "Construcción de torre multifamiliar de 15 niveles con disipadores sísmicos viscosos Taylor y muros de contención",
    client: "Desarrollos Urbanos Los Cedros S.A.C.",
    location: "Miraflores, Lima",
    address: "Calle Los Cedros 320, Miraflores",
    status: "construction",
    statusLabel: "En Construcción",
    badgeClass: "construction",
    builtArea: "11,200 m²",
    totalLevels: "15 pisos + 4 sótanos",
    contractType: "Construcción Llave en Mano (Turnkey)",
    executionPeriod: "18 meses (Entrega: Oct 2025)",
    concreteVolume: "3,450 m³ F'c 350 kg/cm²",
    steelWeight: "390 Toneladas",
    safetyRecord: "220,000 Horas Hombre (0 accidentes)",
    bimLOD: "BIM LOD 350",
    certification: "Certificación LEED Silver",
    imageMain: "assets/projects/project-2.jpg",
    gallery: [
      { url: "assets/projects/project-2.jpg", caption: "Fachada Terminada en Fase de Acabados", category: "fachada" },
      { url: "assets/projects/project-3.jpg", caption: "Control de Calidad en Ambientes Piloto", category: "interiores" },
      { url: "assets/projects/project-1.jpg", caption: "Voladizos y Balcones de Concreto a la Vista", category: "fachada" },
      { url: "assets/projects/project-4.jpg", caption: "Enchapes y Griferías de Alta Eficiencia", category: "interiores" }
    ],
    description: "Proyecto de edificación residencial frente a parque donde AROKIA ejecutó desde la demolición de la estructura previa, excavación controlada entre medianeras con vecinos protegidos, hasta la colocación de disipadores de energía por fluido viscoso que reducen las deformaciones sísmicas en un 40%.",
    scopeServices: [
      { title: "Demolición y Estabilización de Vecinos", desc: "Muros pantalla y apuntalamientos especiales para proteger predios colindantes." },
      { title: "Construcción de Estructura de Concreto", desc: "15 niveles de losas aligeradas unidireccionales y placas estructurales sismo-resistentes." },
      { title: "Disipadores de Energía Taylor Devices", desc: "Instalación de pórticos de acero con amortiguadores viscosos ensayados en laboratorio." },
      { title: "Envolvente y Acabados Arquitectónicos", desc: "Muros de microcemento, cristales insulados acústicos y carpintería de aluminio anodizado." }
    ],
    technicalHighlights: [
      { label: "Área Construida", value: "11,200 m²" },
      { label: "Niveles", value: "15 pisos + 4 sótanos" },
      { label: "Tecnología Sísmica", value: "Disipadores Sísmicos de Fluido Viscoso" },
      { label: "Concreto Estructural", value: "3,450 m³ con aditivos acelerantes de fragua" },
      { label: "Control de Calidad", value: "Plan QA/QC con ensayos de resistencia al 100%" },
      { label: "Plazo Contractual", value: "Cumplimiento al 100% en cronograma" }
    ],
    engineeringDrawings: [
      {
        id: "pórticos-disipadores",
        title: "Pórticos con Amortiguadores Viscosos",
        category: "Estructuras",
        desc: "Encuentro viga-columna y arriostre chevron para sujeción de disipador hidráulico.",
        svgCode: "plan-estructural"
      },
      {
        id: "planta-cimentacion",
        title: "Platea de Cimentación y Cisterna de Concreto",
        category: "Obras Civiles",
        desc: "Losa maciza de 1.20 m de espesor impermeabilizada con membranas cristalinas de estanqueidad.",
        svgCode: "plan-cimentacion"
      }
    ],
    progress: {
      total: 72,
      phases: [
        { name: "Cimentación y 4 Sótanos", percent: 100, status: "Concluido" },
        { name: "Estructura Principal (Pisos 1-15)", percent: 100, status: "Concluido" },
        { name: "Mampostería y Cielorrasos", percent: 90, status: "En ejecución" },
        { name: "Redes Eléctricas y Sanitarias", percent: 80, status: "En ejecución" },
        { name: "Acabados de Fachada y Pintura", percent: 50, status: "En ejecución" }
      ]
    }
  },
  {
    id: "torre-skyline",
    name: "Torre Skyline — Complejo Mixto",
    projectType: "Edificación Corporativa & Residencial",
    tagline: "Construcción vertical de 22 niveles con 5 sótanos de gran profundidad y monitoreo estructural IoT",
    client: "Fondo de Inversión Inmobiliaria Skyline",
    location: "Santiago de Surco, Lima",
    address: "Av. El Derby 450, Surco",
    status: "construction",
    statusLabel: "En Construcción",
    badgeClass: "construction",
    builtArea: "23,400 m²",
    totalLevels: "22 pisos + 5 sótanos",
    contractType: "Contratista General — Gerencia y Construcción (EPCM)",
    executionPeriod: "24 meses (Entrega: Mar 2026)",
    concreteVolume: "6,800 m³ F'c 420 kg/cm²",
    steelWeight: "780 Toneladas",
    safetyRecord: "340,000 Horas Hombre (0 accidentes)",
    bimLOD: "BIM LOD 400 + Modelado 4D de obra",
    certification: "Certificación EDGE Advanced",
    imageMain: "assets/projects/project-3.jpg",
    gallery: [
      { url: "assets/projects/project-3.jpg", caption: "Montaje Estructural en Altura con Grúa Torre", category: "fachada" },
      { url: "assets/projects/project-1.jpg", caption: "Detalle de Encuentro Viga-Columna en Fachada", category: "fachada" },
      { url: "assets/hero/hero-main.jpg", caption: "Estructura Metálica del Mirador Piso 22", category: "comunes" },
      { url: "assets/projects/project-2.jpg", caption: "Núcleo de Ascensores Schindler de Alta Velocidad", category: "comunes" }
    ],
    description: "AROKIA lidera la gerencia y construcción de esta torre emblemática de 22 pisos. Las características de ingeniería incluyen una excavación de 16 metros de profundidad en el centro financiero de Surco con grúa torre de pluma de 55 metros, muros anclados de 5 niveles, núcleo rígido central de concreto armado de alta resistencia y sensores triaxiales de monitoreo dinámico estructural.",
    scopeServices: [
      { title: "Ingeniería Geotécnica y Excavación Masiva", desc: "Movimiento de más de 32,000 m³ de material con anclajes en roca y grava de Lima." },
      { title: "Núcleo Central Sismo-Resistente", desc: "Vaciado continuo de muros cajón de concreto F'c 420 con encofrados trepantes hidráulicos." },
      { title: "Coordinación BIM 4D y Last Planner", desc: "Simulación digital de fases constructivas para reducir interferencias en obra a cero." },
      { title: "Instalaciones Especiales y Automatización", desc: "Sistemas BMS (Building Management System), presurización de escaleras y grupos electrógenos." }
    ],
    technicalHighlights: [
      { label: "Área Total", value: "23,400 m² techados" },
      { label: "Profundidad de Excavación", value: "-16.50 metros (5 sótanos)" },
      { label: "Altura de Torre", value: "72 metros sobre nivel de vereda" },
      { label: "Concreto Especial", value: "6,800 m³ F'c 420 kg/cm² autocompactante" },
      { label: "Maquinaria en Obra", value: "Grúa Torre Potain 55m + Bombas pluma de concreto" },
      { label: "Seguridad Industrial", value: "Protocolos estrictos G.050 / Monitoreo continuo" }
    ],
    engineeringDrawings: [
      {
        id: "seccion-torre",
        title: "Corte Longitudinal de la Torre y Sótanos",
        category: "Arquitectura & Estructuras",
        desc: "Esquema de alturas, 5 niveles de sótanos y losas de transición en nivel 1.",
        svgCode: "plan-estructural"
      },
      {
        id: "nucleo-concreto",
        title: "Armadura de Núcleo Central de Ascensores",
        category: "Estructuras",
        desc: "Detalle de mallas electrosoldadas reforzadas con acero corrugado grado 60.",
        svgCode: "plan-cimentacion"
      }
    ],
    progress: {
      total: 52,
      phases: [
        { name: "Excavación y 5 Sótanos Anclados", percent: 100, status: "Concluido" },
        { name: "Cimentación y Platea Maciza", percent: 100, status: "Concluido" },
        { name: "Estructuras Pisos 1 a 15", percent: 85, status: "En ejecución" },
        { name: "Estructuras Pisos 16 a 22", percent: 10, status: "En ejecución" },
        { name: "Instalaciones Electromecánicas Verticales", percent: 35, status: "En ejecución" }
      ]
    }
  },
  {
    id: "bosque-urbano",
    name: "Conjunto Residencial Bosque Urbano",
    projectType: "Edificación Residencial Sostenible",
    tagline: "Obra de construcción culminada con éxito, declaratoria de fábrica e independización 100% aprobadas",
    client: "Fideicomiso Inmobiliario San Felipe",
    location: "Jesús María, Lima",
    address: "Av. San Felipe 580, Jesús María",
    status: "delivered",
    statusLabel: "Obra Culminada",
    badgeClass: "delivered",
    builtArea: "8,950 m²",
    totalLevels: "14 pisos + 2 sótanos",
    contractType: "Construcción y Acabados Llave en Mano",
    executionPeriod: "16 meses (Entregado a tiempo)",
    concreteVolume: "2,700 m³ F'c 280-350 kg/cm²",
    steelWeight: "310 Toneladas",
    safetyRecord: "160,000 Horas Hombre (0 accidentes)",
    bimLOD: "BIM As-Built entregado al cliente",
    certification: "Certificación Bono Verde Mivivienda Grado III",
    imageMain: "assets/projects/project-4.jpg",
    gallery: [
      { url: "assets/projects/project-4.jpg", caption: "Fachada Final Entregada y Operativa", category: "fachada" },
      { url: "assets/projects/project-2.jpg", caption: "Acabados de Recepción y Control de Acceso", category: "comunes" },
      { url: "assets/projects/project-1.jpg", caption: "Jardines Interiores y Áreas Recreativas", category: "comunes" },
      { url: "assets/projects/project-3.jpg", caption: "Detalle de Acabados en Interiores Entregados", category: "interiores" }
    ],
    description: "Obra de edificación multifamiliar de 14 pisos entregada con cero observaciones por el cliente mandante y conformidad de obra municipal aprobada en primera revisión. AROKIA ejecutó el proyecto en 16 meses calendarios bajo estándares de construcción sostenible, minimizando el impacto acústico y de polvo en el entorno vecinal de Jesús María.",
    scopeServices: [
      { title: "Construcción Integral de Obra Civil", desc: "Cimentación, estructuras de concreto armado, albañilería e instalaciones sanitarias y eléctricas." },
      { title: "Gestión Integral de Acabados", desc: "Pisos SPC, carpintería metálica y de madera, porcelanatos y griferías de bajo consumo." },
      { title: "Conformidad de Obra y Trámites", desc: "Asesoría y acompañamiento hasta la declaratoria de fábrica e independización registral." },
      { title: "Servicio Post-Venta y Garantía de Obra", desc: "Garantía estructural de 10 años y manuales As-Built de operación de instalaciones." }
    ],
    technicalHighlights: [
      { label: "Área Total Construida", value: "8,950 m²" },
      { label: "Unidades Edificadas", value: "56 departamentos residenciales" },
      { label: "Plazo de Ejecución", value: "16 meses (100% en fecha contractual)" },
      { label: "Garantía de Obra", value: "Garantía estructural de 10 años" },
      { label: "Conformidad Municipal", value: "Licencia de Obra y Declaratoria 100% aprobada" },
      { label: "Residuos de Construcción", value: "Gestión ambiental con disposición certificada de desmonte" }
    ],
    engineeringDrawings: [
      {
        id: "as-built-planta",
        title: "Plano As-Built de Distribución y Estructuras",
        category: "Planos Finales",
        desc: "Documentación técnica fiel de obra para el expediente de independización registral.",
        svgCode: "plan-estructural"
      }
    ],
    progress: {
      total: 100,
      phases: [
        { name: "Cimentación y Sótanos", percent: 100, status: "Concluido" },
        { name: "Casco Estructural de Concreto", percent: 100, status: "Concluido" },
        { name: "Redes e Instalaciones Sanitarias / Eléctricas", percent: 100, status: "Concluido" },
        { name: "Acabados y Fachadas", percent: 100, status: "Concluido" },
        { name: "Conformidad de Obra y Entrega al Cliente", percent: 100, status: "Concluido" }
      ]
    }
  }
];

// Helper functions for easy lookup
function getProjectById(id) {
  if (!id) return AROKIA_PROJECTS[0];
  const found = AROKIA_PROJECTS.find(p => p.id === id.toLowerCase());
  return found || AROKIA_PROJECTS[0];
}

function getAllProjects() {
  return AROKIA_PROJECTS;
}
