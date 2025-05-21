import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import ordersData from "../assets/orders.json";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [newOrder, setNewOrder] = useState({
    CustomerName: "",
    Status: "Pending",
    TotalPrice: "",
    OrderDate: ""
  });

  const ordersPerPage = 10;

  useEffect(() => {
    setOrders(ordersData);
  }, []);

  const getNextOrderID = () => {
    const ids = orders.map(o => parseInt(o.OrderID.replace(/[^\d]/g, "")));
    const maxID = Math.max(...ids);
    return `ORD${(maxID + 1).toString().padStart(3, '0')}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const handleAddOrder = () => {
    if (!newOrder.CustomerName || !newOrder.TotalPrice || !newOrder.OrderDate) return;
    const orderWithID = {
      ...newOrder,
      OrderID: getNextOrderID(),
      TotalPrice: parseFloat(newOrder.TotalPrice).toFixed(2)
    };
    setOrders([orderWithID, ...orders]);
    setNewOrder({ CustomerName: "", Status: "Pending", TotalPrice: "", OrderDate: "" });
    setShowForm(false);
  };

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  return (
    <div className="p-6 bg-gray-50 min-h-screen overflow-auto">
      <PageHeader title="Orders" breadcrumb="Dashboard / Order List">
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl shadow-sm transition"
        >
          Add Order
        </button>
      </PageHeader>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-10 backdrop-blur-sm bg-black/30">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Add New Order</h2>
                <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-red-500 text-xl">×</button>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <input
                  name="CustomerName"
                  type="text"
                  placeholder="Customer Name"
                  value={newOrder.CustomerName}
                  onChange={handleInputChange}
                  className="border p-2 rounded-lg w-full"
                />
                <select
                  name="Status"
                  value={newOrder.Status}
                  onChange={handleInputChange}
                  className="border p-2 rounded-lg w-full"
                >
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
                <input
                  name="TotalPrice"
                  type="number"
                  placeholder="Total Price"
                  value={newOrder.TotalPrice}
                  onChange={handleInputChange}
                  className="border p-2 rounded-lg w-full"
                />
                <input
                  name="OrderDate"
                  type="date"
                  value={newOrder.OrderDate}
                  onChange={handleInputChange}
                  className="border p-2 rounded-lg w-full"
                />
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => setShowForm(false)}
                  className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg w-full"
                >
                  Kembali
                </button>
                <button
                  onClick={handleAddOrder}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
      
      )}

      <div className="mt-6 overflow-x-auto rounded-xl shadow-md">
        <table className="min-w-full text-sm text-gray-800 bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left border-b">Order ID</th>
              <th className="p-4 text-left border-b">Customer Name</th>
              <th className="p-4 text-left border-b">Status</th>
              <th className="p-4 text-left border-b">Total Price</th>
              <th className="p-4 text-left border-b">Order Date</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.OrderID} className="hover:bg-gray-50">
                <td className="p-4 border-b">{order.OrderID}</td>
                <td className="p-4 border-b">{order.CustomerName}</td>
                <td className="p-4 border-b">{order.Status}</td>
                <td className="p-4 border-b">${order.TotalPrice}</td>
                <td className="p-4 border-b">{order.OrderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center space-x-2 mt-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition border ${
              i + 1 === currentPage ? 'bg-green-600 text-white' : 'bg-white text-green-600 hover:bg-green-100'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}