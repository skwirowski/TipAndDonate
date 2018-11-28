import { getCountry } from './config';
import { firsLetterToUpperCase } from './helperFunctions';

//? HOME component data

export const homeUserData = (user) => {
  const homeUsers = {
    pic: user.picture.large,
    title: firsLetterToUpperCase(user.name.title),
    name: firsLetterToUpperCase(user.name.first),
    surname: firsLetterToUpperCase(user.name.last),
    age: user.dob.age,
    username: user.login.username,
    email: user.email,
  }
  return homeUsers;
};

//? TABLE component data

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

//? CONTACT component data

export const contactUserData = (user) => {
  const contactUsers = {
    pic: user.picture.large,
    title: firsLetterToUpperCase(user.name.title),
    name: firsLetterToUpperCase(user.name.first),
    surname: firsLetterToUpperCase(user.name.last),
    gender: firsLetterToUpperCase(user.gender),
    phone: user.cell,
    city: firsLetterToUpperCase(user.location.city),
    country: getCountry(user.nat),
  }
  return contactUsers;
};
