// ============================================================
// services — single source of truth for the 6 service areas
// ------------------------------------------------------------
// the services landing page lists these; the dynamic route
// src/pages/services/[service].astro (+ /en) renders one page
// per slug. slugs are identical across locales so the language
// toggle maps /services/<slug> <-> /en/services/<slug> cleanly.
// ============================================================
import type { Locale } from '../i18n/strings';

export interface ServiceCapability {
  name: string;
  body: string;
}

export interface Service {
  slug: string;
  num: string;
  title: string;
  lede: string;
  image: string;
  intro: string;
  capabilities: ServiceCapability[];
  outcome: string;
}

export const services: Record<Locale, Service[]> = {
  es: [
    {
      slug: 'project-development',
      num: '01',
      title: 'Desarrollo de proyectos',
      lede: 'De un terreno a un proyecto financiable.',
      image: '/img/tropical.jpg',
      intro:
        'Convertimos una oportunidad en un proyecto con bases sólidas. Antes de comprometer capital, verificamos lo que define la viabilidad: sitio, recurso, red y diligencia.',
      capabilities: [
        { name: 'Identificación de sitios', body: 'Selección de terrenos por recurso, topografía, acceso y cercanía a un punto de interconexión viable.' },
        { name: 'Evaluación de recurso', body: 'Medición y modelado del recurso solar o eólico para estimar generación con criterio.' },
        { name: 'Análisis financiero', body: 'Modelos de retorno y estructura que sustentan la decisión de inversión.' },
        { name: 'Estudios de interconexión', body: 'Capacidad disponible en la red y definición del punto de conexión.' },
        { name: 'Due diligence de tierra', body: 'Revisión legal y técnica del terreno antes de avanzar.' },
      ],
      outcome: 'Un proyecto con fundamentos verificados, listo para avanzar a ingeniería y financiamiento.',
    },
    {
      slug: 'engineering',
      num: '02',
      title: 'Ingeniería y diseño',
      lede: 'Diseño que el contratista realmente puede construir.',
      image: '/img/engineer.jpg',
      intro:
        'Del concepto al detalle. Llevamos el proyecto a documentos constructivos que pasan revisión y se ejecutan sin sorpresas en obra.',
      capabilities: [
        { name: 'Diseño conceptual', body: 'Volumetría, layout y arquitectura del sistema puestos a prueba contra el sitio.' },
        { name: 'Ingeniería de detalle', body: 'Documentos constructivos completos y coordinados.' },
        { name: 'Sistemas eléctricos', body: 'Diseño eléctrico de baja y media tensión, protecciones y medición.' },
        { name: 'Obras civiles', body: 'Cimentaciones, estructuras y obras de sitio.' },
        { name: 'Modelado energético', body: 'Simulación de generación para validar el desempeño esperado.' },
      ],
      outcome: 'Un paquete de ingeniería que el EPC puede construir tal como se diseñó.',
    },
    {
      slug: 'permitting',
      num: '03',
      title: 'Permisos y aprobaciones',
      lede: 'El principal diferenciador en Panamá.',
      image: '/img/panama.jpg',
      intro:
        'El entorno regulatorio es donde más proyectos se detienen. Gestionamos permisos y aprobaciones a tiempo, en la secuencia correcta.',
      capabilities: [
        { name: 'Permisos ambientales', body: 'Estudios y trámites ante la autoridad ambiental.' },
        { name: 'Coordinación con la distribuidora', body: 'Gestión técnica con la empresa de distribución eléctrica.' },
        { name: 'Aprobaciones gubernamentales', body: 'Trámites y licencias ante las entidades correspondientes.' },
        { name: 'Procesos de conexión a la red', body: 'Estudios y solicitudes ante la ASEP para la interconexión.' },
      ],
      outcome: 'Un proyecto con permisos en regla, sin sorpresas regulatorias más adelante.',
    },
    {
      slug: 'construction-management',
      num: '04',
      title: 'Gestión de construcción',
      lede: 'Supervisión que protege el cronograma y la calidad.',
      image: '/img/aerial.jpg',
      intro:
        'Representamos al propietario durante la construcción: vigilamos calidad, costo y tiempo hasta la puesta en marcha.',
      capabilities: [
        { name: 'Supervisión EPC', body: 'Control del contratista contra el diseño y el contrato.' },
        { name: 'Gestión de contratistas', body: 'Coordinación de frentes de trabajo y proveedores.' },
        { name: 'QA / QC', body: 'Aseguramiento y control de calidad en sitio.' },
        { name: 'Control de cronograma', body: 'Seguimiento de avance y manejo de desviaciones.' },
        { name: 'Puesta en marcha', body: 'Pruebas, energización y entrega del sistema en operación.' },
      ],
      outcome: 'Una planta construida según diseño, a tiempo y lista para operar.',
    },
    {
      slug: 'operations-maintenance',
      num: '05',
      title: 'Operación y mantenimiento',
      lede: 'El activo, funcionando durante décadas.',
      image: '/img/solar.jpg',
      intro:
        'La inversión no termina en la puesta en marcha. Mantenemos el desempeño del activo durante toda su vida útil.',
      capabilities: [
        { name: 'Mantenimiento preventivo', body: 'Programa de servicio en sitio para evitar fallas y degradación.' },
        { name: 'Monitoreo de desempeño', body: 'Seguimiento de generación contra lo esperado.' },
        { name: 'Diagnóstico y solución', body: 'Detección de fallas, incluida termografía para garantías.' },
        { name: 'Gestión de activos', body: 'Reportes y decisiones para optimizar el retorno.' },
      ],
      outcome: 'Un activo que entrega la generación prometida, año tras año.',
    },
    {
      slug: 'owners-engineer',
      num: '06',
      title: "Owner's engineer",
      lede: 'Ingeniería independiente para inversionistas y prestamistas.',
      image: '/img/grid.jpg',
      intro:
        'Criterio técnico imparcial al servicio de quien pone el capital. Respaldo honesto, con datos verificables, en cada etapa.',
      capabilities: [
        { name: 'Due diligence técnico', body: 'Evaluación independiente de la viabilidad y los riesgos del proyecto.' },
        { name: 'Revisión de diseño', body: 'Verificación del diseño antes de construir.' },
        { name: 'Monitoreo de construcción', body: 'Vigilancia técnica en representación del financista.' },
        { name: 'Informes de ingeniería independiente', body: 'Documentación auditable para soportar el cierre y el seguimiento.' },
      ],
      outcome: 'La certeza técnica que un inversionista o prestamista necesita para comprometer capital.',
    },
    {
      slug: 'optimization',
      num: '07',
      title: 'Optimización de activos',
      lede: 'Más energía del mismo permiso.',
      image: '/img/storage.jpg',
      intro:
        'El diseño estándar deja capacidad sobre la mesa. Buscamos los puntos técnicos y regulatorios que elevan el rendimiento de un activo sin rehacer su permiso — incluida la integración de almacenamiento (BESS) para despachar energía fuera de las horas pico.',
      capabilities: [
        { name: 'Integración de almacenamiento (BESS)', body: 'Baterías que capturan el excedente y lo despachan fuera de las horas pico, bajo el permiso vigente.' },
        { name: 'Repotenciación y mejoras', body: 'Ajustes de ingeniería que aumentan la generación de un activo existente.' },
        { name: 'Análisis de capacidad oculta', body: 'Revisión técnica y legal para encontrar el margen que el diseño estándar deja sin aprovechar.' },
        { name: 'Modelado de retorno', body: 'Cuantificamos la mejora con cifras verificables antes de invertir.' },
      ],
      outcome: 'Un activo que produce —y vende— más, sin renegociar lo esencial de su permiso.',
    },
    {
      slug: 'power-contracts',
      num: '08',
      title: 'Contratos de venta de energía',
      lede: 'Acuerdos PPA estructurados con criterio técnico.',
      image: '/img/turbinefield.jpg',
      intro:
        'Un PPA bien estructurado define la bancabilidad del proyecto. Aportamos el sustento técnico —generación, disponibilidad y riesgo— para negociar acuerdos que se sostienen en el tiempo.',
      capabilities: [
        { name: 'Estructuración de PPA', body: 'Definición de los términos técnicos y comerciales del acuerdo.' },
        { name: 'Modelado de generación', body: 'Proyección de energía y disponibilidad que respalda el precio pactado.' },
        { name: 'Análisis de riesgo', body: 'Identificación de los supuestos que pueden mover el retorno.' },
        { name: 'Soporte en negociación', body: 'Respaldo técnico en la mesa de negociación.' },
      ],
      outcome: 'Un contrato de energía con bases técnicas sólidas, listo para financiamiento.',
    },
    {
      slug: 'thermography',
      num: '09',
      title: 'Termografía para garantías',
      lede: 'Evidencia térmica para reclamos de garantía.',
      image: '/img/rooftop.jpg',
      intro:
        'Cuando un módulo o una conexión falla, la garantía solo responde con evidencia. Usamos termografía con dron para localizar con precisión dónde el activo pierde energía, y documentarlo para el reclamo.',
      capabilities: [
        { name: 'Inspección termográfica con dron', body: 'Imagen térmica de plantas completas en una sola jornada.' },
        { name: 'Localización de fallas', body: 'Puntos calientes, módulos degradados y conexiones deficientes.' },
        { name: 'Documentación para garantía', body: 'Informes que sustentan el reclamo ante el fabricante.' },
        { name: 'Verificación de desempeño', body: 'Confirmación del estado real del activo frente a lo esperado.' },
      ],
      outcome: 'Pruebas claras para recuperar lo que la garantía debe cubrir.',
    },
  ],
  en: [
    {
      slug: 'project-development',
      num: '01',
      title: 'Project development',
      lede: 'From a plot of land to a financeable project.',
      image: '/img/tropical.jpg',
      intro:
        'We turn an opportunity into a project on solid ground. Before any capital is committed, we verify what defines viability: site, resource, grid and diligence.',
      capabilities: [
        { name: 'Site identification', body: 'Selecting land by resource, topography, access and proximity to a viable interconnection point.' },
        { name: 'Resource assessment', body: 'Measuring and modeling the solar or wind resource to estimate generation with rigor.' },
        { name: 'Financial analysis', body: 'Return models and structure that support the investment decision.' },
        { name: 'Interconnection studies', body: 'Available grid capacity and definition of the connection point.' },
        { name: 'Land due diligence', body: 'Legal and technical review of the land before moving forward.' },
      ],
      outcome: 'A project with verified fundamentals, ready to advance to engineering and financing.',
    },
    {
      slug: 'engineering',
      num: '02',
      title: 'Engineering & design',
      lede: 'Design the contractor can actually build.',
      image: '/img/engineer.jpg',
      intro:
        'From concept to detail. We take the project to construction documents that pass review and get built without surprises on site.',
      capabilities: [
        { name: 'Conceptual design', body: 'Layout and system architecture tested against the site.' },
        { name: 'Detailed engineering', body: 'Complete, coordinated construction documents.' },
        { name: 'Electrical systems', body: 'Low- and medium-voltage design, protections and metering.' },
        { name: 'Civil works', body: 'Foundations, structures and site works.' },
        { name: 'Energy modeling', body: 'Generation simulation to validate expected performance.' },
      ],
      outcome: 'An engineering package the EPC can build exactly as designed.',
    },
    {
      slug: 'permitting',
      num: '03',
      title: 'Permitting & approvals',
      lede: 'The main differentiator in Panama.',
      image: '/img/panama.jpg',
      intro:
        'The regulatory environment is where most projects stall. We manage permits and approvals on time, in the right sequence.',
      capabilities: [
        { name: 'Environmental permitting', body: 'Studies and filings before the environmental authority.' },
        { name: 'Utility coordination', body: 'Technical coordination with the electricity distribution company.' },
        { name: 'Government approvals', body: 'Filings and licenses before the relevant agencies.' },
        { name: 'Grid connection processes', body: 'Studies and applications before ASEP for interconnection.' },
      ],
      outcome: 'A project with permits in order, free of regulatory surprises down the line.',
    },
    {
      slug: 'construction-management',
      num: '04',
      title: 'Construction management',
      lede: 'Oversight that protects schedule and quality.',
      image: '/img/aerial.jpg',
      intro:
        "We represent the owner during construction, guarding quality, cost and time through to commissioning.",
      capabilities: [
        { name: 'EPC oversight', body: 'Holding the contractor to the design and the contract.' },
        { name: 'Contractor management', body: 'Coordinating work fronts and suppliers.' },
        { name: 'QA / QC', body: 'Quality assurance and control on site.' },
        { name: 'Schedule control', body: 'Tracking progress and managing deviations.' },
        { name: 'Commissioning', body: 'Testing, energization and handover of the operating system.' },
      ],
      outcome: 'A plant built to design, on time and ready to operate.',
    },
    {
      slug: 'operations-maintenance',
      num: '05',
      title: 'Operations & maintenance',
      lede: 'The asset, performing for decades.',
      image: '/img/solar.jpg',
      intro:
        'The investment does not end at commissioning. We keep the asset performing across its full operating life.',
      capabilities: [
        { name: 'Preventive maintenance', body: 'On-site service program to prevent failures and degradation.' },
        { name: 'Performance monitoring', body: 'Tracking generation against expectations.' },
        { name: 'Troubleshooting', body: 'Fault detection, including warranty thermography.' },
        { name: 'Asset management', body: 'Reporting and decisions to optimize the return.' },
      ],
      outcome: 'An asset that delivers the promised generation, year after year.',
    },
    {
      slug: 'owners-engineer',
      num: '06',
      title: "Owner's engineer",
      lede: 'Independent engineering for investors and lenders.',
      image: '/img/grid.jpg',
      intro:
        'Impartial technical judgment in service of whoever puts up the capital. Honest support, with verifiable data, at every stage.',
      capabilities: [
        { name: 'Technical due diligence', body: 'Independent assessment of project viability and risk.' },
        { name: 'Design review', body: 'Verifying the design before construction.' },
        { name: 'Construction monitoring', body: 'Technical oversight on behalf of the financier.' },
        { name: 'Independent engineering reports', body: 'Auditable documentation to support close and ongoing monitoring.' },
      ],
      outcome: 'The technical certainty an investor or lender needs to commit capital.',
    },
    {
      slug: 'optimization',
      num: '07',
      title: 'Asset optimization',
      lede: 'More energy from the same permit.',
      image: '/img/storage.jpg',
      intro:
        'Standard design leaves capacity on the table. We look for the technical and regulatory leverage points that raise an asset’s output without redoing its permit — including battery storage (BESS) to dispatch energy outside peak hours.',
      capabilities: [
        { name: 'Battery storage (BESS) integration', body: 'Batteries that capture surplus and dispatch it off-peak, under the existing permit.' },
        { name: 'Repowering & upgrades', body: 'Engineering adjustments that lift an existing asset’s generation.' },
        { name: 'Hidden-capacity analysis', body: 'Technical and legal review to find the headroom standard design leaves unused.' },
        { name: 'Return modeling', body: 'We quantify the gain with verifiable figures before you invest.' },
      ],
      outcome: 'An asset that produces — and sells — more, without renegotiating the core of its permit.',
    },
    {
      slug: 'power-contracts',
      num: '08',
      title: 'Power purchase agreements',
      lede: 'PPAs structured with technical judgment.',
      image: '/img/turbinefield.jpg',
      intro:
        'A well-structured PPA defines a project’s bankability. We bring the technical backing — generation, availability and risk — to negotiate agreements that hold up over time.',
      capabilities: [
        { name: 'PPA structuring', body: 'Defining the technical and commercial terms of the agreement.' },
        { name: 'Generation modeling', body: 'Energy and availability projections that support the agreed price.' },
        { name: 'Risk analysis', body: 'Identifying the assumptions that can move the return.' },
        { name: 'Negotiation support', body: 'Technical backing at the negotiating table.' },
      ],
      outcome: 'A power contract on solid technical ground, ready for financing.',
    },
    {
      slug: 'thermography',
      num: '09',
      title: 'Warranty thermography',
      lede: 'Thermal evidence for warranty claims.',
      image: '/img/rooftop.jpg',
      intro:
        'When a module or connection fails, the warranty only responds to evidence. We use drone thermography to pinpoint exactly where an asset is losing energy, and document it for the claim.',
      capabilities: [
        { name: 'Drone thermographic inspection', body: 'Thermal imaging of entire plants in a single day.' },
        { name: 'Fault localization', body: 'Hot spots, degraded modules and poor connections.' },
        { name: 'Warranty documentation', body: 'Reports that support the claim with the manufacturer.' },
        { name: 'Performance verification', body: 'Confirming the asset’s real condition against expectations.' },
      ],
      outcome: 'Clear proof to recover what the warranty should cover.',
    },
  ],
};

export const serviceSlugs = services.es.map((s) => s.slug);
