function text2hex(text) {
  ret = "";
  for (var n = 0, l = text.length; n < l; n++) {
    var hex = Number(text.charCodeAt(n)).toString(16).toUpperCase();
    ret += hex;
  }
  return ret;
}
