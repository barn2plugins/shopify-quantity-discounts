import Mixpanel from "mixpanel";

/**
 * Tracks bundle creation event in Mixpanel with detailed properties
 * 
 * @param {Object} params - The parameters object
 * @param {Object} params.session - The session object containing shop information
 * @param {Object} params.bundle - The bundle data object
 */
export const trackBundleCreateEvent = async ({session, bundle}) => {
  const mp = Mixpanel.init(process.env.MIXPANEL_TOKEN);

  const prettifyValue = (str) => {
    return str.replace(/_/g, ' ').charAt(0).toUpperCase() + str.replace(/_/g, ' ').slice(1);
  }

  mp.track('Bundle created', {
    distinct_id: session.shop,
    'Shop': session.shop,
    'Bundle ID': bundle.id,
    'Bundle type': prettifyValue(bundle.type),
    'Preview enabled': bundle?.previewEnabled ? true : false,
    'Bundle name': bundle.name,
    'Priority': bundle.priority,
    'Bundle status': bundle.active ? 'Active' : 'Inactive',
    'Which products': prettifyValue(bundle.whichProducts),
    'Selected products count': JSON.parse(bundle.selectedProducts || '[]').length,
    'Selected collections count': JSON.parse(bundle.selectedCollections || '[]').length,
    'Excluded products count': JSON.parse(bundle.excludedProducts || '[]').length,
    'Excluded collections count': JSON.parse(bundle.excludedCollections || '[]').length,
    'Volume bundles count': JSON.parse(bundle.volumeBundles || '[]').length,
    'Pricing tiers count': JSON.parse(bundle.pricingTiers || '[]').length,
    'Bulk table discount calculation': prettifyValue(bundle.discountCalculation),
    'Start date': bundle.startDate,
    'End date': bundle.endDate || null,
    'Has end date': !!bundle.endDate,
    'Created at': new Date().toISOString()
  });
}

/**
 * Tracks bundle update event in Mixpanel with detailed properties
 * 
 * @param {Object} params - The parameters object
 * @param {Object} params.session - The session object containing shop information
 * @param {Object} params.bundle - The bundle data object
 */
export const trackBundleUpdateEvent = async ({session, bundle}) => {
  const mp = Mixpanel.init(process.env.MIXPANEL_TOKEN);

  const prettifyValue = (str) => {
    return str.replace(/_/g, ' ').charAt(0).toUpperCase() + str.replace(/_/g, ' ').slice(1);
  }

  mp.track('Bundle updated', {
    distinct_id: session.shop,
    'Shop': session.shop,
    'Bundle ID': bundle.id,
    'Bundle type': prettifyValue(bundle.type),
    'Preview enabled': bundle?.previewEnabled ? true : false,
    'Bundle name': bundle.name,
    'Priority': bundle.priority,
    'Bundle status': bundle.active ? 'Active' : 'Inactive',
    'Which products': prettifyValue(bundle.whichProducts),
    'Selected products count': JSON.parse(bundle.selectedProducts || '[]').length,
    'Selected collections count': JSON.parse(bundle.selectedCollections || '[]').length,
    'Excluded products count': JSON.parse(bundle.excludedProducts || '[]').length,
    'Excluded collections count': JSON.parse(bundle.excludedCollections || '[]').length,
    'Volume bundles count': JSON.parse(bundle.volumeBundles || '[]').length,
    'Pricing tiers count': JSON.parse(bundle.pricingTiers || '[]').length,
    'Bulk table discount calculation': prettifyValue(bundle.discountCalculation),
    'Start date': bundle.startDate,
    'End date': bundle.endDate || null,
    'Has end date': !!bundle.endDate,
    'Created at': new Date().toISOString()
  });
}

/**
 * Tracks bundle duplicate event in Mixpanel with detailed properties
 * 
 * @param {Object} params - The parameters object
 * @param {Object} params.session - The session object containing shop information
 * @param {Object} params.bundle - The bundle data object
 */
export const trackBundleDuplicateEvent = async ({session, bundle}) => {
  const mp = Mixpanel.init(process.env.MIXPANEL_TOKEN);

  const prettifyValue = (str) => {
    return str.replace(/_/g, ' ').charAt(0).toUpperCase() + str.replace(/_/g, ' ').slice(1);
  }

  mp.track('Bundle duplicate', {
    distinct_id: session.shop,
    'Shop': session.shop,
    'Bundle ID': bundle.id,
    'Bundle type': prettifyValue(bundle.type),
    'Preview enabled': bundle?.previewEnabled ? true : false,
    'Bundle name': bundle.name,
    'Priority': bundle.priority,
    'Bundle status': bundle.active ? 'Active' : 'Inactive',
    'Which products': prettifyValue(bundle.whichProducts),
    'Selected products count': JSON.parse(bundle.selectedProducts || '[]').length,
    'Selected collections count': JSON.parse(bundle.selectedCollections || '[]').length,
    'Excluded products count': JSON.parse(bundle.excludedProducts || '[]').length,
    'Excluded collections count': JSON.parse(bundle.excludedCollections || '[]').length,
    'Volume bundles count': JSON.parse(bundle.volumeBundles || '[]').length,
    'Pricing tiers count': JSON.parse(bundle.pricingTiers || '[]').length,
    'Bulk table discount calculation': prettifyValue(bundle.discountCalculation),
    'Start date': bundle.startDate,
    'End date': bundle.endDate || null,
    'Has end date': !!bundle.endDate,
    'Created at': new Date().toISOString()
  });
}

