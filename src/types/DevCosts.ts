export interface DevCosts {
  landCost: number;
  civilCost: number;
  constructionPerSqm: number;
  consultantsCost: number;
  councilCost: number;
  contingencyPercent: number;
  marketingCost: number;
  financeRate: number;
}

export const defaultDevelopmentCosts: DevCosts = {
  landCost: 447826,
  civilCost: 80000,
  constructionPerSqm: 2300,
  consultantsCost: 100000,
  councilCost: 100000,
  contingencyPercent: 10,
  marketingCost: 20000,
  financeRate: 8.5,
};

