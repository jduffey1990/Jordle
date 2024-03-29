/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('words').del()
    .then(function () {
      // Inserts seed entries
      return knex('words').insert([
        { word: 'SPARTAN', tidbit: 'The Spartans were acient people known to lead lives without much luxury, which is where the term "spartan" came to be used to describe people who live without much flash.' },
        { word: 'FLAME', tidbit: 'Flames are recognized as a symbol for things moving fast due to the heat created from friction.' },
        { word: 'ECLIPSE', tidbit: 'An eclipse occurs when one celestial body moves into the shadow of another celestial body. The term is also used metaphorically to describe diminishing fame or popularity.' },
        { word: 'BINARY', tidbit: 'In computing, binary refers to a system of numerical notation that has 2 rather than 10 as a base. It is the foundation of all binary code, which is used in computer technology.' },
        { word: 'ZENITH', tidbit: 'Zenith refers to the time at which something is most powerful or successful. In astronomy, it describes the point in the sky directly above an observer.' },
        { word: 'QUASAR', tidbit: 'Quasars are extremely luminous objects in distant galaxies, powered by black holes. They are the most energetic and distant members of a class of objects called "active galactic nuclei".' },
        { word: 'ORACLE', tidbit: 'In ancient times, an oracle was a person or agency considered to provide wise and insightful counsel or prophetic predictions, most notably including precognition of the future.' },
        { word: 'NEXUS', tidbit: 'Nexus means a connection or series of connections linking two or more things. In legal terms, it refers to a relationship or connection between parties.' },
      
        { word: 'JUBILEE', tidbit: 'A jubilee is a special anniversary of an event, typically the 25th or 50th anniversary. The term originates from the Hebrew word "yobel," meaning ram\'s horn, which was used as a trumpet to announce the Year of Jubilee in ancient times.' },
        { word: 'GARGOYLE', tidbit: 'Originally, gargoyles were used as a decorative water spout on buildings to direct rainwater away from the sides of walls. The word comes from the French word "gargouille," meaning throat or gullet.' },
        { word: 'FJORD', tidbit: 'A fjord is a long, deep, narrow body of water that reaches far inland. Fjords were formed by the slow erosion of mountain valleys as glaciers moved down toward the sea.' },
        { word: 'COMET', tidbit: 'Comets are cosmic snowballs of frozen gases, rock, and dust that orbit the Sun. When frozen, they are the size of a small town, and when their orbit brings them close to the Sun, they heat up and spew dust and gases.' },
        { word: 'BADGER', tidbit: 'Badgers are known for their ferocity and strength. The expression "to badger someone" comes from the persistent, combative nature of the animal when it is hunting.' },
        { word: 'CANYON', tidbit: 'Canyons are deep gorges, typically one with a river flowing through it. The word comes from the Spanish word cañón, which means tube or pipe.' },
        
        { word: 'MIRAGE', tidbit: 'A mirage is a naturally occurring optical phenomenon in which light rays are bent to produce a displaced image of distant objects or the sky. It is most commonly observed on hot days.' },
        { word: 'BEACON', tidbit: 'Historically, beacons were fires lit at well-known locations on hills or high places, used as a signal or warning. Modern beacons use electronic signals to mark fixed locations.' },
        { word: 'PRISM', tidbit: 'A prism is a transparent optical element with flat, polished surfaces that refract light. The most familiar type is the triangular prism used to split light into the colors of the rainbow.' },
        { word: 'HUMMUS', tidbit: 'Hummus is a Middle Eastern and Mediterranean dish made from cooked, mashed chickpeas blended with tahini, lemon juice, and garlic. Its popularity has spread globally in recent decades.' },
        { word: 'SIPHON', tidbit: 'A siphon is a tube in an inverted U shape, which causes a liquid to flow upward, above the surface of a reservoir, with no pumps. The word "siphon" comes from the Ancient Greek word for pipe.' },
        { word: 'QUARTZ', tidbit: 'Quartz is one of the most common minerals found in the Earth\'s crust. If pure, quartz forms colorless, transparent, and very hard crystals with a glass-like luster.' },
        { word: 'SQUALL', tidbit: 'A squall is a sudden, sharp increase in wind speed lasting minutes. It is often associated with active weather, such as rain showers, thunderstorms, or heavy snow.' },
        { word: 'GEYSER', tidbit: 'A geyser is a spring characterized by intermittent discharge of water ejected turbulently and accompanied by steam. The word "geyser" comes from Geysir, the name of an erupting spring in Iceland.' },
        { word: 'BONSAI', tidbit: 'Bonsai is a Japanese art form using cultivation techniques to produce small trees in containers that mimic the shape and scale of full-size trees.' },
        { word: 'MANTLE', tidbit: 'In geology, the mantle is the mostly-solid bulk of Earth\'s interior. The mantle lies between Earth\'s dense, super-heated core and its thin outer layer, the crust.' },
        { word: 'CORAL', tidbit: 'Corals are marine invertebrates within the class Anthozoa. Most corals obtain the majority of their energy and nutrients from photosynthetic unicellular dinoflagellates that live within their tissues.' },
        { word: 'PHOENIX', tidbit: 'In Greek mythology, a phoenix is a long-lived bird that cyclically regenerates or is otherwise born again. Associated with fire and the sun, a phoenix obtains new life by arising from the ashes of its predecessor.' },
        { word: 'GROTTO', tidbit: 'A grotto is a natural or artificial cave used by humans in both modern times and antiquity, and historically or prehistorically. Often, they are found near water and are often decorated with artwork.' },
        { word: 'MAGNET', tidbit: 'A magnet is a material or object that produces a magnetic field. This magnetic field is invisible but is responsible for the most notable property of a magnet: a force that pulls on other ferromagnetic materials.' },
        { word: 'TAPIR', tidbit: 'Tapirs are large, herbivorous mammals, similar in shape to a pig, with a short, prehensile snout. They inhabit jungle and forest regions of South America, Central America, and Southeast Asia.' },
        { word: 'DYNAMO', tidbit: 'A dynamo is an electrical generator that creates direct current using a commutator. Dynamos were the first electrical generators capable of delivering power for industry.' },
        { word: 'PYTHON', tidbit: 'Pythons are a family of nonvenomous snakes found in Africa, Asia, and Australia. Among its members are some of the largest snakes in the world.' },

        { word: 'CAESAR', tidbit: 'The title of Caesar became an imperial title after Julius Caesar, whose name it carries. It has been used as a title of Roman and Byzantine emperors, and also in other contexts.' },
        { word: 'EMPIRE', tidbit: 'Empires are extensive states or kingdoms ruled by a single monarch or oligarchy. Historically, empires were seen as larger and more diverse than kingdoms.' },
        { word: 'VIKING', tidbit: 'Vikings were seafaring Norse people from southern Scandinavia who from the late 8th to early 11th century, raided, traded, explored, and settled across Europe.' },
        { word: 'KNIGHT', tidbit: 'Knights were medieval warriors of high rank and skill. Knighthood has been conferred upon warriors and noblemen for service to a monarch or a nation, especially during wars.' },
        { word: 'SULTAN', tidbit: 'A Sultan is a noble title with several historical meanings. Originally, it was an Arabic abstract noun meaning "strength", "authority", "rulership", derived from the verbal noun سلطة.' },
        { word: 'SAMURAI', tidbit: 'Samurai were the military nobility and officer caste of medieval and early-modern Japan. They were known for their code of honor, discipline, and the iconic katana sword.' },
        { word: 'REAGAN', tidbit: 'Ronald Reagan was the 40th President of the United States, serving from 1981 to 1989. His economic policies, known as "Reaganomics", advocated tax rate reduction and deregulation.' },
        { word: 'LENIN', tidbit: 'Vladimir Lenin was a Russian revolutionary, politician, and political theorist, who served as head of government of Soviet Russia and of the Soviet Union.' },
        { word: 'TREATY', tidbit: 'A treaty is a formal and binding written agreement entered into by actors in international law, usually sovereign states and international organizations.  The Treaty of Tilsit was signed in 1807 by Alexander and Napolean, while floating on a raft on the Neiman River' },
        { word: 'PLAGUE', tidbit: 'Historically, the plague was a deadly infectious disease caused by the bacterium Yersinia pestis. The most infamous plague outbreak was the Black Death, which killed millions in the 14th century.' },
        { word: 'CULINARY', tidbit: 'Culinary arts is the art of preparing, cooking, and presenting food in the most efficient, nutritious, and aesthetically appealing way possible.' },

        { word: 'PAELLA', tidbit: 'Paella is a Spanish rice dish originally from Valencia. Paella is one of the best-known dishes in Spanish cuisine, and for many non-Spaniards, it is Spain\'s national dish.' },
        { word: 'SUSHI', tidbit: 'Sushi is a traditional Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanying a variety of ingredients such as seafood and vegetables.' },
        { word: 'CURRY', tidbit: 'Curry is a variety of dishes originating from the Indian subcontinent that use a complex combination of spices or herbs, including ground turmeric, cumin, coriander, ginger, and fresh or dried chilies.' },
        { word: 'BAGEL', tidbit: 'The bagel is a bread product originating in the Jewish communities of Poland. It is traditionally shaped by hand into the form of a ring from yeasted wheat dough, roughly hand-sized.' },
        { word: 'TAMALE', tidbit: 'A tamale is a traditional Mesoamerican dish, made of masa or dough, which is steamed in a corn husk or banana leaf. The wrapping can either be discarded prior to eating or used as a plate.' },
        { word: 'FONDUE', tidbit: 'Fondue is a Swiss melted cheese dish served in a communal pot (caquelon or fondue pot) over a portable stove, and eaten by dipping bread into the cheese using long-stemmed forks.' },
        { word: 'QUINOA', tidbit: 'Quinoa is a flowering plant in the amaranth family. It is a herbaceous annual plant grown as a crop primarily for its edible seeds, which are rich in protein, dietary fiber, B vitamins, and dietary minerals.' },
        { word: 'GUMBO', tidbit: 'Gumbo is a stew popular in the U.S. state of Louisiana, and is the official state cuisine. Gumbo consists primarily of a strongly flavored stock, meat or shellfish, a thickener, and seasoning vegetables.' },
        { word: 'BORSHT', tidbit: 'Borscht is a sour soup common in Eastern Europe and Northern Asia. It is made with beetroot as the main ingredient, which gives it a strong red color.' },
        { word: 'PESTO', tidbit: 'Pesto is a sauce originating in Genoa, the capital city of Liguria, Italy. It traditionally consists of crushed garlic, European pine nuts, coarse salt, basil leaves, and hard cheese, all blended with olive oil.' },

        { word: 'FOREST', tidbit: 'A forest is a large area dominated by trees. Hundreds of more precise definitions of forest are used throughout the world, incorporating factors such as tree density, tree height, land use, and legal standing.' },
        { word: 'TUNDRA', tidbit: 'Tundra is a type of biome where the tree growth is hindered by low temperatures and short growing seasons. The term "tundra" comes from the Finnish word tunturi, meaning treeless plain.' },
        { word: 'BIOME', tidbit: 'A biome is a large naturally occurring community of flora and fauna occupying a major habitat, e.g., forest or tundra.' },
        { word: 'CORAL', tidbit: 'Corals are marine invertebrates within the class Anthozoa. Most corals obtain the majority of their energy and nutrients from photosynthetic unicellular dinoflagellates that live within their tissues.' },
        { word: 'FAUNA', tidbit: 'Fauna is all of the animal life present in a particular region or time. The corresponding term for plants is flora, and for fungi, it\'s funga.' },
        { word: 'FLORA', tidbit: 'Flora refers to the plant life occurring in a particular region or time, generally the naturally occurring or indigenous—native plant life.' },
        { word: 'DELTA', tidbit: 'A delta is a landform that forms from deposition of sediment carried by a river as the flow leaves its mouth and enters slower-moving or standing water.' },
        { word: 'SAVANA', tidbit: 'A savanna or savannah is a mixed woodland-grassland ecosystem characterized by the trees being sufficiently widely spaced so that the canopy does not close.' },
        { word: 'FJORD', tidbit: 'A fjord is a long, deep, narrow body of water that reaches far inland. Fjords were formed by the slow erosion of mountain valleys as glaciers moved down toward the sea.' },
        { word: 'MARSH', tidbit: 'A marsh is a wetland that is dominated by herbaceous rather than woody plant species. Marshes can often be found at the edges of lakes and streams.' },

        { word: 'GALAXY', tidbit: 'The word "galaxy" is derived from the Greek word galaxias, literally meaning "milky", a reference to the Milky Way galaxy that contains our Solar System.' },
        { word: 'COMET', tidbit: 'Comets are cosmic snowballs of frozen gases, rock, and dust that orbit the Sun. When frozen, they are the size of a small town, and when their orbit brings them close to the Sun, they heat up and spew dust and gases.' },
        { word: 'NEBULA', tidbit: 'A nebula is a giant cloud of dust and gas in space. Some nebulae are regions where new stars are being formed, while others are the remains of dead or dying stars.' },
        { word: 'PULSAR', tidbit: 'A pulsar is a highly magnetized rotating neutron star that emits beams of electromagnetic radiation out of its magnetic poles. This radiation can be observed when it is pointed toward Earth.' },
        { word: 'QUASAR', tidbit: 'Quasars are extremely luminous objects in distant galaxies, powered by black holes. They are the most energetic and distant members of a class of objects called "active galactic nuclei".' },
        { word: 'SOLAR', tidbit: 'The term "solar" is derived from the Latin word "solaris", meaning "of the sun". Solar power harnesses energy from the sun and converts it into electricity.' },
        { word: 'ORION', tidbit: 'Orion is a prominent constellation located on the celestial equator and visible throughout the world. It is named after Orion, a hunter in Greek mythology.' },
        { word: 'VENUS', tidbit: 'Venus is the second planet from the Sun and is named after the Roman goddess of love and beauty. It is the only planet named after a female figure.' },
        { word: 'METEOR', tidbit: 'A meteor is the visible streak of light that occurs when a meteoroid enters the Earth\'s atmosphere and vaporizes. It is also commonly known as a "shooting star" or "falling star".' },
        { word: 'SATURN', tidbit: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System. It is named after the Roman god of wealth and agriculture and is known for its prominent ring system.' },

        { word: 'CRUSOE', tidbit: 'Robinson Crusoe is a novel by Daniel Defoe, first published in 1719. It is considered to be one of the first English novels, and it is based on the real-life experiences of a castaway.' },
        { word: 'PHARAOH', tidbit: 'Pharaohs were the monarchs of ancient Egypt. They were considered divine deities and held complete authority over the land and its people.' },
        { word: 'CZARINA', tidbit: 'Czarina, or Tsarina, was the title of the female ruler of Russia or the wife of a Czar, the Russian emperor, before the 1917 revolution.' },
        { word: 'MAYANS', tidbit: 'The Maya civilization was a Mesoamerican civilization developed by the Maya peoples. Famous for their art, architecture, mathematics, calendar, and astronomical system.' },
        { word: 'SPARTA', tidbit: 'Sparta was a prominent city-state in ancient Greece, known for its unique social system, military prowess, and for being the archrival of Athens.' },
        { word: 'NORMAN', tidbit: 'The Normans were the people who gave their name to Normandy, a region in northern France. They were descended from Norse Viking conquerors and the native Frankish and Gallo-Roman population.' },
        { word: 'VIKING', tidbit: 'Vikings were seafaring Norse people from southern Scandinavia who, from the late 8th to early 11th century, raided, traded, explored, and settled across Europe.' },
        { word: 'MING', tidbit: 'The Ming dynasty was the ruling dynasty of China from 1368 to 1644, known for its trade expansion, cultural achievements, and the construction of the Great Wall.' },
        { word: 'GOTHIC', tidbit: 'Gothic architecture is a style that flourished in Europe during the High and Late Middle Ages. It evolved from Romanesque architecture and was succeeded by Renaissance architecture.' },
        { word: 'PRUSSIA', tidbit: 'Prussia was a historically prominent German state that originated in 1525. It later grew in power and influence, playing a major role in German and European history.' },

        { word: 'KIMCHI', tidbit: 'Kimchi is a famous Korean dish made of fermented vegetables with a variety of seasonings. It is traditionally included in every meal in Korean cuisine.' },
        { word: 'BRISKET', tidbit: 'Brisket is a cut of meat from the breast or lower chest of beef or veal. It is known for its rich flavor, and is commonly cooked by braising or smoking.' },
        { word: 'LATKES', tidbit: 'Latkes are a type of potato pancake traditionally served in Jewish cuisine. They are usually eaten during the Hanukkah festival.' },
        { word: 'GOULASH', tidbit: 'Goulash is a stew of meat and vegetables, seasoned with paprika and other spices. Originating from Hungary, goulash is a national dish of the country.' },
        { word: 'CHUTNEY', tidbit: 'Chutney is a sauce in the cuisines of the Indian subcontinent, derived from a Hindi term meaning to lick. It varies widely in flavor and ingredients.' },
        { word: 'RISOTTO', tidbit: 'Risotto is a northern Italian rice dish cooked with broth until it reaches a creamy consistency. The broth can be derived from meat, fish, or vegetables.' },
        { word: 'FALAFEL', tidbit: 'Falafel is a deep-fried ball or patty made from ground chickpeas, fava beans, or both. It is a traditional Middle Eastern food, commonly served in a pita.' },
        { word: 'TORTAS', tidbit: 'Tortas are a variety of Mexican sandwich, served on an oblong 6-8 inch firm, crusty white sandwich roll. They are a popular street food in Mexico.' },
        { word: 'WONTON', tidbit: 'Wontons are a type of Chinese dumpling commonly found in a number of Chinese cuisines. They can be boiled, steamed, or deep-fried and are often served in soup.' },
        { word: 'MOUSSE', tidbit: 'Mousse is a soft prepared food that incorporates air bubbles to give it a light and airy texture. It can range from light and fluffy to creamy and thick.' },

        { word: 'TROPIC', tidbit: 'The tropics are the region of the Earth surrounding the Equator. They are characterized by having little seasonal temperature variation and high humidity.' },
        { word: 'JUNGLE', tidbit: 'A jungle is land covered with dense forest and tangled vegetation, typically in the tropics. The word "jungle" comes from the Sanskrit word "jangala", meaning uncultivated land.' },
        { word: 'MANGRO', tidbit: 'Mangroves are a type of vegetation found in coastal intertidal zones. They are key in coastal protection and provide a habitat for a diverse range of wildlife.' },
        { word: 'TUNDRA', tidbit: 'Tundra is a type of biome characterized by low temperatures, short vegetation, and long winters. It is found in the polar regions and on the tops of mountains where trees cannot grow.' },
        { word: 'CANOPY', tidbit: 'In ecology, the canopy is the aboveground portion of a plant community or crop, formed by plant crowns. In a forest, it is the upper layer formed by mature tree crowns.' },
        { word: 'PRAIRIE', tidbit: 'Prairies are ecosystems considered part of the temperate grasslands, savannas, and shrublands biome by ecologists. They are large areas of flat, grassy lands without trees.' },
        { word: 'REEF', tidbit: 'A reef is a ridge of jagged rock, coral, or sand just above or below the surface of the sea. Coral reefs are famed for their beauty and diverse marine life.' },
        { word: 'ARCTIC', tidbit: 'The Arctic is the northernmost region of the Earth, characterized by extreme cold, long periods of daylight and darkness, and unique ecosystems adapted to these conditions.' },
        { word: 'SWAMP', tidbit: 'A swamp is a wetland that is forested, with trees growing in water or on a water-saturated substrate. Swamps are often associated with rivers or lakes.' },
        { word: 'DESERT', tidbit: 'A desert is a barren area of landscape where little precipitation occurs, resulting in living conditions hostile for plant and animal life. Deserts cover about one-fifth of Earth\'s surface.' },

        { word: 'COSMOS', tidbit: 'The cosmos is the universe regarded as a complex and orderly system; the opposite of chaos. It is the general term for the universe as a complex and orderly system or entity.' },
        { word: 'SIRIUS', tidbit: 'Sirius, also known as the Dog Star, is the brightest star in the night sky. It is a binary star system, consisting of two white stars orbiting each other.' },
        { word: 'GEMINI', tidbit: 'Gemini is one of the constellations of the zodiac and is located in the northern celestial hemisphere. Its name is Latin for "twins," and it is associated with the twins Castor and Pollux in Greek mythology.' },
        { word: 'PEGASUS', tidbit: 'Pegasus is a constellation in the northern sky, named after the winged horse Pegasus in Greek mythology. It is one of the largest constellations in the sky.' },
        { word: 'AURORA', tidbit: 'An aurora is a natural light display in the Earth\'s sky, predominantly seen in the high-latitude regions around the Arctic and Antarctic. It is caused by disturbances in the magnetosphere.' },
        { word: 'LUNAR', tidbit: 'Lunar relates to the moon. A lunar eclipse occurs when the Moon moves into the Earth\'s shadow, which can only occur during a full moon.' },
        { word: 'ZODIAC', tidbit: 'The zodiac is an area of the sky that extends approximately 8° north or south of the ecliptic. The term zodiac derives from Latin zōdiacus, which in turn comes from the Greek word meaning "circle of animals".' },
        { word: 'PLUTO', tidbit: 'Pluto, originally considered the ninth planet, is now classified as a dwarf planet. It was reclassified in 2006 by the International Astronomical Union.' }

      ]);
    });
};
