"use client";
import DashboardStatCard from "@/components/DashboardStatsCard";
import { authClient } from "@/lib/auth-client";
import { Briefcase, Person, Envelope, Star } from "@gravity-ui/icons";

const RecruiterPage = () => {
  const {
    data: session,
    //refetch the session
  } = authClient.useSession();
  const user = session?.user;
  // console.log('The session is a', user);

  const recruiterStatsData = [
    {
      title: "Active Jobs",
      value: "14",
      trend: "up",
      trendValue: "12%",
      subtext: "vs last month",
      icon: Briefcase,
      iconBgColor: "bg-blue-500/10",
      iconTextColor: "text-blue-600",
    },
    {
      title: "Total Applicants",
      value: "1,240",
      trend: "up",
      trendValue: "28%",
      subtext: "this week",
      icon: Person,
      iconBgColor: "bg-purple-500/10",
      iconTextColor: "text-purple-600",
    },
    {
      title: "Interviews",
      value: "42",
      trend: "down",
      trendValue: "4%",
      subtext: "vs last week",
      icon: Envelope,
      iconBgColor: "bg-success-500/10",
      iconTextColor: "text-success-600",
    },
    {
      title: "Premium Tier",
      value: "Pro Plan",
      subtext: "Renews in 12 days",
      icon: Star,
      iconBgColor: "bg-warning-500/10",
      iconTextColor: "text-warning-600",
    },
  ];
  return (
    <div className="px-10 pt-6">
      <p className="py-3"><span className="text-pink-500">hello, welcome !</span> {user?.name}</p>
      <DashboardStatCard recruiterStatsData={recruiterStatsData}></DashboardStatCard>
    </div>
  );
};

export default RecruiterPage;
