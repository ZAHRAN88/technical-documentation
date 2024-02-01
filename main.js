function copyToClipboard(icon) {
  var codeBlock = icon.nextElementSibling.querySelector("code");

  /*======================== Hold the code=================== */
  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = codeBlock.innerText;
  document.body.appendChild(tempTextArea);

  /* ========= Copy================== */
  tempTextArea.select();
  document.execCommand("copy");
  alert("Code copied to clipboard!");
  /*==================== Remove the holding textarea ================*/
  document.body.removeChild(tempTextArea);
}
