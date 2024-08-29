import React from "react";
import { FileQuestion, MessageCircle, Phone, Info, Star } from "lucide-react";
import Header from "../components/Header";

// Define support options data
const supportOptions = [
  {
    id: "faq",
    title: "Frequently Asked Questions",
    action: "See FAQ",
    icon: FileQuestion,
    color: "bg-red-400",
    link: "",
  },
  {
    id: "live-chat",
    title: "Live Chat",
    action: "Chat Now",
    icon: MessageCircle,
    color: "bg-yellow-400",
    link: "/chat",
  },
  {
    id: "whatsapp",
    title: "Whatsapp",
    action: "Drop a Message",
    icon: "whatsapp",
    color: "bg-green-500",
    link: "",
  },
  {
    id: "phone",
    title: "Phone Call",
    action: "Call Us",
    icon: Phone,
    color: "bg-blue-500",
    link: "",
  },
  {
    id: "report",
    title: "Report Our Support",
    action: "Not Satisfied?",
    icon: Info,
    color: "bg-red-400",
    link: "",
  },
  {
    id: "review",
    title: "Review Our App",
    action: "Coming Soon",
    icon: Star,
    color: "bg-green-500",
    link: "",
  },
];

// SupportOption component for individual support option
const SupportOption = ({
  title,
  action,
  icon: Icon,
  color,
  link,
  disabled,
}) => (
  <a
    href={link}
    className={`flex items-center p-2 border-[1.5px] border-border  rounded-2xl `}
    onClick={(e) => disabled && e.preventDefault()}
  >
    <div className={`p-4 rounded-2xl ${color}`}>
      {Icon == "whatsapp" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-whatsapp text-white w-6 h-6"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      ) : (
        <Icon className="w-6 h-6 text-white" />
      )}
    </div>
    <div className="ml-4 flex-grow">
      <h3 className="text-md font-semibold text-inactive">{title}</h3>
      <p className="text-sm text-primary font-semibold flex items-center">
        {action} {!disabled && <span className="ml-1">→</span>}
      </p>
    </div>
  </a>
);

// Main SupportOptionsUI component
const Help = () => {
  return (
    <>
      <div className=" w-[100%] ">
        <Header userName={"Help And Support"} />
      </div>

      <div className="container p-6  w-[60%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {supportOptions.map((option) => (
            <SupportOption key={option.id} {...option} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Help;
