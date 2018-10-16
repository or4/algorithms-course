
function* UUIDGenerator() {
  let d: any;
  let r;

  function getValue(c: any) {
    r = (new Date().getTime() + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  }

  while (true) {
    yield 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, getValue);
  }
}