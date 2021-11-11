'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Games', [
    {name: "Super Mario Bros", description: "Bowser has kidnapped Princess Toadstool, who is the princess of the Mushroom Kingdom. Mario must chase Bowser through eight worlds in the Mushroom Kingdom to rescue her, with the help of his brother, Luigi.", platform: "NES", publisher: "Nintendo", image: "https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png", createdAt: new Date(), updatedAt: new Date()},
    {name: "Kingdom Hearts", description: "Sora, Riku, and Kairi build a raft with the intent to leave their home world of Destiny Islands to explore new worlds. On the night before the planned voyage, the islands are attacked by the Heartless, and Riku and Kairi disappear. Before the Heartless consume the islands, Sora mysteriously obtains the Keyblade, a weapon effective against the Heartless, and with the help of Donald and Goofy, he must find his friends", platform: "PlayStation 2", publisher: "Square Enix", image: "https://upload.wikimedia.org/wikipedia/en/8/85/Kingdom_Hearts.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "Halo: Combat Evolved", description: "Pillar of Autumn exits slipspace and its crew discovers a large ringworld structure of unknown origin. The Covenant pursues the Autumn and attacks. With the ship heavily damaged, the Autumn's captain, Jacob Keyes, entrusts the ship's artificial intelligence (AI) known as Cortana to Master Chief in order to prevent the Covenant from discovering the location of Earth. Keyes orders the crew to abandon the Autumn and pilots the ship to a crash-landing on the ringworld.", platform: "XBox", publisher: "Bungie/Microsoft", image: "https://upload.wikimedia.org/wikipedia/en/8/80/Halo_-_Combat_Evolved_%28XBox_version_-_box_art%29.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "The Legend of Zelda: Majora's Mask", description: "In three days, the moon will fall and the land of Termina will meet with a terrible fate. Can you save it in time? Relive the world’s final 72 hours, solve elaborate puzzles, conquer dungeons, battle giant bosses, and befriend the doomed people of Termina in one of Nintendo’s most suspenseful apocalyptic adventures ever.", platform: "Nintendo 64", publisher: "Nintendo", image: "https://upload.wikimedia.org/wikipedia/en/6/60/The_Legend_of_Zelda_-_Majora%27s_Mask_Box_Art.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "Doom", description: "A space marine, popularly known as Doomguy, fights his way through hordes of invading demons from Hell.", platform: "DOS", publisher: "id Software", image: "https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "Final Fantasy VII", description: "Final Fantasy VII is a 1997 role-playing video game developed by Square for the PlayStation console. It is the seventh main installment in the Final Fantasy series. Published in Japan by Square, it was released in other regions by Sony Computer Entertainment and is the first in the main series with a PAL release.", platform: "PlayStation 4", publisher: "Square Enix", image: "https://upload.wikimedia.org/wikipedia/en/c/ce/FFVIIRemake.png", createdAt: new Date(), updatedAt: new Date()},
    {name: "Halo 5: Guardians", description: "Fireteam Osiris is deployed to the planet of Kamchatka, occupied by Jul 'Mdama's splinter Covenant faction, to retrieve the rogue Dr. Halsey and her intel amidst a battle between Covenant forces and the Prometheans. Halsey claims to have information on a series of devastating attacks on several human worlds. While the team is successful in retrieving Halsey and eliminating the Covenant faction's leader Jul 'Mdama, Halsey informs them that a new threat is about to emerge.", platform: "Xbox One", publisher: "	Microsoft Studios", image: "https://upload.wikimedia.org/wikipedia/en/6/68/Halo_Guardians.png", createdAt: new Date(), updatedAt: new Date()},
    {name: "Gran Turismo", description: "Gran Turismo is a Japanese sim racing video game designed by Kazunori Yamauchi. Gran Turismo was developed by Polys Entertainment and published by Sony Computer Entertainment in 1997 for the PlayStation video game console. The game's development group was later established as Polyphony Digital.", platform: "PlayStation", publisher: "	Sony Computer Entertainment", image: "https://upload.wikimedia.org/wikipedia/en/c/c8/Gran_Turismo_-_Cover_-_JP.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "Sonic Mania", description: "After the events of Sonic 3 and Knuckles, Sonic and Tails detect a powerful energy reading on Angel Island and board their biplane, the Tornado, to investigate. However, Dr. Eggman sends an elite group of EggRobos to reach the signal before Sonic and Tails. The EggRobos excavate the source of the signal, a magical gemstone called the Phantom Ruby, just as Sonic and Tails arrive. The EggRobos gain new powers from the ruby, becoming the Hard Boiled Heavies, and send Sonic, Tails, and the island's guardian, Knuckles, through zones they have previously visited where they pursue Eggman to prevent him from using the ruby's power for evil, clashing with him and the Heavies along the way.", platform: "Nintendo Switch", publisher: "Sega", image: "https://upload.wikimedia.org/wikipedia/en/d/d2/Sonic_Mania_%28artwork%29.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "BioShock: The Collection", description: "BioShock: The Collection is a compilation of the BioShock video games, developed by Blind Squirrel Games and published by 2K Games. The collection features upgraded versions of BioShock, BioShock 2, and BioShock Infinite, with new textures and support for higher resolution displays and framerates. The collection was released in September 2016 for Microsoft Windows, PlayStation 4, and Xbox One; versions for macOS and Nintendo Switch followed in August 2017 and May 2020, respectively.", platform: "PlayStation 4", publisher: "2K Games", image: "https://upload.wikimedia.org/wikipedia/en/e/e7/BioShock-_The_Collection.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "Star Wars Jedi: Fallen Order", description: "Five years after the Great Jedi Purge and the Galactic Republic's conversion into the Galactic Empire, former Jedi Padawan Cal Kestis is hiding on the planet Bracca, where he works as a scrapper salvaging ships from the Clone Wars, and is hiding his Force abilities. After Cal is recorded by an Imperial Probe droid while using the Force to save his friend Prauf, two Inquisitors known as the Second Sister and the Ninth Sister are sent to investigate. After the Second Sister kills Prauf for speaking up against the Empire, Cal makes his escape, briefly engaging in a duel with the Second Sister before he is rescued by former Jedi Knight Cere Junda and her partner pilot Greez Dritus in their ship, the Stinger Mantis.", platform: "Xbox One", publisher: "Electronic Arts", image: "https://upload.wikimedia.org/wikipedia/en/1/13/Cover_art_of_Star_Wars_Jedi_Fallen_Order.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "Call of Duty: Modern Warfare", description: "In 2019, during a covert operation to recover shipments of dangerous chemical gas headed for Urzikstan, CIA SAC/SOG Officer “Alex” is intercepted by unknown hostiles who kill the Marine Raiders accompanying him, and escape with the gas. Alex's handler, Station Chief Kate Laswell, requests the assistance of SAS Captain John Price in recovering the chemicals and de-escalating the situation with Russia. Twenty-four hours later, a group of suicide bombers, affiliated with the terrorist organization Al-Qatala, attack Piccadilly Circus in London. SAS Sergeant Kyle Garrick is dispatched to contain the situation with the assistance of Price and local police forces. Afterwards, Alex is sent to Urzikstan to meet up with rebel leader Farah Karim, who agrees to join forces in tracking down the chemicals, in exchange for his aid in overthrowing Russian forces led by General Roman Barkov.", platform: "Microsoft Windows", publisher: "Activision", image: "https://upload.wikimedia.org/wikipedia/en/e/e9/CallofDutyModernWarfare%282019%29.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "Grand Theft Auto V", description: "In 2004, Michael Townley, Trevor Philips, and Brad Snider partake in a failed robbery in Ludendorff, North Yankton. All three are presumed dead. Nine years later, Michael lives with his family in the city of Los Santos under the alias Michael De Santa, having made a secret agreement with the Federal Investigation Bureau (FIB) agent Dave Norton to stay hidden. Across town, gang member Franklin Clinton is working for a corrupt car salesman. Franklin meets Michael while attempting to fraudulently repossess his son's car. The two later become friends. When Michael finds his wife sleeping with her tennis coach, he and Franklin chase the coach to a mansion, which Michael destroys in anger. The owner of the mansion, drug lord Martin Madrazo, demands compensation. Michael returns to a life of crime to obtain the money, enlisting Franklin as an accomplice. With the help of Michael's old friend Lester Crest, a disabled hacker, they rob a jewellery store to pay off the debt. Meanwhile, Trevor, who lives in squalor on the outskirts of Los Santos, hears of the heist and realises it was Michael's work; Trevor had believed Michael was killed in the Ludendorff heist. Trevor tracks Michael down and reunites with him, forcing Michael to reluctantly accept him back into his life.", platform: "Microsoft Windows", publisher: "Rockstar Games", image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png", createdAt: new Date(), updatedAt: new Date()},
    {name: "GoldenEye 007", description: "In 1986 Arkhangelsk, Soviet Union, MI6 has uncovered a secret chemical weapons facility at the Byelomorye Dam. James Bond and fellow 00-agent Alec Trevelyan are sent to infiltrate the facility and plant explosive charges. During the mission, Trevelyan is shot by General Arkady Ourumov, while Bond escapes by commandeering an aeroplane. Five years later in 1991, Bond is sent to investigate a satellite control station in Severnaya, Russia, where programmer Boris Grishenko works. Two years after the Severnaya mission, Bond investigates an unscheduled test firing of a missile in Kyrgyzstan, believed to be a cover for the launch of a satellite known as GoldenEye. This space-based weapon works by firing a concentrated electromagnetic pulse (EMP) at any Earth target to disable any electrical circuit within range. As Bond leaves the silo, he is ambushed by Ourumov and a squad of Russian troops. Ourumov manages to escape during the encounter.", platform: "Nintendo 64", publisher: "Nintendo", image: "https://upload.wikimedia.org/wikipedia/en/3/36/GoldenEye007box.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "Resident Evil", description: "The game's plot follows Chris Redfield and Jill Valentine, members of an elite task force known as S.T.A.R.S., as they investigate the outskirts of Raccoon City following the disappearance of their team members. They soon become trapped in a mansion infested with zombies and other monsters. The player, having selected to play as Chris or Jill at the start of the game, must explore the mansion to uncover its secrets.", platform: "PlayStation", publisher: "Capcom", image: "https://upload.wikimedia.org/wikipedia/en/a/a6/Resident_Evil_1_cover.png", createdAt: new Date(), updatedAt: new Date()},
    {name: "Metroid", description: "Bounty hunter Samus Aran protects the galaxy from the Space Pirates and their attempts to harness the power of the parasitic Metroid creatures.", platform: "NES", publisher: "Nintendo", image: "https://upload.wikimedia.org/wikipedia/en/5/5d/Metroid_boxart.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "Jazz Jackrabbit", description: "The game is set in a fantasy world based on Aesop's 'The Tortoise and the Hare', in which the enmity between tortoises and hares continues even after three thousand years. An evil mastermind tortoise named Devan Shell begins conquering planets.", platform: "DOS", publisher: "Epic MegaGames", image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Jazz-cover.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "One Must Fall: 2097", description: "One Must Fall: 2097 replaces the human combatants typical of contemporary fighter video games with large Human Assisted Robots (HAR). These HARs are piloted through a physical and mental link to the human pilots.", platform: "DOS", publisher: "Epic MegaGames", image: "https://upload.wikimedia.org/wikipedia/en/8/80/One-must-fall-cover.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "Assassin's Creed", description: "The plot is set in a fictional history of real-world events, taking place primarily during the Third Crusade in the Holy Land in 1191. The player character is a modern-day man named Desmond Miles who, through a machine called the 'Animus', relives the genetic memories of his ancestor, Altaïr Ibn-La'Ahad.", platform: "Xbox 360", publisher: "Ubisoft", image: "https://upload.wikimedia.org/wikipedia/en/5/52/Assassin%27s_Creed.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "The Witcher 3: Wild Hunt", description: "The game takes place in a fictional fantasy world based on Slavonic mythology. Players control Geralt of Rivia, a monster slayer for hire known as a Witcher, and search for his adopted daughter, who is on the run from the otherworldly Wild Hunt. Players battle the game's many dangers with weapons and magic, interact with non-player characters, and complete quests to acquire experience points and gold, which are used to increase Geralt's abilities and purchase equipment. The game's story has three possible endings, determined by the player's choices at key points in the narrative.", platform: "Xbox Series X/S", publisher: "CD Projekt", image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "The Elder Scrolls V: Skyrim", description: "The execution of the player character by the Imperials in Helgen, a small settlement in Skyrim's south, is interrupted when Alduin starts laying waste to the village. The player manages to escape through the tunnels underneath the keep, and heads to the nearby village of Riverwood, whose inhabitants ask the player to inform the Jarl of Whiterun, a large town to the north, of the dragon attack. After meeting with Jarl Balgruuf, and retrieving a tablet with information about the dragons from a nearby barrow on his behalf, the player kills a small dragon which attacks nearby and absorbs its soul. After 'shouting', the player is informed that they must be Dragonborn, and is soon summoned by the Greybeard monks. After a long journey and climb up the Throat of the World, the tallest mountain in Tamriel and home of the Greybeards, the Dragonborn is informed by Arngeir of their heritage and role in stopping Alduin, and begins their training.", platform: "Xbox 360", publisher: "Bethesda Softworks", image: "https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png", createdAt: new Date(), updatedAt: new Date()},
    {name: "Red Dead Redemption 2", description: "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and is a prequel to the 2010 game Red Dead Redemption. The story is set in 1899 in a fictionalized representation of the Western, Midwestern, and Southern United States and follows outlaw Arthur Morgan, a member of the Van der Linde gang. Arthur must deal with the decline of the Wild West whilst attempting to survive against government forces, rival gangs, and other adversaries. The story also follows fellow gang member John Marston, the protagonist of Red Dead Redemption.", platform: "PlayStation 4", publisher: "Rockstar Games", image: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "Dark Souls", description: "Dark Souls is a 2011 action role-playing game developed by FromSoftware and published by Namco Bandai Games. A spiritual successor to FromSoftware's Demon's Souls, the game is the second instalment in the Souls series. Dark Souls takes place in the fictional kingdom of Lordran, where players assume the role of a cursed undead character who begins a pilgrimage to discover the fate of their kind. A port for Microsoft Windows was released in August 2012, which featured additional content not seen in the original PlayStation 3 and Xbox 360 versions. In October 2012, the new content was made downloadable for consoles under the subtitle Artorias of the Abyss.", platform: "PlayStation 3", publisher: "Namco Bandai Games JP", image: "https://upload.wikimedia.org/wikipedia/en/8/8d/Dark_Souls_Cover_Art.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "The Legend of Zelda: Breath of the Wild", description: "The Legend of Zelda: Breath of the Wild is an action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles. Breath of the Wild is part of The Legend of Zelda franchise and is set at the end of the Zelda timeline. The player controls Link, who awakens from a hundred-year slumber to defeat Calamity Ganon and save the kingdom of Hyrule.", platform: "Nintendo Switch", publisher: "Nintendo", image: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "Horizon Zero Dawn", description: "Horizon Zero Dawn is a 2017 action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The plot follows Aloy, a young hunter in a world overrun by machines, who sets out to uncover her past. The player uses ranged weapons, a spear, and stealth to combat mechanical creatures and other enemy forces. A skill tree provides the player with new abilities and bonuses. The player can explore the open world to discover locations and take on side quests.", platform: "Microsoft Windows", publisher: "Sony Interactive Entertainment", image: "https://upload.wikimedia.org/wikipedia/en/9/93/Horizon_Zero_Dawn.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "Spider-Man", description: "Marvel's Spider-Man is a 2018 action-adventure game developed by Insomniac Games and published by Sony Interactive Entertainment. Based on the Marvel Comics superhero Spider-Man, it is inspired by the long-running comic book lore series adaptations in other media. In the main story, the super-human crime lord Mister Negative orchestrates a plot to seize control of New York City's criminal underworld. When Mister Negative threatens to release a deadly virus, Spider-Man must confront him and protect the city while dealing with the personal problems of his civilian persona, Peter Parker.", platform: "PlayStation 4", publisher: "Sony Interactive Entertainment", image: "https://upload.wikimedia.org/wikipedia/en/e/e1/Spider-Man_PS4_cover.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "Dishonored", description: "After returning from a foreign voyage to seek aid with the deadly plague ravaging the city, Corvo Attano travels to the tower of Dunwall and meets with the Empress. After delivering a message, they are attacked by teleporting assassins led by Daud; they magically restrain Corvo, kill the Empress, and kidnap her daughter Emily. The Empress' Spymaster arrives and has Corvo imprisoned for her murder and Emily's abduction.[46] Six months later, the Spymaster has seized control of Dunwall as Lord Regent. Interrogating Corvo, the Lord Regent confesses that he masterminded the assassination and framed Corvo.[47][48] The following day, Corvo is due to be executed. A letter from Empire Loyalists is smuggled to Corvo and he is given the means to escape. Samuel ferries Corvo to the Hound Pits Pub to meet the Loyalists, led by Admiral Havelock.", platform: "Microsoft Windows", publisher: "Bethesda Softworks", image: "https://upload.wikimedia.org/wikipedia/en/6/65/Dishonored_box_art_Bethesda.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "God of War (2018 video game)", description: "Many years after Kratos' defeat of the Olympian gods, he now lives with his son Atreus in ancient Scandinavia in the realm of Midgard. After cremating the body of his wife, Faye, and after a short hunting/survival lesson with Atreus, Kratos is confronted by a mysterious man with godlike powers. The two battle and Kratos seemingly kills his opponent, after which Kratos and Atreus begin their journey to honor Faye's last wish: to scatter her ashes at the highest peak in the nine realms.", platform: "PlayStation 4", publisher: "Sony Interactive Entertainment", image: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "The Last of Us", description: "Twenty years later, civilization has been decimated by the infection. Survivors live in totalitarian quarantine zones, independent settlements, and nomadic groups, leaving buildings and houses deserted. Joel works as a smuggler with his partner Tess (Annie Wersching) in the quarantine zone in the North End of Boston, Massachusetts. They hunt down Robert (Robin Atkin Downes), a black-market dealer, to recover a stolen weapons cache. Before Tess kills him, Robert reveals that he traded the cache with the Fireflies, a rebel militia opposing the quarantine zone authorities.", platform: "PlayStation 3", publisher: "Sony Computer Entertainment", image: "https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "Nier: Automata", description: "The first and second playthroughs follow the respective views of 2B and 9S during an initial invasion. After opening a route for future missions, they are sent to clear out machine threats for the Resistance, led by Anemone, who provides the two with support. During their missions, 2B and 9S discover that the machines are exploring human societies and concepts. The two work with a pacifist machine group led by Pascal; battle Adam and Eve, physical manifestations of the machine network who reveal that their creators were destroyed centuries ago;[q 1] and encounter A2, a rogue android on the run from YoRHa. Adam is killed by 2B after he captures 9S. During his recuperation, 9S discovers a glitch in YoRHa's servers when syncing himself and 2B, and learns that humanity was extinct long before the alien invasion. Their last remnant is a Moon-based server holding humanity's incomplete genome remains. YoRHa perpetuates the myth of their survival to maintain morale and give androids a 'god' to fight for.[q 2] With Adam dead, Eve goes mad with grief and drives the machines under his command into a frenzy. 2B and 9S kill Eve to end the rampage, but 9S becomes infected with Eve's logic virus, forcing 2B to kill him. However, 9S's consciousness survives within the local machine network.", platform: "Xbox One", publisher: "Square Enix", image: "https://upload.wikimedia.org/wikipedia/en/2/21/Nier_Automata_cover_art.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "NBA 2K20", description: "NBA 2K20 is a basketball simulation video game developed by Visual Concepts and published by 2K Sports, based on the National Basketball Association (NBA). It is the 21st installment in the NBA 2K franchise, the successor to NBA 2K19, and the predecessor to NBA 2K21. Anthony Davis of the Los Angeles Lakers is the cover athlete for the regular edition of the game, while Dwyane Wade is the cover athlete for the 'Legend Edition'. The game is NBA 2K's last 2010s entry.", platform: "PlayStation4", publisher: "2K Sports", image: "https://upload.wikimedia.org/wikipedia/en/e/e9/NBA_2K20_cover.png", createdAt: new Date(), updatedAt: new Date()},
    {name: "Need For Speed", description: "Need for Speed is an online open world racing video game developed by Ghost Games and published by Electronic Arts, released for PlayStation 4 and Xbox One in November 2015, and released on Origin for Microsoft Windows on March 15, 2016. It is the twenty-second installment in the Need for Speed series, and is a reboot of the franchise.", platform: "PlayStation4", publisher: "Electronic Arts", image: "https://upload.wikimedia.org/wikipedia/en/a/a9/Need_for_Speed_2015.jpg", createdAt: new Date(), updatedAt: new Date()},
    {name: "Battlefield 4", description: "Battlefield 4 is a first-person shooter video game developed by video game developer DICE and published by Electronic Arts. It is a sequel to 2011's Battlefield 3, with the story taking place six years later during the fictional 'War of 2020'. The title was first released in October 2013 for Microsoft Windows, PlayStation 3, and Xbox 360; then later in November for PlayStation 4 and Xbox One.", platform: "PlayStation4", publisher: "Electronic Arts", image: "https://upload.wikimedia.org/wikipedia/en/7/75/Battlefield_4_cover_art.jpg", createdAt: new Date(), updatedAt: new Date()},
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Games', null, {});
  }
};