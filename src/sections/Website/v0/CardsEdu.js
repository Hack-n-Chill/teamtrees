import React from 'react'
import CardEduSingle from "./CardEduSingle"

const Example = ({info}) => {
  return (
    <div>
      
    {info.map( (x) => <CardEduSingle info={x} key={x.id} />)}
    </div>
  );
};

export default Example;