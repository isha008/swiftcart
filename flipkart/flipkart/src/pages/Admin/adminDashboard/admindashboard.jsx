import { useState } from "react";
import Sidebar from "../../../components/Admin/sidebar/sidebar";
import { AdminOverview } from "../overview/overview";
import { ViewAllCustomers } from "../customers/customers";
import { ViewAllSellers } from "../sellers/seller";
import Settings from "../navbar/settings/settings";
import Account from "../navbar/account/account";

function Admindashboard() {
  const [activePage, setActivepage] = useState("overview");
  function changePage(currentPage) {
    setActivepage(currentPage);
  }
  console.log("act pag", activePage);
  return (
    <div>
      <Sidebar changePage={changePage} activePage={activePage} />
      {activePage === "overview" && <AdminOverview />}
      {activePage === "customers" && <ViewAllCustomers />}
      {activePage === "sellers" && <ViewAllSellers />}
      {activePage === "settings" && <Settings />}
      {activePage === "account" && <Account />}
    </div>
  );
}
export default Admindashboard;
