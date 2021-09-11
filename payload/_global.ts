import favicon from '../asset/favicon.ico';
import previewImage from '../asset/wonny.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'RESUME: Han Jeongwon';
const description = 'This is Back-end Developer Jeongwon Han';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph Image Sample.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'JeongWon',
        lastName: 'Han',
        username: 'wonny',
        gender: 'female',
      },
    },
  },
};
