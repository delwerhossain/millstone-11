import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user, loading } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [loading]);
  console.log(bookings);

  return (
    <div>
      <h1 className="text-5xl ">booking</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Profile</th>

              <th>Email</th>
              <th>Service</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((booking, index) => {
              <tr>
                <th>{index}</th>
                <th>
                  <img loading="lazy" src={bookings.img} alt="" />
                </th>
                <td>{booking.email}</td>
                <td>{bookings.service}</td>
                <td>{bookings.price}</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
