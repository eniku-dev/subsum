import React from "react";
import { FileWarning, ListFilter, SquareCheck } from "lucide-react"; // Assuming you're using lucide-react for icons
import Header from "../components/Header";

// Mock data for transactions
const transactions = [
  {
    id: 1,
    service: "Mtn Airtime VTU",
    phoneNumber: "09068562949",
    amount: "₦100.00",
    totalAmount: "₦100.00",
    status: "Initiated",
    paymentMethod: "Transfer",
    transactionNo: "170456218608503369381796123",
    date: "6th January, 2024, 06:29PM",
  },
  {
    id: 1,
    service: "Mtn Airtime VTU",
    phoneNumber: "09068562949",
    amount: "₦100.00",
    totalAmount: "₦100.00",
    status: "successful",
    paymentMethod: "Wallet",
    transactionNo: "170456218608503369381796123",
    date: "6th January, 2024, 06:29PM",
  },
  {
    id: 1,
    service: "Mtn Airtime VTU",
    phoneNumber: "09068562949",
    amount: "₦100.00",
    totalAmount: "₦100.00",
    status: "failed",
    paymentMethod: "cardPayment",
    transactionNo: "170456218608503369381796123",
    date: "6th January, 2024, 06:29PM",
  },
  {
    id: 1,
    service: "Mtn Airtime VTU",
    phoneNumber: "09068562949",
    amount: "₦100.00",
    totalAmount: "₦100.00",
    status: "Initiated",
    paymentMethod: "Transfer",
    transactionNo: "170456218608503369381796123",
    date: "6th January, 2024, 06:29PM",
  },
  {
    id: 1,
    service: "Mtn Airtime VTU",
    phoneNumber: "09068562949",
    amount: "₦100.00",
    totalAmount: "₦100.00",
    status: "successful",
    paymentMethod: "Wallet",
    transactionNo: "170456218608503369381796123",
    date: "6th January, 2024, 06:29PM",
  },
  {
    id: 1,
    service: "Mtn Airtime VTU",
    phoneNumber: "09068562949",
    amount: "₦100.00",
    totalAmount: "₦100.00",
    status: "failed",
    paymentMethod: "cardPayment",
    transactionNo: "170456218608503369381796123",
    date: "6th January, 2024, 06:29PM",
  },
  {
    id: 1,
    service: "Mtn Airtime VTU",
    phoneNumber: "09068562949",
    amount: "₦100.00",
    totalAmount: "₦100.00",
    status: "Initiated",
    paymentMethod: "Transfer",
    transactionNo: "170456218608503369381796123",
    date: "6th January, 2024, 06:29PM",
  },
  {
    id: 1,
    service: "Mtn Airtime VTU",
    phoneNumber: "09068562949",
    amount: "₦100.00",
    totalAmount: "₦100.00",
    status: "successful",
    paymentMethod: "Wallet",
    transactionNo: "170456218608503369381796123",
    date: "6th January, 2024, 06:29PM",
  },
];

// Helper function to get status color
const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "initiated":
      return "text-[#ffb34a]";
    case "successful":
      return "text-[#2dae31]";
    case "failed":
      return "text-[#ee5d51]";
    default:
      return "text-inactive";
  }
};

// Helper function to get status icon
const getStatusIcon = (status) => {
  switch (status.toLowerCase()) {
    case "initiated":
      return (
        <div className="bg-[#fff9ed] rounded-xl py-2 px-2 mr-4 flex items-center justify-center">
          <FileWarning className="w-5 h-5 rotate-180" />
        </div>
      );
    case "successful":
      return (
        <div className="bg-[#edfbee] rounded-xl py-2 px-2 mr-4 flex items-center justify-center">
          <SquareCheck className="w-5 h-5 " />
        </div>
      );
    case "failed":
      return (
        <div className="bg-[#feeeee] rounded-xl py-2 px-2 mr-4 flex items-center justify-center">
          <FileWarning className="w-5 h-5 rotate-180" />
        </div>
      );
    default:
      return "";
  }
};

const Transaction = () => {
  return (
    <>
      <div className=" w-[100%] ">
        <Header userName={"Transcation History"} />
      </div>

      <div className="container mx-auto p-6">
        {/* Filter button */}
        <div className="mb-4">
          <button className="flex items-center border-[1.5px] border-border rounded-xl px-4 w-[150px] py-2 bg-background  text-inactive">
            <ListFilter size={18} className="mr-2" />
            Filter
          </button>
        </div>

        {/* Transaction table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-inactive">
                  Service
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-inactive">
                  Amount
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-inactive">
                  Total Amount
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-inactive">
                  Status
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-inactive">
                  Payment Method
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-inactive">
                  Transaction No
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-inactive">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-4 py-4">
                    <div className="flex ">
                      {" "}
                      <span
                        className={`inline-flex items-center ${getStatusColor(
                          transaction.status
                        )}`}
                      >
                        {getStatusIcon(transaction.status)}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-medium text-inactive">
                          {transaction.service}
                        </span>
                        <span className="text-sm text-inactive">
                          {transaction.phoneNumber}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 font-semibold text-inactive">
                    {transaction.amount}
                  </td>
                  <td className="px-4 py-4 font-semibold text-inactive">
                    {transaction.totalAmount}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex items-center ${getStatusColor(
                        transaction.status
                      )}`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 font-semibold text-inactive">
                    {transaction.paymentMethod}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col">
                      <span className="text-inactive font-semibold">
                        {transaction.transactionNo}
                      </span>
                      <span className="text-sm text-inactive">
                        {transaction.date}
                      </span>
                    </div>
                  </td>
                  <td className="">
                    <button className="text-blue-600  bg-background px-2 rounded-lg py-2 hover:text-blue-800">
                      Open
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Transaction;
