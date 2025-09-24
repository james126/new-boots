export interface UnitTypology {
  id: number
  name: string;
  units: number;
  size: number;
  price: number;
}

export const defaultUnitTypologies: UnitTypology[] = [
  {id: 0, name: '2 Bedroom', units: 3, size: 75, price: 485000 }
];
