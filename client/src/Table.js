import { Link } from "react-router-dom";

const Table = ({ data }) => {
  {
    data.map((product, idx) => (
      console.log(product.image)
    ))
  }

  return (
    <div >
      {data && (
        <ul style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "5px"
        }}>
          {data.map((product, idx) => (
            <li style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }} key={idx}>
              <div style={{ width: "15rem", display: "flex", justifyContent: "center",boxShadow:"0 4px 3px rgb(0 0 0 / 0.2)",position:"relative" }}>
                <div style={{
                  width: "200px",
                  heigh: "335px",
                  top: "272px",
                  left: "172px",
                  borderRadius: "16px"
                }} >
                  <Link to={`/detail/${encodeURIComponent(product.code)}`} style={{ width: "200px", height: "200px" }}>
                    {product.image !== undefined && (
                      <img style={{
                        widthL: "200px",
                        height: "200px",
                        borderTopLeftRadius: "16px",
                        borderTopRightRadius: "16px",
                        marginBottom:"5px"
                      }} src={`http://localhost:5000/images/${product.image}`} alt={product.name} />
                    )}
                    <div style={{width:"200px", 
                    display:"flex", 
                    gap:"5px",
                    marginBottom:"0.5rem",
                    position:"absolute",
                    top:"60%",
                    left:"21%"
                    }}>

                    <div style={{
                    width:"18px",
                    height:"2px",
                    top:"190px",
                    left:"42px",
                    backgroundColor:"#E13B30"
                }} ></div>
                    <div style={{
                    width:"18px",
                    height:"2px",
                    top:"190px",
                    left:"42px",
                    backgroundColor:"#DEDEDE"
                }} ></div>
                    <div style={{
                    width:"18px",
                    height:"2px",
                    top:"190px",
                    left:"42px",
                    backgroundColor:"#DEDEDE"
                }} ></div>
                    <div style={{
                    width:"18px",
                    height:"2px",
                    top:"190px",
                    left:"42px",
                    backgroundColor:"#DEDEDE"
                }} ></div>
                    <div style={{
                    width:"18px",
                    height:"2px",
                    top:"190px",
                    left:"42px",
                    backgroundColor:"#DEDEDE"
                }} ></div>
                    <div style={{
                    width:"18px",
                    height:"2px",
                    top:"190px",
                    left:"42px",
                    backgroundColor:"#DEDEDE"
                }} ></div>
                    </div>

                  </Link>
                 
                  <div style={{ marginLeft: "10px" }}>
                    <Link
                      to={`/detail/${encodeURIComponent(product.code)}`}
                      style={{
                        color: "#252525",
                        marginBottom: "5px",
                        textDecoration: 'none',
                        fontWeight:"600",
                        fontSize:"16px",
                        lineHeight:"24px",
                      }}>
                      {product.name}
                    </Link>

                    <p style={{
                      width:"50px",
                      height:"18px",
                      top:"240px",
                      left:"16px",
                      fontWeight:"400",
                      fontSize:"12px",
                      lineHeight:"18px",
                      color:"#6C6C70"
                    }}>{product.code}</p>


                    <div style={{ display: "flex", justifyContent: "end" }}>
                      <p style={{
                        width:"68px",
                        height:"30px",
                        top:"289px",
                        left:"116px",
                        fontWeight:"600",
                        fontSize:"20px",
                        lineHeight:"30.24px",
                        alignItems:"end",
                        color:"#E13B30"
                      }} > ฿{parseInt(product.price)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Table;


