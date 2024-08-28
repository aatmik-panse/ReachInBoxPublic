import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SubView from "../components/SubView";
import MainPage from "../components/MainPage";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

function OneBox() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", `Bearer ${token}`);
      navigate("/");
    } else {
      const storedToken = localStorage.getItem("token");
      if (!storedToken) {
        navigate("/login");
      }
    }
  }, [token, navigate]);

  const [selectedComponent, setSelectedComponent] = useState("/");

  const handleMenuItemClick = (path) => {
    setSelectedComponent(path);
  };

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "/search":
      case "/mail":
      case "/send":
      case "/stack":
      case "/home":
      case "/stacks":
        return <SubView />;
      case "/onebox":
        return <MainPage />;
      default:
        return <MainPage />;
    }
  };

  return (
    <div className="h-screen w-screen dark:bg-black bg-white ">
      <SideBar onMenuItemClick={handleMenuItemClick} />
      <TopBar />
      <div className="pl-16">{renderSelectedComponent()}</div>
    </div>
  );
}

export default OneBox;
