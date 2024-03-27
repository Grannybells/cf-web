import React from "react";
import { FaBus, FaRegBuilding, FaWpforms, FaWrench } from "react-icons/fa";
import {
  GoHome,
  GoHomeFill,
  GoPerson,
  GoPersonFill,
  GoBell,
  GoBellFill,
  GoNote,
} from "react-icons/go";
import { GrMoney } from "react-icons/gr";
import { LuCalendarClock, LuCalendarHeart } from "react-icons/lu";
import { RxLapTimer } from "react-icons/rx";
import { TbRoute } from "react-icons/tb";
import { IoFileTrayFull, IoFileTrayFullOutline } from "react-icons/io5";
import { MdOutlineLocalGasStation } from "react-icons/md";

const navItems = [
  {
    id: 1,
    link: "/employee",
    name: "Home",
    icon: <GoHome className="w-7 h-7" />,
    activeIcon: <GoHomeFill className="w-7 h-7" />,
  },
  {
    id: 2,
    link: "/employee/profile",
    name: "Profile",
    icon: <GoPerson className="w-7 h-7" />,
    activeIcon: <GoPersonFill className="w-7 h-7" />,
  },
  {
    id: 3,
    link: "/employee/notification",
    name: "Notification",
    icon: <GoBell className="w-7 h-7" />,
    activeIcon: <GoBellFill className="w-7 h-7" />,
  },
  {
    id: 4,
    link: "/employee/forms",
    name: "Forms",
    icon: <IoFileTrayFullOutline className="w-7 h-7" />,
    activeIcon: <IoFileTrayFull className="w-7 h-7" />,
  },
];

const employeeForms = [
  {
    id: 1,
    link: "/employee/forms/loanform",
    icon: <GrMoney className="w-10 h-10 mb-2" />,
    name: "Company Loan Form",
    description: "Note: Filing is every 1st to 3rd day of the month only.",
  },
  {
    id: 2,
    link: "/employee/forms/leaveform",
    icon: <FaRegBuilding className="w-10 h-10 mb-2" />,
    name: "Request for Leave of Absence",
    description: "Note: For HO Employee Only",
  },
  {
    id: 3,
    link: "/employee/forms/leaveform",
    icon: <MdOutlineLocalGasStation className="w-10 h-10 mb-2" />,
    name: "Request for Leave of Absence",
    description: "Note: For Stations Employee Only",
  },
  {
    id: 4,
    link: "/employee/forms/route-itineraryform",
    icon: <TbRoute className="w-10 h-10 mb-2" />,
    name: "Route / Itinerary Form",
    description: "Note: To add description",
  },
  {
    id: 5,
    link: "#",
    icon: <FaWrench className="w-10 h-10 mb-2" />,
    name: "Basic PMS form (BPMOF)",
    description: "Note: To add description",
  },
  {
    id: 6,
    link: "/employee/forms/noin-noout",
    icon: <RxLapTimer className="w-10 h-10 mb-2" />,
    name: "No In, No Out",
    description: "Note: To add description",
  },
  {
    id: 7,
    link: "#",
    icon: <FaWpforms className="w-10 h-10 mb-2" />,
    name: "Clearance Form",
    description: "Note: To add description",
  },
  {
    id: 8,
    link: "#",
    icon: <FaBus className="w-10 h-10 mb-2" />,
    name: "Fleet-trip Ticket Form",
    description: "Note: To add description",
  },
  // Add more products as needed
];

const shortCutLinks = [
  {
    id: 1,
    link: "#",
    icon: <GrMoney className="w-8 h-8 mb-2" />,
    name: "Company Loan form",
  },
  {
    id: 2,
    link: "#",
    icon: <FaRegBuilding className="w-8 h-8 mb-2" />,
    name: "Request for leave of absence",
  },
  {
    id: 3,
    link: "#",
    icon: <MdOutlineLocalGasStation className="w-8 h-8 mb-2" />,
    name: "Request for leave of absence",
  },
  {
    id: 4,
    link: "#",
    icon: <RxLapTimer className="w-8 h-8 mb-2" />,
    name: "No In / No Out",
  },
  {
    id: 5,
    link: "#",
    icon: <FaWpforms className="w-8 h-8 mb-2" />,
    name: "Clearance Form",
  },
  {
    id: 6,
    link: "#",
    icon: <FaWrench className="w-8 h-8 mb-2" />,
    name: "Basic PMS Form",
  },
  // Add more products as needed
];

export { navItems, employeeForms, shortCutLinks };
