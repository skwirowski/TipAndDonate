import { getCountry } from './config';
import { firsLetterToUpperCase } from './helperFunctions';

export const createRows = (users) => users.map((user) => {
  const rows = {
    firstname: firsLetterToUpperCase(user.name.first),
    lastname: firsLetterToUpperCase(user.name.last),
    gender: firsLetterToUpperCase(user.gender),
    age: user.dob.age,
    city: firsLetterToUpperCase(user.location.city),
    country: getCountry(user.nat),
    registered: user.registered.date,
  };

  return rows;
});

export const columns = [
  { name: 'firstname', title: 'First Name' },
  { name: 'lastname', title: 'Last Name' },
  { name: 'gender', title: 'Gender' },
  { name: 'age', title: 'Age' },
  { name: 'city', title: 'City' },
  { name: 'country', title: 'Country' },
  { name: 'registered', title: 'Registered' },
];