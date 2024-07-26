import React from "react";
import { Link } from 'react-router-dom';
const Card = (props) =>{
    const {maidImg, _id} = props.data;
    const handleCardClick = () => {
        localStorage.setItem('scrollPosition', window.scrollY);
      };
      
    return(
        <div>
            <Link to={`/details/${_id}`} onClick={handleCardClick}>
                <div className="w-full">
                    <div style={{boxShadow:"0px 9px 30px 0px rgba(7, 42, 91, 0.10)"}} className="overflow-hidden rounded-2xl">
                    {maidImg && maidImg.includes("uploads/") ? (
                        <img className=" w-full border border-solid border-[rgba(2, 60, 75, 0.10)] h-[27rem] lg:h-[24rem] object-cover object-top bg-no-repeat shadow-[0px 9px 30px 0px rgba(7, 42, 91, 0.10)]" src={`${import.meta.env.VITE_ACCESS_API_URL}${maidImg}`} alt="maid"/>
                        ) : (
                            <img className=" w-full border border-solid border-[rgba(2, 60, 75, 0.10)] h-[27rem] lg:h-[24rem] object-cover object-top bg-no-repeat shadow-[0px 9px 30px 0px rgba(7, 42, 91, 0.10)]" src={`https://res.cloudinary.com/dtcz2zuev/image/upload/${maidImg}`} alt="maid"/>
                        )}

                    </div>
                </div>
            </Link>
            
        </div>
    )
}

export default Card;