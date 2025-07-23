import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ITMasterChatbot from "./pages/projects/ITMasterChatbot";
import CareerCanvas from "./pages/projects/CareerCanvas";
import CreatiVerseAI from "./pages/projects/CreatiVerseAI";
import FairnessAuditWizard from "./pages/projects/FairnessAuditWizard";
import MachineDailyCheck from "./pages/projects/MachineDailyCheck";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/it-master-chatbot" element={<ITMasterChatbot />} />
          <Route path="/projects/career-canvas" element={<CareerCanvas />} />
          <Route path="/projects/creativerseai" element={<CreatiVerseAI />} />
          <Route path="/projects/fairness-audit-wizard" element={<FairnessAuditWizard />} />
          <Route path="/projects/machine-daily-check" element={<MachineDailyCheck />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
