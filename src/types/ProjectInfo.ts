export interface ProjectInfo {
  projectName: string | null;
  siteArea: number | null;
  startDate: number | null;
  duration: number | null;
}

export const defaultProjectInfo = {
  projectName: 'Rotorua',
  siteArea: 1000,
  startDate: 12,
  duration: 12,
}
