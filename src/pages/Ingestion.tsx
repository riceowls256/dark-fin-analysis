
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Database, CheckCircle } from "lucide-react";

const Ingestion = () => {
  const dataSourceStatus = [
    {
      name: "Data Bento",
      lastRun: "2025-07-07 09:45 AM",
      status: "Success",
      recordsProcessed: "12,547",
      latency: "2.3s"
    },
    {
      name: "Interactive Brokers",
      lastRun: "2025-07-07 09:42 AM", 
      status: "Success",
      recordsProcessed: "8,923",
      latency: "1.8s"
    }
  ];

  const recentIngestions = [
    { timestamp: "2025-07-07 09:45:12", source: "Data Bento", records: "1,247", status: "Success" },
    { timestamp: "2025-07-07 09:42:35", source: "Interactive Brokers", records: "892", status: "Success" },
    { timestamp: "2025-07-07 09:15:08", source: "Data Bento", records: "1,156", status: "Success" },
    { timestamp: "2025-07-07 09:12:19", source: "Interactive Brokers", records: "934", status: "Success" },
    { timestamp: "2025-07-07 08:45:33", source: "Data Bento", records: "1,089", status: "Success" }
  ];

  return (
    <div className="p-6 bg-slate-950 min-h-full">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">Data Ingestion Status</h1>
          <p className="text-slate-400">Monitor the status and performance of data source integrations</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-3">
              <CardTitle className="text-slate-100 flex items-center space-x-2">
                <Database className="h-5 w-5 text-blue-500" />
                <span>Active Sources</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-100 mb-1">2</div>
              <div className="text-slate-400 text-sm">Data providers connected</div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-3">
              <CardTitle className="text-slate-100 flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Success Rate</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-400 mb-1">100%</div>
              <div className="text-slate-400 text-sm">Last 24 hours</div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="pb-3">
              <CardTitle className="text-slate-100">Records Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-100 mb-1">21,470</div>
              <div className="text-slate-400 text-sm">Total ingested</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-slate-100">Data Source Status</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-800">
                    <TableHead className="text-slate-300">Data Source</TableHead>
                    <TableHead className="text-slate-300">Last Run Timestamp</TableHead>
                    <TableHead className="text-slate-300">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dataSourceStatus.map((source, index) => (
                    <TableRow key={index} className="border-slate-800 hover:bg-slate-800/50">
                      <TableCell className="text-slate-300 font-medium">{source.name}</TableCell>
                      <TableCell className="text-slate-300 font-mono">{source.lastRun}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="border-green-500 text-green-400 bg-green-500/10">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {source.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-slate-100">Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {dataSourceStatus.map((source, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 font-medium">{source.name}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Records:</span>
                      <span className="text-slate-300 font-mono">{source.recordsProcessed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Latency:</span>
                      <span className="text-slate-300 font-mono">{source.latency}</span>
                    </div>
                  </div>
                  {index < dataSourceStatus.length - 1 && <hr className="border-slate-800" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="bg-slate-900 border-slate-800 mt-6">
          <CardHeader>
            <CardTitle className="text-slate-100">Recent Ingestion Activity</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-800">
                  <TableHead className="text-slate-300">Timestamp</TableHead>
                  <TableHead className="text-slate-300">Source</TableHead>
                  <TableHead className="text-slate-300 text-right">Records</TableHead>
                  <TableHead className="text-slate-300">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentIngestions.map((ingestion, index) => (
                  <TableRow key={index} className="border-slate-800 hover:bg-slate-800/50">
                    <TableCell className="text-slate-300 font-mono">{ingestion.timestamp}</TableCell>
                    <TableCell className="text-slate-300">{ingestion.source}</TableCell>
                    <TableCell className="text-slate-300 font-mono text-right">{ingestion.records}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="border-green-500 text-green-400 bg-green-500/10">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {ingestion.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Ingestion;
