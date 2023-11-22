function checkWord() {
  let text = prompt("Type text");
  return (
    text.includes("xxx") ||
    text.includes("sex") ||
    text.includes("porn") ||
    text.includes("XXX") ||
    text.includes("pOrn") ||
    text.includes("sEX")
  );
}
