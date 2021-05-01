import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer -f108G5Igt8RrIRlHrkNXaWegB47oJCSrN4I_x0ipQM4O03WnkhuT2oJ81jBlWpdTZhYuSvLwy_a5UjL70E-mzUMnFpXzyNAo9zM2n0Ee6SbgBvDnDO8zHgdUGWLYHYx",
  },
});
