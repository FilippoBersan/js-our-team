'use strict';

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

const nameTeam = [
  {
    nome: 'Wayne Barret',
    ruolo: 'Founder & CEO',
    foto: 'wayne-barnett-founder-ceo.jpg',
  },

  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: 'angela-caroll-chief-editor.jpg',
  },

  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg',
  },

  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'angela-lopez-social-media-manager.jpg',
  },

  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'scott-estrada-developer.jpg',
  },

  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'barbara-ramos-graphic-designer.jpg',
  },
];

// 1 milestone

const arrayLength = nameTeam.length;
for (let i = 0; i < arrayLength; i++) {
  const person = nameTeam[i];

  // console.log(person.nome);
  // console.log(person.ruolo);
  // console.log(person.foto);

  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }

  if (!(i === arrayLength - 1)) {
    console.log(`--`);
  }
}

// 2 milestone

//  <!-- <li class="member">
//         <div>image</div>
//         <h3>nome</h3>
//         <p>ruolo</p>
//       </li>

const teamElement = document.querySelector('.team');

// template literal

// for (let i = 0; i < nameTeam.length; i++) {
//   const person = nameTeam[i];

//   const li = `<li class="member">
//        <div>image: ${person.foto}</div>
//          <h3>nome: ${person.nome}</h3>
//         <p>ruolo:  ${person.ruolo}</p>
//      </li>`;

//   teamElement.innerHTML += li;
// }

// createElement
for (let i = 0; i < nameTeam.length; i++) {
  const person = nameTeam[i];

  // li
  const liElement = document.createElement('li');
  liElement.classList.add('member');

  const divImageElement = document.createElement('div');
  divImageElement.append(person.foto);

  const h3NameElement = document.createElement('h3');
  h3NameElement.append(person.nome);

  const pRuolo = document.createElement('p');
  pRuolo.append(person.ruolo);

  liElement.append(divImageElement);
  liElement.append(h3NameElement);
  liElement.append(pRuolo);
  teamElement.append(liElement);
}
