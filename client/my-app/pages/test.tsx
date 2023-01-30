import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Test() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/product/`)
      .then((result) => {
        setData(result.data.filter((e: any) => e.category === 'clothes'));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {data.map((e:any) => {
        return (
          <div key={e._id}>
            <h1>{e.name}</h1>
            <img src={e.image} alt="" />
          </div>
        );
      })}
    </div>
  );
}
