import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'


const Form = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [code, setCode] = useState('');

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'price') {
      setPrice(value);
    } else if (name === 'code') {
      setCode(value);
    } else if (name === 'image') {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // ส่งข้อมูลไปยังเซิร์ฟเวอร์
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('image', image);
      formData.append('code', code);

      await axios.post('http://localhost:5000/insert', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      setName('');
      setPrice('');
      setImage('');
      setCode('');

      Swal.fire(
        'Alert!',
        'บันทึกสินค้าเรียบร้อย',
        'success'
      )

    } catch (error) {
      Swal.fire(
        'Alert!',
        'กรุณากรอกข้อมูล หรือ Code นี้มีอยู่ในฐานข้อมูลแล้ว',
        'warning'
      )
      console.log(error)
    }
  };


  return (
    <div className="app">
      <div style={{ display: "flex", width: "1280px", justifyContent: "space-between" }}>
        <h1 style={{
          width:"252px",
          height:"48px",
          top:"96px",
          left:"99px",
          fontWeight:"600",
          fontSize:"32px",
          lineHeight:"48px"
        }} >Upload Product</h1>
        <Link to={'/'} style={{ height: "38px" }} className="btn btn-primary">สินค้าทั้งหมด</Link>
      </div>
      <div className="row my-3">
        <div className="col-md-12">
        <form className="form-horizontal" encType="multipart/form-data">
            <div style={{ width: "1100px", marginLeft: "10rem" }} className="form-group col" >
              
              <div>

                <label style={{
                  width:"115px",
                  height:"24px",
                  top:"176px",
                  left:"258px",
                  fontWeight:"400",
                  fontSize:"16px",
                  lineHeight:"24px",
                  color:"#252525"
                }} className="control-label col-sm-2">Upload image</label>
                <div className="col-sm-10">
                  <input
                    type="file"
                    className="form-control"
                    name="image"
                    onChange={handleChange}
                    accept="image/jpeg"
                    style={{
                      border: '2px dashed #D9D9D9',
                      borderRadius: '30px',
                      padding: '20rem',
                      width:"924px",
                      height:"350px", 
                      top:"210px",
                      left:"258px",
                      marginTop:"20px"
                    }}/>
                  <div style={{ display: "flex", justifyContent: "end" }} >
                    <p style={{ 
                      color: "#6C6C70",
                      width:"118px",
                      height:"18px",
                      top:"568px",
                      left:"1064px",
                      fontWeight:"300",
                      fontSize:"12px",
                      lineHeight:"18px",
                       }} >image upload (0/6)</p>
                  </div>
                </div>
              </div>

              <div className="form-group col">
                <label style={{
                  width:"114px",
                  height:"24px",
                  top:"600",
                  left:'258px',
                  fontWeight:"400",
                  fontSize:"16px",
                  lineHeight:"24px",
                  color:"#252525"
                }} >Product name</label>
                <div className="col-sm-10">
                  <input style={{ 
                    width:"924px",
                    height:"56px",
                    top:"634px",
                    left:"258px",
                    borderRadius: "30px",
                    marginTop:"1rem"
                   }} placeholder='Product name' type="text" className="form-control" name="name" value={name} onChange={handleChange}/>
                </div>
              </div>

              <div className="form-group col">
                <label style={{ 
                    width:"44px",
                    height:"24px",
                    top:"714px",
                    left:"260px",
                    fontWeight:"400",
                    fontSize:"16px",
                    lineHeight:"24px",
                    color:"#252525",
                    marginTop:"1rem"
                   }}>Code</label>
                <div className="col-sm-10">
                  <input style={{ 
                    width:"924px",
                    height:"56px",
                    top:"634px",
                    left:"258px",
                    borderRadius: "30px"
                   }} placeholder='Code' className="form-control" name="code" value={code} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group col">
                <label style={{
                 width:"39px",
                 height:"24px",
                 top:"828px",
                 left:"260px",
                 fontWeight:"400",
                 fontSize:"16px",
                 lineHeight:"24px",
                 color:"#252525",
                 marginTop:"1rem"
                }}>Price</label>
                <div className="col-sm-10">
                  <input style={{ height: "3.5rem", borderRadius: "30px" }} placeholder='฿1,000' type="text" className="form-control" name="price" value={price} onChange={handleChange} />
                </div>
              </div>
 

            </div>

          </form>
        </div>
      </div>
      <div className="form-group" style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{display:"flex", marginTop:"1rem",gap:"10px"}} className="col-sm-offset-2 col-sm-10">
                <Link style={{
                    width:"190px",
                    height:"56px", 
                    backgroundColor:"white",
                    borderRadius:"24px",
                    padding:"16px,72px",
                    border:"1px solid #D9D9D9 ",
                    color:"#E04132",
                    display:"flex",
                    top:"990px",
                    left:"519px",
                    justifyContent:"center",
                    alignItems:"center",
                    textDecoration: 'none'
                    }} to={'/'}>ยกเลิก</Link>

                  <button style={{
                    width:"185px",
                    height:"56px",
                    left:"735px",
                    top:"990px",
                    backgroundColor:"#E04132",
                    color:"white",
                    borderRadius:"24px",
                    padding:"16px,72px",
                    border:"1px solid #E04132"
                    }} onClick={handleSubmit} type="button">ยืนยัน</button>
                </div>
              </div>
    </div>
  );
};

export default Form;