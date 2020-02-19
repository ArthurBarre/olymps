import React from 'react';
import Data from '../data.json';


const DateScroll = (props) => {

  // const [data, setData] = useState(Data);


  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.textContent);
    props.onDateChange(parseInt(e.target.textContent));
  }

  const listDate = Data.map((data, index) => {
    return (
      <li
        key={index}
        onClick={handleClick}>
        {data.year}
      </li>
    )
  }
  );

  return (
    <ul>{listDate}</ul>
  );
};

export default DateScroll;
