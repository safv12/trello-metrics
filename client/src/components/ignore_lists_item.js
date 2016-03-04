import React from 'react';

const IgnoreListsItem = ({list}) => {
  return (
    <li className="column-item">
        {list.name}
    </li>
  );
};

export default IgnoreListsItem;
