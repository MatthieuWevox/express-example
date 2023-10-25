const fs = require("fs");
require("dotenv").config();

let stableDiffusionUrl = "https://clipdrop-api.co/text-to-image/v1";

// Send a post request with the header "x-api-key"
// and the prompt in a form-data key
let prompt = "A cat in a hat";

let formData = new FormData();
formData.append("prompt", prompt);

let requestOptions = {
    method: "POST",
    headers: {
        "x-api-key": process.env.CLIPDROP_API_KEY,
    },
    body: formData,
    redirect: "follow",
};

fetch(stableDiffusionUrl, requestOptions).then((response) => {
    response.arrayBuffer().then((buffer) => {
        let outputName = Math.random().toString(36) + ".png";
        fs.writeFile("./output/" + outputName, Buffer.from(buffer), () => {
            console.log("Saved output to ./output/" + outputName);
        });
    });
});