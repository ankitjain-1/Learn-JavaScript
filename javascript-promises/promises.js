let pro = new Promise((resolve, reject) => {
  let a = 3;
  if (a === 3) {
    resolve("success");
  } else {
    reject("failed");
  }
});

pro
  .then((msg) => console.log(`${msg} from then block`))
  .catch((msg) => console.log(`${msg} from catch block`));
