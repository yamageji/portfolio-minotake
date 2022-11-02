import { createClient, Content } from 'newt-client-js';

interface Article extends Content {
  title: string;
  content: string;
  date: string;
}
interface Work extends Content {
  title: string;
  'main-image': {
    _id: string;
    src: string;
    fileType: string;
    fileSize: number;
    fileName: string;
    width: number;
    height: number;
    altText?: string;
    description?: string;
    metadata?: {
      caption?: string;
    };
  };
  content: string;
}

const client = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: 'cdn',
});

export const getArticles = async () => {
  try {
    const articles = await client.getContents<Article>({
      appUid: 'portfolio',
      modelUid: 'article',
      query: {
        '_sys.createdAt': { gt: '2021-09-01' },
        category: 'title',
      },
    });
    console.log(articles);
    return articles.items;
  } catch (err) {
    console.log('~~ getArticles ~~');
    console.log(err);
  }
};

export const getWorks = async () => {
  try {
    const works = await client.getContents<Work>({
      appUid: 'portfolio',
      modelUid: 'works',
    });
    console.log(works);
    return works.items;
  } catch (err) {
    console.log('~~ getWorks ~~');
    console.log(err);
  }
};
