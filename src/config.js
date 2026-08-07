/**
 * Equilo website configuration
 *
 * Update links and company details here when they are ready. The rest of the
 * website reads from this file, so you do not need to search through the UI.
 */
export const siteConfig = {
  name: 'Equilo',
  tagline: 'Rideudstyr fortjener flere ture',
  description:
    'Den danske markedsplads for ryttere. Køb og sælg rideudstyr nemt, trygt og med god samvittighed.',

  links: {
    appStore: '#download', // Replace with the final App Store URL
    googlePlay: '#download', // Replace with the final Google Play URL
    instagram: '#', // Replace with the Equilo Instagram URL
    facebook: '#', // Replace with the Equilo Facebook URL
    privacy: '/privacy/',
    terms: '/terms/',
    deleteAccount: '/delete-account/',
  },

  contact: {
    email: 'hej@equilo.dk',
    supportEmail: 'support@equilo.dk',
    privacyEmail: 'support@equilo.dk',
    dsaEmail: 'support@equilo.dk',
    companyName: 'NorthFrame',
    address: 'Cikoriegade 52, 2. tv., 2640 Hedehusene, Danmark',
    cvr: '', // Required if the operator is registered in CVR
    phone: '', // Add if this is the normal direct contact channel
  },

  colors: {
    background: '#F7F3EC',
    surface: '#FFFFFF',
    primary: '#315C4C',
    primaryDark: '#24382F',
    primaryLight: '#DDE8E2',
    text: '#1D2A24',
    mutedText: '#69736E',
    border: '#E5DFD5',
    danger: '#B84A4A',
    gold: '#D9A441',
    placeholder: '#E8E3DA',
  },
}
