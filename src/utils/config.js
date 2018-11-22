export const config = {
  apiURL: 'https://randomuser.me/api/',
  resultsParam: '?results=',
  results: 10,
  nationalityParam: 'nat=',
  nationalities: 'au,ca,es,fr,gb,ie,no,nl,nz,us',
}

export const getCountry = (code) => {
  let country = null;
  switch (code) {
    case 'au':
      country = 'Australia';
      break;
    case 'ca':
      country = 'Canada';
      break;
    case 'es':
      country = 'Spain';
      break;
    case 'fr':
      country = 'France';
      break;
    case 'gb':
      country = 'Great Britain';
      break;
    case 'ie':
      country = 'Ireland';
      break;
    case 'no':
      country = 'Norway';
      break;
    case 'nl':
      country = 'Netherlands';
      break;
    case 'nz':
      country = 'New Zealand';
      break;
    case 'us':
      country = 'United States';
      break;
    default:
      country = 'unknown';
  }
  return country;
}
