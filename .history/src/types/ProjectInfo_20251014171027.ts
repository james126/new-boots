//not used
export interface ProjectInfo {
  projectName: string | null;
  siteArea: number | null;
  startDate: number | null;
  duration: number | null;
}

export const defaultProjectInfo = {
  projectName: '',
  siteArea: 1000,
  startDate: 12,
  duration: 12,
}

export interface ProjectError {
  projectName: boolean | null;
  siteArea: boolean | null;
  startDate: boolean | null;
  duration: boolean | null;
}

export const defaultProjectError = {
  projectName: false,
  siteArea: false,
  startDate: false,
  duration: false,
}

export enum InputTypes {
  TEXT = 'text',
  NUMBER = null,
  DATE = null
}