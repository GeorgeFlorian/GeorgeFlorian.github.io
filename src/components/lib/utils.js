export const compactNumber = (number) => {
  return Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
    notation: "compact",
  }).format(number);
};

export const formattedNumber = (
  number,
  round = false,
  compactDisplay = "long",
) => {
  const options = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  };

  if (number === null) return null;

  if (round) {
    options.maximumFractionDigits = 0;
  }

  if (compactDisplay && number > 1000000) {
    options.notation = "compact";
    options.compactDisplay = compactDisplay;
  }

  return new Intl.NumberFormat("en-US", options).format(number);
};

export const tickNumberFormatter = (number) => {
  return formattedNumber(number, false, "short");
};

export const addBreaklineAfterHalfTheWords = (string, minimumLength) => {
  let newString = "";
  let words = string.split(" ");
  if (words.length <= minimumLength) return string;
  let half = Math.floor(words.length / 2);
  for (let i = 0; i < words.length; i++) {
    if (i === half) {
      newString += "<br>";
    }
    newString += words[i];
    if (i !== words.length - 1) {
      newString += " ";
    }
  }
  return newString;
};
