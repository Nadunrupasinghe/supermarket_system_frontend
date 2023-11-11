import React, { useEffect, useState} from "react";
import './PastOrders.css';
import Navbar from "../../Components/Navbar/Navbar";
import CartItem from "../../Components/CartItem/CartItem";

function PastOrders(){

//     // State to store the fetched data
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     // Define the API endpoint you want to fetch data from
//     const apiUrl = 'https://localhost:8081/api/order/viewOrders/nadun';

//     // Make the GET request using fetch
//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(data => setOrders(data))
//       .catch(error => console.error('Error fetching data:', error));
    
//   }, []); // Empty dependency array ensures the effect runs only once on component mount


const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/order/viewOrders/chaviru");
        const data = await response.json();
        // Convert the list-like object to an array
        const ordersArray = Array.from(data);
        setOrders(ordersArray);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts


    return(
        <div>
            <Navbar />
      <div className='body'>
        <ul className='tableHeader'>
          <li>Order ID</li>
          <li>Order Number</li>
          <li>Order Status</li>
          <li>Time Stamp</li>
          <li>Tracking Status</li>
        </ul>
        {/* <CartItem
        //   img={cardImg1}
          name='Strawberry'
          price='200'
          qyt='1 kg'
        //   disscount='0'
          total='200'
        /> */}
        <div className='footer'>
        {orders.map((order) => (
            <ul key={order.orderId} className='orderRow'>
              <li>{order.id}</li>
              <li>{order.order_number}</li>
              <li>{order.status}</li>
              <li>{order.timestamp}</li>
              <li>{order.tracking_status}</li>
            </ul>
          ))}
        </div>
      </div>
        </div>
    );
}

export default PastOrders;