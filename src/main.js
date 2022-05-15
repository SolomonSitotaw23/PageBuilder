import { createApp, provide, h } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./Router";

import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: "https://fakeql.com/graphql/1e543f1a9205240d6273bcc6d9b36ce9",
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.use(router).mount("#app");
