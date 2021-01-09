function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`making request to ${location}`);
    if (location === "google") {
      resolve("google says hi");
    } else {
      reject("we only talk to google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("processing response");
    resolve(`extra information + ${response}`);
  });
}

makeRequest("facebook")
  .then((response) => {
    console.log("response received");
    return processRequest(response);
  })
  .then((processedResponse) => {
    console.log(processedResponse);
  })
  .catch((patani) => {
    console.log(`${patani} kuch bhi`);
  });
