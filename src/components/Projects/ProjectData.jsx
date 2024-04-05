import bankapi from "../../media/bankapi.png";
import sportsee from "../../media/sportsee.png";
import kasa from "../../media/kasa.png";
import learnathome from "../../media/learnathome.png";
import billedapp from "../../media/billedapp.png";
import lespetitsplats from "../../media/lespetitsplats.png";
import fisheye from "../../media/fisheye.png";
import gameon from "../../media/gameon.png";
import groupomania from "../../media/groupomania.png";
import sopeckocko from "../../media/sopeckocko.png";
import lachouetteagence from "../../media/lachouetteagence.png";

const projectsData = [
  {
    id: 1,
    title: "Argent Bank",
    image: bankapi,
    description:
      "Développement front-end d’une interface bancaire dynamique et réactive",
    stack1: "Utilisation de React pour le front-end",
    stack2:
      "Utilisation de Redux pour la gestion de l'état global de l'application ",
    link: "https://github.com/carlavila/Project-10-Bank-API",
  },
  {
    id: 2,
    title: "Sportsee",
    image: sportsee,
    description:
      "Développement d'un tableau de bord d'analytics de coaching sportif",
    stack1: "Utilisation de React pour le front-end",
    stack2: "Utilisation de la bibliothèques Recharts pour les graphiques",
    link: "https://github.com/carlavila/sportsee",
  },
  {
    id: 3,
    title: "Kasa",
    image: kasa,
    description: "Développement d'une interface de location d’appartements",
    stack1: "Utilisation de React et React Router pour le front-end",
    stack2:
      "Utilisation de Sass pour améliorer l'expérience visuelle de l'application",
    link: "https://github.com/carlavila/kasa",
  },
  {
    id: 4,
    title: "Learn@Home",
    image: learnathome,
    description:
      "Définir les besoins pour une appplication de soutien scolaire",
    stack1:
      "Création des diagrammes de cas d'usage pour chaque fonctionnalité majeure",
    stack2:
      "Utilisation de Trello pour le développement des User Stories",
    stack3: "Utilisation de Figma pour la création des maquettes",
    link: "https://github.com/carlavila/learn-at-home",
  },
  {
    id: 5,
    title: "Billed",
    image: billedapp,
    description: "Débugger et tester une application",
    stack1:
      "Utilisation de JestJs pour la rédaction de tests unitaires et d'intégration",
    stack2: "Utilisation de Chrome Debugger pour le débogage de l'application",
    stack3:
      "Élaboration d'un plan de test end-to-end manuel",
    link: "https://github.com/carlavila/bill-app",
  },
  {
    id: 6,
    title: "Les petits plats",
    image: lespetitsplats,
    description:
      "Création d'un site web de recettes de cuisine similaire à Marmiton ou 750g.",
    stack1: "Développement d'un algorithme de recherche en JavaScript",
    stack2: "Utilisation de Bootstrap pour l'interface",
    link: "https://github.com/carlavila/les_petits_plats",
  },
  {
    id: 7,
    title: "Fisheye",
    image: fisheye,
    description: "Création d'une interface accessible de photographes",
    stack1: "Utilisation de JavaScript pour le front-end",
    link: "https://github.com/carlavila/fisheye",
  },
  {
    id: 8,
    title: "Game On",
    image: gameon,
    description: "Création d'une landing page",
    stack1: "Utilisation de JavaScript pour le front-end",
    link: "https://github.com/carlavila/GameOn-website-FR",
  },
  {
    id: 9,
    title: "Groupomania",
    image: groupomania,
    description: "Développement fullStack d'un réseau social d'entreprise.",
    stack1: "Utilisation de VueJs pour le front-end",
    stack2: "Utilisation de NodeJs (avec Express.js) pour le back-end",
    stack3: "Utilisation de Sequelize (avec sequelize CLI) pour l'ORM'",
    stack4: "Utilisation de MySQL comme base de données relationnelle",
    link: "https://github.com/carlavila/groupomania",
  },
  {
    id: 10,
    title: "So Peckocko",
    image: sopeckocko,
    description:
      "Développement back-end d'une application d'avis gastronomiques",
      stack1: "Utilisation de NodeJs (avec Express.js) pour le back-end",
      stack1: "Utilisation de MongoDB comme base de données NoSQL",
    link: "https://github.com/carlavila/so-peckocko",
  },
  {
    id: 11,
    title: "La chouette agence",
    image: lachouetteagence,
    description: "Optimisation du référencement SEO et de l'accessibilité.",
    stack1: "Utilisation de Google Lighthouse pour l'analyse de l’état du SEO fourni",
    stack2: "Ecrire un code maintenable pour le passage au validateur W3C",
    stack2: "Analyse comparative des résultats",
    link: "https://github.com/carlavila/la_chouette_agence",
  },
];

export default projectsData;
