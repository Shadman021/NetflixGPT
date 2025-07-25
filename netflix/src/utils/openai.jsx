import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // Only for dev/testing
});

export default openai;

// const openai = new OpenAI({
//   apiKey: "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",
//   dangerouslyAllowBrowser: true ,
// });

// export default openai;