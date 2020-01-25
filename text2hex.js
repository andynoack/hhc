function text2hex(text, mode) {
  ret = "";
  if (mode === "c") {
    for (var n = 0; n < text.length; n++) {
      var hex = Number(text.charCodeAt(n)).toString(16).toUpperCase();
      ret += hex;
    }
  } else if (mode === "r") {
    for (var n = 0; n < text.length; n++) {
      var hex = Number(text.charCodeAt(n)).toString(10);
      ret += hex;
    }
  }
  return ret;
}
