import News from "../models/News.js";

// Add news
export const submitNews = async (req, res) => {
  try {
    const { title, url, source, submittedBy } = req.body;
    const news = new News({ title, url, source, submittedBy });
    await news.save();
    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all news
export const getNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Vote on news
export const voteNews = async (req, res) => {
  try {
    const { id } = req.params;
    const { type } = req.body; // "true", "false", "review"
    const news = await News.findById(id);
    if (!news) return res.status(404).json({ message: "News not found" });

    news.votes[type] += 1;
    await news.save();
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
