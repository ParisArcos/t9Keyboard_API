import { suggestWords } from "./services.js";

export const createSuggestedWords = (req, res) => {
  try {
    const words = suggestWords(req.body.data);
    words
      ? res.json({ status: 200, data: words })
      : res.json({
          status: 404,
          data: false,
        });
  } catch (error) {
    return error.message;
  }
};
