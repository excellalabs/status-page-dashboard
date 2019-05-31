export interface IService {
  name: string
  status: string
  statusText?: string
  timeStamp?: string
  subProcesses?: Array<IService>
}

export enum ServiceStatus {
  UP = 'up',
  ISSUE = 'issue',
  DOWN = 'down'
}
