import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import data from "../assets/customer.json";

export default function Customer() {
  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    CustomerName: "",
    Email: "",
    Phone: "",
    Loyalty: "Bronze"
  });

  const customersPerPage = 10;

  useEffect(() => {
    setCustomers(data);
  }, []);

  const getNextCustomerID = () => {
    const ids = customers.map(c => parseInt(c.CustomerID.replace(/[^\d]/g, "")));
    const maxID = Math.max(...ids);
    return `CUST${(maxID + 1).toString().padStart(3, '0')}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const handleAddCustomer = () => {
    if (!newCustomer.CustomerName) return;
    const customerWithID = {
      ...newCustomer,
      CustomerID: getNextCustomerID()
    };
    setCustomers([customerWithID, ...customers]);
    setNewCustomer({ CustomerName: "", Email: "", Phone: "", Loyalty: "Bronze" });
    setShowForm(false);
  };

  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);
  const totalPages = Math.ceil(customers.length / customersPerPage);

  return (
    <div className="p-6 bg-gray-50 min-h-screen overflow-auto">
      <PageHeader title="Customers" breadcrumb="Dashboard / Customer List">
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl shadow-sm transition"
        >
          Add Customers
        </button>
      </PageHeader>

      {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-10 backdrop-blur-sm bg-black/30">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Add New Customer</h2>
                <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-red-500 text-xl">×</button>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <input
                  name="CustomerName"
                  type="text"
                  placeholder="Customer Name"
                  value={newCustomer.CustomerName}
                  onChange={handleInputChange}
                  className="border p-2 rounded-lg w-full"
                />
                <input
                  name="Email"
                  type="email"
                  placeholder="Email"
                  value={newCustomer.Email}
                  onChange={handleInputChange}
                  className="border p-2 rounded-lg w-full"
                />
                <input
                  name="Phone"
                  type="text"
                  placeholder="Phone"
                  value={newCustomer.Phone}
                  onChange={handleInputChange}
                  className="border p-2 rounded-lg w-full"
                />
                <select
                  name="Loyalty"
                  value={newCustomer.Loyalty}
                  onChange={handleInputChange}
                  className="border p-2 rounded-lg w-full"
                >
                  <option value="Bronze">Bronze</option>
                  <option value="Silver">Silver</option>
                  <option value="Gold">Gold</option>
                </select>
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => setShowForm(false)}
                  className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg w-full">
                  Kembali
                </button>
                <button
                  onClick={handleAddCustomer}
                  className="bg-blue-600 hover:bg-blue-700  text-white px-4 py-2 rounded-lg w-full">
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
              <th className="p-4 text-left border-b">Customer ID</th>
              <th className="p-4 text-left border-b">Name</th>
              <th className="p-4 text-left border-b">Email</th>
              <th className="p-4 text-left border-b">Phone</th>
              <th className="p-4 text-left border-b">Loyalty</th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.map((cust) => (
              <tr key={cust.CustomerID} className="hover:bg-gray-50">
                <td className="p-4 border-b">{cust.CustomerID}</td>
                <td className="p-4 border-b">{cust.CustomerName}</td>
                <td className="p-4 border-b">{cust.Email}</td>
                <td className="p-4 border-b">{cust.Phone}</td>
                <td className="p-4 border-b">{cust.Loyalty}</td>
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