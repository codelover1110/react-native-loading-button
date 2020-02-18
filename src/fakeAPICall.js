let apiCallCount = 0;
const fakeAPICall = () =>
  new Promise((resolve, reject) => {
    apiCallCount++;
    if (apiCallCount % 3 === 2) {
      setTimeout(() => reject(new Error("fake error")), 1000);
    } else {
      setTimeout(() => resolve(), 1000);
    }
  });

export default fakeAPICall;
