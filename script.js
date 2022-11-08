const qualityArray = [
  'Paciente;',
  'Facilidade de aprendizagem;',
  'Fácil convivência e relacionamento;',
  'Disposto a ouvir e aplicar feedbacks e novas ideias;',
  'Facilidade em mediar discuções de grupo;',
  'Bom humor e tranquilidade constante;',
  'Inglês intermediário/avançado'
];

let qualList = document.getElementById('qualityList');

const addQualities = (qualities) => {
  qualities.forEach((qual) => {
    let createdQual = document.createElement('li');
    createdQual.innerText = qual;
    qualList.appendChild(createdQual);
  });
};

addQualities(qualityArray);