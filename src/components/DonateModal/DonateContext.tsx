import { createContext, useCallback, useContext, useState } from "react";
import type { ReactNode } from "react";

interface DonateContextValue {
  open: boolean;
  amount: string | null; // предвыбранная сумма в тенге (если есть)
  openDonate: (amount?: string) => void;
  closeDonate: () => void;
}

const DonateContext = createContext<DonateContextValue | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useDonate = () => {
  const ctx = useContext(DonateContext);
  if (!ctx) throw new Error("useDonate must be used within DonateProvider");
  return ctx;
};

export const DonateProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState<string | null>(null);

  const openDonate = useCallback((a?: string) => {
    setAmount(a ?? null);
    setOpen(true);
  }, []);

  const closeDonate = useCallback(() => setOpen(false), []);

  return (
    <DonateContext.Provider value={{ open, amount, openDonate, closeDonate }}>
      {children}
    </DonateContext.Provider>
  );
};
