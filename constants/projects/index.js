export function GetProjectsObject(languageJSON) {
  return {
    "project1": {
      title: 'Fictional Project 1',
      MainColor: '#FF5733',
      ImageURL: [{'imagePath': '/AppleSmilingCharacter.png', 'width': 520, 'height': 302}],
      flexBox: 'center',
      isSite: true,
      textWidth: '50vw',
      projectURL: 'https://example.com/project1',
      Technologies: ['React', 'Redux', 'Node', 'Figma'],
      text: ' tecnologias usadas: React, Redux, Node, Figma',
      subtitle: 'descriçao do projeto.',
      techsText: 'Technologies used in  Project 1'
    },
    "project2": {
      title: ' Project 2',
      MainColor: '#8C33FF',
      ImageURL: [{'imagePath': '/AppleSmilingCharacter.png', 'width': 520, 'height': 302}],
      flexBox: 'center',
      isSite: true,
      textWidth: '50vw',
      projectURL: 'https://example.com/project2',
      Technologies: ['Angular', 'Express', 'MongoDB', 'Sketch'],
      text: ' tecnologias usadas: Angular, Express, MongoDB, Sketch',
      subtitle: 'descriçao do projeto2.',
      techsText: 'Technologies used in  Project 2'
    },
    "project3": {
      title: ' Project 3',
      MainColor: '#45AAB8',
      ImageURL: [{'imagePath': '/AppleSmilingCharacter.png', 'width': 520, 'height': 302}],
      flexBox: 'center',
      isSite: true,
      textWidth: '50vw',
      projectURL: 'https://example.com/project3',
      Technologies: ['Vue', 'Django', 'PostgreSQL', 'Adobe XD'],
      text: ' tecnologias usadas: Vue, Django, PostgreSQL, Adobe XD',
      subtitle: 'descriçao do projeto 3',
      techsText: 'Technologies used in  Project 3'
    },
  };
}
