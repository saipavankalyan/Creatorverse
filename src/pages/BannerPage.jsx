import { Outlet } from "react-router-dom";

const BannerPage = ({ children }) => {
  return (
    <div>
      Banner Page
      <Outlet />
    </div>
  );
};

export default BannerPage;
