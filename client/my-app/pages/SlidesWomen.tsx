import dumyData from './dumpData.js';
import { useState } from 'react';

export default function SlidesWomen() {
  const [index, setindex] = useState(0);

  var indexModif = (action: string) => {
    if (action === '+') {
      setindex(index + 1);
      if (index >= dumyData.length - 1) {
        setindex(0);
      }
    } else {
      setindex(index - 1);
      if (index === 0) {
        setindex(dumyData.length - 1);
      }
    }
  };

  return (
    <div className="slides">
      <img
        src="left.png"
        alt=""
        id="left"
        onClick={() => {
          indexModif('-');
        }}
      />

      <img src={dumyData[index].image} alt="" />

      <div className="slidesDetails">
        <h2> {dumyData[index].marque} </h2>

        <h5>{dumyData[index].description}</h5>
      </div>

      <img src="right.png" alt="" id="right" onClick={() => indexModif('+')} />
    </div>
  );
}
