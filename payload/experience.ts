import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: 'ADMAX',
      position:
        '파트너에게 광고를 제공하고 파트너에게는 수익을 광고주에게는 광고 효과를 알려주는 중개 서비스입니다.',
      startedAt: '2020-02',
      descriptions: [
        '한국, 대만에 SPA(AngualarJS) 웹 페이지 서비스를 운영, 개발',
        '클릭서버, 액션서버, 센더서버처럼 데이터를 가공하는 서버들을 문제 해결, 운영, 개발',
        '광고주 사이트에 tracking Tool 설치, 가이드',
        '운영진에게 개발 관련 지식 교육과 데이터 추적 등의 기타 업무 수행',
      ],
      skillKeywords: [
        'AngularJS',
        'SpringBoot',
        'java',
        'Rundeck',
        'Mysql',
        'MongoDB',
        'Rundeck',
        'javascript',
        'Linux',
        'ShellScript',
        'JIRA',
        'Confluence',
        'Bitbucket',
        'AWS',
        'Athena',
        'Route53',
        'S3',
      ],
    },
    {
      title: '[기흥 삼성]-인프라 사용량부하율관리 자동화',
      position: '랜드넷/프리랜서',
      startedAt: '2019-06',
      endedAt: '2019-11',
      descriptions: ['PM 1명, 중급 개발자 5명, 초급 개발자 3명 구성', 'QA, 문서 작성'],
      skillKeywords: ['JAVA', 'JQuery', 'Oracle', 'SVN'],
    },
  ],
};

export default experience;
