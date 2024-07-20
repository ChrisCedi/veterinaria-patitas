import { create } from "zustand";
import { persist } from "zustand/middleware";
import { QuotesState } from "../../types/types";

export const useQuotesStore = create<QuotesState>()(
  persist(
    (set) => ({
      quotes: [],
      addQuote: (newItem) =>
        set((state) => {
          return { quotes: [newItem, ...state.quotes] };
        }),
      removeQuote: (id: string) =>
        set((state) => {
          const newQuotes = state.quotes.filter((quote) => id !== quote.id);
          return { quotes: newQuotes };
        }),
    }),
    {
      name: "quote-store",
    }
  )
);
