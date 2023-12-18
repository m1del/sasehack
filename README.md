This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Fully functional Full-stack Web App with NextJS frontend, Flask backend, connected to a machine learning model and firebase database.

This project was a submission to a hackathon, "SASEHacks", created for the purpose of fostering the community to reduce food waste. It is designed as a food tracker, where users can add foods to their pantry, refrigerator, or freezer. From there, a ML model, trained on a database of expiration dates from the [FSIS](https://catalog.data.gov/dataset/fsis-foodkeeper-data), would predict when these foods would expire. Then, when food items are close to expiring, a user would be alerted and can generate recipes using those items with our recipe generator backed by OpenAI's ChatGPT.

### Click below to view a demo:
[![Pocket-Pantry-Demo](https://img.youtube.com/vi/RQ5utcfLwe8/0.jpg)](https://www.youtube.com/watch?v=RQ5utcfLwe8)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser, and set the view to a mobile phone for the best result.
At this time, our website does not support a full desktop experience.

Next, run the backend server, this will require three things:
1. Have a python environment with all the necessary packages installed.
2. Have a firebase account with firebase credentials in a services/firebase.js file.
3. Have the necessary API tokens for HuggingFace and OpenAI.
   
Then:

```bash
cd model-sasehack
python server.py
```
