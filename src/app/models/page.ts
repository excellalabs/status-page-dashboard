export interface IProcess {
  name: string
  status: string
  statusText?: string
  timeStamp?: string
  subProcess?: Array<IProcess>
}

export enum Status {
  up = 'up',
  issue = 'issue',
  down = 'down'
}
