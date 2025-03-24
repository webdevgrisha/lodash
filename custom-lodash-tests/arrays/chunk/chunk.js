const arrayCheck = require("../utils/arrayCheck/arrayCheck");
const push = require("../utils/push/push");
// import { arrayCheck } from "../utils/arrayCheck/arrayCheck";
// import { push } from "../utils/push/push";

function chunk(array, size = 1) {
  arrayCheck(array);

  if (typeof size !== "number") {
    throw Error("Size must be a number.");
  }

  if (size <= 0 || Number.isNaN(size)) return [];

  const chunkArr = [];

  let currChunk = [];
  let currChunkLen = 0;

  for (let value of array) {
    if (currChunkLen === size) {
      push(chunkArr, currChunk);

      currChunk = [];
      currChunkLen = 0;
    }

    push(currChunk, value);
    currChunkLen++;
  }

  if (currChunkLen) {
    push(chunkArr, currChunk);
  }

  return chunkArr;
}

module.exports = chunk;
// export { chunk };
