import { useEffect, useState } from "react";
import "./app.css";
import Table from "./Table";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";



function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      if (query.length === 0 || query.length > 2) {
        const res = await axios.get(`http://localhost:5000?q=${query}`);
        setData(res.data);
      }
    };
  
    fetchData();
  }, [query]);
  useEffect(() => {
    console.log(data); // เพิ่มบรรทัดนี้เพื่อตรวจสอบค่า data ที่ได้รับกลับมาจาก API
  }, [data]);
  
  

  return (
    <div  className="app">
       <div style={{
        display:"flex",
        width:"1220px",
        justifyContent:"space-between",
        marginBottom:"1rem"
        }}>

      <h1 style={{
        fontSize:"32px",
        fontWeight:"600",
        marginRight:"3rem"
        }} >Product list</h1>
        <Link to={'/form'} style={{height:"38px"}} className="btn btn-primary">เพิ่มสินค้า</Link>
        </div>

       
        <input  style={{
                padding: '1.5rem',
                width: '1240px',
                height:"56px",
                borderRadius: '35px',
                border: '1px solid #D9D9D9',
                backgroundColor: '',
                fontSize: '18px',
                marginBottom:"4rem",
                top:"176px",
                left:"100px"
                
              }}
          className="search"
          placeholder=" ⛶ Name, Catalogue, Code"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      {<Table data={data} />}


    </div>
  );
}

export default App;