/**
 * Tracks bundle delete event in Mixpanel with detailed properties
 * 
 * @param {Object} params - The parameters object
 * @param {Object} params.session - The session object containing shop information
 * @param {Object} params.bundle - The bundle data object
 */
export const trackBundleDeleteEvent = async ({session, bundle}) => {
  const mp = Mixpanel.init(process.env.MIXPANEL_TOKEN);

  const prettifyValue = (str) => {
    return str.replace(/_/g, ' ').charAt(0).toUpperCase() + str.replace(/_/g, ' ').slice(1);
  }

  mp.track('Bundle delete', {
    distinct_id: session.shop,
    'Shop': session.shop,
    'Bundle ID': bundle.id,
    'Bundle type': prettifyValue(bundle.type),
    'Preview enabled': bundle?.previewEnabled ? true : false,
    'Bundle name': bundle.name,
    'Priority': bundle.priority,
    'Bundle status': bundle.active ? 'Active' : 'Inactive',
    'Which products': prettifyValue(bundle.whichProducts),
    'Selected products count': JSON.parse(bundle.selectedProducts || '[]').length,
    'Selected collections count': JSON.parse(bundle.selectedCollections || '[]').length,
    'Excluded products count': JSON.parse(bundle.excludedProducts || '[]').length,
    'Excluded collections count': JSON.parse(bundle.excludedCollections || '[]').length,
    'Volume bundles count': JSON.parse(bundle.volumeBundles || '[]').length,
    'Pricing tiers count': JSON.parse(bundle.pricingTiers || '[]').length,
    'Bulk table discount calculation': prettifyValue(bundle.discountCalculation),
    'Start date': bundle.startDate,
    'End date': bundle.endDate || null,
    'Has end date': !!bundle.endDate,
    'Created at': new Date().toISOString()
  });
}

/**
 * Tracks bundle status update event in Mixpanel with detailed properties
 * 
 * @param {Object} params - The parameters object
 * @param {Object} params.session - The session object containing shop information
 * @param {Object} params.bundle - The bundle data object
 */
export const trackBundleStatusUpdateEvent = async ({session, bundle, eventName}) => {
  const mp = Mixpanel.init(process.env.MIXPANEL_TOKEN);

  const prettifyValue = (str) => {
    return str.replace(/_/g, ' ').charAt(0).toUpperCase() + str.replace(/_/g, ' ').slice(1);
  }

  mp.track(eventName, {
    distinct_id: session.shop,
    'Shop': session.shop,
    'Bundle ID': bundle.id,
    'Bundle type': prettifyValue(bundle.type),
    'Preview enabled': bundle?.previewEnabled ? true : false,
    'Bundle name': bundle.name,
    'Priority': bundle.priority,
    'Bundle status': bundle.active ? 'Active' : 'Inactive',
    'Which products': prettifyValue(bundle.whichProducts),
    'Selected products count': JSON.parse(bundle.selectedProducts || '[]').length,
    'Selected collections count': JSON.parse(bundle.selectedCollections || '[]').length,
    'Excluded products count': JSON.parse(bundle.excludedProducts || '[]').length,
    'Excluded collections count': JSON.parse(bundle.excludedCollections || '[]').length,
    'Volume bundles count': JSON.parse(bundle.volumeBundles || '[]').length,
    'Pricing tiers count': JSON.parse(bundle.pricingTiers || '[]').length,
    'Bulk table discount calculation': prettifyValue(bundle.discountCalculation),
    'Start date': bundle.startDate,
    'End date': bundle.endDate || null,
    'Has end date': !!bundle.endDate,
    'Created at': new Date().toISOString()
  });
}

/**
 * Tracks bundle delete event in Mixpanel with detailed properties
 * 
 * @param {Object} params - The parameters object
 * @param {Object} params.session - The session object containing shop information
 */
export const trackBundlePrioritiesEvent = async ({session, totalBundles}) => {
  const mp = Mixpanel.init(process.env.MIXPANEL_TOKEN);

  mp.track('Bundle priority update', {
    distinct_id: session.shop,
    'Total bundles': totalBundles,
  });
}