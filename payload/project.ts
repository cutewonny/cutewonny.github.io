import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
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
    {
      title: '애드맥스',
      startedAt: '2020-02',
      endedAt: '2020-12',
      where: 'ADMAX.',
      descriptions: [
        { content: '어드민 > 수익금관리 > 수익금현황 데이터를 엑셀파일로 수익금날짜, 파트너cd, 수익금적립/차감금액, 내용 적용 기능 추가' },
        { content: '어드민 > 수익금관리 > 수익금현황 > 환급신청현황 > 검증 버튼을 누르면 조회된 파트너 정산금 데이터를 회계담당자에게 메일로 보내는 기능 추가' },
        { content: 'API로 받아오는 데이터로 블랙리스트 해지 기능 추가, telegram 통해 블랙리스트 해지 목록 알림' },
        { content: 'DSP 업체 API 연동: admin > 타사광고목록에 캠페인과 데이터를 목록에 노출함.' },
        { content: '클릭서버, 액션서버에 파라미터 추가 language, user_agent, ip of device' },
        { content: 'tracking URL 변경: https://clk.cauly.com.tw/v.3ogl  --> https://clk.zoomee.com.tw/v.3ogl' },
        { content: 'AWS 클릭서버 증설, SCAULE-UP 진행.' },
        { content: 'DSP 업체 API 연동: admin > 타사광고목록에 캠페인과 데이터를 목록에 노출함.' },
        { content: '닥터알파, 제스파 페이지에 구글애널리틱스, 구글태그매니저 코드 삽입' },
        { content: '한국과 대만은 같은 admin 소스를 사용하는 SPA 방식을 사용한다. 대만에서만 환급 시 주민번호, 주소가 필요했다. 이를 대만에서 환급시 주민번호와 주소를 입력하는 기능을 추가' },
        { content: '클릭양이 많아지면서 클릭서버를 scale-up할지 서버를 하나 생성할지 제안 후 클릭 서버 신설' },
        { content: '포스트백 추적을 통해 액션서버의 부하를 줄임' },
        { content: '액션, 클릭 서버의 꺼짐 현상 해결, 클릭 서버를 scale-up과 주기적 로그 삭제를 통해 메모리, 디스크 부족 해결' },
        { content: '' },
      ],
    },
  ],
};

export default project;
