// import React, { useState } from "react";

// const AddDataJson = () => {
//    const [name,setName] = useState()
//    const [firstName,setFirstName] = useState()
//    const [lastName,setLastName] = useState()


//   const inputHandlerFistName = (e) => {
//     e.target.value ;
//     setFirstName(e.target.value)
//   };

//   const inputHandlerLastName = (e) => {
//     e.target.value ;
//     setLastName(e.target.value)
//   };

//   const submitForm = (e) => {
//     e.preventDefault();
//     setName({ ...name, firstName });
//     console.log(name)
//   };


//   return (
//     <div>
//       <h2>i will add data form</h2>
//       {firstName}{lastName}
//       <form onSubmit={submitForm}>
//         <label htmlFor="">Enter First Name</label>
//         <input
//           type="text"
//           placeholder="Fisrt name"
//           name="firstName "
//           onChange={inputHandlerFistName}
//         />
//         <label htmlFor="">Enter Last Name</label>
//         <input
//           type="text"
//           placeholder="Last name"
//           name="lastName"
//           onChange={inputHandlerLastName}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AddDataJson;
import React from 'react'
import { Link } from 'react-router-dom'

const AddDataJson = () => {
  return (
    <div>
           <div>
        <Link to="/" >user list</Link>
        </div>
      add data
    </div>
  )
}

export default AddDataJson
