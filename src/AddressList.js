
import React, { useEffect, useState, Component } from "react";
import axios from 'axios';

const Lob = require('lob')('test_0dc8d51e0acffcb1880e0f19c79b2f5b0cc');
 
// class AddressList extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Address List</h2>
//         <p>Mauris sem velit, vehicula eget sodales vitae,
//         rhoncus eget sapien:</p>
//         <ol>
//           <li>Nulla pulvinar diam</li>
//           <li>Facilisis bibendum</li>
//           <li>Vestibulum vulputate</li>
//           <li>Eget erat</li>
//           <li>Id porttitor</li>
//         </ol>
//       </div>
//     );
//   }
// }
function AddressList() {
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('https://api.lob.com/v1/addresses')
        .then(response => response.json())
        .then(data => console.log(data));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

  return (
    <div>
      <div>
        <h2>Address List</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </div>
    </div>
  );
}

 
export default AddressList;