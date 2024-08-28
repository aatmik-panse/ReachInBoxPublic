/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import {
  FaCaretDown,
  FaEye,
  FaImage,
  FaRegSmile,
  FaUserMinus,
} from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbSquareLetterA } from "react-icons/tb";

function CustomMail({ threadId, onClose }) {
  const [replyData, setReplyData] = useState({
    toName: "",
    to: "",
    from: "",
    fromName: "",
    subject: "",
    body: "",
    references: [],
    inReplyTo: "",
  });

  const handleSendReply = async () => {
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`,
        {
          toName: replyData.toName,
          to: replyData.to,
          from: replyData.from,
          fromName: replyData.fromName,
          subject: replyData.subject,
          body: replyData.body,
          references: replyData.references,
          inReplyTo: replyData.inReplyTo,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Reply sent successfully");
      onClose();
    } catch (error) {
      onClose();
      console.error("Error sending reply:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTextAreaChange = (e) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="bg-black/50 fixed top-0 left-0 flex justify-center items-center h-full w-full z-20">
      <div className="bg-[#1E1F23] w-full max-w-2xl h-4/5 rounded-lg border border-[#41464B] shadow-lg">
        <div className="flex justify-between items-center px-4 bg-[#2B2D31] rounded-t-lg py-3 border-b border-[#41464B]">
          <div className="text-lg font-semibold text-white">Reply</div>
          <div onClick={onClose} className="cursor-pointer">
            <RxCross2 className="text-2xl text-gray-400 hover:text-gray-200 transition duration-150" />
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-4">
            <label className="text-[#BAB9BD] w-16">To:</label>
            <input
              className="flex-1 p-2 bg-[#2B2D31] text-white rounded-md border border-[#41464B] focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Recipient's Name"
              name="toName"
              value={replyData.toName}
              onChange={handleInputChange}
            />
            <input
              className="flex-1 p-2 bg-[#2B2D31] text-white rounded-md border border-[#41464B] focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Recipient's Email"
              name="to"
              value={replyData.to}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex items-center space-x-4">
            <label className="text-[#BAB9BD] w-16">From:</label>
            <input
              className="flex-1 p-2 bg-[#2B2D31] text-white rounded-md border border-[#41464B] focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Your Name"
              name="fromName"
              value={replyData.fromName}
              onChange={handleInputChange}
            />
            <input
              className="flex-1 p-2 bg-[#2B2D31] text-white rounded-md border border-[#41464B] focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Your Email"
              name="from"
              value={replyData.from}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex items-center space-x-4">
            <label className="text-[#BAB9BD] w-16">Subject:</label>
            <input
              className="flex-1 p-2 bg-[#2B2D31] text-white rounded-md border border-[#41464B] focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Subject"
              name="subject"
              value={replyData.subject}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <textarea
              className="w-full h-40 p-2 bg-[#2B2D31] text-white rounded-md border border-[#41464B] focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Message Body"
              name="body"
              value={replyData.body}
              onChange={handleTextAreaChange}
            />
          </div>
        </div>

        <div className="px-6 py-4 border-t bottom-0 border-[#41464B] flex justify-between items-center bg-[#2B2D31] rounded-b-lg">
          <button
            onClick={handleSendReply}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-6 rounded-md hover:from-blue-600 hover:to-indigo-700 transition duration-150"
          >
            Send <FaCaretDown className="ml-2 inline-block" />
          </button>
          <div className="flex space-x-6 text-gray-400">
            <BsLightningChargeFill className="cursor-pointer hover:text-white transition duration-150" />
            <FaEye className="cursor-pointer hover:text-white transition duration-150" />
            <TbSquareLetterA className="cursor-pointer hover:text-white transition duration-150" />
            <IoLinkSharp className="cursor-pointer hover:text-white transition duration-150" />
            <FaImage className="cursor-pointer hover:text-white transition duration-150" />
            <FaRegSmile className="cursor-pointer hover:text-white transition duration-150" />
            <FaUserMinus className="cursor-pointer hover:text-white transition duration-150" />
            <IoMdCode className="cursor-pointer hover:text-white transition duration-150" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomMail;
