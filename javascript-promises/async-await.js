/*
 * This program will work same as nestedThen.js
 * async-await is better way to write promises
 * async-await is used inside a fucntion
 * always wrap asyn-await inside try-catch block
 */

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

async function doWork() {
  try {
    const response = await makeRequest("facebook");
    console.log("response received");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}

doWork();
