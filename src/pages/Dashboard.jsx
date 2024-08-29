import React, { useState } from "react";
import { Wallet, Copy, Edit, Share, Camera } from "lucide-react";
import { Card, Profile } from "../assets";
import Header from "../components/Header";

// Main Dashboard component
const Dashboard = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing(!isEditing);

  return (
    <>
      <div className=" w-[100%] ">
        <Header userName={"Welcome, Lawal Wahab"} />
      </div>
      <div className="flex flex-col md:flex-row gap-4 p-4 w-[90%] ">
        {!isEditing ? (
          <>
            {/* Left column: Wallet and Referral information */}
            <div className="flex-1 space-y-6">
              <WalletBalanceCard balance={3000} />
              <ReferralCard referralCode="18/52ha089" onEdit={toggleEdit} />
              <ReferralStatsCard totalReferrals={0} walletBonus={0} />
            </div>
            {/* Right column: Cards Section */}
            <div className="flex-1">
              <CardsSectionWithBackgroundImage />
            </div>
          </>
        ) : (
          <ProfileEditComponent toggleEdit={toggleEdit} onCancel={toggleEdit} />
        )}
      </div>
    </>
  );
};

// Component for displaying wallet balance and fund button
const WalletBalanceCard = ({ balance }) => (
  <div className="border-[1.5px] border-border rounded-3xl px-4 py-6 flex justify-between items-center">
    <div>
      <h2 className="text-textColor ">Wallet Balance</h2>
      <p className="text-3xl font-bold text-textColor">₦{balance}</p>
    </div>
    <button className="bg-primary text-white px-6 py-2 font-semibold rounded-md hover:bg-blue-900  transition-colors">
      Fund Wallet
    </button>
  </div>
);

// Component for the Cards section with background image
const CardsSectionWithBackgroundImage = () => (
  <div
    className=" rounded-3xl  border-[1.5px] border-border h-[280px]"
    style={{
      backgroundImage: `url(${Card})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>
);

// Reusable component for displaying statistics
const StatDisplay = ({ title, value }) => (
  <div>
    <h2 className="text-textColor ">{title}</h2>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

// Updated ReferralCard component with onEdit prop
const ReferralCard = ({ referralCode, onEdit }) => (
  <div className=" border-[1.5px] border-border rounded-3xl py-6 px-4">
    <h2 className="text-textColor  mb-2">Referral</h2>
    <p className="text-textColor mb-2 flex">
      Referral Code: <p className="font-bold">{referralCode}</p>
    </p>
    <div className="flex space-x-4">
      <ActionButton icon={Copy} text="Copy" />
      <ActionButton icon={Edit} text="Edit" onClick={onEdit} />
      <ActionButton icon={Share} text="Share" />
    </div>
  </div>
);

// Component for displaying referral statistics
const ReferralStatsCard = ({ totalReferrals, walletBonus }) => (
  <div className="border-[1.5px] border-border rounded-3xl py-6 px-4">
    <div className="flex justify-between mb-4">
      <StatDisplay title="Total referrals made" value={totalReferrals} />
      <StatDisplay
        title="Current wallet Bonus"
        value={`₦${walletBonus.toFixed(2)}`}
      />
    </div>
    <ActionButton icon={Wallet} text="Cashout" />
  </div>
);

// Updated ActionButton component with onClick prop
const ActionButton = ({ icon: Icon, text, onClick }) => (
  <button className="text-blue-500 flex items-center" onClick={onClick}>
    <Icon size={16} className="mr-1" /> {text}
  </button>
);

// New ProfileEditComponent
const ProfileEditComponent = ({ toggleEdit }) => {
  const [activeTab, setActiveTab] = useState("password");

  return (
    <div className="flex   w-[90%] justify-between ">
      <div className="w-[48%]">
        {/* Profile Image Upload */}
        <div className=" border-[1.5px] border-border rounded-3xl py-6 px-4 flex flex-col items-center">
          <div
            className="w-[90px] h-[90px] bg-blue-100 rounded-full flex items-center justify-center mb-2"
            style={{
              backgroundImage: `url(${Profile})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <button className="text-blue-500 flex items-center">
            <Camera size={16} className="mr-1" />{" "}
            <p className="font-semibold">Upload Image</p>
          </button>
        </div>

        {/* User Details */}
        <div className="border-[1.5px] border-border rounded-3xl py-6 px-4 mt-4">
          <div className="space-y-2">
            <DetailRow label="Name" value="Lawal Wahab Babatunde" />
            <DetailRow label="Email" value="wabdotmail@gmail.com" />
            <DetailRow label="Phone Number" value="0906 856 2949" />
            <DetailRow
              label="Account Status"
              value="Active"
              valueColor="text-green-500"
            />
            <DetailRow
              label="Referral link"
              value="www.subsum.com/tre/wd..."
              action={<ActionButton icon={Copy} text="Copy" />}
            />
          </div>
          <button className="text-blue-500 mt-4">Edit Details</button>
        </div>
      </div>
      {/* Password/PIN Change */}
      <div className=" w-[48%]">
        <div className="flex mb-4 border-[1.5px] border-border space-x-2 rounded-3xl py-2 justify-between px-2">
          <TabButton
            text="Change Password"
            isActive={activeTab === "password"}
            onClick={() => setActiveTab("password")}
          />
          <TabButton
            text="Change PIN"
            isActive={activeTab === "pin"}
            onClick={() => setActiveTab("pin")}
          />
        </div>
        <div className="border-[1.5px] border-border rounded-3xl py-6 px-4">
          {activeTab === "password" && (
            <PasswordChangeForm toggleEdit={toggleEdit} />
          )}
          {activeTab === "pin" && <PINChangeForm toggleEdit={toggleEdit} />}
        </div>
      </div>
    </div>
  );
};

const DetailRow = ({ label, value, valueColor = "text-gray-800", action }) => (
  <div className="flex justify-between items-center">
    <span className="text-textColor ">{label}</span>
    <div className="flex items-center text-textColor font-semibold">
      <span className={valueColor}>{value}</span>
      {action && <span className="ml-2">{action}</span>}
    </div>
  </div>
);

const TabButton = ({ text, isActive, onClick }) => (
  <button
    className={`px-4 py-2 rounded-full w-[100%] ${
      isActive
        ? "bg-background text-textColor font-semibold"
        : "text-inactive border-border border-[1.5px]"
    }`}
    onClick={onClick}
  >
    {text}
  </button>
);

const PasswordChangeForm = ({ toggleEdit }) => (
  <div className="space-y-4">
    <InputField
      label="Current Password"
      placeholder="Enter Current Password"
      type="password"
    />
    <InputField
      label="New Password"
      placeholder="Enter New Password"
      type="password"
    />
    <InputField
      label="Confirm New Password"
      placeholder="Enter New Password"
      type="password"
    />
    <button
      onClick={toggleEdit}
      className="w-full bg-[#a0b4ef] text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
    >
      Submit
    </button>
  </div>
);

const PINChangeForm = ({ toggleEdit }) => (
  <div className="space-y-4">
    <InputField
      label="Current PIN"
      placeholder="Enter Current PIN"
      type="password"
    />
    <InputField label="New PIN" placeholder="Enter New PIN" type="password" />
    <InputField
      label="Confirm New PIN"
      placeholder="Enter New PIN"
      type="password"
    />
    <button
      onClick={toggleEdit}
      className="w-full bg-[#a0b4ef] text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
    >
      Submit
    </button>
  </div>
);

const InputField = ({ label, placeholder, type = "text" }) => (
  <div>
    <label className="block text-gray-600 mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default Dashboard;
