import React from 'react';
import GenericMessage from '../messageReusable/index';

const NotFound = () => {
  return (
    <GenericMessage
      firstMessage="Ooops!"
      secondMessage="Sorry!"
      thirdMessage="The Page You're Looking For Doesn't Exist. Check URL Address."
    />
  );
};

export default NotFound;