import React,{useState} from 'react'
import axios from "axios"
import "./Location.css"
const Location = () => {
  const [data, setData] = useState([])
  const [text, setText] = useState("")

  const handleChnage = (e) => {
    setText(e.target.value)
  }

  const handleClick = () => {
    axios.get("http://localhost:3000/posts").then((res) => {
      setData(res)
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <div className="location">
      <div>
        <h1
          style={{ color: "cyan", paddingBottom: "100px", fontSize: "100px" }}
        >
          Restuarant Location
        </h1>
        <input placeholder="Enter location" onChange={handleChnage} />
        <button onClick={handleClick} className="btn">
          Search
        </button>
        <div style={{ color: "white",fontSize:"40px" }}>
          <h2>Location: {"Nagpur"}</h2>
          <h2>Name of User: {text}</h2>
          <h2>Distance: {"25km"}</h2>
          <h2>Address: {"Mata Nagar,Nagpur"}</h2>
        </div>
        {data.map((d) => {
          return (
            <>
              <div>
                <div>{d.id}</div>
                <div>{d.address}</div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Location
