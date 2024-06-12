import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateData = () => {
  const { id } = useParams();
  // Create api
  const users = {
    name: " ",
    password: " ",
  };

  const [user, setUser] = useState(users);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  const navigate = useNavigate();
  const submitForm = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:3030/users/` + id, user);
    navigate("/");
  };

  useEffect(() => {
    axios.get(`http://localhost:3030/users/` + id).then((res) => {
      setUser(res.data);
    });
  }, [id]);

  return (
    <div>
      <div>
        <Link to="/">user list</Link>
      </div>
      <h2>Update your form</h2>
      <div>
        <form onSubmit={submitForm}>
          <label htmlFor="first_name">Enter First Name</label>
          <br />
          <input
            type="text"
            placeholder="Fisrt name"
            name="first_name"
            value={user.first_name}
            onChange={inputChangeHandler}
          />
          <br />
          <label htmlFor="last_name">Enter Last Name</label>
          <br />
          <input
            type="text"
            placeholder="Last name"
            name="last_name"
            value={user.last_name}
            onChange={inputChangeHandler}
          />
          <br />
          <label htmlFor="gender">Enter gender</label>
          <br />
          <input
            type="text"
            placeholder="gender"
            name="gender"
            value={user.gender}
            onChange={inputChangeHandler}
          />
          <br />
          <label htmlFor="city">Enter city</label>
          <br />
          <input
            type="text"
            placeholder="city"
            name="city"
            value={user.city}
            onChange={inputChangeHandler}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateData;
