const INCH_TO_CM_MULTIPLIER = 2.54;

/**
 * https://stackoverflow.com/questions/18701992/space-or-no-space
 * So, zero-or-one of any whitespace character would be \s?, and zero-or-more would be \s*
 */
for (const match of document.body.innerHTML.matchAll(
  /(\d+\.\d+|\d+)(\s*|-)(inches|inch)/g
)) {
  console.log("match >> ", match);
  // 0: "1.57 inches"
  // 1: "1.57"
  // 2: "inches"

  document.body.innerHTML = document.body.innerHTML.replace(
    match[0],
    `${match[0]} <span style="color:#087317!important;font-weight:bold;">(${
      match[1] * INCH_TO_CM_MULTIPLIER
    }cm)</span>`
  );
}
