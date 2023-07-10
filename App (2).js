Aimport logo from './logo.svg';
import './App.css';
import { useState, axios } from 'react';

function App() {
  var data = { fname: "", lname: "", age: "" }
  var [oldData, newData] = useState(data)
  function Handlers(e) {
    //    var z={...oldData,[e.target.name]:[e.target.value]}
    var z = { ...oldData }


    z[e.target.id] = e.target.value
    newData(z)
    console.log(oldData);
  }
  // function Data1(e)
  // {    console.log(oldData);
  //      e.preventDefault();
  //     axios.post("http://localhost:3000/a", {
  //         // Add parameters here
  //         fname : oldData.fname,
  //         lname : oldData.lname,
  //         age : oldData.age
  //       })
  //       .then((response) => {
  //         console.log(response.data);
  //           // Handle data
  //       })
  //   }
  function Data1() {
    fetch("http://localhost:3000/a", {
      method: "POST",
      body: JSON.stringify({
        fname:oldData.fname,
       lname:oldData.lname,
       age:oldData.age
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }
  return (
    <div>
      <input type="text" id="fname" onChange={Handlers} value={oldData.fname} /><br />
      <input type="text" id="lname" onChange={Handlers} value={oldData.lname} /><br />
      <input type="number" id="age" onChange={Handlers} value={oldData.age} /><br />
      <button onClick={Data1}>Add</button>
    </div>
  );
}

export default App;
