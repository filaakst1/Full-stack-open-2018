import React from 'react';

const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
    return (
      <div class="message">
        {message}
      </div>
    )
}

export default Notification
  