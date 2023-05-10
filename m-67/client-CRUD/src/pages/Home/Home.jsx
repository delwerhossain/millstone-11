import { useEffect, useState } from "react";

const Home=()=> {
  const [users, setUsers] = useState([]);
  const handleLog = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const user = { name, email };

    // let response = await fetch(`http://localhost:3000/users`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(user),
    // });
    // let data = await response.json();
    // console.log(data);
    // if (data.insertedId) {
    //   alert('Users added successfully');
    //   form.reset();
    // }

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          e.target.reset();
        }
      })
  };

  return (
    <>
      <div className="mx-auto w-11/12">
        <h1 className="text-3xl text-red-600">users data -: {users.length}</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
        <form onSubmit={handleLog}>
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
                required
              />
            </div>
            <button type="submit" className="btn mt-6">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Home;