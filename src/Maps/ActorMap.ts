export class ActorMap {
  data: Map<string, any>;
  constructor() {
    this.data = new Map();
  }
  addActor(key: string, actor: any) {
    this.data.set(key, actor);
  }
  getActor(key: string) {
    return this.data.get(key);
  }
  updateActor(key: string, actor: any) {
    this.data.set(key, actor);
  }
}
