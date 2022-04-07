import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'SpringBoot',
      level: 3,
    },
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'AWS',
      level: 3,
    },
    {
      title: 'Node.js',
      level: 1,
    },
    {
      title: 'C/C++',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 3,
    },
    {
      title: 'MongoDB',
      level: 2,
    },
    {
      title: 'Oracle',
      level: 1,
    },
    {
      title: 'LiteSql',
      level: 1,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'javascript',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 1,
    },
    {
      title: 'React.js',
      level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Linux',
    },
    {
      title: 'ShellScript',
    },
    {
      title: 'Security',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
    {
      title: 'Rundeck',
    },
    {
      title: 'Git / Github',
    },
    {
      title: 'Bitbucket',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
