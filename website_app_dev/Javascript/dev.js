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
  - The link to the trailer of the game
  - What console the game is on
*/

const gamesDatabase = [
    {
        name: "Cyberpunk 2077",
        image: "images/cyberpunk2077.webp",
        price: 39.00,
        releaseDate: "2020-12-10",
        ageRestriction: "R18+",
        stockAvailability: true,
        description: "Cyberpunk 2077 is an open-world, action adventure RPG set in the dystopian Night City. Players assume the role of V, a mercenary with customizable cybernetic enhancements, exploring a vast urban landscape filled with dynamic missions, complex characters, and an array of futuristic weaponry and technology",
        trailer: "https://www.youtube.com/embed/qIcTM8WXFjk",
        console: "PC"
    },
    {
        name: "Helldivers II",
        image: "images/helldivers2.avif",
        price: 65.00,
        releaseDate: "2024-02-08",
        ageRestriction: "M17+",
        stockAvailability: false,
        description: "Helldivers 2 is a cooperative twin-stick shooter set in a dystopian future. Players join elite soldiers to defend Super Earth from alien invasions, utilizing teamwork, advanced weaponry, and strategic gameplay across diverse hostile planets. The game emphasizes intense action, tactical cooperation, and procedural missions for replayability.",
        trailer: "https://www.youtube.com/embed/7i5cLnQ5z80",
        console: "Playstation"
    },
    {
        name: "Palworld",
        image: "images/palworld.jpg",
        price: 44.00,
        releaseDate: "2024-01-19",
        ageRestriction: "PG12+",
        stockAvailability: true,
        description: "Palworld is an open-world survival game where players capture, train, and battle creatures called Pals. Combining elements of monster-catching with crafting and combat, the game features resource management, base building, and exploration in a vibrant, expansive world, all while utilizing Pals for various tasks and battling other players.",
        trailer: "https://www.youtube.com/embed/eFbeOxjeIkk",
        console: "Nintendo"
    },
    {
        name: "Red Dead Redemption II",
        image: "images/rdr2.avif",
        price: 49.00,
        releaseDate: "2018-10-26",
        ageRestriction: "R18+",
        stockAvailability: true,
        description: "Red Dead Redemption 2 is an open-world action-adventure game set in the late 1800s. Players control Arthur Morgan, an outlaw navigating a changing American frontier, engaging in missions, heists, and exploration. The game features a richly detailed world, complex characters, and dynamic storytelling.",
        trailer: "https://www.youtube.com/embed/HVRzx17WHVk",
        console: "Xbox"
    },
    {
        name: "Crysis Remastered",
        image: "images/crysisremast.avif",
        price: 67.00,
        releaseDate: "2020-07-23",
        ageRestriction: "M17+",
        stockAvailability: true,
        description: "Crysis is a first-person shooter set in a near-future where players assume the role of a soldier with a nanosuit granting superhuman abilities. The game features advanced graphics, destructible environments, and strategic combat against alien and human enemies on a tropical island, emphasizing tactical gameplay and adaptive strategies.",
        trailer: "https://www.youtube.com/embed/ZnVIsPgPbG4",
        console: "Nintendo"
    },
    {
        name: "It Takes Two",
        image: "images/ittakestwo.webp",
        price: 59.00,
        releaseDate: "2021-01-25",
        ageRestriction: "PG12+",
        stockAvailability: true,
        description: "It Takes Two is a cooperative action-adventure game where players control Cody and May, a couple navigating a fantastical world while working to mend their fractured relationship. Combining platforming, puzzles, and varied gameplay mechanics, it emphasizes collaboration and creativity, offering a unique, story-driven experience.",
        trailer: "https://www.youtube.com/embed/ohClxMmNLQQ",
        console: "Nintendo"
    },
    {
        name: "Hogwarts Legacy",
        image: "images/hogwartslegacy.avif",
        price: 64.00,
        releaseDate: "2023-02-10",
        ageRestriction: "PG12+",
        stockAvailability: true,
        description: "Hogwarts Legacy is an open-world action RPG set in the 1800s wizarding world. Players create their own student, attend Hogwarts, and explore a richly detailed environment. The game features spellcasting, potion-making, creature taming, and uncovering hidden secrets, offering an immersive experience in the magical universe.",
        trailer: "https://www.youtube.com/embed/BtyBjOW8sGY",
        console: "PC"
    },
    {
        name: "Stray",
        image: "images/stray.avif",
        price: 49.00,
        releaseDate: "2022-07-19",
        ageRestriction: "PG12+",
        stockAvailability: true,
        description: "Stray is an adventure game where players control a stray cat navigating a cyberpunk city populated by robots. Using stealth, agility, and puzzle-solving skills, the cat explores a richly detailed urban landscape, uncovering mysteries and forming bonds with quirky inhabitants to find its way home.",
        trailer: "https://www.youtube.com/embed/u84hRUQlaio",
        console: "PC"
    },
    {
        name: "COD: Modern Warfare II",
        image: "images/codmw2.jpg",
        price: 74.00,
        releaseDate: "2022-10-28",
        ageRestriction: "R18+",
        stockAvailability: true,
        description: "Call of Duty: Modern Warfare 2 is a first-person shooter set in contemporary warfare. Players engage in intense, cinematic missions across global locations, using advanced weaponry and tactics. The game features a gripping single-player campaign, robust multiplayer modes, and cooperative Spec Ops missions, delivering high-octane action and strategic gameplay.",
        trailer: "https://www.youtube.com/embed/r72GP1PIZa0",
        console: "Xbox"
    },
    {
        name: "Lies of P",
        image: "images/liesofp.jpg",
        price: 72.00,
        releaseDate: "2023-09-18",
        ageRestriction: "M17+",
        stockAvailability: true,
        description: "Lies of P is an action RPG inspired by the tale of Pinocchio. Players control a puppet named P in a dark, Belle Époque-inspired world, battling grotesque enemies and making choices that affect the narrative. The game features intense combat, intricate weapon crafting, and a hauntingly beautiful environment.",
        trailer: "https://www.youtube.com/embed/Ju3lQsG5T-w",
        console: "Playstation"
    },
    {
        name: "Mortal Kombat 1",
        image: "images/mortalkombat1.avif",
        price: 55.00,
        releaseDate: "2023-09-14",
        ageRestriction: "R18+",
        stockAvailability: true,
        description: "Mortal Kombat 1 is a reboot of the iconic fighting game series, featuring classic characters like Scorpion and Sub-Zero. Set in a new timeline created by the Fire God Liu Kang, the game offers brutal combat, detailed arenas, and cinematic storytelling. Players engage in intense battles with signature fatalities and special moves.",
        trailer: "https://www.youtube.com/embed/2bVik34nWws",
        console: "Playstation"
    },
    {
        name: "Cuphead",
        image: "images/cuphead.webp",
        price: 59.00,
        releaseDate: "2017-09-29",
        ageRestriction: "E10+",
        stockAvailability: true,
        description: "Cuphead is a run-and-gun action game with a distinctive 1930s cartoon art style. Players control Cuphead and Mugman as they battle through visually stunning, hand-drawn levels filled with challenging bosses. The game emphasizes precise gameplay, cooperative multiplayer, and a nostalgic aesthetic, offering a unique blend of difficulty and charm.",
        trailer: "https://www.youtube.com/embed/KWO7GyIi3BQ",
        console: "Nintendo"
    },
    {
        name: "Witcher 3",
        image: "images/witcher3.avif",
        price: 25.00,
        releaseDate: "2015-05-19",
        ageRestriction: "M17+",
        stockAvailability: true,
        description: "The Witcher 3: Wild Hunt is an open-world action RPG where players control Geralt of Rivia, a monster hunter on a quest to find his adopted daughter. The game features a richly detailed world, complex characters, dynamic storytelling, and strategic combat, offering an immersive experience with numerous quests and decisions impacting the narrative.",
        trailer: "https://www.youtube.com/embed/ehjJ614QfeM",
        console: "PC"
    },
    {
        name: "Spiderman Remastered",
        image: "images/spidermanremast.avif",
        price: 55.00,
        releaseDate: "2022-08-12",
        ageRestriction: "PG12+",
        stockAvailability: true,
        description: "Marvel's Spider-Man (2018) is an open-world action-adventure game where players control Spider-Man as he combats crime in New York City. Featuring fluid web-swinging mechanics, dynamic combat, and a compelling narrative, the game explores both Spider-Man and Peter Parker's lives, offering a richly detailed and immersive superhero experience.",
        trailer: "https://www.youtube.com/embed/FiVbJYhIXBY",
        console: "Playstation"
    },
    {
        name: "Grand Theft Auto 5",
        image: "images/gta5.webp",
        price: 37.00,
        releaseDate: "2013-09-17",
        ageRestriction: "R18+",
        stockAvailability: true,
        description: "Grand Theft Auto V (GTA 5) is an open-world action-adventure game set in the fictional state of San Andreas. Players control three protagonists—Michael, Franklin, and Trevor—each with unique stories and abilities, engaging in heists, missions, and exploration. The game features a vast, dynamic world with diverse activities and multiplayer mode.",
        trailer: "https://www.youtube.com/embed/QkkoHAzjnUs",
        console: "Xbox"
    },
    {
        name: "Forza Motorsport 2023",
        image: "images/forzamotorsport5.jpeg",
        price: 70.00,
        releaseDate: "2023-10-10",
        ageRestriction: "E10+",
        stockAvailability: true,
        description: "Forza Motorsport (2023) is a racing simulation game featuring over 500 real-world cars and 20 dynamic tracks. Players can engage in single-player career mode, multiplayer events, and use advanced AI, cutting-edge physics, and real-time ray tracing for a highly immersive experience. The game emphasizes car customization and strategic racing.",
        trailer: "https://www.youtube.com/embed/fzVhQjGZQso",
        console: "Xbox"
    },
    {
        name: "Farcry 6",
        image: "images/farcry6.avif",
        price: 60.00,
        releaseDate: "2021-10-07",
        ageRestriction: "M17+",
        stockAvailability: true,
        description: "Far Cry 6 is an open-world first-person shooter set on the fictional island of Yara. Players assume the role of Dani Rojas, a guerrilla fighter aiming to overthrow the tyrannical dictator Antón Castillo. The game features diverse landscapes, customizable weapons, vehicles, and dynamic combat, emphasizing freedom and rebellion.",
        trailer: "https://www.youtube.com/embed/mbGbLWevpC4",
        console: "PC"
    },
    {
        name: "Alan Wake",
        image: "images/alanwakeremast.webp",
        price: 15.00,
        releaseDate: "2010-05-14",
        ageRestriction: "M17+",
        stockAvailability: true,
        description: "Alan Wake is a psychological thriller action-adventure game where players control a writer, Alan Wake, searching for his missing wife in the eerie town of Bright Falls. Utilizing light-based combat against shadowy enemies, the game combines narrative-driven exploration, intense atmosphere, and gripping storytelling.",
        trailer: "https://www.youtube.com/embed/5SoT0P9txh0",
        console: "Xbox"
    },
    {
        name: "Alan Wake II",
        image: "images/alanwake2.avif",
        price: 91.00,
        releaseDate: "2023-10-27",
        ageRestriction: "R18+",
        stockAvailability: true,
        description: "Alan Wake 2 is a survival horror game where players navigate a dark, nightmarish world as an FBI agent and Alan Wake himself. Featuring intense combat with supernatural enemies, intricate puzzles, and a gripping narrative, the game combines atmospheric horror with deep storytelling and strategic gameplay.",
        trailer: "https://www.youtube.com/embed/xP6tK5tNLJ0",
        console: "Xbox"
    },
    {
        name: "Planet Zoo",
        image: "images/planetzoocon.avif",
        price: 45.00,
        releaseDate: "2019-11-05",
        ageRestriction: "E10+",
        stockAvailability: true,
        description: "Planet Zoo is a simulation game where players build and manage a detailed zoo. It features realistic animal behavior, diverse habitats, and complex management tasks. Players design exhibits, care for animals, and balance conservation with visitor satisfaction, creating a unique and engaging experience.",
        trailer: "https://www.youtube.com/embed/u4_bLn3J2sQ",
        console: "PC"
    }
  ];

  /*
This code sets up an event listener `DOMContentLoaded` 
to run once the HTML document is fully loaded. It initialises 
variables to reference HTML elements such as; 
- The popular games box
- New arrivals box
- Search button
- Search bar
- Search results box
- Console dropdown. 

The `createGameCard` function creates game cards with
the game's details and a click event to navigate to the
game's product page. 

 
On the game product page, it retrieves the game name from
the database, and fills in the page elements with
the game's details if they exist: 
- gameTitleItem 
- ageRestrictionItem
- releaseDateItem
- stockStatusItem
- gameDescriptionItem
- gameTrailerItem
*/
  
