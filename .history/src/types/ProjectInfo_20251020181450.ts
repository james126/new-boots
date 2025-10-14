//not used
export interface ProjectInfo {
  projectName: string | null;
  siteArea: number | null;
  startDate: string | null;
  duration: number | null;
}

export const defaultProjectInfo = {
  projectName: null,
  siteArea: null,
  startDate: null,
  duration: null,
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
  NUMBER = 'number',
  DATE = 'date'
}