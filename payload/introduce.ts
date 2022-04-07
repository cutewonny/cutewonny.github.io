import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '재미있게 개발 공부를 하고자 *무한루프 코딩* 개발자 커뮤니티를 만들었습니다',
    '운영진 6명과 200명의 회원과 함께 활발히 매주 모각코(모여서 각자 코딩), 스터디, 사이드 프로젝트를 하면서 즐겁고 재미있게 레벨 업 중 입니다.',
    '사람을 모으고, 프로젝트에 계속 참여하게 만드는 것에 자신있습니다.',
    '애드맥스(디지털 광고)에서 조사/개발/운영/배포 업무를 담당했습니다. 입사 초기 1년 동안 혼자 서버 유지보수, 코드 리펙토링 및 기능 추가 업무 담당했습니다.',
    '누구나 알아듣기 쉽게 설명하는 것에 초점을 맞춥니다.',
    '잘못된 커뮤니케이션은 시간도 길어지고 결과물이 엉망이 됩니다. 대표님, 실장님과 같은 경영진과 실서비스 사용자인 운영진과 대화할 일이 많았습니다. 다양한 직무의 팀 구성원들과 커뮤니케이션을 해본 경험을 토대로 더 좋은 커뮤니케이션 위해 고민합니다.',
    '비즈니스 성장에 기여하는 일을 좋아합니다. 애드맥스의 클릭서버에서 들어오는 점차 데이터가 많아졌고 이를 서버를 더 늘리는 비용과 scale-up하는 비용을 제시하여 클릭서버를 생성한 경험이 있습니다.',
    '안 된다는 말이 아닌 창조하는 사람. 개발자는 서비스를 창조하는 사람입니다. 저도 많이 시행착오를 겪지만 안된다는 말보다는 가능하게 만드는 것이 개발자다! 라 생각합니다.',
  ],
  sign: 'Han JeongWon',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
