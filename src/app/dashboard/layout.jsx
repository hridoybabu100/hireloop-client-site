import { DashboardSiteBar } from "@/components/DashboardSiteBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex w-full mb-15">
      <DashboardSiteBar></DashboardSiteBar>
      <div className="flex-1 py-20">{children}</div>
    </div>
  );
};

export default DashboardLayout;
