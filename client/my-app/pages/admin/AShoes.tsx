import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

import NavBar from './Navbar component/NavBar';
import AllProduct from '../AllProduct.js';

import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
export default function Shoes() {
  const [Uname,setUname]=useState("")
  const [Uprice,setUprice]=useState(0)
  const [Udescription,setUdescription]=useState("")
  const [Uimage,setUimage]=useState("")
  const [show, setShow] = useState(false)
  
  const [shoes , setshoes]=useState([])
  useEffect(() => {
    axios.get("http://localHost:8080/product/shoes").then((res) => {
      console.log(res.data ,"sous");
      setshoes(res.data);
    });
  }, []);

  const UpdateElement = (element: any, body: any) => {
    axios
      .put(`http://localHost:8080/product/${element}`, body).then((res)=>{

      axios.get("http://localHost:8080/product/shoes").then((res) => {
        console.log(res.data, "sous");
        setshoes(res.data);
      });
        showInput()

      })
      .catch((err) => alert("an error occured"));
  };

  let showInput = () => {
    setShow(!show)
  }


  // const allProd = useContext(AllProduct);
  // const shoes = allProd.products.filter((e: any) => e.category === 'shoes');
  // const [shoes, setShoes] = useState([]);


  const DeleteProduct=(id:any)=>{
    console.log(id, "ffffff");
    
    axios
      .delete(`http://localHost:8080/product/${id}`)
      .then((res) => {
        axios.get("http://localHost:8080/product/shoes").then((res) => {
          
          setShoes(res.data);
        });
      })
      .catch((err) => alert("Error deleting"));
    }


  return (
    <>
      <NavBar />

      {Shoes.map((e: any) => {
        return (
          <CardGroup id="groupitems" key={e._id}>
            <Card className="groupitemCard">
              {show ? <input type="text" placeholder = {e.image} onChange={(e)=>{setUimage(e.target.value)}}/> :<Card.Img variant="top" src={e.image} />}
              <Card.Body>
                {show ? <input type="text" placeholder = {e.name} onChange={(e)=>{
                  setUname(e.target.value)
                  
                }}/> :<Card.Title> {e.name} </Card.Title>}
                {show ? <input type="text" placeholder = {e.description} onChange={(e)=>{setUdescription(e.target.value)}}/> :<Card.Text>{e.description}</Card.Text>}
              </Card.Body>
              {show ? <input type="text" placeholder = {e.price} onChange={(e)=>{setUprice(e.target.value) }}/> :<h2>${e.price}</h2>}

              <Button
                variant="outline-dark"
                className="snipcart-add-item"
                data-item-id={e._id}
                data-item-price={e.price}
                // data-item-description={e.description}
                data-item-image={e.image}
                data-item-name={e.name}
              >
                Add to cart
              </Button>
  

              <Card.Footer>
             
                <small className="text-muted">{e.date_added}</small>
              </Card.Footer>
              <button className=" hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" style={{background:"black"}}    
                 onClick={() => {
                  DeleteProduct(e._id)
                  console.log(e._id , "zyg");
                  
                }}
              
              >
  delete
</button>
<br></br>
<button
                className=" hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                style={{ background: "black" }}
                onClick={() => {
                  showInput()
                  
                }}
              >
                update
              </button>
             { show ? <button onClick={() => UpdateElement(e._id,{"name":Uname,"image":Uimage,"price":Uprice, "description":Udescription}) }>Save </button> : console.log('h') }
            </Card>
          </CardGroup>
        );
      })}
    </>
  );
}
