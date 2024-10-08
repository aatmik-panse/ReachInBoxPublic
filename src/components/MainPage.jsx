import { useEffect, useState } from "react";
import axios from "axios";
import AllInbox from "./Allinbox";
import CenterPage from "./CenterPage";
import RightSection from "./RightSection";
import Loading from "./Loading";

function MainPage() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedThread, setSelectedThread] = useState(null);
  console.log(selectedThread);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setList(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-[#ECEFF3] dark:bg-black dark:text-white text-[#5B5F66] flex h-screen w-full justify-center items-center">
        <Loading />
      </div>
    );
  }

  const loadMail = async (threadId) => {
    setSelectedThread(threadId);
  };

  return (
    <div className="bg-[#ECEFF3] dark:bg-black text-white pt-16 flex w-full h-screen">
      <div className="w-1/4 ">
        <AllInbox data={list} loadMail={loadMail} />
      </div>
      <div className="w-2/4">
        <CenterPage selectedThread={selectedThread} />
      </div>
      <div className="w-1/4">
        <RightSection selectedThread={selectedThread} />
      </div>
    </div>
  );
}

export default MainPage;
