export interface QuoteFormValues {
  responsable: string;
  email: string;
  contacto: string;
  mascota: string;
  razon: string;
  fechaHora: string;
  id: string;
}

export interface QuotesState {
  quotes: QuoteFormValues[];
  addQuote: (newItem: QuoteFormValues) => void;
  removeQuote: (id: string) => void;
}
