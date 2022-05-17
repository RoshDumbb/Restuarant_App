import React, { useState,useEffect } from 'react'
import axios from "axios"

import "./Location.css"
const Location = () => {
    const [text, setText] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:3000/posts")
        .then((res) => {
          setText(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    return (
      <div>
        <ul>
          {text.map((item) => (
            <h1 key={item.id}>
              <li>{item.addressl}</li>
            </h1>
          ))}
        </ul>
      </div>
    );
}

export default Location