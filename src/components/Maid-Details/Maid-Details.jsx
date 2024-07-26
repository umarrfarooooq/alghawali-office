import React, { useEffect, useState } from "react";
import Navbar from "../Header/Navbar";
import YouTube from "react-youtube";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./MaidDetail.css"
const axiosInstense = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  })
const MaidDetails = () =>{


    const { maidID } = useParams();
    const [maidDetails, setMaidDetails] = useState(null);
    useEffect(() => {
        const fetchMaidData = async () => {
          try {
            const response = await axiosInstense.get(
              "api/v1/maids/" + maidID
            );
            setMaidDetails(response.data);
          } catch (error) {
            console.error("Error fetching maids:", error);
          }
        };
    
        fetchMaidData();
      }, [maidID]);

      const opts = {
        playerVars: {
          autoplay: 0,
        },
      };
      const extractYouTubeVideoId = (url) => {
        const shortsMatch = url.match(/youtube\.com\/shorts\/([^\n?#]+)/);
        if (shortsMatch) {
          return shortsMatch[1] || null;
        }
      
        const match = url.match(/youtu(?:\.be\/|be\.com\/watch\?v=)([^\n?#]+)/);
        return (match && match[1]) || null;
      };
      
     
    return(
        <>
            <Navbar />
            {maidDetails && (
                <div>
                <div className="mt-1 text-sm font-bold md:text-[2rem] container py-4 flex items-center">
                <Link to="/" className="md:p-[22px] md:border-2 border-solid border-[#8C979C] rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 12H5" stroke="#8C979C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 5L5 12L12 19" stroke="#8C979C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                </Link>
                
                <span className="ml-4">{maidDetails.name}</span>
                
                </div>
                <div className="flex flex-col items-start gap-[24px] relative overflow-hidden container py-4 md:py-20">
                <div className="flex items-start gap-[24px] justify-between self-stretch w-full flex-col md:flex-row">
                <div className="w-full md:w-[30rem] h-full">
                <div className="maidVideo w-full rounded-2xl h-[23rem] md:h-[45rem] shadow-lg">

                {maidDetails.videoLink.includes("youtube.com") || maidDetails.videoLink.includes("youtu.be") ? (
                    <YouTube
                    videoId={extractYouTubeVideoId(maidDetails.videoLink)}
                    opts={opts}
                    className="w-full h-full rounded-2xl"
                />
                ) : (
                    <video controls className="w-full h-full rounded-2xl">
                        <source src={`${import.meta.env.VITE_ACCESS_API_URL}${maidDetails.videoLink}`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )} 

                </div>

                </div>
                <div className="w-full md:h-[45rem]">
                <div className="flex py-6 h-full flex-col items-start gap-[24px] px-[.5rem] md:px-8 relative flex-1 self-stretch rounded-2xl grow bg-[#EBEBEB]">
                <div className="flex items-center gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col items-start justify-center gap-[16px] relative flex-1 grow">
                    <div className="relative self-stretch mt-1 text-sm font-bold md:text-[2rem]">
                    {maidDetails.name}
                    </div>
                    </div>
                </div>
                <div className="flex items-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[180px] mt-[-1.00px] font-20-phragraph-title1 font-[number:var(--20-phragraph-title1-font-weight)] text-colors-neutral-700 text-[length:var(--20-phragraph-title1-font-size)] tracking-[var(--20-phragraph-title1-letter-spacing)] leading-[var(--20-phragraph-title1-line-height)] [font-style:var(--20-phragraph-title1-font-style)]">
                    Nationality
                    </div>
                    <div className="relative font-bold flex-1 mt-[-1.00px] font-20-phragraph-title1medium text-colors-neutral-800 text-[length:var(--20-phragraph-title1medium-font-size)] tracking-[var(--20-phragraph-title1medium-letter-spacing)] leading-[var(--20-phragraph-title1medium-line-height)] [font-style:var(--20-phragraph-title1medium-font-style)]">
                    {maidDetails.nationality}
                    </div>
                </div>
                <div className="flex items-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[180px] mt-[-1.00px] font-20-phragraph-title1 font-[number:var(--20-phragraph-title1-font-weight)] text-colors-neutral-700 text-[length:var(--20-phragraph-title1-font-size)] tracking-[var(--20-phragraph-title1-letter-spacing)] leading-[var(--20-phragraph-title1-line-height)] [font-style:var(--20-phragraph-title1-font-style)]">
                    Age
                    </div>
                    <div className="relative font-bold flex-1 mt-[-1.00px] font-20-phragraph-title1medium text-colors-neutral-800 text-[length:var(--20-phragraph-title1medium-font-size)] tracking-[var(--20-phragraph-title1medium-letter-spacing)] leading-[var(--20-phragraph-title1medium-line-height)] [font-style:var(--20-phragraph-title1medium-font-style)]">
                    {maidDetails.age}
                    </div>
                </div>
                <div className="flex items-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[180px] mt-[-1.00px] font-20-phragraph-title1 font-[number:var(--20-phragraph-title1-font-weight)] text-colors-neutral-700 text-[length:var(--20-phragraph-title1-font-size)] tracking-[var(--20-phragraph-title1-letter-spacing)] leading-[var(--20-phragraph-title1-line-height)] [font-style:var(--20-phragraph-title1-font-style)]">
                    Monthly Salary
                    </div>
                    <div className="relative font-bold flex-1 mt-[-1.00px] font-20-phragraph-title1medium  text-colors-neutral-800 text-[length:var(--20-phragraph-title1medium-font-size)] tracking-[var(--20-phragraph-title1medium-letter-spacing)] leading-[var(--20-phragraph-title1medium-line-height)] [font-style:var(--20-phragraph-title1medium-font-style)]">
                    {maidDetails.salery}
                    </div>
                </div>
                <div className="flex items-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[180px] mt-[-1.00px] font-18-phragraph-title2 font-[number:var(--18-phragraph-title2-font-weight)] text-colors-neutral-700 text-[length:var(--18-phragraph-title2-font-size)] tracking-[var(--18-phragraph-title2-letter-spacing)] leading-[var(--18-phragraph-title2-line-height)] [font-style:var(--18-phragraph-title2-font-style)]">
                    Applied For
                    </div>
                    <div className="relative font-bold flex-1 mt-[-1.00px] font-18-phragraph-title2medium text-colors-neutral-800 text-[length:var(--18-phragraph-title2medium-font-size)] tracking-[var(--18-phragraph-title2medium-letter-spacing)] leading-[var(--18-phragraph-title2medium-line-height)] [font-style:var(--18-phragraph-title2medium-font-style)]">
                    {maidDetails.appliedFor}
                    </div>
                </div>
                <div className="flex items-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[180px] mt-[-1.00px] font-18-phragraph-title2 font-[number:var(--18-phragraph-title2-font-weight)] text-colors-neutral-700 text-[length:var(--18-phragraph-title2-font-size)] tracking-[var(--18-phragraph-title2-letter-spacing)] leading-[var(--18-phragraph-title2-line-height)] [font-style:var(--18-phragraph-title2-font-style)]">
                    Contract Period
                    </div>
                    <div className="relative font-bold flex-1 mt-[-1.00px] font-18-phragraph-title2medium text-colors-neutral-800 text-[length:var(--18-phragraph-title2medium-font-size)] tracking-[var(--18-phragraph-title2medium-letter-spacing)] leading-[var(--18-phragraph-title2medium-line-height)] [font-style:var(--18-phragraph-title2medium-font-style)]">
                    {maidDetails.contractPeriod}
                    </div>
                </div>
                <div className="flex items-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[180px] mt-[-1.00px] font-18-phragraph-title2 font-[number:var(--18-phragraph-title2-font-weight)] text-colors-neutral-700 text-[length:var(--18-phragraph-title2-font-size)] tracking-[var(--18-phragraph-title2-letter-spacing)] leading-[var(--18-phragraph-title2-line-height)] [font-style:var(--18-phragraph-title2-font-style)]">
                    Religion
                    </div>
                    <div className="relative font-bold flex-1 mt-[-1.00px] font-18-phragraph-title2medium text-colors-neutral-800 text-[length:var(--18-phragraph-title2medium-font-size)] tracking-[var(--18-phragraph-title2medium-letter-spacing)] leading-[var(--18-phragraph-title2medium-line-height)] [font-style:var(--18-phragraph-title2medium-font-style)]">
                    {maidDetails.religion}
                    </div>
                </div>
                <div className="flex items-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[180px] mt-[-1.00px] font-18-phragraph-title2 font-[number:var(--18-phragraph-title2-font-weight)] text-colors-neutral-700 text-[length:var(--18-phragraph-title2-font-size)] tracking-[var(--18-phragraph-title2-letter-spacing)] leading-[var(--18-phragraph-title2-line-height)] [font-style:var(--18-phragraph-title2-font-style)]">
                    Marital Status
                    </div>
                    <div className="relative font-bold flex-1 mt-[-1.00px] font-18-phragraph-title2medium text-colors-neutral-800 text-[length:var(--18-phragraph-title2medium-font-size)] tracking-[var(--18-phragraph-title2medium-letter-spacing)] leading-[var(--18-phragraph-title2medium-line-height)] [font-style:var(--18-phragraph-title2medium-font-style)]">
                    {maidDetails.maritalStatus}
                    </div>
                </div>
                <div className="flex items-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[180px] mt-[-1.00px] font-18-phragraph-title2 font-[number:var(--18-phragraph-title2-font-weight)] text-colors-neutral-700 text-[length:var(--18-phragraph-title2-font-size)] tracking-[var(--18-phragraph-title2-letter-spacing)] leading-[var(--18-phragraph-title2-line-height)] [font-style:var(--18-phragraph-title2-font-style)]">
                    NO Of Childrens
                    </div>
                    <div className="relative font-bold flex-1 mt-[-1.00px] font-18-phragraph-title2medium text-colors-neutral-800 text-[length:var(--18-phragraph-title2medium-font-size)] tracking-[var(--18-phragraph-title2medium-letter-spacing)] leading-[var(--18-phragraph-title2medium-line-height)] [font-style:var(--18-phragraph-title2medium-font-style)]">
                    {maidDetails.childrens}
                    </div>
                </div>
                <div className="flex items-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[180px] mt-[-1.00px] font-18-phragraph-title2 font-[number:var(--18-phragraph-title2-font-weight)] text-colors-neutral-700 text-[length:var(--18-phragraph-title2-font-size)] tracking-[var(--18-phragraph-title2-letter-spacing)] leading-[var(--18-phragraph-title2-line-height)] [font-style:var(--18-phragraph-title2-font-style)]">
                    Education
                    </div>
                    <div className="relative font-bold flex-1 mt-[-1.00px] font-18-phragraph-title2medium text-colors-neutral-800 text-[length:var(--18-phragraph-title2medium-font-size)] tracking-[var(--18-phragraph-title2medium-letter-spacing)] leading-[var(--18-phragraph-title2medium-line-height)] [font-style:var(--18-phragraph-title2medium-font-style)]">
                    {maidDetails.education}
                    </div>
                </div>
                <div className="flex items-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[180px] mt-[-1.00px] font-18-phragraph-title2 font-[number:var(--18-phragraph-title2-font-weight)] text-colors-neutral-700 text-[length:var(--18-phragraph-title2-font-size)] tracking-[var(--18-phragraph-title2-letter-spacing)] leading-[var(--18-phragraph-title2-line-height)] [font-style:var(--18-phragraph-title2-font-style)]">
                    Languages
                    </div>
                    <div className="relative font-bold flex-1 mt-[-1.00px] font-18-phragraph-title2medium text-colors-neutral-800 text-[length:var(--18-phragraph-title2medium-font-size)] tracking-[var(--18-phragraph-title2medium-letter-spacing)] leading-[var(--18-phragraph-title2medium-line-height)] [font-style:var(--18-phragraph-title2medium-font-style)]">
                    {maidDetails.languages}
                    </div>
                </div>
                <div className="flex items-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[180px] mt-[-1.00px] font-18-phragraph-title2 font-[number:var(--18-phragraph-title2-font-weight)] text-colors-neutral-700 text-[length:var(--18-phragraph-title2-font-size)] tracking-[var(--18-phragraph-title2-letter-spacing)] leading-[var(--18-phragraph-title2-line-height)] [font-style:var(--18-phragraph-title2-font-style)]">
                    Experience
                    </div>
                    <div className="relative font-bold flex-1 mt-[-1.00px] font-18-phragraph-title2medium  text-colors-neutral-800 text-[length:var(--18-phragraph-title2medium-font-size)] tracking-[var(--18-phragraph-title2medium-letter-spacing)] leading-[var(--18-phragraph-title2medium-line-height)] [font-style:var(--18-phragraph-title2medium-font-style)]">
                    {maidDetails.experience}
                    </div>
                </div>
                </div>
                </div>
                
            </div>
            <div className="flex items-center gap-[16px] p-[16px] relative self-stretch w-full flex-[0_0_auto] bg-[#107243] rounded-lg">
                <div className="inline-flex items-center gap-[10px] p-[16px] relative flex-[0_0_auto] bg-white rounded-lg">
                <div className="relative w-fit mt-[-1.00px] font-18-phragraph-title2medium font-[number:var(--18-phragraph-title2medium-font-weight)] text-[#107243] text-[length:var(--18-phragraph-title2medium-font-size)] tracking-[var(--18-phragraph-title2medium-letter-spacing)] leading-[var(--18-phragraph-title2medium-line-height)] whitespace-nowrap [font-style:var(--18-phragraph-title2medium-font-style)]">
                    Remarks
                </div>
                </div>
                <p className="flex-1 text-white text-xs md:text-lg">
                {maidDetails.remarks}                
                </p>
            </div>
                </div>
            </div>
            )
            
            }
            
        </>

    )
}

export default MaidDetails;