"use client"
import { createContext, useState } from "react";
type BehaviourContextType = {
  behaviour: string;
  setBehaviour: (behaviour: string) => void;
};
export const BehaviourContext = createContext<BehaviourContextType | undefined>(undefined);
export default function BehaviourProvider({ children }:
  { children: React.ReactNode }
) {
  const [behaviour, setBehaviour] = useState('Formal');
  return <BehaviourContext.Provider value={{ behaviour, setBehaviour }}>
    {children}
  </BehaviourContext.Provider>;
};