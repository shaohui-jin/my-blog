import { defineClientConfig } from "@vuepress/client";
import BasePreviewImage from "./components/BasePreviewImage.vue"
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("BasePreviewImage", BasePreviewImage);
  },
  setup() {},
  rootComponents: [BasePreviewImage],
});