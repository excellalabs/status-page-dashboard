export class Page {
  title = ''
  url = ''
  status = '' //temporary, to be removed
  statusDisplay = '' //temporary, to be removed
  constructor(
    title: string,
    url: string,
    status: string,
    statusDisplay: string
  ) {
    this.title = title
    this.url = url
    this.status = status
    this.statusDisplay = statusDisplay
  }
}
