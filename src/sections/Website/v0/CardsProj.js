import React from 'react'
import CardProjSingle from "./CardProjSingle"

const Example = ({info}) => {
  return (
    <div>
      
    {info.map( (x) => <CardProjSingle info={x} key={x.id} />)}
    </div>
  );
};

export default Example;