export interface IService {
  name: string
  status: ServiceStatus
  statusText?: string
  timeStamp?: string
  updateMethod: UpdateMethod
  subProcesses?: Array<IService>
}

export enum ServiceStatus {
  UP = 'up',
  ISSUE = 'issue',
  DOWN = 'down'
}

export enum UpdateMethod {
  automatic = 'AUTOMATIC',
  manual = 'MANUAL'
}
