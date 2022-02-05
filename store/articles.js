export const state = () => ({
  articles: [],
});

export const mutations = {
  add(state, articles) {
    state.articles = articles;
  },
};
