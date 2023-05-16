console.log("Hello world");

const today = "Tuesday";

const weekend = (day) => {
  if (day === "Friday") {
    return "WEEKEND";
  } else {
    return "WORK BABY";
  }
};

console.log(weekend(today)); //check if today is the weekend
