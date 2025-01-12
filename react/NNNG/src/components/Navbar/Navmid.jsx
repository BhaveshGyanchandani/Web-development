
import React, { useState, useEffect, useRef } from "react";
import { Button } from "./Button";
import { Li } from "./Li";
import { SearchResults } from "./SearchResults"; // Import SearchResults component
import './Navmid.css'
import { Product } from "../Datasets/Products/Final_Test_Product";

export function Navmid() {
  const [menu, setMenu] = useState("Menu");
  const [isOpen, setIsOpen] = useState(false);
  const [Input, setInput] = useState("");
  const [Search, setSearch] = useState([]);
  const dropdownRef = useRef(null);

  const result = Product.flatMap((item) =>
    item.Data.map((content) => content.name)
  );


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenu = (name) => {
    setMenu(name);
    setIsOpen(false); // Close the dropdown after selection
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchData = (value) => {
    const Data = result.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setSearch(Data);
    
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  //  const fetchData = (value) => {
  // fetch('../Datasets/Products/Test_Product.json')
  //   .then(response => response.json())
  //   .then((json) => {
  //     const filteredResults = json.filter((user) => {
  //       const ProductName = user.Data.flatMap((Product) => Product.name);
  //       // console.log(ProductName);


  //       return ProductName.includes(value)
  //     });
  //     console.log(filteredResults)
  //   })
  //}

  return (
    <div className="nav-belt">
      <div className="dropdown" ref={dropdownRef}>
        <Button menu={menu} toggleDropdown={toggleDropdown} />
        <Li isopen={isOpen} handlemenu={handleMenu} />
      </div>

      <input
        style={{ color: "black" }}
        id="search"
        type="search"
        placeholder="Search Amazon"
        value={Input}
        onChange={(e) => handleChange(e.target.value)}
      />

      <button id="searchlogo">
        <svg
          id="searchlogo1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          // width="24"
          // height="24"
          viewBox="0 0 50 50"
        >
          <path
            d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"
          ></path>
        </svg>
      </button>

      {/* Display the search results */}
      {Input && <SearchResults results={Search} />}
    </div>
  );
}
