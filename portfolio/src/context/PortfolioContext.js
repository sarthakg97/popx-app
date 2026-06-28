"use client";
import React from 'react'
import { createContext, useContext, useState } from "react";
import initialData from "../data/portfolio-data";

const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [portfolioData, setPortfolioData] = useState(initialData);
  
  return (
    
      <PortfolioContext.Provider value={{ portfolioData, setPortfolioData }}>{children}</PortfolioContext.Provider>
    
  )
}

export function usePortfolio() {
  return useContext(PortfolioContext);
}
export default PortfolioContext 