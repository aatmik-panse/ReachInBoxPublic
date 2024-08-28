/* eslint-disable react/prop-types */
import { IoIosSend } from "react-icons/io";
import { IoMailOpen } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import mail from "../assets/mail.svg";

function RightSection({ selectedThread }) {
  const [leadDetails, setLeadDetails] = useState({
    name: "Naman",
    email: "naman@gmail.com",
    contactNo: "+91-9424608529",
    linkedin: "linkedin.com/in/aatmikpanse/",
    companyName: "Reachinbox",
  });

  useEffect(() => {
    const fetchLeadDetails = async () => {
      if (selectedThread) {
        try {
          const token = localStorage.getItem("token");
          const res = await axios.get(
            `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`,
            {
              headers: {
                Authorization: token,
              },
            }
          );
          const mail = res.data.data;
          setLeadDetails({
            name: mail.fromName || "Unknown",
            email: mail.fromEmail,
            contactNo: "+91-9424608529",
            linkedin: "linkedin.com/in/aatmikpanse/",
            companyName: "Reachinbox",
          });
        } catch (error) {
          console.error("Error fetching lead details:", error);
        }
      }
    };

    fetchLeadDetails();
  }, [selectedThread]);

  return (
    <div className="border-l-[1px] bg-white dark:bg-black dark:border-[#33383F] border-[#E0E0E0] h-full overflow-y-scroll no-scrollbar px-2">
      <div className="mt-5 dark:bg-[#23272C] bg-[#ECEFF3] text-black dark:text-white rounded-lg py-2 pl-4">
        Lead Details
      </div>
      <div className="px-6 my-10 space-y-6 dark:text-white text-[#637381]">
        <div className="flex justify-between text-sm">
          <div className="">Name</div>
          <div className="dark:text-[#B9B9B9]">{leadDetails.name}</div>
        </div>
        <div className="flex justify-between text-sm">
          <div>Contact No</div>
          <div className="dark:text-[#B9B9B9]">{leadDetails.contactNo}</div>
        </div>
        <div className="flex justify-between text-sm">
          <div>Email ID</div>
          <div className="dark:text-[#B9B9B9]">{leadDetails.email}</div>
        </div>
        <div className="flex justify-between text-sm">
          <div>LinkedIn</div>
          <div className="dark:text-[#B9B9B9]">{leadDetails.linkedin}</div>
        </div>
        <div className="flex justify-between text-sm">
          <div>Company Name</div>
          <div className="dark:text-[#B9B9B9]">{leadDetails.companyName}</div>
        </div>
      </div>

      <div className="mt-8 dark:bg-[#23272C] bg-[#ECEFF3] text-black dark:text-white rounded-lg py-2 pl-4">
        Activities
      </div>

      <div className="my-8 px-4">
        <div className="px-2 text-black dark:text-white">Campaign Name</div>
        <div className="my-4 text-sm px-2 text-black dark:text-white">
          Lets Crack It
        </div>
        <div className="px-2">
          <div className="flex my-4 items-center">
            <div>
              <img
                src={mail}
                className="w-12 dark:bg-[#23272C] bg-[#EEF1F4] p-2 rounded-full"
                alt="Mail Icon"
              />
            </div>
            <div className="ml-10 space-y-2 text-black dark:text-white">
              <div>Step 1: Email</div>
              <div className="text-[#B9B9B9] text-sm flex items-center">
                <IoIosSend className="mr-2" /> Sent 20th Aug
              </div>
            </div>
          </div>

          <div className="flex my-4 items-center">
            <div>
              <img
                src={mail}
                className="w-12 dark:bg-[#23272C] bg-[#EEF1F4] p-2 rounded-full"
                alt="Mail Icon"
              />
            </div>
            <div className="ml-10 space-y-2 text-black dark:text-white">
              <div>Step 2: Email</div>
              <div className="text-[#B9B9B9] text-sm flex items-center">
                <IoMailOpen className="mr-2 text-yellow-500" /> Open 25th Aug
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
