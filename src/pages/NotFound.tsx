
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="p-6 bg-slate-950 min-h-full flex items-center justify-center">
      <Card className="bg-slate-900 border-slate-800 max-w-md w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-6xl font-bold text-slate-500 mb-4">404</CardTitle>
          <h1 className="text-2xl font-bold text-slate-100 mb-2">Page Not Found</h1>
          <p className="text-slate-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-sm text-slate-500 font-mono">
            Route: {location.pathname}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => window.history.back()} 
              variant="outline"
              className="border-slate-700 text-slate-300 hover:bg-slate-800"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
            <Button 
              onClick={() => window.location.href = '/'}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Home className="h-4 w-4 mr-2" />
              Return Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
