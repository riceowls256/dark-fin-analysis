
import { BarChart3, Database, FileText, TrendingUp } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/", icon: BarChart3 },
  { title: "Analysis", url: "/analysis", icon: TrendingUp },
  { title: "Results Viewer", url: "/results", icon: FileText },
  { title: "Data Ingestion", url: "/ingestion", icon: Database },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-blue-600/20 text-blue-400 border-r-2 border-blue-500" 
      : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50";

  return (
    <Sidebar className="border-r border-slate-800 bg-slate-900">
      <SidebarContent>
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-6 w-6 text-blue-500" />
            {state !== "collapsed" && (
              <span className="font-bold text-slate-100">FinAnalytics</span>
            )}
          </div>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-500 text-xs uppercase tracking-wider">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => getNavCls({ isActive })}
                    >
                      <item.icon className="h-4 w-4" />
                      {state !== "collapsed" && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
