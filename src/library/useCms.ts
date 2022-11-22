import { createClient, Content } from 'newt-client-js';

export interface Article extends Content {
  title: string;
  date: string;
  platform: 'chabatake' | 'zenn';
  url: string;
  'main-image'?: {
    _id: string;
    src: string;
    fileType: string;
    fileSize: number;
    fileName: string;
    width: number;
    height: number;
  };
  content?: string;
}

export interface Work extends Content {
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

export const getArticles = async (limit: number = 100) => {
  try {
    const articles = await client.getContents<Article>({
      appUid: 'portfolio',
      modelUid: 'articles',
      query: {
        category: 'title',
        limit: limit,
        order: ['-date'],
      },
    });
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
    return works.items;
  } catch (err) {
    console.log('~~ getWorks ~~');
    console.log(err);
  }
};
