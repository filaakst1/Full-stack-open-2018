import React from 'react';

const DataFilter = ({ value,onChangeFunction  }) => {
    return (
      <div>
            rajaa näytettäviä: <input value={value} onChange={onChangeFunction} />
      </div>
    )
}

export default DataFilter