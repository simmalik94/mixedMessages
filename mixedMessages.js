function generateRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

const collectiveWisdom = {
  signInfo: ["star", "moon", "sun", "comet"],
  fortuneOutput: [
    "terrible luck",
    "bad luck",
    "ok luck",
    "good luck",
    "great luck",
  ],
  advice: ["go out and eat", "not read this", "play more", "trust no one"],
};

// Store the 'wisdom' in an array
let output = [];

for (let item of Object.keys(collectiveWisdom)) {
  let x = generateRandomNumber(collectiveWisdom[item].length);

  if (item === "signInfo") {
    output.push(`Your sign right now is a "${collectiveWisdom[item][x]}".`);
  } else if (item === "fortuneOutput") {
    output.push(`You are having: "${collectiveWisdom[item][x]}".`);
  } else if (item === "advice") {
    output.push(`You should: "${collectiveWisdom[item][x]}".`);
  } else {
    output.push("There is not enough info.");
  }
}

function outputMessage() {
  const formatted = output.join("\n");
  console.log(formatted);
}
outputMessage();
