export default class GetAllConductores {
  constructor(r) { this.r = r; }
  async execute() { return await this.r.findAll(); }
}
