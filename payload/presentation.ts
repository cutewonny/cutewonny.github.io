import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: '무한루프 개발자 커뮤니티 웹 사이트 만들기 ',
      subTitle: '안써본 기술 다 써보자',
      startedAt: '2022-03',
      descriptions: [
        {
          content:
            'IntelliJ, JPA, SpringSecurity, google oauth2, postSQL, Docker, React, nodeJS, 설계',
        },
        {
          content: '맥코와 토론하면서 제작 중',
          postHref: 'https://github.com/inf-loop-dev/center',
        },
      ],
    },
    {
      title: '친절한 SQL 튜닝 스터디',
      subTitle: '친절한 SQL 튜닝 책을 6주만에 다 읽자',
      startedAt: '2022-03',
      endedAt: '2022-05',
      descriptions: [
        {
          content: '1) 책 완독, 2) sql 공부, 3) 발표/경청 능력 기르기',
        },
        {
          content: '블로그에 글을 올리고 매주 일요일마다 발표:',
          postHref:
            'https://cutewonny.tistory.com/category/SQL/%EC%B9%9C%EC%A0%88%ED%95%9C%20sql%20%ED%8A%9C%EB%8B%9D',
        },
      ],
    },
    {
      title: '이펙티브 자바',
      subTitle: '이펙티브 자바 책을 6주만에 다 읽자',
      startedAt: '2021-12',
      endedAt: '2022-01',
      descriptions: [
        {
          content: '1) 책 완독, 2) java 공부, 3) 발표/경청 능력 기르기',
        },
        {
          content: '블로그에 글을 올리고 매주 일요일마다 발표:',
          postHref:
            'https://cutewonny.tistory.com/category/java/%EC%9D%B4%ED%8E%99%ED%8B%B0%EB%B8%8C%20%EC%9E%90%EB%B0%94',
        },
      ],
    },
    {
      title: 'Spring in Acition(5판)',
      subTitle: '스프링 인 액션 책을 6주만에 다 읽자',
      startedAt: '2021-11',
      endedAt: '2021-12',
      descriptions: [
        {
          content:
            '1) 책 완독, 2) 스프링5와 스프링 부트2를 사용해서 애플리케이션을 개발하는 데 필요한 여러 핵심 기능 이해, 3) 발표/경청 능력 기르기',
        },
        {
          content:
            '책을 읽고 팀원 5명이 각자의 블로그에 글을 남기고 매주 토요일마다 오프라인 발표:',
          postHref:
            'https://cutewonny.tistory.com/category/java/%EC%8A%A4%ED%94%84%EB%A7%81%EC%9D%B8%EC%95%A1%EC%85%98',
        },
      ],
    },
    {
      title: '자바스크립트 DeepDive 스터디',
      subTitle: '',
      startedAt: '2021-10',
      endedAt: '2022-02',
      descriptions: [
        {
          content:
            '1) 자바스크립트 딥 다이브 책 완독, 2) 자바스크립트의 전반적 이해, 3) 발표/경청 능력 기르기',
        },
        {
          content: 'notion에 팀원 5명이 글을 올리고 매주 토요일 마다 발표',
        },
        {
          content: '노션:',
          postHref: 'https://www.notion.so/DeepDive-57d7502b01604f9a824d42fa267f757c',
        },
      ],
    },
    {
      title: '아침 1시간 스터디',
      subTitle: '7시~8시에 개발 서적 또는 알고리즘 풀기',
      startedAt: '2021-10',
      descriptions: [
        {
          content:
            '아침 7시에 시작해 50분 동안 공부하고 10분 동안 팀원들과 어떤 것을 공부했는지 공유합니다',
        },
        {
          content: '3기 진행 중',
        },
        {
          content: '소모임 앱:',
          postHref: 'https://cutewonny.tistory.com/entry/3%EA%B8%B0-%EB%AA%A8%EC%A7%91',
        },
      ],
    },
    {
      title: '웹 포트폴리오 제작 부트캠프',
      subTitle: '의지박약, 외로움에 지친이들이여 모여라',
      startedAt: '2021-09',
      endedAt: '2021-10',
      descriptions: [
        {
          content: '즐겁게 코딩공부하고 결과물을 만드는 개발 스터디의 리더',
        },
        {
          content: '블로그:',
          postHref:
            'https://cutewonny.tistory.com/category/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/WEB%EA%B0%9C%EB%B0%9C%20BOOT%20CAMP%20%5B2021-09-04~%EC%99%84%EB%A3%8C%5D',
        },
      ],
    },
  ],
};

export default presentation;
