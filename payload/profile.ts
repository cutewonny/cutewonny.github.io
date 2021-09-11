import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faBlogger } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/wonny.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  image,
  name: {
    title: '한 정 원',
    small: '(cutewonny)',
  },
  contact: [
    {
      title: 'cutewonny@gmail.com',
      link: 'cutewonny@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '010-9475-0201',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/cutewonny',
      link: 'https://github.com/cutewonny',
      icon: faGithub,
    },
    {
      link: 'https://cutewonny.tistory.com/',
      icon: faBlogger,
    },
    /*
    {
      title: 'YouTube',
      link: 'https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww',
      // icon: faRss,
      icon: faYoutube,
    },
    */
  ],
  notice: {
    title: "안녕하세요 2년 차 개발자 한정원입니다. 꾸준함의 가치를 알기 위해 1일 1블로그 운동을 하고 있습니다. 고객의 니즈 충족에 대한 고민을 생활화 합니다. 사람을 좋아하고 개발 모임에 꾸준히 참여 중입니다.",
    icon: faBell,
  },
};

export default profile;
