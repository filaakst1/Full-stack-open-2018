import React from 'react';

const CountrySearch = ({ value,onChangeFunction  }) => {
    return (
      <div>
            find counties: <input value={value} onChange={onChangeFunction} />
      </div>
    )
}

export default CountrySearch