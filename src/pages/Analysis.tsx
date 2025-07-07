
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Clock } from "lucide-react";

const Analysis = () => {
  return (
    <div className="p-6 bg-slate-950 min-h-full">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">
            Crude Oil Futures Analysis
          </h1>
          <p className="text-slate-400">
            Execute comprehensive analysis on crude oil futures data
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-slate-100 flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                <span>Analysis Control</span>
              </CardTitle>
              <CardDescription className="text-slate-400">
                Run comprehensive 5-year analysis on crude oil futures data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Button 
                size="lg" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                Run 5-Year Analysis
              </Button>
              
              <div className="flex items-center space-x-2 text-sm text-slate-400">
                <Clock className="h-4 w-4" />
                <span>Last successful run: 2025-07-05 10:15 AM</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-slate-100">Analysis Parameters</CardTitle>
              <CardDescription className="text-slate-400">
                Current configuration for the analysis run
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Time Period</span>
                <span className="text-slate-100 font-mono">5 Years</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Contract Type</span>
                <span className="text-slate-100 font-mono">WTI Crude Oil</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Data Sources</span>
                <span className="text-slate-100 font-mono">2 Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Rollover Detection</span>
                <span className="text-green-400 font-mono">Enabled</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-slate-900 border-slate-800 mt-6">
          <CardHeader>
            <CardTitle className="text-slate-100">Analysis Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">System Status</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-400 text-sm">Ready</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Data Availability</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-400 text-sm">Complete</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Estimated Runtime</span>
                <span className="text-slate-100 font-mono">~3-5 minutes</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analysis;
