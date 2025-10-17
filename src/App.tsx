
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TermsAndConditions from "./pages/TermsAndConditions";
import TermsAndConditionsDe from "./pages/TermsAndConditionsDe";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PrivacyPolicyDe from "./pages/PrivacyPolicyDe";
import Impressum from "./pages/Impressum";
import Faq from "./pages/Faq";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/terms-and-conditions/" element={<TermsAndConditions />} />
          <Route path="/terms-and-conditions-de" element={<TermsAndConditionsDe />} />
          <Route path="/terms-and-conditions-de/" element={<TermsAndConditionsDe />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
          <Route path="/privacy-policy-de" element={<PrivacyPolicyDe />} />
          <Route path="/privacy-policy-de/" element={<PrivacyPolicyDe />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/impressum/" element={<Impressum />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/faq/" element={<Faq />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
