import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-[#0A0F1C] overflow-hidden text-slate-300">
      <Sidebar />
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <TopNav />
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          {children}
        </main>
      </div>
    </div>
  );
}
