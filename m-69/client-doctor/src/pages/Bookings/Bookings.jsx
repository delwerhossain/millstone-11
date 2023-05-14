import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user, loading } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  console.log(bookings);

  return (
    <div>
      <h1 className="text-5xl ">booking - {bookings.length}</h1>
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
            {bookings.map((booking) => {
              <BookingRow key={booking._id} booking={booking}></BookingRow>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
