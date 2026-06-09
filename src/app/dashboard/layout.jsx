import { DashboardSiteBar } from "@/components/DashboardSiteBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <DashboardSiteBar></DashboardSiteBar>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default DashboardLayout;
