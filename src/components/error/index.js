import React from 'react';
import GenericMessage from '../messageReusable/index';

const renderErrorMessageText = (errorCode) => {
  let errorMessageText;
  if (Number(errorCode) === 404) errorMessageText = `The Page You're Looking For Was Not Found.`
  else errorMessageText = `There Has Been a Problem With Your Fetch Operation.`

  return errorMessageText;
}

const ErrorMessage = (props) => {
  return (
    <GenericMessage
      firstMessage={props.errorName}
      secondMessage={props.errorMessage}
      thirdMessage={renderErrorMessageText(props.errorMessage)}
    />
  )
}

export default ErrorMessage;