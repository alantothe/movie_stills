const data = [
  {
    country: "United States, United Kingdom, Japan",
  },
  {
    country: "Italy",
  },
  {
    country: "France, Germany, Italy, Canada, Japan",
  },
  {
    country: "Mexico, Spain",
  },
  {
    country: "Spain, France, United Kingdom, United States",
  },
  {
    country: "United States, Taiwan, United Kingdom, Canada, India, France",
  },
  {
    country: "United Kingdom, France, United States",
  },
  {
    country: "France, United States",
  },
  {
    country:
      "United States, Germany, Hong Kong, Singapore, China, United Kingdom, Spain",
  },
  {
    country: "United States, United Kingdom",
  },
  {
    country: "United States, Japan",
  },
  {
    country: "United States, China",
  },
  {
    country: "United Kingdom",
  },
  {
    country: "United Kingdom, Denmark",
  },
  {
    country: "United States, Sweden, Norway",
  },
  {
    country: "United Kingdom, United States, Turkey",
  },
  {
    country: "Japan",
  },
  {
    country: "United States, Germany, Canada",
  },
  {
    country: "Spain, United Kingdom, France, United States",
  },
  {
    country: "United Kingdom, United States",
  },
  {
    country: "Germany, United States",
  },
  {
    country: "United States",
  },
];

let countriesArr = [];
for (const value of data) {
  const tempArr = value.country
    .split(", ")
    .map((country) => country.replace(/ /g, "-").toLowerCase());
  for (let i = 0; i <= tempArr.length - 1; i++) {
    if (countriesArr.includes(tempArr[i])) {
      continue;
    } else {
      countriesArr.push(tempArr[i]);
    }
  }
}
countriesArr = countriesArr.map((item) =>
  item === "united-states" ? "usa" : item
);

console.log(countriesArr);
