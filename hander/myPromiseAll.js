/**
 * @param {Promise[]} promises
 * @returns
 */
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let resultList = new Array(promises.length);
    let count = 0;
    promises.forEach((promise, idx) => {
      Promise.resolve(promise)
        .then((res) => {
          resultList[idx] = res;
          count++;
          if (count == promises.length) {
            resolve(resultList);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}
