import React from 'react';
import IgnoreListsItem from './ignore_lists_item';

const IgnoreLists = ({lists}) => {
  const list = lists.map((list) => {
    return <IgnoreListsItem list={list} />;
  });

  return(
    <ul>{list}</ul>
  );
}

export default IgnoreLists;
