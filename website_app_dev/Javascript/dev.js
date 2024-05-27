// JavaScript/dev.js

/*
Creating a database for all the games. This inlcudes;
  - The  name of  the game
  - The image of the game
  - The price of the game
  - The game release date
  - The game age restriction 
  - The stock availability of a game
  - Description of the game
*/

const gamesDatabase = [
  {
      name: "Cyberpunk 2077",
      image: "../images/cyberpunk2077.webp",
      price: 39.00,
      releaseDate: "2020-12-10",
      ageRestriction: "R18+",
      stockAvailability: true,
      description: "Cyberpunk 2077 is an open-world, action adventure RPG set in the dystopian Night City. Players assume the role of V, a mercenary with customizable cybernetic enhancements, exploring a vast urban landscape filled with dynamic missions, complex characters, and an array of futuristic weaponry and technology"
  },
  {
      name: "Helldivers II",
      image: "../images/helldivers2.avif",
      price: 65.00,
      releaseDate: "2024-02-08",
      ageRestriction: "M17+",
      stockAvailability: false,
      description: "Helldivers 2 is a cooperative twin-stick shooter set in a dystopian future. Players join elite soldiers to defend Super Earth from alien invasions, utilizing teamwork, advanced weaponry, and strategic gameplay across diverse hostile planets. The game emphasizes intense action, tactical cooperation, and procedural missions for replayability."
  },
  {
      name: "Palworld",
      image: "../images/palworld.jpg",
      price: 44.00,
      releaseDate: "2024-01-19",
      ageRestriction: "PG12+",
      stockAvailability: true,
      description: "Palworld is an open-world survival game where players capture, train, and battle creatures called Pals. Combining eleomnts of monster-catching with crafting and combat, the game features resource management, base building, and exploration in a vibrant, expansive world, all while utilizing Pals for various tasks and battling other players."
  },
  {
      name: "Red Dead Redempt II",
      image: "../images/rdr2.avif",
      price: 49.00,
      releaseDate: "2018-10-26",
      ageRestriction: "R18+",
      stockAvailability: true,
      description: "Red Dead Redemption 2 is an open-world action-adventure game set in the late 1800s. Players control Arthur Morgan, an outlaw navigating a changing American frontier, engaging in missions, heists, and exploration. The game features a richly detailed world, complex characters, and dynamic storytelling."
  },
  {
      name: "Crysis Remastered",
      image: "../images/crysisremast.avif",
      price: 67.00,
      releaseDate: "2020-07-23",
      ageRestriction: "M17+",
      stockAvailability: true,
      description: "Crysis is a first-person shooter set in a near-future where players assume the role of a soldier with a nanosuit granting superhuman abilities. The game features advanced graphics, destructible environments, and strategic combat against alien and human enemies on a tropical island, emphasizing tactical gameplay and adaptive strategies."
  },
  {
    name: "It Takes Two",
    image: "../images/ittakestwo.avif",
    price: 59.00,
    releaseDate: "2021-01-25",
    ageRestriction: "PG12+",
    stockAvailability: true,
    description: "It Takes Two is a cooperative action-adventure game where players control Cody and May, a couple navigating a fantastical world while working to mend their fractured relationship. Combining platforming, puzzles, and varied gameplay mechanics, it emphasizes collaboration and creativity, offering a unique, story-driven experience."
  },
  {
    name: "Hogwarts Legacy",
    image: "../images/hogwartslegacy.avif",
    price: 64.00,
    releaseDate: "2023-02-10",
    ageRestriction: "PG12+",
    stockAvailability: true,
    description: "Hogwarts Legacy is an open-world action RPG set in the 1800s wizarding world. Players create their own student, attend Hogwarts, and explore a richly detailed environment. The game features spellcasting, potion-making, creature taming, and uncovering hidden secrets, offering an immersive experience in the magical universe."
  },
  {
    name: "Stray",
    image: "../images/stray.avif",
    price: 49.00,
    releaseDate: "2022-07-19",
    ageRestriction: "PG12+",
    stockAvailability: true,
    description: "Stray is an adventure gamewhere players control a stray cat navigating a cyberpunk city populated by robots. Using stealth, agility, and puzzle-solving skills, the cat explores a richly detailed urban landscape, uncovering mysteries and forming bonds with quirky inhabitants to find its way home."
  },
  {
    name: "COD: Modern War II",
    image: "../images/codmw2.jpg",
    price: 74.00,
    releaseDate: "2022-10-28",
    ageRestriction: "R18+",
    stockAvailability: true,
    description: "Call of Duty: Modern Warfare 2 is a first-person shooter set in contemporary warfare. Players engage in intense, cinematic missions across global locations, using advanced weaponry and tactics. The game features a gripping single-player campaign, robust multiplayer modes, and cooperative Spec Ops missions, delivering high-octane action and strategic gameplay."
  },
  {
    name: "Lies of P",
    image: "../images/liesofp.jpg",
    price: 72.00,
    releaseDate: "2023-09-18",
    ageRestriction: "M17+",
    stockAvailability: true,
    description: "Lies of P is an action RPG inspired by the tale of Pinocchio. Players control a puppet named P in a dark, Belle Époque-inspired world, battling grotesque enemies and making choices that affect the narrative. The game features intense combat, intricate weapon crafting, and a hauntingly beautiful environment."
  },
  {
    name: "Mortal Kombat 1",
    image: "../images/mortalkombat1.avif",
    price: 55.00,
    releaseDate: "2023-09-14",
    ageRestriction: "R18+",
    stockAvailability: true,
    description: "Mortal Kombat 1 is a reboot of the iconic fighting game series, featuring classic characters like Scorpion and Sub-Zero. Set in a new timeline created by the Fire God Liu Kang, the game offers brutal combat, detailed arenas, and cinematic storytelling. Players engage in intense battles with signature fatalities and special moves."
  },
  {
    name: "Cuphead",
    image: "../images/cuphead.webp",
    price: 59.00,
    releaseDate: "2017-09-29",
    ageRestriction: "E10+",
    stockAvailability: true,
    description: "Cuphead is a run-and-gun action game with a distinctive 1930s cartoon art style. Players control Cuphead and Mugman as they battle through visually stunning, hand-drawn levels filled with challenging bosses. The game emphasizes precise gameplay, cooperative multiplayer, and a nostalgic aesthetic, offering a unique blend of difficulty and charm."
  },
  {
    name: "Witcher 3",
    image: "../images/witcher3.avif",
    price: 25.00,
    releaseDate: "2015-05-19",
    ageRestriction: "M17+",
    stockAvailability: true,
    description: "The Witcher 3: Wild Hunt is an open-world action RPG where players control Geralt of Rivia, a monster hunter on a quest to find his adopted daughter. The game features a richly detailed world, complex characters, dynamic storytelling, and strategic combat, offering an immersive experience with numerous quests and decisions impacting the narrative."
  },
  {
    name: "Spiderman Remastered",
    image: "../images/spidermanremast.avif",
    price: 55.00,
    releaseDate: "2022-08-12",
    ageRestriction: "PG12+",
    stockAvailability: true,
    description: "Marvel's Spider-Man (2018) is an open-world action-adventure game where players control Spider-Man as he combats crime in New York City. Featuring fluid web-swinging mechanics, dynamic combat, and a compelling narrative, the game explores both Spider-Man and Peter Parker's lives, offering a richly detailed and immersive superhero experience."
  },
  {
    name: "Grand Theft Auto 5",
    image: "../images/gta5.webp",
    price: 37.00,
    releaseDate: "2013-09-17",
    ageRestriction: "R18+",
    stockAvailability: true,
    description: "Grand Theft Auto V (GTA 5) is an open-world action-adventure game set in the fictional state of San Andreas. Players control three protagonists—Michael, Franklin, and Trevor—each with unique stories and abilities, engaging in heists, missions, and exploration. The game features a vast, dynamic world with diverse activities and multiplayer mode."
  },
  {
    name: "Forza MS 2023",
    image: "../images/forzamotorsport5.jpeg",
    price: 70.00,
    releaseDate: "2023-10-10",
    ageRestriction: "E10+",
    stockAvailability: true,
    description: "Forza Motorsport (2023) is a racing simulation game featuring over 500 real-world cars and 20 dynamic tracks. Players can engage in single-player career mode, multiplayer events, and use advanced AI, cutting-edge physics, and real-time ray tracing for a highly immersive experience. The game emphasizes car customization and strategic racing."
  },
  {
    name: "Farcry 6",
    image: "../images/farcry6.avif",
    price: 60.00,
    releaseDate: "2021-10-07",
    ageRestriction: "M17+",
    stockAvailability: true,
    description: "Far Cry 6 is an open-world first-person shooter set on the fictional island of Yara. Players assume the role of Dani Rojas, a guerrilla fighter aiming to overthrow the tyrannical dictator Antón Castillo. The game features diverse landscapes, customizable weapons, vehicles, and dynamic combat, emphasizing freedom and rebellion."
  },
  {
    name: "Alan Wake",
    image: "../images/alanwakeremast.webp",
    price: 15.00,
    releaseDate: "2010-05-14",
    ageRestriction: "M17+",
    stockAvailability: true,
    description: "Alan Wake is a psychological thriller action-adventure game where players control a writer, Alan Wake, searching for his missing wife in the eerie town of Bright Falls. Utilizing light-based combat against shadowy enemies, the game combines narrative-driven exploration, intense atmosphere, and gripping storytelling."
  },
  {
    name: "Alan Wake II",
    image: "../images/alanwake2.avif",
    price: 91.00,
    releaseDate: "2023-10-27",
    ageRestriction: "R18+",
    stockAvailability: true,
    description: "Alan Wake 2 is a survival horror game where players navigate a dark, nightmarish world as an FBI agent and Alan Wake himself. Featuring intense combat with supernatural enemies, intricate puzzles, and a gripping narrative, the game combines atmospheric horror with deep storytelling and strategic gameplay."
  },
  {
    name: "Planet Zoo",
    image: "../images/planetzoocon.avif",
    price: 45.00,
    releaseDate: "2019-11-05",
    ageRestriction: "E10+",
    stockAvailability: true,
    description: "Planet Zoo is a simulation game where players build and manage a detailed zoo. It features realistic animal behavior, diverse habitats, and complex management tasks. Players design exhibits, care for animals, and balance conservation with visitor satisfaction, creating a unique and engaging experience."
  },
  
];

/*
Implementing a method for HTML to retrieve and display data from a database 
includes search functionality, a "popular This Week" section, filtering by 
specific game concoles, and display a;; available games. The process involves
  -An event listener that waits for user input before fetching data.
  -An if statement to check for data existence and display it on HTML pages.
  -A loop to filter specific game data.
  -Displaying 'Out of Stock' For unavailbale games.
*/

document.addEventListener('DOMContentLoaded', () => {
  const gamesContainer = document.getElementById('games-container');

  if (gamesContainer) {
      gamesDatabase.forEach(game => {
          const gameCard = document.createElement('div');
          gameCard.classList.add('game-card');

          gameCard.innerHTML = `
              <img src="${game.image}" alt="${game.name}">
              <h3>${game.name}</h3>
              <p class="price">$${game.price}</p>
              <p>Release Date: ${game.releaseDate}</p>
              <p>Age Restriction: ${game.ageRestriction}</p>
              <p class="availability ${game.stockAvailability ? '' : 'out-of-stock'}">
                  ${game.stockAvailability ? 'In Stock' : 'Out of Stock'}
              </p>
              <p>${game.description}</p>
          `;

          gamesContainer.appendChild(gameCard);
      });
  }
});