document.addEventListener('DOMContentLoaded', () => {
    const popularThisWeekBox = document.getElementById('popular-this-week'); // Finds the element for displaying popular games.
    const newArrivalsBox = document.getElementById('new-arrivals'); // Finds the element for displaying new arrivals.
    const searchButton = document.getElementById('search-button'); // Finds the search button element.
    const searchBar = document.getElementById('search-bar'); // Finds the search bar element.
    const searchResultsBox = document.getElementById('search-results'); // Finds the element for displaying search results.
    const consoleDropdown = document.getElementById('console-dropdown'); // Finds the dropdown for selecting console type.
    const cartIcon = document.getElementById('cart-icon'); // Finds the cart icon element.

    const popularGames = gamesDatabase.slice(0, 4); // Gets the first 4 games in the database for the popular section.
    const newArrivals = gamesDatabase.slice(4, 12); // Gets the next 8 games in the database for the new arrivals section.

    function createGameCard(game) { // Creates Game Card and displays data from the Database.
        const gameCard = document.createElement('div');
        gameCard.classList.add('product-item');

        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.name}">
            <div class="product-details">
                <h2>${game.name}</h2>
                <p>$${game.price}</p>
                <p>${game.console}</p>
            </div>
        `;

        gameCard.addEventListener('click', () => { // Adds an event listener to navigate to the game’s product page on click.
            window.location.href = `Product-page.html?name=${encodeURIComponent(game.name)}`;
        });

        return gameCard;
    }

    if (popularThisWeekBox) {
        popularGames.forEach(game => { // Makes a game card and adds it to the Popular This Week section.
            popularThisWeekBox.appendChild(createGameCard(game));
        });
    }

    if (newArrivalsBox) {
        newArrivals.forEach(game => { // Makes a game card and adds it to the New Arrivals section.
            newArrivalsBox.appendChild(createGameCard(game));
        });
    }

    if (searchButton) { // Takes in user search input and console selection.
        searchButton.addEventListener('click', () => {
            const searchInput = searchBar.value.toLowerCase();
            const selectedConsole = consoleDropdown.value;
            const url = `Search-results.html?search=${encodeURIComponent(searchInput)}&console=${encodeURIComponent(selectedConsole)}`;
            window.location.href = url;
        });
    }

    if (searchResultsBox) { // Fetches entered user data and redirects to the results page.
        const fetchGame = new URLSearchParams(window.location.search);
        const searchInput = fetchGame.get('search') ? fetchGame.get('search').toLowerCase() : "";
        const consoleType = fetchGame.get('console') ? fetchGame.get('console').toLowerCase() : "";

        const filteredGames = gamesDatabase.filter(game => {
            return (searchInput ? game.name.toLowerCase().includes(searchInput) : true) && 
                   (consoleType ? game.console.toLowerCase() === consoleType : true);
        });

        filteredGames.forEach(game => {
            searchResultsBox.appendChild(createGameCard(game));
        });
    }

    // Finds elements to display the data.
    const gameTitleItem = document.getElementById('game-title');
    const ageRestrictionItem = document.getElementById('age-restriction');
    const releaseDateItem = document.getElementById('release-date');
    const stockStatusItem = document.getElementById('stock-status');
    const gameDescriptionItem = document.getElementById('game-description');
    const gameTrailerItem = document.getElementById('game-trailer');

    if (gameTitleItem) {
        const fetchGame = new URLSearchParams(window.location.search);
        const gameName = fetchGame.get('name');

        const game = gamesDatabase.find(game => game.name === gameName);

        if (game) { // Once the game is clicked, the if statements display the respective data about the game from the database.
            gameTitleItem.textContent = game.name;
            ageRestrictionItem.textContent = `Age Restriction: ${game.ageRestriction}`;
            releaseDateItem.textContent = `Release Date: ${game.releaseDate}`;
            stockStatusItem.textContent = game.stockAvailability ? "In Stock" : "Out of Stock";
            stockStatusItem.classList.add(game.stockAvailability ? "in-stock" : "out-of-stock");
            gameDescriptionItem.textContent = game.description;
            gameTrailerItem.src = game.trailer;
        }

        // Add to Cart button function to take them to homepage whereever on the website.
        const addToCartButton = document.querySelector('.cart-button');
        if (addToCartButton) {
            addToCartButton.addEventListener('click', () => {
                window.location.href = 'Homepage.html'; // Redirects user to homepage.
            });
        }
    }

    // Redirects user to Shopping Cart page when cart icon is clicked.
    if (cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault(); // Prevents defeualt behaviour of going to homepage and instead shopping cart
            window.location.href = 'Shopping-cart.html';
        });
    }
});