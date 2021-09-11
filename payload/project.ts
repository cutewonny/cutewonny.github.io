import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    /*
    {
      title: 'Mashup API Development',
      startedAt: '2018-02',
      where: 'Foo Company',
      descriptions: [
        { content: 'Development and operation of Mashup API of Aggregation Layer' },
        {
          content: 'Add Foo Feature in 2019',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Integer ut libero eu libero mattis rutrum at at urna' },
            { content: 'Integer non turpis ante' },
          ],
        },
        {
          content: 'Launched Bar Service in 2018',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Suspendisse vestibulum odio id libero facilisis gravida' },
            {
              content: 'In ipsum est, pellentesque vestibulum tortor eu, bibendum imperdiet metus',
            },
          ],
        },
      ],
    },
    */
    {
      title: '애드맥스',
      startedAt: '2020-02',
      endedAt: '2020-12',
      where: 'ADMAX.',
      descriptions: [
        { content: '페이스북, 인스타, 유튜브 스크래핑 수정 okhttp, Jsoup' },
        { content: '포스트백 추적을 통해 하루 380,250개 무효 전환을 방지함. 액션서버의 부하를 줄임' },
        { content: '캠페인 별 나라 설정 - 나라 추가 : Lineage W Pre-Registration 국가 캠페인으로 하루 1억 매출 달성' },
        { content: '한국과 대만은 같은 admin 소스를 사용하는 SPA 방식을 사용함. 대만에만 환급 시 주민번호와 주소를 입력 기능 추가' },
        { content: 'AWS 클릭서버 증설, SCAULE-UP 진행.',
           weight: 'MEDIUM',
          descriptions: [
           {content:'scale-up 진행 시 775.26 USD 증가 (9개 서버)'},
            {content:'서버 추가 시 70.08 USD'},
          ],
         },
        { content: '액션, 클릭 서버의 꺼짐 현상 해결, 클릭 서버를 scale-up과 주기적 로그 삭제를 통해 메모리, 디스크 부족 해결',
          weight: 'MEDIUM',
          descriptions: [
            {content: '대만의 서버가 메모리가 부족해서 클릭, 액션 서버가 번갈아가면서 꺼짐. 이를 scale-up하여 클릭과 액션서버가 메모리 부족으로 꺼지지 않게 방지'},
            {content: '추석 전 주부터 클릭 양이 증가하면서 클릭서비스가 9개 중 7개 정지되는 이슈가 있었음. 이를 2일 치로 저장하게 함. 디스크 부족으로 클릭 서버가 멈추는 현상 방지'},
            ],
        },
        { content: '닥터알파, 제스파 페이지에 구글애널리틱스, 구글태그매니저 코드 삽입' },
        { content: 'tracking URL 변경: https://clk.cauly.com.tw/v.3ogl --> https://clk.zoomee.com.tw/v.3ogl' },
        { content: '클릭서버, 액션서버에 파라미터 추가 language, user_agent, ip of device' },
        { content: 'API로 받아오는 데이터로 블랙리스트 해지 기능 추가, telegram 통해 블랙리스트 해지 목록 알림' },
        { content: 'DSP 업체 API 연동: admin > 타사광고목록에 캠페인과 데이터를 목록에 노출함.' },
        { content: '어드민 > 수익금관리 > 수익금현황 데이터를 엑셀파일로 수익금날짜, 파트너cd, 수익금적립/차감금액, 내용 적용 기능 추가' },
        { content: '어드민 > 수익금관리 > 수익금현황 > 환급신청현황 > 검증 버튼을 누르면 조회 된 파트너 정산금 데이터를 회계 담당자에게 자동 메일 발송 기능 추가' },
  ],
},
],
};

export default project;
