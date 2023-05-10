import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const data = useLoaderData();
  const handleUpdate = () => {};

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
                value={data.email}
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
                value={data.name}
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
