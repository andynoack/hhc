// Purposefully done without the "%" (except in order to decrypt)
function text2hex(text, mode) {
  ret = "";
  if (mode === "c") {
    for (var n = 0; n < text.length; n++) {
      var hex = Number(text.charCodeAt(n)).toString(16).toUpperCase();
      ret += hex;
    }
    return ret;
  } else if (mode === "r") {
    var text2 = text.split("")
    text2.unshift("")
    for (var n = 0; n < text.length; n += 2) {
		  text2[n] += "%"
    }
    var text3 = text2.join()
    var text4 = text3.replace(/,/g, "")
    var text5 = decodeURI(text4);
  }
  return text5
}
