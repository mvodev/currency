export interface Currency {
  CharCode:string;
  Nominal:number;
  ID:string;
  Previous:number;
  Value: number;
}

export interface JSONCurrencyData {
  Date: Date;
  PreviousDate: Date;
  PreviousURL: string;
  Timestamp: Date;
  Valute:Record<string,Currency>;
}

export interface ApiError {
  message: string;
}