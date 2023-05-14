import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  // delete bookings
  const handleDelete = (_id) => {
    const proceed = confirm("Are you sure you want to delete");
    const url = `http://localhost:5000/bookings/${_id}`;
    if (proceed) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          {
            if (data.deletedCount > 0) {
              alert("delete success");
              const remaining = bookings.filter(
                (booking) => booking._id !== _id
              );
              setBookings(remaining);
            }
          }
        });
    }
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Delete</th>
            <th>Service Name</th>
            <th>Booking Time</th>
            <th>Price</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {bookings.map((booking) => (
            <BookingRow
              key={booking._id}
              booking={booking}
              handleDelete={handleDelete}
            ></BookingRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
