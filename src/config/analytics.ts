// ============================================================
// analytics config
// ------------------------------------------------------------
// to wire up google analytics:
//   1. go to analytics.google.com -> admin -> data streams
//   2. add a new web stream for forward-nrg.com
//   3. copy the measurement id (looks like G-XXXXXXXXXX)
//   4. replace the value below
//   5. push. that's the only swap needed.
//
// while MEASUREMENT_ID is left as the placeholder, the gtag
// snippet won't load at all and the consent banner stays hidden.
// nothing breaks, nothing tracks.
// ============================================================

export const ANALYTICS = {
  // ga4 measurement id for forward-nrg.com (web stream)
  measurementId: 'G-0VZ1T52K1M',

  // domain to scope cookies to. helps with subdomain consistency.
  cookieDomain: 'forward-nrg.com',

  // whether to enable analytics at all (set false to disable site-wide)
  enabled: true,
} as const;

// computed: is the measurement id actually filled in?
export const analyticsConfigured =
  ANALYTICS.enabled &&
  ANALYTICS.measurementId.startsWith('G-') &&
  !ANALYTICS.measurementId.includes('REPLACE_ME');
