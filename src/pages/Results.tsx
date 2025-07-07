
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Download, RotateCcw } from "lucide-react";

const Results = () => {
  const mockData = [
    {
      date: "2025-01-15",
      contract: "CLH25",
      open: "78.45",
      high: "79.12",
      low: "77.89",
      close: "78.97",
      volume: "145,623",
      source: "Data Bento",
      isRollover: false
    },
    {
      date: "2025-01-14",
      contract: "CLH25",
      open: "77.23",
      high: "78.67",
      low: "76.91",
      close: "78.45",
      volume: "189,547",
      source: "Interactive Brokers",
      isRollover: true
    },
    {
      date: "2025-01-13",
      contract: "CLG25",
      open: "76.89",
      high: "77.45",
      low: "76.12",
      close: "77.23",
      volume: "167,892",
      source: "Data Bento",
      isRollover: false
    },
    {
      date: "2025-01-12",
      contract: "CLG25",
      open: "75.67",
      high: "77.01",
      low: "75.34",
      close: "76.89",
      volume: "201,345",
      source: "Interactive Brokers",
      isRollover: false
    },
    {
      date: "2025-01-11",
      contract: "CLG25",
      open: "74.12",
      high: "75.89",
      low: "73.95",
      close: "75.67",
      volume: "178,923",
      source: "Data Bento",
      isRollover: false
    },
    {
      date: "2025-01-10",
      contract: "CLG25",
      open: "73.45",
      high: "74.67",
      low: "73.21",
      close: "74.12",
      volume: "156,789",
      source: "Interactive Brokers",
      isRollover: false
    },
    {
      date: "2025-01-09",
      contract: "CLF25",
      open: "72.89",
      high: "73.78",
      low: "72.34",
      close: "73.45",
      volume: "142,567",
      source: "Data Bento",
      isRollover: true
    },
    {
      date: "2025-01-08",
      contract: "CLF25",
      open: "71.23",
      high: "73.12",
      low: "70.98",
      close: "72.89",
      volume: "198,234",
      source: "Interactive Brokers",
      isRollover: false
    },
    {
      date: "2025-01-07",
      contract: "CLF25",
      open: "70.45",
      high: "71.67",
      low: "69.89",
      close: "71.23",
      volume: "165,432",
      source: "Data Bento",
      isRollover: false
    },
    {
      date: "2025-01-06",
      contract: "CLF25",
      open: "69.78",
      high: "70.89",
      low: "69.23",
      close: "70.45",
      volume: "174,891",
      source: "Interactive Brokers",
      isRollover: false
    },
    {
      date: "2025-01-03",
      contract: "CLF25",
      open: "68.91",
      high: "70.12",
      low: "68.45",
      close: "69.78",
      volume: "153,267",
      source: "Data Bento",
      isRollover: false
    },
    {
      date: "2025-01-02",
      contract: "CLF25",
      open: "67.34",
      high: "69.23",
      low: "67.01",
      close: "68.91",
      volume: "187,945",
      source: "Interactive Brokers",
      isRollover: false
    }
  ];

  return (
    <div className="p-6 bg-slate-950 min-h-full">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-100 mb-2">Analysis Results</h1>
          <p className="text-slate-400">Crude oil futures data with rollover detection</p>
        </div>

        <div className="mb-4 flex justify-between items-center">
          <div className="text-sm text-slate-400">
            Showing {mockData.length} records from the latest analysis
          </div>
          <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
            <Download className="h-4 w-4 mr-2" />
            Download as CSV
          </Button>
        </div>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-100">Futures Data Table</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-800 hover:bg-slate-800/50">
                    <TableHead className="text-slate-300">Date</TableHead>
                    <TableHead className="text-slate-300">Contract</TableHead>
                    <TableHead className="text-slate-300 text-right">Open</TableHead>
                    <TableHead className="text-slate-300 text-right">High</TableHead>
                    <TableHead className="text-slate-300 text-right">Low</TableHead>
                    <TableHead className="text-slate-300 text-right">Close</TableHead>
                    <TableHead className="text-slate-300 text-right">Volume</TableHead>
                    <TableHead className="text-slate-300">Source</TableHead>
                    <TableHead className="text-slate-300 text-center">Rollover Event</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockData.map((row, index) => (
                    <TableRow 
                      key={index} 
                      className={`border-slate-800 ${
                        row.isRollover 
                          ? 'bg-amber-500/10 hover:bg-amber-500/20' 
                          : 'hover:bg-slate-800/50'
                      }`}
                    >
                      <TableCell className="text-slate-300 font-mono">{row.date}</TableCell>
                      <TableCell className="text-slate-300 font-mono font-semibold">{row.contract}</TableCell>
                      <TableCell className="text-slate-300 font-mono text-right">{row.open}</TableCell>
                      <TableCell className="text-slate-300 font-mono text-right">{row.high}</TableCell>
                      <TableCell className="text-slate-300 font-mono text-right">{row.low}</TableCell>
                      <TableCell className="text-slate-300 font-mono text-right">{row.close}</TableCell>
                      <TableCell className="text-slate-300 font-mono text-right">{row.volume}</TableCell>
                      <TableCell className="text-slate-400">{row.source}</TableCell>
                      <TableCell className="text-center">
                        {row.isRollover ? (
                          <Badge variant="outline" className="border-amber-500 text-amber-400 bg-amber-500/10">
                            <RotateCcw className="h-3 w-3 mr-1" />
                            Rollover
                          </Badge>
                        ) : (
                          <span className="text-slate-600">—</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Results;
