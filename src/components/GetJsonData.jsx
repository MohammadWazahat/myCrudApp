import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link}  from 'react-router-dom'

const GetJsonData = () => {
  const [myUser, setMyUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3030/users");
      setMyUser(res.data);
    };
    fetchData();
  }, []);

  // console.log(myUser);

  const handleDelete = (id) =>{
    // window.confirm ask for confirmation of deletion
    const confirm = window.confirm("would you like to delete the user");
    if(confirm){
      axios.delete(`http://localhost:3030/users/` + id).then(res => {
        location.reload(); // reload us to the same page
      }).catch(err => console.log(err));
    }
    console.log(id)
  }

  
  return (
    <div>
      <Link to="/form" >Add User</Link>
      <table>
        <thead>
          <tr>
            <td>index</td>
            <td>first name</td>
            <td>last name</td>
            <td>gender</td>
            <td>city</td>
          </tr>
        </thead>
        <tbody>
          {myUser.map((user, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.gender}</td>
                <td>{user.city}</td>
                <td>{user.id}</td>
                <td>
                  <Link to={`/read/` + user.id } >Read</Link>
                </td>
                <td>
                  <Link to= {`/updateForm/` + user.id } >update user</Link>
                </td>
                <td>
                  <button onClick={e => handleDelete(user.id)} >delete</button>
                </td>
             
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GetJsonData;
