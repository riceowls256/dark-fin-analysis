
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Index from "./pages/Index";
import Analysis from "./pages/Analysis";
import Results from "./pages/Results";
import Ingestion from "./pages/Ingestion";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full bg-slate-950">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <header className="h-14 border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm flex items-center px-4">
                <SidebarTrigger className="text-slate-400 hover:text-slate-100" />
                <div className="ml-4">
                  <h1 className="text-lg font-semibold text-slate-100">Financial Data & Analysis Platform</h1>
                </div>
              </header>
              <main className="flex-1 overflow-auto">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/analysis" element={<Analysis />} />
                  <Route path="/results" element={<Results />} />
                  <Route path="/ingestion" element={<Ingestion />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
