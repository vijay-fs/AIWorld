<div align="center">

![](./public/logo.svg)

A simple full-stack text-to-speech demo chatbot built using Nextjs, OpenAI's GPT-3 Chat Completions API, and ElevenLabs' Text-to-Speech API.

</div>

---

## Features

* [x] A responsive, user-friendly, and performant UI built with TypeScript, Reactjs, Nextjs 14 App Router, Tailwind CSS, and ElevenLabs TypeScript SDK.
* [x] A user can ask a question by text and get a text response.
* [x] A user can ask a question by text and get an audio response.
* [x] A user can start a new chat session.
* [x] A user can change the voice of the audio response (40+ options).
* [x] Chat history is saved to local storage.
* [x] One-click deployment configuration to Vercel and Netlify.

## Important Files and Folders

| **Path**                           | **Description**                      |
| ---------------------------------- | ------------------------------------ |
| `.env.example`                     | Example file with all the required environment variables.               |  
| `/app/chat/route.ts`               | API route handler with Server Actions for communicating with OpenAI.       |
| `/app/speech/route.ts`             | API route handler with Server Actions for communicating with ElevenLabs.   |
| `/app/layout.tsx`                  | Shared UI for fonts and metadata configuration.                       |
| `/app/page.tsx`                    | Home (`/`) page.                     |
| `/app/chat/page.tsx`               | Chat (`/chat`) page.                 |
| `/app/components/chatVoice.tsx`    | React component for the change voice select section of the UI.            |
| `/app/components/chatMessages.tsx` | React component for the chat messages section of the UI.                   |
| `/app/components/chatInput.tsx`    | React component for the user input section of the UI.                   |
| `/types/chat.ts`                   | Types for the entire project.     |
| `/utils/getVoices.ts`              | Utility file to fetch voices from ElevenLabs.    |

## Getting Started

This is a [Next.js](https://nextjs.org) project with the latest App Router bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). To get started:

1. Rename the `.env.example` file to `.env.local` and fill in the required environment variables.
    * `NEXT_PUBLIC_OPENAI_API_KEY` - OpenAI API key ([sign up and get one here](https://platform.openai.com/api-keys)).
    * `NEXT_PUBLIC_ELEVENLABS_API_KEY` - ElevenLabs API key ([sign up and get one here](http://elevenlabs.io/?from=bolajiayodeji2995)).
2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
4. You can start modifying any page (`app/page.tsx` for example) and the will auto-update as you edit the file.
5. All good!

## Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FBolajiAyodeji%2Fchat-with-siri&env=OPENAI_API_KEY,ELEVENLABS_API_KEY&envDescription=API%20keys%20needed%20for%20the%20application) [![Deploy to Netlify](https://netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/bolajiayodeji/chat-with-siri#OPENAI_API_KEY=,ELEVENLABS_API_KEY=)

## Todo

Some things to experiment with and add in a v2 in the future when I have the time:

* [ ] Stream the text response from OpenAI.
* [ ] Stream the audio response from ElevenLabs.
* [ ] Pass the stream chunks from OpenAI directly to ElevenLabs.
* [ ] Connect the audio stream to the UI.
* [ ] Increase the response tokens and characters.
* [ ] Option to choose language translation of the audio response.

## Contributors Guide

1. Fork [this repository](https://github.com/BolajiAyodeji/chat-with-siri) (learn how to do this [here](https://help.github.com/articles/fork-a-repo)).

2. Clone the forked repository like so:

```bash
git clone https://github.com/<your username>/chat-with-siri.git && cd chat-with-siri
```

3. Make your changes and create a pull request ([learn how to do this](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)).

4. I'll attend to your pull request soon and provide some feedback.

## Learn More

To learn more about Next.js, take a look at the following resources:

* [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
* [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

To learn more about OpenAI's GPT-3 Chat Completions API, take a look at the following resources:

* [OpenAI's Documentation](https://beta.openai.com/docs/) - learn about OpenAI's GPT-3 Chat Completions API features and API.
* [OpenAI's TypeScript SDK]()
* [Vercel's AI SDK]()

To learn more about ElevenLabs' Text-to-Speech API, take a look at the following resources:

* [ElevenLabs' Documentation](https://docs.elevenlabs.com) - learn about ElevenLabs' Text-to-Speech API features and API.
* [ElevenLab's TypeScript SDK]()
* [ElevenLab's Python SDK]()

## License

This repository is published under the [MIT](LICENSE) license.