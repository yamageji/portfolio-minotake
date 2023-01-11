import { createClient, Content } from 'newt-client-js';

export interface Article extends Content {
  title: string;
  date: string;
  platform: 'chabatake' | 'zenn';
  url: string;
}

export interface Work extends Content {
  title: string;
  slug: string;
  date: string;
  category: ['web' | 'design'];
  'main-image'?: {
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
  subImage?: {
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
  architectures?: string;
  link?: string;
  content?: string;
}
export interface Profile extends Content {
  englishName: string;
  japaneseName: string;
  avatar: {
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
  description: HTMLElement;
  skills: HTMLElement;
  snsLinks: [
    {
      name: string;
      url: string;
    }
  ];
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

export const getWork = async (slug: string | number) => {
  try {
    const work = await client.getFirstContent<Work>({
      appUid: 'portfolio',
      modelUid: 'works',
      query: {
        slug: slug,
      },
    });
    return work;
  } catch (err) {
    console.log('~~ getWork ~~');
    console.log(err);
  }
};

export const getAllWorks = async (limit: number = 100) => {
  try {
    const works = await client.getContents<Work>({
      appUid: 'portfolio',
      modelUid: 'works',
      query: {
        limit: limit,
        order: ['-date'],
      },
    });
    return works.items;
  } catch (err) {
    console.log('~~ getWorks ~~');
    console.log(err);
  }
};

export const getWorksByCategory = async (
  category: string,
  limit: number = 100
) => {
  try {
    const works = await client.getContents<Work>({
      appUid: 'portfolio',
      modelUid: 'works',
      query: {
        category: category,
        limit: limit,
        order: ['-date'],
      },
    });
    return works.items;
  } catch (err) {
    console.log('~~ getWorksByCategory ~~');
    console.log(err);
  }
};

export const getProfile = async () => {
  try {
    const profile = await client.getFirstContent<Profile>({
      appUid: 'portfolio',
      modelUid: 'profile',
    });
    return profile;
  } catch (err) {
    console.log('~~ getProfile ~~');
    console.log(err);
  }
};
