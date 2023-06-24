import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function SinglePage() {
  const { productCode } = useParams();
  const [productData, setProductData] = useState('');

  const pathParts = window.location.pathname.split('/');
  const path = pathParts[pathParts.length - 1];

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000/detail/${path}`);
      setProductData(res.data);
      if (res.data.image !== undefined) {
      }
    };
    fetchData();
  }, [path]);

  if (productData.image !== undefined) {
    const image = productData.image;
    console.log(image)
    return (
      <div className="app">
        <div
          style={{
            display: "flex",
            width: "1220px",
            justifyContent: "space-between",
            marginBottom: "1rem"
          }}>

          <h1
            style={{
              fontSize: "32px",
              fontWeight: "600",
              marginRight: "3rem"
            }}>
            Product detail
          </h1>

          <Link to={"/"} style={{ height: "38px" }} className="btn btn-primary">
            หน้าแรก
          </Link>
        </div>

        <div style={{
          width: "400px",
          height: "700px",
          top: "272px",
          left: "172px",
          boxShadow: "0 4px 3px rgb(0 0 0 / 0.2)"
        }} >
          <img src={`http://localhost:5000/images/${image}`} alt={productData.name} style={{
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            position:"relative"
          }} />
          <div style={{
            width: "400px",
            display: "flex",
            gap: "10px",
            marginBottom: "0.5rem",
            position: "absolute",
            top: "49%",
            left: "43%"
          }}>

            <div style={{
              width: "36px",
              height: "7px",
              top: "190px",
              left: "42px",
              backgroundColor: "#E13B30"
            }} ></div>
            <div style={{
              width: "36px",
              height: "7px",
              top: "190px",
              left: "42px",
              backgroundColor: "#DEDEDE"
            }} ></div>
            <div style={{
              width: "36px",
              height: "7px",
              top: "190px",
              left: "42px",
              backgroundColor: "#DEDEDE"
            }} ></div>
            <div style={{
              width: "36px",
              height: "7px",
              top: "190px",
              left: "42px",
              backgroundColor: "#DEDEDE"
            }} ></div>
            <div style={{
              width: "36px",
              height: "7px",
              top: "190px",
              left: "42px",
              backgroundColor: "#DEDEDE"
            }} ></div>
            <div style={{
              width: "36px",
              height: "7px",
              top: "190px",
              left: "42px",
              backgroundColor: "#DEDEDE"
            }} ></div>
          </div>
          <div style={{display:"flex"}} >
            <div style={{marginLeft:"1.5rem",marginTop:"1.5rem"}}>
            <h2 style={{
              width: "400px",
              height: "40px",
              top: "400px",
              left: "30px",
              fontWeight: "600",
              fontSize: "35px",
              lineHeight: "40px",
              color: "#252525"
            }}  >{productData.name}</h2>
            <p style={{
              width:"100px",
              height:"32px",
              top:"240px",
              left:"16px",
              fontWeight:"400",
              fontSize:"24px",
              lineHeight:"18px",
              color:"#6C6C70",
              marginTop:"1.5rem"
            }} >{productData.code}</p>

            <div style={{display:"flex",justifyContent:"end"}} >
            <h2 style={{
              width:"126px",
              height:"60px",
              top:"550px",
              left:"210px",
              fontWeight:"600",
              fontSize:"40px",
              lineHeight:"60px",
              marginRight:"1.5rem",
              marginTop:"3.5rem",
              color:"#E13B30"
            }} >฿{parseInt(productData.price)}</h2>

            </div>

            </div>

          </div>

        </div>
      </div>
    );
  }

  return null; // หรือคุณสามารถกำหนดเงื่อนไขเพิ่มเติมเพื่อแสดงข้อความหรือสิ่งอื่นๆ ที่คุณต้องการ
}

export default SinglePage;
