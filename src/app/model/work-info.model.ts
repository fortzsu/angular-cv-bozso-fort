export class WorkInfoModel {

  constructor(
    public title: string,
    public highlights: string[],
    public description: string,
    public link: string,
    public technologies?: string) {
  }

}
