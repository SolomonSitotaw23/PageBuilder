import { createApp, provide, h } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./Router";

import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: "https://fakeql.com/graphql/8d5562a338af8978294c9a9c75648e83",
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.use(router).mount("#app");
