export const config = {
  apiURL: 'https://randomuser.me/api/',
  resultsParam: '?results=',
  results: 20,
  nationalityParam: 'nat=',
  nationalities: 'au,ca,es,fr,gb,ie,no,nl,nz,us',
}

export const getCountry = (code) => {
  let country = null;
  switch (code) {
    case 'AU':
      country = 'Australia';
      break;
    case 'CA':
      country = 'Canada';
      break;
    case 'ES':
      country = 'Spain';
      break;
    case 'FR':
      country = 'France';
      break;
    case 'GB':
      country = 'Great Britain';
      break;
    case 'IE':
      country = 'Ireland';
      break;
    case 'NO':
      country = 'Norway';
      break;
    case 'NL':
      country = 'Netherlands';
      break;
    case 'NZ':
      country = 'New Zealand';
      break;
    case 'US':
      country = 'United States';
      break;
    default:
      country = 'unknown';
  }
  return country;
}
