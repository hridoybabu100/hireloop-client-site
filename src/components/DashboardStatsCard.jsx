import React from "react";
import { Card } from "@heroui/react";

export default function DashboardStatCard({ recruiterStatsData = [] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
      {recruiterStatsData.map((item, index) => {
        // Dynamic icon assignment
        const IconComponent = item.icon;
        
        // Handle positive vs negative status colors 
        const isPositive = item.trend === "up";
        const trendColor = isPositive ? "text-success" : "text-danger";
        const trendIcon = isPositive ? "↑" : "↓";

        return (
          <Card 
            key={item.id || index} 
            variant="default"
            className="border-none bg-background/60 shadow-sm backdrop-blur-md transition-all hover:bg-background/80 cursor-pointer"
          >
            {/* Hero UI v3 uses Card.Content as the main structural block instead of CardBody */}
            <Card.Content className="flex flex-row items-center justify-between p-6">
              <div className="space-y-1">
                {/* Stat Title */}
                <Card.Description className="text-xs font-semibold text-default-400 uppercase tracking-wider">
                  {item.title}
                </Card.Description>
                
                {/* Stat Value */}
                <Card.Title className="text-2xl font-bold tracking-tight text-default-800">
                  {item.value}
                </Card.Title>

                {/* Optional context trend label */}
                {item.subtext && (
                  <p className="text-tiny flex items-center gap-1 mt-1">
                    {item.trend && (
                      <span className={`${trendColor} font-bold`}>
                        {trendIcon} {item.trendValue}
                      </span>
                    )}
                    <span className="text-default-400">{item.subtext}</span>
                  </p>
                )}
              </div>

              {/* Gravity UI Icon Container */}
              {IconComponent && (
                <div className={`p-3 rounded-xl ${item.iconBgColor || 'bg-default-100'} ${item.iconTextColor || 'text-default-600'} flex items-center justify-center`}>
                  <IconComponent size={24} />
                </div>
              )}
            </Card.Content>
          </Card>
        );
      })}
    </div>
  );
}