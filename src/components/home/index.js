import React from 'react';

const renderUsers = (users) => users.map((user, index) => {
  const pic = user.picture.large;
  const title = user.name.title;
  const name = user.name.first;
  const surname = user.name.last;
  const age = user.dob.age;
  const username = user.login.username;
  const email = user.email;

  return (
    <div
      key={index}
    >
      <img
        src={pic}
        alt={title + ' ' + name + ' ' + surname}
      />
      <p>
        {title} {name} {surname} {age} {username} {email}
      </p>
    </div>
  )
});

const Home = (props) => {
  return (
    <div>
      {renderUsers(props.usersData)}
    </div>
  );
};

export default Home;