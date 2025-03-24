function transformPath(path) {
  if (typeof path === "string") {
    path = path.replace(/\[(\d*)\]/g, ".$1");
    path = path.replace(/\[["'](.*?)["']\]/g, ".$1");

    path = path.split(".");

    return path;
  }

  if (!Array.isArray(path)) {
    throw Error("Invalid path. Path should be a string or an array.");
  }

  return path;
}

module.exports = transformPath;
