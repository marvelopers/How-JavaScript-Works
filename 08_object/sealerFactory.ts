const sealerFactory = () => {
  const weekmap = new WeakMap();
  return {
    sealer(object: unknown){
      const box = Object.freeze(Object.create(null));
      weekmap.set(box, object);
      return box;
    },
    unsealer(box: any){
      return weekmap.get(box)
    }
  }
}