
function test(): Promise<void> {
  const promise = new Promise<void>((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve();
      }, 4000);
    } catch (error) {
      reject(new Error('Cannot save to local storage'));
    }
  });

  return promise;
}

export async function test1(): Promise<void> {
  await test();
}
