import { createClient } from "newt-client-js";

const client = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: "cdn",
});

export const getArticles = async () => {
  return await client.getContents({
    appUid: "portfolio",
    modelUid: "article",
    query: {
      "_sys.createdAt": { gt: "2021-09-01" },
      category: "title",
    },
  });
};
