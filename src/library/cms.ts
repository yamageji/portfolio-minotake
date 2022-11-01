import { createClient, Content } from "newt-client-js";

interface Article extends Content {
  title: string;
  content: string;
  date: string;
}

const client = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: "cdn",
});

export const getArticles = async () => {
  return await client.getContents<Article>({
    appUid: "portfolio",
    modelUid: "article",
    query: {
      "_sys.createdAt": { gt: "2021-09-01" },
      category: "title",
    },
  });
};
