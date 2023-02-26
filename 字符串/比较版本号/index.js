/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let version1List = version1.split(".");
    let version2List = version2.split(".");
    for (
      let i = 0;
      i < version1List.length || i < version2List.length;
      i++
    ) {
      let x = 0;
      let y = 0;
      if (i < version1List.length) {
        x = parseInt(version1List[i]);
      }
      if (i < version2List.length) {
        y = parseInt(version2List[i]);
      }
      if (x > y) {
        return 1;
      }
      if (x < y) {
        return -1;
      }
    }
    return 0;
  };