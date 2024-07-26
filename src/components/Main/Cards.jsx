import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const axiosInstense = axios.create({
    baseURL: import.meta.env.VITE_ACCESS_API_URL,
  })

const Cards = () =>{
    const [maidData, setMaidData] = useState([]);
    const [itemsToLoad, setItemsToLoad] = useState(100);
    useEffect(() => {
        const fetchMaidProfiles = async () => {
          try {
            const response = await axiosInstense.get("api/v1/maids");
            setMaidData(response.data);
          } catch (error) {
            console.error("Error fetching maid profiles:", error);
          }
        };
    
        fetchMaidProfiles();
      }, []);

        const currentItems = maidData.slice(0, itemsToLoad);

        const handleLoadMore = () => {
            setItemsToLoad(itemsToLoad + 100);
        };

    return(
        <>
          <div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-4">
                {currentItems.map((maid, index) => (
                <Card key={index} data={maid} />
                ))}
            </div>
            <div className="load-more w-full mx-auto container py-4 flex items-center justify-center">
                <button
                    className="mb-8 block bg-[#253061] text-white"
                    onClick={handleLoadMore}
                    style={{ display: itemsToLoad >= maidData.length ? "none" : "block" }}
                > 
                    Load More
                </button>
                </div>
            </>
    )
}

export default Cards;