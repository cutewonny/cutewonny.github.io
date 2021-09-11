import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '자바기반의 웹개발과 보안시스템(네트워크&서버구축)',
      subTitle: '더조은컴퓨터아트학원',
      startedAt: '2018-10',
      endedAt: '2019-04',
    },
    {
      title: '한성대학교',
      subTitle: '멀티미디어공학과, 행정학과',
      startedAt: '2009-03',
      endedAt: '2017-02',
    },
    {
      title: '목동고등학교',
      subTitle: 'Graduated',
      startedAt: '2005-03',
      endedAt: '2008-02',
    },
  ],
};

export default education;
