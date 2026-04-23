export default class DeleteCarro {
  constructor(r) { this.r = r; }
  async execute(id) { return await this.r.delete(id); }
}
