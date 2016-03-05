import React from 'react';
import IgnoreListsItem from './ignore_lists_item';

const IgnoreLists = ({lists}) => {
  const list = lists.map((list) => {
    return (
      <IgnoreListsItem key={list.id} list={list}/>
    );
  });

  return(
      <ul className="col-md-2 list-group column-small">
        <li className="column-title">Ignore this lists</li>
        {list}
      </ul>
  );
}

export default IgnoreLists;
