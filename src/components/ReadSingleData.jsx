import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ReadSingleData = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:3030/users/` + id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>
        <Link to="/">user list</Link>
      </div>
      <div>
        {data.first_name} {data.last_name}
      </div>
      <div>{data.gender}</div>
      <div>{data.city}</div>
    </div>
  );
};

export default ReadSingleData;
