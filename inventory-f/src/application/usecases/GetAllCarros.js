export default class GetAllCarros {
  constructor(r) { this.r = r; }
  async execute() { return await this.r.findAll(); }
}
