import { config } from "dotenv";
config();

import { OpenAI } from "openai";
import readline from "readline";

const prompt =
  'Act as a generator of lists that can easily be parsed, I will be supplying the following question " If I have "foodItem" (example: Potatoes) in my "location" (example: refrigerator) at temperature "temperature" how long before it spoils? If the food item given is not specific enough, give a numbered list of specific names along with the maximum number of days it could last. Otherwise, give a list size of one with a food matching the name already supplied. Do not give extra output as it would be difficult to parse.';

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt();
userInterface.on("line", async (input) => {
  const res = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: input }],
  });

  console.log(res.choices[0].message.content);
  userInterface.prompt();
});
