import React, { useState } from "react";
import { Mobile2 } from "../assets";
import { ChevronDown } from "lucide-react";
import Header from "../components/Header";

// Mock data for network options
const networkOptions = [
  { id: "etisalat", name: "Etisalat", logo: Mobile2 },
  // Add other network options here
];

const Airtime = () => {
  // State management for form fields
  const [selectedNetwork, setSelectedNetwork] = useState(networkOptions[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [airtimeSharePin, setAirtimeSharePin] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", {
      selectedNetwork,
      phoneNumber,
      amount,
      airtimeSharePin,
    });
  };

  return (
    <>
      <div className=" w-[100%] ">
        <Header userName={"Airtime to Cash"} />
      </div>
      <div className="w-[40%] mx-auto p-6">
        {/* Progress Tabs */}
        <div className="flex justify-between mb-8">
          {["Fill Info", "Make Payment", "View Receipt"].map((step, index) => (
            <div key={step} className="flex flex-col items-center">
              <span
                className={`text-md font-semibold mb-2 ${
                  index === 0 ? "text-blue-600" : "text-[#d6e1f3]"
                }`}
              >
                {step}
              </span>
              <div
                className={`h-[5.5px] w-[155px] rounded-full ${
                  index === 0 ? "bg-blue-600" : "bg-[#d6e1f3]"
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className="border-[1.5px] border-border rounded-3xl py-6 px-6 bg-background">
          <h2 className="text-xl font-semibold text-center mb-6 text-inactive">
            Airtime to Cash
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              {/* Network Selection */}
              <div className="w-[48%]">
                <label
                  htmlFor="network"
                  className="block text-sm text-inactive mb-1"
                >
                  Select Network
                </label>
                <div className="relative">
                  <select
                    id="network"
                    value={selectedNetwork.id}
                    onChange={(e) =>
                      setSelectedNetwork(
                        networkOptions.find((net) => net.id === e.target.value)
                      )
                    }
                    className="w-full p-2 pl-10 border text-inactive border-gray-300 rounded-md appearance-none"
                  >
                    {networkOptions.map((net) => (
                      <option key={net.id} value={net.id}>
                        {net.name}
                      </option>
                    ))}
                  </select>
                  <img
                    src={selectedNetwork.logo}
                    alt={selectedNetwork.name}
                    className="absolute  top-1/2 transform -translate-y-1/2 w-12 "
                  />
                  <ChevronDown className="w-5 h-5 absolute text-inactive top-1/2 transform -translate-y-1/2 right-2" />
                </div>
              </div>
              {/* Phone Number Input */}
              <div className="w-[48%]">
                <label
                  htmlFor="phone"
                  className="block text-sm text-inactive mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="08094562627"
                  className="w-full p-2 border text-inactive border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Amount Input */}
            <div>
              <label
                htmlFor="amount"
                className="block text-sm text-inactive mb-1"
              >
                Amount
              </label>
              <input
                type="text"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="₦5,000"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Airtime Share Pin Input */}
            <div>
              <label htmlFor="pin" className="block text-sm text-inactive mb-1">
                Airtime Share Pin
              </label>
              <input
                type="text"
                id="pin"
                value={airtimeSharePin}
                onChange={(e) => setAirtimeSharePin(e.target.value)}
                placeholder="3546576433"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full  bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Airtime;
