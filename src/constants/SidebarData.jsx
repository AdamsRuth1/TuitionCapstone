import dashboard from "../assets/Icons/dashboard.svg";
import Tuition from "../assets/Icons/Pay-Tuition.svg";
import Wallet from "../assets/Icons/Wallet.svg";
import Service from "../assets/Icons/E-service.svg";
import Piggi from "../assets/Icons/Wallet icons.svg";

export const Navbar = [
  {
    name: "Dashboard",
    Icon: dashboard,
    to: ""
  },
  {
    name: "Pay Tuition",
    Icon: Tuition,
    to: "Tuition"
  },
  {
    name: "Wallet",
    Icon: Wallet,
    to:"wallet"
  },
  {
    name: "Pay E-Service",
    Icon: Piggi,
    to:"payService"
 
  },
  {
    name: "Target Saving",
    Icon: Service,
    to:"Saving"
  },
];
