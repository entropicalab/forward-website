// translation strings for nav chrome, footer, recurring labels.
// page-body copy lives in the page files themselves (mirrored under /en).
// keep keys flat — easier to grep and audit.

export type Locale = 'en' | 'es';

export const locales: Locale[] = ['es', 'en'];
export const defaultLocale: Locale = 'es';

export const strings = {
  es: {
    // nav
    'nav.services': 'servicios',
    'nav.projects': 'proyectos',
    'nav.industries': 'sectores',
    'nav.about': 'nosotros',
    'nav.contact': 'contacto',

    // chrome / actions
    'cta.contact': 'hablemos de su proyecto',
    'cta.consult': 'solicitar consulta',
    'cta.viewWork': 'ver proyectos',
    'cta.viewProject': 'ver proyecto',
    'cta.viewServices': 'ver servicios',
    'cta.readMore': 'leer más',
    'cta.back': '← volver',

    // case study / project labels
    'meta.location': 'ubicación',
    'meta.capacity': 'capacidad',
    'meta.year': 'año',
    'meta.sector': 'sector',
    'meta.status': 'estado',
    'meta.services': 'servicios prestados',

    // sectors
    'sector.solar': 'solar',
    'sector.wind': 'eólica',
    'sector.storage': 'almacenamiento',
    'sector.utility': 'utility-scale',
    'sector.commercial': 'comercial e industrial',

    // footer
    'footer.bio': 'forward energy es una firma panameña de ingeniería y servicios para proyectos de energía renovable. acompañamos cada proyecto, de la idea a la operación.',
    'footer.company': 'empresa',
    'footer.contact': 'contacto',
    'footer.address': 'ciudad de panamá · panamá',
    'footer.legal': 'forward energy · panamá',
    'footer.copyright': '© forward energy · todos los derechos reservados',

    // consent banner
    'consent.eyebrow': '// privacidad',
    'consent.text': 'este sitio usa google analytics para medir su uso. no se comparten datos personales con terceros. no se almacenan cookies a menos que usted acepte.',
    'consent.accept': 'aceptar',
    'consent.decline': 'rechazar',
    'consent.more': 'más información',
  },
  en: {
    // nav
    'nav.services': 'services',
    'nav.projects': 'projects',
    'nav.industries': 'sectors',
    'nav.about': 'about',
    'nav.contact': 'contact',

    // chrome / actions
    'cta.contact': "let's talk about your project",
    'cta.consult': 'request consultation',
    'cta.viewWork': 'view projects',
    'cta.viewProject': 'view project',
    'cta.viewServices': 'view services',
    'cta.readMore': 'read more',
    'cta.back': '← back',

    // case study / project labels
    'meta.location': 'location',
    'meta.capacity': 'capacity',
    'meta.year': 'year',
    'meta.sector': 'sector',
    'meta.status': 'status',
    'meta.services': 'services provided',

    // sectors
    'sector.solar': 'solar',
    'sector.wind': 'wind',
    'sector.storage': 'storage',
    'sector.utility': 'utility-scale',
    'sector.commercial': 'commercial & industrial',

    // footer
    'footer.bio': 'forward energy is a panama-based engineering and services firm for renewable energy projects. we take every project from concept to operation.',
    'footer.company': 'company',
    'footer.contact': 'contact',
    'footer.address': 'panama city · panama',
    'footer.legal': 'forward energy · panama',
    'footer.copyright': '© forward energy · all rights reserved',

    // consent banner
    'consent.eyebrow': '// privacy',
    'consent.text': 'this site uses google analytics to measure how it is used. no personal data is shared with third parties. cookies are not stored unless you accept.',
    'consent.accept': 'accept',
    'consent.decline': 'decline',
    'consent.more': 'more info',
  },
} as const;

export type TranslationKey = keyof (typeof strings)['es'];

export function translate(locale: Locale, key: TranslationKey): string {
  return strings[locale][key] ?? strings[defaultLocale][key] ?? key;
}
