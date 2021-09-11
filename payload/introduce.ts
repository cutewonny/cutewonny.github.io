import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '애드맥스(디지털 광고)에서 배포/운영하였습니다. 주로 웹 서비스 운영과 개발을 담당했습니다. 이미 만들어진 서비스에 첫 번째 개발자로 입사하여 1년 간 혼자 서비스를 운영해왔습니다.',
    '누구나 알아듣기 쉽게 설명하는 것에 초점을 맞춥니다. 잘못된 커뮤니케이션은 시간도 길어지고 결과물이 엉망이 됩니다. 1년 동안 혼자 운영하다 보니 대표님, 실장님과 같은 경영진과 실서비스 사용자인 운영진과 대화할 일이 많았습니다. 다양한 직무의 팀 구성원들과 커뮤니케이션을 해본 경험을 토대로 더 좋은 커뮤니케이션 위해 고민합니다.',
    '비즈니스 성장에 기여하는 일을 좋아합니다. 애드맥스의 클릭서버에서 들어오는 점차 데이터가 많아졌고 이를 서버를 더 늘리는 비용과 scale-up하는 비용을 제시하여 클릭서버를 생성한 경험이 있습니다.',
    '안 된다는 말이 아닌 창조하는 사람. 개발자는 서비스를 창조하는 사람입니다. 저도 많이 시행착오를 겪었지만 안된다는 말보다는 가능하게 만드는 것이 개발자다! 라 생각합니다.',
  ],
  sign: 'Han JeongWon',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
