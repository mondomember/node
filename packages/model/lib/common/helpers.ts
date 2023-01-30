const VALID_CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function generateFakeId(length = 27) {
  let result = "";

  for (var i = 0; i < length; i++) {
    result += VALID_CHARACTERS.charAt(
      Math.floor(Math.random() * VALID_CHARACTERS.length)
    );
  }

  return result;
}

export function generateTempKSUID(prefix = "TEMP") {
  return `${prefix}_${generateFakeId()}`;
}
