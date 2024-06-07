import { useState } from 'react';

export default function Footer() {
    const [showProductsLinks, setShowProductsLinks] = useState(false);
  const [showResourcesLinks, setShowResourcesLinks] = useState(false);
  const [showAPIStatusLinks, setShowAPIStatusLinks] = useState(false);
  const [showCompanyLinks, setShowCompanyLinks] = useState(false);
  const [showContactLinks, setShowContactLinks] = useState(false);

  const [showProducts, setShowProducts] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showAPIStatus, setShowAPIStatus] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const toggleProducts = () => {
    setShowProducts(!showProducts);
  };

  const toggleResources = () => {
    setShowResources(!showResources);
  };

  const toggleAPIStatus = () => {
    setShowAPIStatus(!showAPIStatus);
  };

  const toggleCompany = () => {
    setShowCompany(!showCompany);
  };

  const toggleContact = () => {
    setShowContact(!showContact);
  };
  const Arrow = <path d="M4 6h16M4 12h16M4 18h16"></path>
    return (
      <>
    
    <div className="hidden sm:flex flex-cols  md:flex-cols lg:flex-cols xl:flex-cols gap-5">


<div className=" p-5 flex-1 ">
            <p className="mb-5 font-bold">Products</p>
            <div className="flex flex-col">
            <a href="./invoice" className=" mb-5">
               Send Money
              </a>
              <a href="./invoice" className=" mb-5">
                Store
              </a>
              <a href="./invoice" className=" mb-5">
                Payments Links
              </a>
              <a href="./invoice" className=" mb-5">
                Invoices
              </a>
              <a href="./invoice" className=" mb-5">
                Invoices
              </a>
              <a href="./invoice" className=" mb-5">
                Capital
              </a>
              <a href="./invoice" className=" mb-5">
                Grow
              </a>
              <a href="./invoice" className=" mb-5">
                Card Issuing
              </a>
              <a href="./invoice" className="mb-5">
                Faas
              </a>
              <a href="./invoice" className=" mb-5">
                Send App
              </a>
              <a href="./invoice" className=" mb-5">
                Tuition
              </a>
            </div>
          </div>
          <div className=" flex-1   p-5">
            <p className="mb-5 font-bold">Resources</p>
            <div className="flex flex-col">
            <a href="./invoice" className=" mb-5">
                Pricing
              </a>
              <a href="./invoice" className=" mb-5">
                Support
              </a>
              <a href="./invoice" className=" mb-5">
                Blog
              </a>
              <a href="./invoice" className=" mb-5">
                Integrations
              </a>
              <a href="./invoice" className=" mb-5">
                Why you get charged
              </a>
              <a href="./invoice" className="mb-5">
                Payment Protection Promise
              </a>
            </div>
          </div>
         
          <div className=" flex-1  p-5">
            <div className="flex flex-col">
              <p className=" font-bold mb-5">API Status</p>
              <a href="" className=" mb-5">
                API Documentation
              </a>
              <a href="" className=" mb-5">
                API Reference
              </a>
              <a href="" className=" mb-5">
                ApPI Status
              </a>
            </div>
          </div>
          <div className=" flex-1  p-5">
            <div className="flex flex-col">
              <p className="font-bold mb-5">Company</p>
              <a href="" className=" mb-5">
                Customers
              </a>
              <a href="" className=" mb-5">
                Career
              </a>
              <a href="" className=" mb-5">
                Press
              </a>
              <a href="" className=" mb-5">
               Covid 19
              </a>
            </div>
          </div>
          <div className=" flex-1  p-5">
            <div className="flex flex-col">
              <p className="font-bold mb-5">Contact</p>
              <a href="" className=" mb-5">
              hi@flutterwavego.com
              </a>
              <a href="" className=" mb-5">
                +234 201-8889595
              </a>
              <a href="" className=" mb-5">
              0700-FLUTTERWAVE
              </a>
              <a href="" className=" mb-5">
              X Support
              </a>
              <a href="" className=" mb-5">
              Our call lines are available 24/7.
              </a>
            </div>
          </div>
        </div>
        <div className="block sm:hidden">
      <div className="grid grid-cols-1">
        <div className="p-5">
          <button className=" py-4 flex justify-between items-center w-full border-b border-gray-300" onClick={toggleProducts}>
            <span>Products</span>
            {showProducts ? '⌄' : '⌄'}
          </button>
          {showProducts && (
            <div className="flex flex-col mt-5">
              <a href="./invoice" className="mb-5">
                Send Money
              </a>
              <a href="./invoice" className="mb-5">
                Store
              </a>
              <a href="./invoice" className="mb-5">
                Payments Links
              </a>
              <a href="./invoice" className="mb-5">
                Invoices
              </a>
              <a href="./invoice" className="mb-5">
                Invoices
              </a>
              <a href="./invoice" className="mb-5">
                Capital
              </a>
              <a href="./invoice" className="mb-5">
                Grow
              </a>
              <a href="./invoice" className="mb-5">
                Card Issuing
              </a>
              <a href="./invoice" className="mb-5">
                Faas
              </a>
              <a href="./invoice" className="mb-5">
                Send App
              </a>
              <a href="./invoice" className="mb-5">
                Tuition
              </a>
            </div>
          )}
        </div>
        <div className="p-5">
          <button className=" py-4  flex justify-between items-center w-full border-b border-gray-300" onClick={toggleResources}>
            <span>Resources</span>
            {showResources ? '⌄' : '⌄'}
          </button>
          {showResources && (
            <div className="flex flex-col mt-5">
              <a href="./invoice" className="mb-5">
                Pricing
              </a>
              <a href="./invoice" className="mb-5">
                Support
              </a>
              <a href="./invoice" className="mb-5">
                Blog
              </a>
              <a href="./invoice" className="mb-5">
                Integrations
              </a>
              <a href="./invoice" className="mb-5">
                Why you get charged
              </a>
              <a href="./invoice" className="mb-5">
                Payment Protection Promise
              </a>
            </div>
          )}
        </div>
        <div className="p-5">
          <button className="py-4  flex justify-between items-center w-full border-b border-gray-300" onClick={toggleAPIStatus}>
            <span>API Status</span>
            {showAPIStatus ? '⌄' : '⌄'}
          </button>
          {showAPIStatus && (
            <div className="flex flex-col mt-5">
              <a href="./invoice" className="mb-5">
                API Documentation
              </a>
              <a href="./invoice" className="mb-5">
                API Reference
              </a>
              <a href="./invoice" className="mb-5">
                API Status
              </a>
            </div>
          )}
        </div>
        <div className="p-5">
          <button className=" py-4  flex justify-between items-center w-full border-b border-gray-300" onClick={toggleCompany}>
            <span>Company</span>
            {showCompany ? '⌄' : '⌄'}
          </button>
          {showCompany && (
            <div className="flex flex-col mt-5">
              <a href="./invoice" className="mb-5">
                Customers
              </a>
              <a href="./invoice" className="mb-5">
                Career
              </a>
              <a href="./invoice" className="mb-5">
                Press
              </a>
              <a href="./invoice" className="mb-5">
                Covid 19
              </a>
            </div>
          )}
        </div>
        <div className="p-5">
          <button className="py-4  flex justify-between items-center w-full border-b border-gray-300" onClick={toggleContact}>
            <span>Contact</span>
            {showContact ? '⌄' : '⌄'}
          </button>
          {showContact && (
            <div className="flex flex-col mt-5">
              <a href="./invoice" className="mb-5">
                hi@flutterwavego.com
              </a>
              <a href="./invoice" className="mb-5">
                +234 201-8889595
              </a>
              <a href="./invoice" className="mb-5">
                0700-FLUTTERWAVE
              </a>
              <a href="./invoice" className="mb-5">
                X Support
              </a>
              <a href="./invoice" className="mb-5">
                Our call lines are available 24/7.
              </a>
            </div>
          )}
        </div>
      </div>
      
    </div>
      </>
    );
  }
  