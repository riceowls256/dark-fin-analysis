
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Database, FileText } from "lucide-react";
import { NavLink } from "react-router-dom";

const Index = () => {
  const quickActions = [
    {
      title: "Run Analysis",
      description: "Execute crude oil futures analysis",
      icon: TrendingUp,
      href: "/analysis",
      color: "text-green-400"
    },
    {
      title: "View Results",
      description: "Browse analysis results and data",
      icon: FileText,
      href: "/results",
      color: "text-blue-400"
    },
    {
      title: "Check Ingestion",
      description: "Monitor data source status",
      icon: Database,
      href: "/ingestion",
      color: "text-purple-400"
    }
  ];

  return (
    <div className="p-6 bg-slate-950 min-h-full">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">Dashboard</h1>
          <p className="text-slate-400">Welcome to your financial data analysis platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {quickActions.map((action) => (
            <NavLink key={action.title} to={action.href}>
              <Card className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors cursor-pointer h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <action.icon className={`h-6 w-6 ${action.color}`} />
                    <CardTitle className="text-slate-100">{action.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400">
                    {action.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </NavLink>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-slate-100 flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-blue-500" />
                <span>System Overview</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Active Data Sources</span>
                <span className="text-slate-100 font-mono">2</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Last Analysis Run</span>
                <span className="text-slate-100 font-mono">2025-07-05 10:15 AM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Data Points Processed</span>
                <span className="text-slate-100 font-mono">1,247,890</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-slate-100">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-slate-400 text-sm">Data ingestion completed successfully</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-slate-400 text-sm">5-year analysis generated</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-slate-400 text-sm">Results exported to CSV</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
