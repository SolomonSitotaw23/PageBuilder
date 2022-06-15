import { createApp, provide, h } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./Router";

import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: "https://devoted-longhorn-65.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "4pgTZa4T4RhwDB61bqF1FXaLu6ucg1pEoynGDgXrkilLaG78Jn6Ey5ZCOm9QDaCy",
  },
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.use(router).mount("#app");
