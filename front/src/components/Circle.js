import React from 'react';
import Data from '../data.json';


const Circle = (props) => {

  const sportsList = Data.map((data, index) => {
    return (
      <li key={index}>
        {data.sports.sportsList}
      </li>
    )
  });

  return (
    <ul>{sportsList}</ul>
  );

};

export default Circle;
