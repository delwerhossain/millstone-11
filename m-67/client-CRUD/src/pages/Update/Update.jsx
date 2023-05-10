import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const data = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const user = { name, email };
    fetch(`http://localhost:5000/update/${data._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then((res) => res.json()
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert('user modified')
          }
        })
    );
  };

  return (
    <div>
      <h1 className="text-4xl font-semibold mb-8 ">Update Page</h1>

      <div className="mx-auto w-11/12">
        <form onSubmit={handleUpdate}>
          <div className="p-10 card bg-base-200">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input"
                defaultValue={data.email}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="username"
                className="input"
                defaultValue={data.name}
                required
              />
            </div>
            <button type="submit" className="btn mt-6">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
