import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const List = () => {
  const data = useLoaderData();
  const [listData, setListData] = useState(data);

  const handleDelete = async (_id) => {
    console.log("delete", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = listData.filter((user) => user._id !== _id);
          setListData(remaining);
        }
      });
    // const res = await fetch(`http://localhost:5000/users/${_id}`, {
    //   method: "DELETE",
    // });
    // const data = await res.json();
    // console.log(data);
    // if (data.deletedCount > 0) {
    //   alert("deleted");
    //   useEffect(async () => {
    //     const res = await fetch(`http://localhost:5000/users`);
    //     const data = await res.json();
    //     setListData(data);
    //   }, []);
    // }
  };
  return (
    <div>
      <h1 className="text-4xl font-semibold mb-8 ">List Page</h1>
      <ol className="w-11/12 mx-auto">
        {listData &&
          listData.map((item) => (
            <li className="mb-6 border px-4 py-4 rounded" key={item._id}>
              {item.name} : {item.email} : {item._id}
              <Link to={`/update/${item._id}`} className="ml-3 btn">Update</Link>
              <button
                onClick={() => handleDelete(item._id)}
                className="ml-3 btn"
              >X</button>
            </li>
          ))}
        <li></li>
      </ol>
    </div>
  );
};

export default List;
