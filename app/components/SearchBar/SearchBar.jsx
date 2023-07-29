"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { LuSearch } from 'react-icons/lu';

function SearchBar() {
  const [dropSearch, setDropSearch] = useState(false);
  const searchBarRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchItems = { 
    "accounts": [
      {
        "name": "Bank of America",
        "balance": "$12,857.62",
        "risk": "High",
        "image": "/boalogo.png"
      },
      {
        "name": "Chase",
        "balance": "$3,398.01",
        "risk": "Medium",
        "image": "/chaselogo.png"

      },
      {
        "name": "Wells Fargo",
        "balance": "$17,845.28",
        "risk": "Low",
        "image": "/wellsfargologo.png"

      }
    ],
    "transactions": [
      {
        "name": "Bank of America",
        "balance": "$3,840.01",
        "risk": "High"
      },
      {
        "name": "Chase",
        "balance": "$11,132.03",
        "risk": "Medium"
      },
      {
        "name": "Wells Fargo",
        "balance": "$7,018.91",
        "risk": "Low"
      }
    ],
    "investments": [
      {
        "name": "Bank of America",
        "balance": "$93,462.93",
        "risk": "Low"
      },
      {
        "name": "Chase",
        "balance": "$3,125.92",
        "risk": "Medium"
      },
      {
        "name": "Wells Fargo",
        "balance": "$11,098.22",
        "risk": "Low"
      }
    ]
  };

  console.log(searchItems.accounts.map((items) => items.name));
    


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("searchBar")) {
        setDropSearch(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const handleInputChange = (event) => {
    setInputValue(event.target.value);};

    const filteredAccounts = searchItems.accounts.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleInputClick = () => {
    setDropSearch(!dropSearch);
  };

  return (
    <div
      className="h-16 rounded-xl
      flex items-center justify-start flex-col py-2
      xxs:w-11/12 xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-1/2 xl:w-1/2 2xl:w-1/2
      xxs:bg-pink-300 xs:bg-slate-300 sm:bg-orange-300 md:bg-sky-300 lg:bg-stone-300 xl:bg-green-300 2xl:bg-teal-300
      relative
      
      "
    >
      <div className="sticky w-3/4">
        <input
          className={`w-10/12 h-12 px-2 outline-none flex items-center justify-center relative ease-out duration-150 ${
            dropSearch ? 'rounded-t-lg' : 'rounded-lg'
          }`}
          onMouseDown={handleInputClick}
          onClick={() => setDropSearch(true)}
          placeholder={"Search"}
          onChange={handleInputChange}
          value={inputValue}
        />

{/*  bar that drops down --------- */}
        {dropSearch ? (
          <div id="searchBar" ref={searchBarRef} className="bg-blue-100 rounded-b-lg w-10/12 max-h-48 absolute px-4 py-2 ease-in-out duration-300 overflow-scroll">
            {filteredAccounts.length === 0 ? (
            <div className="py-2 px-6 flex items-start text-black/30">No matching accounts found</div>
          ) : (filteredAccounts.map((items) => <div className="hover:w-full hover:rounded-lg py-2 px-6 hover:bg-blue-300/30  ease-in-out duration-150">
                <div className="flex flex-row items-center py-2">
                <Image src={items.image} width={40} height={40} />
                <p className="px-4">{items.name}</p></div>

                <span className="flex items-start justify-between py-1 text-xs w-3/5 hover:font-medium"><p className="px-4">Checking</p>
                <p className="px-4">{
                items.balance
                }</p>
                </span>

                <span className="flex items-start justify-between py-1 text-xs w-3/5 hover:font-medium"><p className="px-4">Investments</p>
                <p className="px-4">{
                searchItems.investments.filter((item) => item.name === items.name).map((item) => item.balance)
                }</p>
                </span>

                <span className="flex items-start justify-between py-1 text-xs w-3/5 hover:font-medium"><p className="px-4">Transactions</p>
                <p className="px-4">{
                searchItems.transactions.filter((item) => item.name === items.name).map((item) => item.balance)

                }</p>
                </span>
   
            </div>))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SearchBar;
