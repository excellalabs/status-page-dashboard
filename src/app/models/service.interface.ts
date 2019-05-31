export interface IService {
  name: string
  status: string
  statusText?: string
  timeStamp?: string
  subProcess?: Array<IService>
}

export enum ServiceStatus {
  UP = 'up',
  ISSUE = 'issue',
  DOWN = 'down'
}
