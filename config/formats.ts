// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [

	{
		section: "Sanctified Singles",
	},
	{
		name: "[Gen 9] National Dex",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710848/">National Dex Metagame Discussion</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod', 'Terastal Clause'],
		banlist: ['ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Shed Tail'],
	},
	{
		name: "[Gen 9] National Dex Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712168/">National Dex Ubers Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712170/">National Dex Ubers Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712169/">National Dex Ubers Viability List</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Species Clause', 'Sleep Clause Mod', 'Mega Rayquaza Clause', 'Terastal Clause'],
		banlist: ['ND AG', 'Assist', 'Baton Pass'],
	},
	{
		name: "[Gen 9] National Dex UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711752/">National Dex UU Metagame Discussion</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] National Dex'],
		banlist: ['ND OU', 'ND UUBL', 'Battle Bond'],
	},
	{
		name: "[Gen 9] National Dex RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3713801/">National Dex RU Metagame Discussion</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] National Dex UU'],
		banlist: ['ND UU', 'ND RUBL', 'Drizzle', 'Heat Rock', 'Light Clay'],
	},
	{
		name: "[Gen 9] National Dex NU",

		mod: 'gen9',
		ruleset: ['[Gen 9] National Dex'],
		banlist: ['ND OU', 'ND UUBL', 'ND UU', 'ND RUBL', 'ND RU', 'ND NUBL'],
	},
	{
		name: "[Gen 9] National Dex PU",

		mod: 'gen8',
		ruleset: ['[Gen 9] National Dex'],
		banlist: ['ND OU', 'ND UUBL', 'ND UU', 'ND RUBL', 'ND RU', 'ND NUBL', 'ND NU'],
	},
	{
		name: "[Gen 9] National Dex ZU",

		mod: 'gen8',
		ruleset: ['[Gen 9] National Dex'],
		banlist: ['ND OU', 'ND UUBL', 'ND UU', 'ND RUBL', 'ND RU', 'ND NUBL', 'ND NU', 'ND PU'],
	},
	{
		name: "[Gen 9] National Dex Monotype",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710738/">National Dex Monotype Metagame Discussion</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Same Type Clause', 'Terastal Clause', 'Species Clause', 'OHKO Clause', 'Evasion Clause', 'Sleep Clause Mod'],
		banlist: [
			'Annihilape', 'Arceus', 'Blastoise-Mega', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Darkrai',
			'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dracovish', 'Dragapult', 'Eternatus', 'Flutter Mane', 'Genesect', 'Gengar-Mega',
			'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Houndstone', 'Iron Bundle', 'Kangaskhan-Mega', 'Kartana',
			'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mawile-Mega',
			'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Miraidon', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palafin',
			'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Urshifu-Base', 'Xerneas', 'Yveltal',
			'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete', 'Moody', 'Shadow Tag',
			'Power Construct', 'Booster Energy', 'Damp Rock', 'Focus Band', 'Icy Rock', 'King\'s Rock', 'Leppa Berry', 'Quick Claw', 'Smooth Rock',
			'Terrain Extender', 'Acupressure', 'Baton Pass',
		],
	},
	{
		name: "[Gen 9] National Dex AG",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672423/">National Dex AG</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard NatDex'],
	},
	{
		name: "[Gen 9] National Dex BH",
		desc: `Balanced Hackmons with National Dex elements mixed in.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711099/">National Dex BH</a>`,
		],
		mod: 'gen9',
		ruleset: ['-Nonexistent', 'Standard NatDex', 'Forme Clause', 'Sleep Moves Clause', 'Ability Clause = 2', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'CFZ Clause', '!Obtainable'],
		banlist: [
			'Cramorant-Gorging', 'Calyrex-Shadow', 'Darmanitan-Galar-Zen', 'Eternatus-Eternamax', 'Groudon-Primal', 'Rayquaza-Mega', 'Shedinja',
			'Zygarde-Complete', 'Arena Trap', 'Contrary', 'Gorilla Tactics', 'Huge Power', 'Illusion', 'Innards Out', 'Magnet Pull', 'Moody',
			'Neutralizing Gas', 'Parental Bond', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard', 'Gengarite', 'Belly Drum',
			'Bolt Beak', 'Chatter', 'Double Iron Bash', 'Electrify', 'Last Respects', 'Octolock', 'Rage Fist', 'Revival Blessing', 'Shed Tail',
			'Shell Smash', 'Comatose + Sleep Talk', 'Imprison + Transform',
		],
		restricted: ['Arceus'],
		onValidateTeam(team, format) {
			// baseSpecies:count
			const restrictedPokemonCount = new Map<string, number>();
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				if (!this.ruleTable.isRestrictedSpecies(species)) continue;
				restrictedPokemonCount.set(species.baseSpecies, (restrictedPokemonCount.get(species.baseSpecies) || 0) + 1);
			}
			for (const [baseSpecies, count] of restrictedPokemonCount) {
				if (count > 1) {
					return [
						`You are limited to one ${baseSpecies} forme.`,
						`(You have ${count} ${baseSpecies} forme${count === 1 ? '' : 's'}.)`,
					];
				}
			}
		},
	},

	// Pet Mods
	///////////////////////////////////////////////////////////////////

	{
		section: "Pet Mods",
	},
	{
		name: "[Gen 8] JolteMons Random Battle",
		desc: `Pok&eacute;mon, items, abilities, and moves are redesigned for OU, and new items, abilities, and moves are added, all without changing base stats.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3694234/">JolteMons</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/149ZlQY0bJIAqfWB_233Dvbpqs3pVSHYpIoAQQkwquls/edit?usp=sharing">Spreadsheet</a>`,
		],
		mod: 'gen8joltemons',
		team: 'random',
		ruleset: ['Dynamax Clause', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Mega Data Mod', 'Z-Move Clause'],
	},
	{
		name: "[Gen 6] NEXT OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3476151/">Gen-NEXT Development Thread</a>`,
		],

		mod: 'gennext',
		searchShow: false,
		challengeShow: false,
		ruleset: ['Obtainable', 'Standard NEXT', 'Team Preview'],
		banlist: ['Uber'],
	},

	// Draft League
	///////////////////////////////////////////////////////////////////

	{
		section: "Draft",
		column: 1,
	},
	{
		name: "[Gen 9] Paldea Dex Draft",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Draft', 'Min Source Gen = 9'],
	},
	{
		name: "[Gen 9] 6v6 Doubles Draft",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Draft', '!Sleep Clause Mod', '!Evasion Moves Clause', 'Min Source Gen = 9'],
	},
	{
		name: "[Gen 9] 4v4 Doubles Draft",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Draft', 'Item Clause', '!Sleep Clause Mod', '!OHKO Clause', '!Evasion Moves Clause', 'Adjust Level = 50', 'Picked Team Size = 4', 'Min Source Gen = 9'],
	},
	{
		name: "[Gen 9] NatDex Draft",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Draft', '+Unobtainable', '+Past'],
	},
	{
		name: "[Gen 9] NatDex 6v6 Doubles Draft",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['[Gen 9] 6v6 Doubles Draft', '+Unobtainable', '+Past', '!! Min Source Gen = 3'],
	},
	{
		name: "[Gen 9] NatDex 4v4 Doubles Draft",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['[Gen 9] 4v4 Doubles Draft', '+Unobtainable', '+Past', '!! Min Source Gen = 3'],
	},
	{
		name: "[Gen 9] NatDex LC Draft",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] NatDex Draft', 'Double Item Clause', 'Little Cup'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 8] Galar Dex Draft",

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Draft', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] NatDex Draft",

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Draft', 'Dynamax Clause', '+Past'],
	},
	{
		name: "[Gen 8] NatDex 4v4 Doubles Draft",

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Draft', 'Item Clause', '!Sleep Clause Mod', '!OHKO Clause', '!Evasion Moves Clause', 'Adjust Level = 50', 'Picked Team Size = 4', '+Past'],
	},
	{
		name: "[Gen 7] Draft",

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Draft', '+LGPE'],
	},
	{
		name: "[Gen 6] Draft",

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Draft', 'Moody Clause', 'Swagger Clause'],
		banlist: ['Soul Dew'],
	},

	// OM of the Month
	///////////////////////////////////////////////////////////////////

	{
		section: "OM of the Month",
		column: 2,
	},
	{
		name: "[Gen 9] Tier Shift",
		desc: `Pok&eacute;mon below OU get their stats, excluding HP, boosted. UU/RUBL get +15, RU/NUBL get +20, NU/PUBL get +25, and PU or lower get +30.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3720396/">Tier Shift</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard OMs', 'Tier Shift Mod', 'Sleep Moves Clause', 'Terastal Clause', 'Min Source Gen = 9'],
		banlist: [
			'Chi-Yu', 'Cloyster', 'Espathra', 'Falinks', 'Flutter Mane', 'Houndstone', 'Iron Bundle', 'Koraidon', 'Medicham', 'Miraidon', 'Oricorio-Pom-Pom',
			'Polteageist', 'Arena Trap', 'Moody', 'Shadow Tag', 'Eviolite', 'Damp Rock', 'Heat Rock', 'Light Clay', 'Baton Pass', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] The Card Game",
		desc: `The type chart is simplified based off of the Pok&eacute;mon Trading Card Game.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3716838/">The Card Game</a>`,
		],

		mod: 'thecardgame',
		// searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Evasion Abilities Clause', 'Evasion Items Clause', 'Terastal Clause', 'Min Source Gen = 9'],
		banlist: [
			'Annihilape', 'Baxcalibur', 'Chi-Yu', 'Chien-Pao', 'Cyclizar', 'Dragapult', 'Dragonite', 'Espathra', 'Haxorus', 'Houndstone', 'Hydreigon', 'Iron Valiant',
			'Koraidon', 'Miraidon', 'Noivern', 'Palafin', 'Roaring Moon', 'Salamence', 'Walking Wake', 'Arena Trap', 'Moody', 'Shadow Tag', 'Baton Pass',
		],
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.hpType = pokemon.hpType.replace(/(Ghost|Fairy)/g, 'Psychic')
					.replace(/Bug/g, 'Grass')
					.replace(/Ice/g, 'Water')
					.replace(/(Rock|Ground)/g, 'Fighting')
					.replace(/Flying/g, 'Normal')
					.replace(/Poison/g, 'Dark');
				pokemon.teraType = pokemon.teraType.replace(/(Ghost|Fairy)/g, 'Psychic')
					.replace(/Bug/g, 'Grass')
					.replace(/Ice/g, 'Water')
					.replace(/(Rock|Ground)/g, 'Fighting')
					.replace(/Flying/g, 'Normal')
					.replace(/Poison/g, 'Dark');
			}
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
			pokemon.apparentType = pokemon.getTypes(true).join('/');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
			pokemon.apparentType = pokemon.getTypes(true).join('/');
		},
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Metagames",
		column: 2,
	},
	{
		name: "[Gen 9] Almost Any Ability",
		desc: `Pok&eacute;mon have access to almost any ability.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710568/">Almost Any Ability</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710571/">AAA Resources</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard OMs', '!Obtainable Abilities', 'Ability Clause = 1', 'Sleep Moves Clause', 'Terastal Clause', 'Min Source Gen = 9'],
		banlist: [
			'Annihilape', 'Baxcalibur', 'Dragapult', 'Dragonite', 'Flutter Mane', 'Gengar', 'Great Tusk', 'Gholdengo', 'Houndstone', 'Iron Bundle', 'Iron Hands',
			'Iron Valiant', 'Koraidon', 'Miraidon', 'Noivern', 'Slaking', 'Walking Wake', 'Zoroark-Hisui', 'Arena Trap', 'Comatose', 'Contrary', 'Fur Coat',
			'Good as Gold', 'Gorilla Tactics', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Magic Bounce', 'Magnet Pull', 'Moody',
			'Neutralizing Gas', 'Orichalcum Pulse', 'Parental Bond', 'Poison Heal', 'Pure Power', 'Shadow Tag', 'Simple', 'Speed Boost', 'Stakeout', 'Unburden',
			'Water Bubble', 'Wonder Guard', 'King\'s Rock', 'Baton Pass', 'Revival Blessing', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] Balanced Hackmons",
		desc: `Anything directly hackable onto a set (EVs, IVs, forme, ability, item, and move) and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710859/">Balanced Hackmons</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712766/">BH Resources</a>`,
		],

		mod: 'gen9',
		ruleset: ['-Nonexistent', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Moves Clause', 'Endless Battle Clause'],
		banlist: [
			'Calyrex-Shadow', 'Miraidon', 'Zacian-Crowned', 'Arena Trap', 'Contrary', 'Gorilla Tactics', 'Huge Power', 'Illusion', 'Innards Out',
			'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Orichalcum Pulse', 'Parental Bond', 'Poison Heal', 'Pure Power', 'Shadow Tag', 'Stakeout',
			'Water Bubble', 'Wonder Guard', 'Comatose + Sleep Talk', 'Belly Drum', 'Ceaseless Edge', 'Last Respects', 'Quiver Dance', 'Rage Fist',
			'Revival Blessing', 'Shed Tail', 'Shell Smash',
		],
	},
	{
		name: "[Gen 9] Mix and Mega",
		desc: `Mega evolve any Pok&eacute;mon with any mega stone, or transform them with Primal orbs, Origin orbs, and Rusted items with no limit. Mega and Primal boosts based on form changes from gen 7.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710921/">Mix and Mega</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3716385/">Mix and Mega Resources</a>`,
		],

		mod: 'mixandmega',
		ruleset: ['Standard OMs', 'Evasion Items Clause', 'Evasion Abilities Clause', 'Sleep Moves Clause', 'Terastal Clause', 'Min Source Gen = 9'],
		banlist: ['Koraidon', 'Miraidon', 'Beedrillite', 'Blazikenite', 'Gengarite', 'Kangaskhanite', 'Mawilite', 'Medichamite', 'Moody', 'Rusted Sword', 'Shadow Tag', 'Baton Pass', 'Shed Tail'],
		restricted: ['Dragapult', 'Flutter Mane', 'Gengar', 'Iron Bundle', 'Kilowattrel', 'Sandy Shocks', 'Slaking'],
		onValidateTeam(team) {
			const itemTable = new Set<ID>();
			for (const set of team) {
				const item = this.dex.items.get(set.item);
				if (!item.megaStone && !item.onPrimal &&
					!item.forcedForme?.endsWith('Origin') && !item.name.startsWith('Rusted')) continue;
				const natdex = this.ruleTable.has('standardnatdex');
				if (natdex && item.id !== 'ultranecroziumz') continue;
				const species = this.dex.species.get(set.species);
				if (species.isNonstandard && !this.ruleTable.has(`+pokemontag:${this.toID(species.isNonstandard)}`)) {
					return [`${species.baseSpecies} does not exist in gen 9.`];
				}
				if ((item.itemUser?.includes(species.name) && !item.megaStone && !item.onPrimal) ||
					(natdex && species.name.startsWith('Necrozma-') && item.id === 'ultranecroziumz')) {
					continue;
				}
				if (this.ruleTable.isRestrictedSpecies(species) || this.toID(set.ability) === 'powerconstruct') {
					return [`${species.name} is not allowed to hold ${item.name}.`];
				}
				if (itemTable.has(item.id)) {
					return [
						`You are limited to one of each mega stone/orb/rusted item/sinnoh item.`,
						`(You have more than one ${item.name})`,
					];
				}
				itemTable.add(item.id);
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.originalSpecies = pokemon.baseSpecies.name;
			}
		},
		onSwitchIn(pokemon) {
			// @ts-ignore
			const originalFormeSecies = this.dex.species.get(pokemon.species.originalSpecies);
			if (originalFormeSecies.exists && pokemon.m.originalSpecies !== originalFormeSecies.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, originalFormeSecies.requiredItem || originalFormeSecies.requiredMove, '[silent]');
				const oSpecies = this.dex.species.get(pokemon.m.originalSpecies);
				if (oSpecies.types.length !== pokemon.species.types.length || oSpecies.types[1] !== pokemon.species.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.species.get(pokemon.species.originalSpecies);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				this.add('-end', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "[Gen 9] Godly Gift",
		desc: `Each Pok&eacute;mon receives one base stat from a God (AG/Uber Pok&eacute;mon) depending on its position in the team. If there is no Uber Pok&eacute;mon, it uses the Pok&eacute;mon in the first slot.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710734/">Godly Gift</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3718065/">Godly Gift Resources</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Godly Gift Mod', 'Min Source Gen = 9'],
		banlist: [
			'Blissey', 'Chansey', 'Great Tusk', 'Iron Hands', 'Iron Valiant', 'Kingambit', 'Walking Wake', 'Arena Trap',
			'Huge Power', 'Moody', 'Pure Power', 'Shadow Tag', 'Swift Swim', 'Booster Energy', 'Baton Pass', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] STABmons",
		desc: `Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710577/">STABmons</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3714664/">STABmons Resources</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard OMs', 'STABmons Move Legality', 'Sleep Moves Clause', 'Min Source Gen = 9'],
		banlist: [
			'Chi-Yu', 'Chien-Pao', 'Cloyster', 'Dragapult', 'Dragonite', 'Flutter Mane', 'Garchomp', 'Iron Bundle', 'Komala', 'Koraidon', 'Miraidon',
			'Walking Wake', 'Zoroark-Hisui', 'Arena Trap', 'Moody', 'Shadow Tag', 'Booster Energy', 'King\'s Rock', 'Baton Pass', 'Shed Tail',
		],
		restricted: [
			'Acupressure', 'Astral Barrage', 'Belly Drum', 'Dire Claw', 'Extreme Speed', 'Fillet Away', 'Gigaton Hammer',
			'Last Respects', 'No Retreat', 'Revival Blessing', 'Shell Smash', 'Shift Gear', 'V-create', 'Victory Dance', 'Wicked Blow',
		],
	},
	{
		name: "[Gen 9] NFE",
		desc: `Only Pok&eacute;mon that can evolve are allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710638/">NFE</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712567/">NFE Resources</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard OMs', 'Not Fully Evolved', 'Sleep Moves Clause', 'Terastal Clause', 'Min Source Gen = 9'],
		banlist: [
			'Bisharp', 'Chansey', 'Haunter', 'Magneton', 'Misdreavus', 'Naclstack', 'Primeape', 'Scyther', 'Arena Trap', 'Shadow Tag', 'Baton Pass',
			// Shouldn't be legal
			'Stantler', 'Ursaring',
		],
	},

	// Challengeable OMs
	///////////////////////////////////////////////////////////////////

	{
		section: "Challengeable OMs",
		column: 2,
	},
	{
		name: "[Gen 9] Camomons",
		desc: `Pok&eacute;mon have their types set to match their first two moves.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711340/">Camomons</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Clause Mod', 'Evasion Items Clause', 'Evasion Abilities Clause', 'Terastal Clause', 'Camomons Mod', 'Min Source Gen = 9'],
		banlist: [
			'Baxcalibur', 'Chi-Yu', 'Chien-Pao', 'Cyclizar', 'Dragonite', 'Drednaw', 'Espathra', 'Flutter Mane', 'Houndstone', 'Iron Bundle', 'Koraidon',
			'Miraidon', 'Palafin', 'Roaring Moon', 'Volcarona', 'Arena Trap', 'Moody', 'Shadow Tag', 'Booster Energy', 'King\'s Rock', 'Baton Pass',
		],
	},
	{
		name: "[Gen 9] Convergence",
		desc: `Allows all Pok&eacute;mon that have identical types to share moves and abilities.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3714048/">Convergence</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Clause Mod', 'Convergence Legality', '!Obtainable Abilities', 'Min Source Gen = 9'],
		banlist: [
			'Cyclizar', 'Chi-Yu', 'Dondozo', 'Flutter Mane', 'Iron Bundle', 'Iron Hands', 'Koraidon', 'Miraidon', 'Palafin', 'Slaking', 'Arena Trap',
			'Comatose', 'Imposter', 'Moody', 'Pure Power', 'Shadow Tag', 'Speed Boost', 'Damp Rock', 'King\'s Rock', 'Baton Pass', 'Extreme Speed',
			'Last Respects', 'Rage Fist', 'Revival Blessing', 'Shell Smash', 'Spore', 'Transform',
		],
	},
	{
		name: "[Gen 9] Crazy 8s",
		desc: `8 Pok&eacute;mons can be used with 8 moves each.`,

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Max Team Size = 8', 'Max Move Count = 8', 'Sleep Moves Clause', 'Terastal Clause'],
	},
	{
		name: "[Gen 9] Cross Evolution",
		desc: `Give a Pok&eacute;mon a Pok&eacute;mon name of the next evolution stage as a nickname to inherit stat changes, typing, abilities, and moves from the next stage Pok&eacute;mon.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710953/">Cross Evolution</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Ability Clause = 2', 'Sleep Moves Clause', 'Min Source Gen = 9'],
		banlist: ['Girafarig', 'Miraidon', 'Scyther', 'Sneasel', 'Ursaring', 'Arena Trap', 'Huge Power', 'Ice Scales', 'Pure Power', 'Shadow Tag', 'Speed Boost', 'Moody', 'King\'s Rock', 'Baton Pass', 'Revival Blessing'],
		restricted: ['Gallade', 'Gholdengo'],
		onValidateTeam(team) {
			const names = new Set<ID>();
			for (const set of team) {
				const name = set.name;
				if (names.has(this.dex.toID(name))) {
					return [
						`Your Pok\u00e9mon must have different nicknames.`,
						`(You have more than one Pok\u00e9mon named '${name}')`,
					];
				}
				names.add(this.dex.toID(name));
			}
			if (!names.size) {
				return [
					`${this.format.name} works using nicknames; your team has 0 nicknamed Pok\u00e9mon.`,
					`(If this was intentional, add a nickname to one Pok\u00e9mon that isn't the name of a Pok\u00e9mon species.)`,
				];
			}
		},
		checkCanLearn(move, species, lsetData, set) {
			// @ts-ignore
			if (!set.sp?.exists || !set.crossSpecies?.exists) {
				return this.checkCanLearn(move, species, lsetData, set);
			}
			// @ts-ignore
			const problem = this.checkCanLearn(move, set.sp);
			if (!problem) return null;
			// @ts-ignore
			if (this.checkCanLearn(move, set.crossSpecies)) return problem;
			return null;
		},
		validateSet(set, teamHas) {
			const crossSpecies = this.dex.species.get(set.name);
			let problems = this.dex.formats.get('Obtainable Misc').onChangeSet?.call(this, set, this.format) || null;
			if (Array.isArray(problems) && problems.length) return problems;
			const crossNonstandard = (!this.ruleTable.has('standardnatdex') && crossSpecies.isNonstandard === 'Past') ||
				crossSpecies.isNonstandard === 'Future';
			const crossIsCap = !this.ruleTable.has('+pokemontag:cap') && crossSpecies.isNonstandard === 'CAP';
			if (!crossSpecies.exists || crossNonstandard || crossIsCap) return this.validateSet(set, teamHas);
			const species = this.dex.species.get(set.species);
			const check = this.checkSpecies(set, species, species, {});
			if (check) return [check];
			const nonstandard = !this.ruleTable.has('standardnatdex') && species.isNonstandard === 'Past';
			const isCap = !this.ruleTable.has('+pokemontag:cap') && species.isNonstandard === 'CAP';
			if (!species.exists || nonstandard || isCap || species === crossSpecies) return this.validateSet(set, teamHas);
			if (!species.nfe) return [`${species.name} cannot cross evolve because it doesn't evolve.`];
			const crossIsUnreleased = (crossSpecies.tier === "Unreleased" && crossSpecies.isNonstandard === "Unobtainable" &&
				!this.ruleTable.has('+unobtainable'));
			if (crossSpecies.battleOnly || crossIsUnreleased || !crossSpecies.prevo) {
				return [`${species.name} cannot cross evolve into ${crossSpecies.name} because it isn't an evolution.`];
			}
			if (this.ruleTable.isRestrictedSpecies(crossSpecies)) {
				return [`${species.name} cannot cross evolve into ${crossSpecies.name} because it is banned.`];
			}
			const crossPrevoSpecies = this.dex.species.get(crossSpecies.prevo);
			if (!crossPrevoSpecies.prevo !== !species.prevo) {
				return [
					`${species.name} cannot cross evolve into ${crossSpecies.name} because they are not consecutive evolution stages.`,
				];
			}
			const item = this.dex.items.get(set.item);
			if (item.itemUser?.length) {
				if (!item.itemUser.includes(crossSpecies.name) || crossSpecies.name !== species.name) {
					return [`${species.name} cannot use ${item.name} because it is cross evolved into ${crossSpecies.name}.`];
				}
			}
			const ability = this.dex.abilities.get(set.ability);
			if (!this.ruleTable.isRestricted(`ability:${ability.id}`) || Object.values(species.abilities).includes(ability.name)) {
				set.species = crossSpecies.name;
			}

			// @ts-ignore
			set.sp = species;
			// @ts-ignore
			set.crossSpecies = crossSpecies;
			problems = this.validateSet(set, teamHas);
			set.name = crossSpecies.name;
			set.species = species.name;
			return problems;
		},
		onModifySpecies(species, target, source, effect) {
			if (!target) return; // chat
			if (effect && ['imposter', 'transform'].includes(effect.id)) return;
			if (target.set.name === target.set.species) return;
			const crossSpecies = this.dex.species.get(target.set.name);
			if (!crossSpecies.exists) return;
			if (species.battleOnly || !species.nfe) return;
			const crossIsUnreleased = (crossSpecies.tier === "Unreleased" && crossSpecies.isNonstandard === "Unobtainable" &&
				!this.ruleTable.has('+unobtainable'));
			if (crossSpecies.battleOnly || crossIsUnreleased || !crossSpecies.prevo) return;
			const crossPrevoSpecies = this.dex.species.get(crossSpecies.prevo);
			if (!crossPrevoSpecies.prevo !== !species.prevo) return;

			const mixedSpecies = this.dex.deepClone(species);
			mixedSpecies.weightkg =
				Math.max(0.1, +(species.weightkg + crossSpecies.weightkg - crossPrevoSpecies.weightkg)).toFixed(1);
			mixedSpecies.nfe = false;
			mixedSpecies.evos = [];
			mixedSpecies.eggGroups = crossSpecies.eggGroups;
			mixedSpecies.abilities = crossSpecies.abilities;
			mixedSpecies.bst = 0;
			let i: StatID;
			for (i in species.baseStats) {
				const statChange = crossSpecies.baseStats[i] - crossPrevoSpecies.baseStats[i];
				mixedSpecies.baseStats[i] = this.clampIntRange(species.baseStats[i] + statChange, 1, 255);
				mixedSpecies.bst += mixedSpecies.baseStats[i];
			}
			if (crossSpecies.types[0] !== crossPrevoSpecies.types[0]) mixedSpecies.types[0] = crossSpecies.types[0];
			if (crossSpecies.types[1] !== crossPrevoSpecies.types[1]) {
				mixedSpecies.types[1] = crossSpecies.types[1] || crossSpecies.types[0];
			}
			if (mixedSpecies.types[0] === mixedSpecies.types[1]) mixedSpecies.types = [mixedSpecies.types[0]];

			return mixedSpecies;
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.baseSpecies = pokemon.species;
			}
		},
	},
	{
		name: "[Gen 9] Fortemons",
		desc: `Put an attacking move in the item slot to have all of a Pok&eacute;mon's attacks inherit its properties.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3713983/">Fortemons</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Clause Mod', 'Min Source Gen = 9'],
		banlist: [
			'Annihilape', 'Azumarill', 'Chi-Yu', 'Chien-Pao', 'Cloyster', 'Dragonite', 'Espathra', 'Flutter Mane', 'Great Tusk',
			'Houndstone', 'Iron Bundle', 'Koraidon', 'Miraidon', 'Palafin', 'Arena Trap', 'Moody', 'Serene Grace', 'Shadow Tag',
			'Covert Cloak', 'Beat Up', 'Baton Pass',
		],
		restricted: ['Dynamic Punch', 'Flail', 'Fury Cutter', 'Grass Knot', 'Heavy Slam', 'Inferno', 'Low Kick', 'Nuzzle', 'Power Trip', 'Reversal', 'Spit Up', 'Stored Power', 'Zap Cannon'],
		validateSet(set, teamHas) {
			const item = set.item;
			const species = this.dex.species.get(set.species);
			const move = this.dex.moves.get(item);
			if (!move.exists || move.id === 'metronome' || move.category === 'Status') {
				return this.validateSet(set, teamHas);
			}
			set.item = '';
			const problems = this.validateSet(set, teamHas) || [];
			set.item = item;
			if (this.checkCanLearn(move, species, this.allSources(species), set)) {
				problems.push(`${species.name} can't learn ${move.name}.`);
			}
			if (set.moves.map(this.toID).includes(move.id)) {
				problems.push(`Moves in the item slot can't be in the moveslots as well.`);
			}
			const accuracyLoweringMove =
				move.secondaries?.some(secondary => secondary.boosts?.accuracy && secondary.boosts?.accuracy < 0);
			const flinchMove = move.secondaries?.some(secondary => secondary.volatileStatus === 'flinch');
			const freezeMove = move.secondaries?.some(secondary => secondary.status === 'frz') || move.id === 'triattack';
			if (this.ruleTable.isRestricted(`move:${move.id}`) ||
				((accuracyLoweringMove || move.ohko || move.multihit || move.id === 'beatup' || move.flags['charge'] ||
					move.priority > 0 || move.damageCallback || flinchMove || freezeMove || move.selfSwitch) &&
				!this.ruleTable.has(`+move:${move.id}`))) {
				problems.push(`The move ${move.name} can't be used as an item.`);
			}
			return problems.length ? problems : null;
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				const move = this.dex.getActiveMove(pokemon.set.item);
				if (move.exists && move.category !== 'Status') {
					pokemon.m.forte = move;
					pokemon.item = 'mail' as ID;
				}
			}
		},
		onModifyMovePriority: 1,
		onModifyMove(move, pokemon, target) {
			const forte: ActiveMove = pokemon.m.forte;
			if (move.category !== 'Status' && forte) {
				move.flags = {...move.flags, ...forte.flags};
				if (forte.self) {
					if (forte.self.onHit && move.self?.onHit) {
						for (const i in forte.self) {
							if (i.startsWith('onHit')) continue;
							(move.self as any)[i] = (forte.self as any)[i];
						}
					} else {
						move.self = {...(move.self || {}), ...forte.self};
					}
				}
				if (forte.selfBoost?.boosts) {
					if (!move.selfBoost?.boosts) move.selfBoost = {boosts: {}};
					let boostid: BoostID;
					for (boostid in forte.selfBoost.boosts) {
						if (!move.selfBoost.boosts![boostid]) move.selfBoost.boosts![boostid] = 0;
						move.selfBoost.boosts![boostid]! += forte.selfBoost.boosts[boostid]!;
					}
				}
				if (forte.secondaries) {
					move.secondaries = [...(move.secondaries || []), ...forte.secondaries];
				}
				move.critRatio = (move.critRatio || 1) + (forte.critRatio || 1) - 1;
				const VALID_PROPERTIES = [
					'alwaysHit', 'basePowerCallback', 'breaksProtect', 'drain', 'forceSTAB', 'forceSwitch', 'hasCrashDamage', 'hasSheerForce',
					'ignoreAbility', 'ignoreAccuracy', 'ignoreDefensive', 'ignoreEvasion', 'ignoreImmunity', 'mindBlownRecoil', 'noDamageVariance',
					'ohko', 'overrideDefensivePokemon', 'overrideDefensiveStat', 'overrideOffensivePokemon', 'overrideOffensiveStat', 'pseudoWeather',
					'recoil', 'selfdestruct', 'selfSwitch', 'sleepUsable', 'smartTarget', 'stealsBoosts', 'thawsTarget', 'volatileStatus', 'willCrit',
				] as const;
				for (const property of VALID_PROPERTIES) {
					if (forte[property]) {
						move[property] = forte[property] as any;
					}
				}
				// Added here because onEffectiveness doesn't have an easy way to reference the source
				if (forte.onEffectiveness) {
					move.onEffectiveness = function (typeMod, t, type, m) {
						return forte.onEffectiveness!.call(this, typeMod, t, type, m);
					};
				}
				forte.onModifyMove?.call(this, move, pokemon, target);
			}
		},
		onModifyPriority(priority, source, target, move) {
			const forte = source?.m.forte;
			if (move.category !== 'Status' && forte) {
				if (source.hasAbility('Triage') && forte.flags['heal']) {
					return priority + (move.flags['heal'] ? 0 : 3);
				}
				return priority + forte.priority;
			}
		},
		onModifyTypePriority: 1,
		onModifyType(move, pokemon, target) {
			const forte = pokemon.m.forte;
			if (move.category !== 'Status' && forte) {
				this.singleEvent('ModifyType', forte, null, pokemon, target, move, move);
			}
		},
		onHitPriority: 1,
		onHit(target, source, move) {
			const forte = source.m.forte;
			if (move?.category !== 'Status' && forte) {
				this.singleEvent('Hit', forte, {}, target, source, move);
				if (forte.self) this.singleEvent('Hit', forte.self, {}, source, source, move);
				this.singleEvent('AfterHit', forte, {}, target, source, move);
			}
		},
		onAfterSubDamage(damage, target, source, move) {
			const forte = source.m.forte;
			if (move?.category !== 'Status' && forte) {
				this.singleEvent('AfterSubDamage', forte, null, target, source, move);
			}
		},
		onModifySecondaries(secondaries, target, source, move) {
			if (secondaries.some(s => !!s.self)) move.selfDropped = false;
		},
		onAfterMoveSecondaryPriority: 1,
		onAfterMoveSecondarySelf(source, target, move) {
			const forte = source.m.forte;
			if (move?.category !== 'Status' && forte) {
				this.singleEvent('AfterMoveSecondarySelf', forte, null, source, target, move);
			}
		},
		onBasePowerPriority: 1,
		onBasePower(basePower, source, target, move) {
			const forte = source.m.forte;
			if (move.category !== 'Status' && forte?.onBasePower) {
				forte.onBasePower.call(this, basePower, source, target, move);
			}
		},
		pokemon: {
			getItem() {
				const move = this.battle.dex.moves.get(this.m.forte);
				if (!move.exists) return Object.getPrototypeOf(this).getItem.call(this);
				return {
					...this.battle.dex.items.get('mail'),
					name: move.name, id: move.id, ignoreKlutz: true, onTakeItem: false,
				};
			},
		},
	},
	{
		name: "[Gen 9] Full Potential",
		desc: `Pok&eacute;mon's moves hit off of their highest stat.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711127/">Full Potential</a>`,
		],

		mod: 'fullpotential',
		searchShow: false,
		ruleset: ['Standard OMs', 'Evasion Abilities Clause', 'Evasion Items Clause', 'Sleep Moves Clause', 'Terastal Clause', 'Min Source Gen = 9'],
		banlist: [
			'Chien-Pao', 'Cyclizar', 'Dragapult', 'Espathra', 'Flutter Mane', 'Iron Bundle', 'Koraidon', 'Miraidon', 'Scream Tail', 'Arena Trap',
			'Chlorophyll', 'Drought', 'Moody', 'Sand Rush', 'Shadow Tag', 'Slush Rush', 'Swift Swim', 'Unburden', 'Booster Energy', 'Choice Scarf',
			'Heat Rock', 'King\'s Rock', 'Baton Pass', 'Tailwind',
		],
	},
	{
		name: "[Gen 9] Inheritance",
		desc: `Pok&eacute;mon may use the ability and moves of another, as long as they forfeit their own learnset.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712296/">Inheritance</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Ability Clause = 2', 'Sleep Moves Clause', 'Min Source Gen = 9'],
		banlist: ['Koraidon', 'Miraidon', 'Slaking', 'Arena Trap', 'Huge Power', 'Imposter', 'Pure Power', 'Shadow Tag', 'King\'s Rock', 'Baton Pass', 'Last Respects', 'Shed Tail', 'Shell Smash'],
		getEvoFamily(speciesid) {
			let species = Dex.species.get(speciesid);
			while (species.prevo) {
				species = Dex.species.get(species.prevo);
			}
			return species.id;
		},
		validateSet(set, teamHas) {
			const unreleased = (pokemon: Species) => pokemon.tier === "Unreleased" && pokemon.isNonstandard === "Unobtainable";
			if (!teamHas.abilityMap) {
				teamHas.abilityMap = Object.create(null);
				for (const pokemon of Dex.species.all()) {
					if (pokemon.isNonstandard || (unreleased(pokemon) && !this.ruleTable.has('+unobtainable'))) continue;
					if (pokemon.requiredAbility || pokemon.requiredItem || pokemon.requiredMove) continue;
					if (this.ruleTable.isBannedSpecies(pokemon)) continue;

					for (const key of Object.values(pokemon.abilities)) {
						const abilityId = this.dex.toID(key);
						if (abilityId in teamHas.abilityMap) {
							teamHas.abilityMap[abilityId][pokemon.evos ? 'push' : 'unshift'](pokemon.id);
						} else {
							teamHas.abilityMap[abilityId] = [pokemon.id];
						}
					}
				}
			}

			const problem = this.validateForme(set);
			if (problem.length) return problem;

			const species = this.dex.species.get(set.species);
			if (!species.exists || species.num < 1) return [`The Pok\u00e9mon "${set.species}" does not exist.`];
			if (species.isNonstandard || (unreleased(species) && !this.ruleTable.has('+unobtainable'))) {
				return [`${species.name} is not obtainable in Generation ${this.dex.gen}.`];
			}

			const name = set.name;
			if (this.ruleTable.isBannedSpecies(species)) {
				return this.validateSet(set, teamHas);
			}

			const ability = this.dex.abilities.get(set.ability);
			if (!ability.exists || ability.isNonstandard) return [`${name} needs to have a valid ability.`];
			const pokemonWithAbility = teamHas.abilityMap[ability.id];
			if (!pokemonWithAbility) return [`${ability.name} is not available on a legal Pok\u00e9mon.`];

			(this.format as any).debug = true;

			if (!teamHas.abilitySources) teamHas.abilitySources = Object.create(null);
			const validSources: string[] = teamHas.abilitySources[this.dex.toID(set.species)] = []; // Evolution families

			let canonicalSource = ''; // Specific for the basic implementation of Donor Clause (see onValidateTeam).

			for (const donor of pokemonWithAbility) {
				const donorSpecies = this.dex.species.get(donor);
				let format = this.format;
				if (!format.getEvoFamily) format = this.dex.formats.get('gen9inheritance');
				const evoFamily = format.getEvoFamily!(donorSpecies.id);
				if (validSources.includes(evoFamily)) continue;

				set.species = donorSpecies.name;
				set.name = donorSpecies.baseSpecies;
				const problems = this.validateSet(set, teamHas) || [];
				if (!problems.length) {
					validSources.push(evoFamily);
					canonicalSource = donorSpecies.name;
				}
				// Specific for the basic implementation of Donor Clause (see onValidateTeam).
				if (validSources.length > 1) break;
			}
			(this.format as any).debug = false;

			set.name = name;
			set.species = species.name;
			if (!validSources.length) {
				if (pokemonWithAbility.length > 1) return [`${name}'s set is illegal.`];
				return [`${name} has an illegal set with an ability from ${this.dex.species.get(pokemonWithAbility[0]).name}.`];
			}

			// Protocol: Include the data of the donor species in the `ability` data slot.
			// Afterwards, we are going to reset the name to what the user intended.
			set.ability = `${set.ability}0${canonicalSource}`;
			return null;
		},
		onValidateTeam(team, f, teamHas) {
			if (this.ruleTable.has('abilityclause')) {
				const abilityTable = new Map<string, number>();
				const base: {[k: string]: string} = {
					airlock: 'cloudnine',
					armortail: 'queenlymajesty',
					battlearmor: 'shellarmor',
					clearbody: 'whitesmoke',
					dazzling: 'queenlymajesty',
					emergencyexit: 'wimpout',
					filter: 'solidrock',
					gooey: 'tanglinghair',
					insomnia: 'vitalspirit',
					ironbarbs: 'roughskin',
					libero: 'protean',
					minus: 'plus',
					moxie: 'chillingneigh',
					powerofalchemy: 'receiver',
					propellertail: 'stalwart',
					teravolt: 'moldbreaker',
					turboblaze: 'moldbreaker',
				};
				const num = parseInt(this.ruleTable.valueRules.get('abilityclause')!);
				for (const set of team) {
					let ability = this.toID(set.ability.split('0')[0]);
					if (!ability) continue;
					if (ability in base) ability = base[ability] as ID;
					if ((abilityTable.get(ability) || 0) >= num) {
						return [
							`You are limited to ${num} of each ability by ${num} Ability Clause.`,
							`(You have more than ${num} ${this.dex.abilities.get(ability).name} variants)`,
						];
					}
					abilityTable.set(ability, (abilityTable.get(ability) || 0) + 1);
				}
			}

			// Donor Clause
			const evoFamilyLists = [];
			for (const set of team) {
				const abilitySources = teamHas.abilitySources?.[this.dex.toID(set.species)];
				if (!abilitySources) continue;
				let format = this.format;
				if (!format.getEvoFamily) format = this.dex.formats.get('gen9inheritance');
				evoFamilyLists.push(abilitySources.map(format.getEvoFamily!));
			}

			// Checking actual full incompatibility would require expensive algebra.
			// Instead, we only check the trivial case of multiple Pokémon only legal for exactly one family. FIXME?
			const requiredFamilies = Object.create(null);
			for (const evoFamilies of evoFamilyLists) {
				if (evoFamilies.length !== 1) continue;
				const [familyId] = evoFamilies;
				if (!(familyId in requiredFamilies)) {
					requiredFamilies[familyId] = 1;
				} else {
					requiredFamilies[familyId]++;
				}
				if (requiredFamilies[familyId] > 1) {
					return [
						`You are limited to up to one inheritance from each evolution family by the Donor Clause.`,
						`(You inherit more than once from ${this.dex.species.get(familyId).name}).`,
					];
				}
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.baseAbility.includes('0')) {
					const donor = pokemon.baseAbility.split('0')[1];
					pokemon.m.donor = this.toID(donor);
					pokemon.baseAbility = this.toID(pokemon.baseAbility.split('0')[0]);
					pokemon.ability = pokemon.baseAbility;
				}
			}
		},
		onSwitchIn(pokemon) {
			if (!pokemon.m.donor) return;
			const donorTemplate = this.dex.species.get(pokemon.m.donor);
			if (!donorTemplate.exists) return;
			// Place volatiles on the Pokémon to show the donor details.
			this.add('-start', pokemon, donorTemplate.name, '[silent]');
		},
	},
	{
		name: "[Gen 9] Partners in Crime",
		desc: `Doubles-based metagame where both active ally Pok&eacute;mon share abilities and moves.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710997/">Partners in Crime</a>`,
		],

		mod: 'partnersincrime',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles'],
		banlist: ['Annihilape', 'Chi-Yu', 'Flutter Mane', 'Koraidon', 'Miraidon', 'Dancer', 'Huge Power', 'Moody', 'Pure Power', 'Shadow Tag', 'Ally Switch', 'Revival Blessing', 'Swagger'],
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.trackPP = new Map<string, number>();
			}
		},
		onBeforeSwitchIn(pokemon) {
			pokemon.m.curMoves = this.dex.deepClone(pokemon.moves);
			let ngas = false;
			for (const poke of this.getAllActive()) {
				if (this.toID(poke.ability) === ('neutralizinggas' as ID)) {
					ngas = true;
					break;
				}
			}
			const BAD_ABILITIES = ['trace', 'imposter', 'neutralizinggas', 'illusion', 'wanderingspirit'];
			const ally = pokemon.side.active.find(mon => mon && mon !== pokemon && !mon.fainted);
			if (ally && ally.ability !== pokemon.ability) {
				if (!pokemon.m.innate && !BAD_ABILITIES.includes(this.toID(ally.ability))) {
					pokemon.m.innate = 'ability:' + ally.ability;
					if (!ngas || ally.getAbility().isPermanent || pokemon.hasItem('Ability Shield')) {
						pokemon.volatiles[pokemon.m.innate] = {id: pokemon.m.innate, target: pokemon};
						pokemon.m.startVolatile = true;
					}
				}
				if (!ally.m.innate && !BAD_ABILITIES.includes(this.toID(pokemon.ability))) {
					ally.m.innate = 'ability:' + pokemon.ability;
					if (!ngas || pokemon.getAbility().isPermanent || ally.hasItem('Ability Shield')) {
						ally.volatiles[ally.m.innate] = {id: ally.m.innate, target: ally};
						ally.m.startVolatile = true;
					}
				}
			}
		},
		// Starting innate abilities in scripts#actions
		onSwitchOut(pokemon) {
			if (pokemon.m.innate) {
				pokemon.removeVolatile(pokemon.m.innate);
				delete pokemon.m.innate;
			}
			const ally = pokemon.side.active.find(mon => mon && mon !== pokemon && !mon.fainted);
			if (ally && ally.m.innate) {
				ally.removeVolatile(ally.m.innate);
				delete ally.m.innate;
			}
		},
		onFaint(pokemon) {
			if (pokemon.m.innate) {
				pokemon.removeVolatile(pokemon.m.innate);
				delete pokemon.m.innate;
			}
			const ally = pokemon.side.active.find(mon => mon && mon !== pokemon && !mon.fainted);
			if (ally && ally.m.innate) {
				ally.removeVolatile(ally.m.innate);
				delete ally.m.innate;
			}
		},
	},
	{
		name: "[Gen 9] Pokebilities",
		desc: `Pok&eacute;mon have all of their released abilities simultaneously.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712725/">Pok&eacute;bilities</a>`,
		],
		mod: 'pokebilities',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Clause Mod', 'Min Source Gen = 9'],
		banlist: [
			'Chi-Yu', 'Espathra', 'Flutter Mane', 'Houndstone', 'Iron Bundle', 'Koraidon', 'Miraidon',
			'Palafin', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Baton Pass', 'Shed Tail',
		],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			const unSeenAbilities = Object.keys(species.abilities)
				.filter(key => key !== 'S' && (key !== 'H' || !species.unreleasedHidden))
				.map(key => species.abilities[key as "0" | "1" | "H" | "S"])
				.filter(ability => ability !== set.ability);
			if (unSeenAbilities.length && this.toID(set.ability) !== this.toID(species.abilities['S'])) {
				for (const abilityName of unSeenAbilities) {
					const banReason = this.ruleTable.check('ability:' + this.toID(abilityName));
					if (banReason) {
						return [`${set.name}'s ability ${abilityName} is ${banReason}.`];
					}
				}
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.ability === this.toID(pokemon.species.abilities['S'])) {
					continue;
				}
				pokemon.m.innates = Object.keys(pokemon.species.abilities)
					.filter(key => key !== 'S' && (key !== 'H' || !pokemon.species.unreleasedHidden))
					.map(key => this.toID(pokemon.species.abilities[key as "0" | "1" | "H" | "S"]))
					.filter(ability => ability !== pokemon.ability);
			}
		},
		onBeforeSwitchIn(pokemon) {
			// Abilities that must be applied before both sides trigger onSwitchIn to correctly
			// handle switch-in ability-to-ability interactions, e.g. Intimidate counters
			const neededBeforeSwitchInIDs = [
				'clearbody', 'competitive', 'contrary', 'defiant', 'fullmetalbody', 'hypercutter', 'innerfocus',
				'mirrorarmor', 'oblivious', 'owntempo', 'rattled', 'scrappy', 'simple', 'whitesmoke',
			];
			if (pokemon.m.innates) {
				for (const innate of pokemon.m.innates) {
					if (!neededBeforeSwitchInIDs.includes(innate)) continue;
					if (pokemon.hasAbility(innate)) continue;
					pokemon.addVolatile("ability:" + innate, pokemon);
				}
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			if (pokemon.m.innates) {
				for (const innate of pokemon.m.innates) {
					if (pokemon.hasAbility(innate)) continue;
					pokemon.addVolatile("ability:" + innate, pokemon);
				}
			}
		},
		onSwitchOut(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				pokemon.removeVolatile(innate);
			}
		},
		onFaint(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				const innateEffect = this.dex.conditions.get(innate) as Effect;
				this.singleEvent('End', innateEffect, null, pokemon);
			}
		},
		onAfterMega(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				pokemon.removeVolatile(innate);
			}
			pokemon.m.innates = undefined;
		},
	},
	{
		name: "[Gen 9] Pure Hackmons",
		desc: `Anything directly hackable onto a set (EVs, IVs, forme, ability, item, and move) and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712086/">Pure Hackmons</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['-Nonexistent', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 9] Revelationmons",
		desc: `The moves in the first slot(s) of a Pok&eacute;mon's set have their types changed to match the Pok&eacute;mon's type(s).`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711644/">Revelationmons</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Revelationmons Mod', 'Min Source Gen = 9'],
		banlist: ['Dragonite', 'Espathra', 'Flutter Mane', 'Koraidon', 'Iron Bundle', 'Miraidon', 'Noivern', 'Palafin', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Baton Pass'],
		restricted: ['U-turn', 'Volt Switch'],
	},
	{
		name: "[Gen 9] Shared Power",
		desc: `Once a Pok&eacute;mon switches in, its ability is shared with the rest of the team.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711011/">Shared Power</a>`,
		],

		mod: 'sharedpower',
		searchShow: false,
		ruleset: ['Standard OMs', 'Evasion Abilities Clause', 'Evasion Items Clause', 'Sleep Moves Clause', 'Min Source Gen = 9'],
		banlist: [
			'Chien-Pao', 'Gholdengo', 'Koraidon', 'Komala', 'Miraidon', 'Ting-Lu', 'Arena Trap', 'Armor Tail', 'Contrary', 'Dazzling', 'Drought',
			'Electric Surge', 'Guts', 'Huge Power', 'Imposter', 'Magic Bounce', 'Magnet Pull', 'Mold Breaker', 'Moody', 'Poison Heal', 'Prankster',
			'Pure Power', 'Purifying Salt', 'Queenly Majesty', 'Quick Draw', 'Quick Feet', 'Regenerator', 'Sand Rush', 'Shadow Tag', 'Simple',
			'Slush Rush', 'Speed Boost', 'Stakeout', 'Stench', 'Sturdy', 'Swift Swim', 'Tinted Lens', 'Unaware', 'Unburden', 'Starf Berry',
			'King\'s Rock', 'Baton Pass',
		],
		getSharedPower(pokemon) {
			const sharedPower = new Set<string>();
			for (const ally of pokemon.side.pokemon) {
				if (ally.previouslySwitchedIn > 0) {
					if (pokemon.battle.dex.currentMod !== 'sharedpower' && ['trace', 'mirrorarmor'].includes(ally.baseAbility)) {
						sharedPower.add('noability');
						continue;
					}
					sharedPower.add(ally.baseAbility);
				}
			}
			sharedPower.delete(pokemon.baseAbility);
			return sharedPower;
		},
		onBeforeSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen9sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				const effect = 'ability:' + ability;
				pokemon.volatiles[effect] = {id: this.toID(effect), target: pokemon};
				if (!pokemon.m.abils) pokemon.m.abils = [];
				if (!pokemon.m.abils.includes(effect)) pokemon.m.abils.push(effect);
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen9sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				if (ability === 'noability') {
					this.hint(`Mirror Armor and Trace break in Shared Power formats that don't use Shared Power as a base, so they get removed from non-base users.`);
				}
				const effect = 'ability:' + ability;
				delete pokemon.volatiles[effect];
				pokemon.addVolatile(effect);
			}
		},
	},
	{
		name: "[Gen 9] Tera Donation",
		desc: `The first Pok&eacute;mon sent out immediately terastallizes. The other Pok&eacute;mon in the party inherit that Tera Type as an additional type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3715801/">Tera Donation</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves CLause', 'Tera Type Preview', 'Min Source Gen = 9'],
		banlist: [
			'Annihilape', 'Chi-Yu', 'Chien-Pao', 'Cyclizar', 'Espathra', 'Flutter Mane', 'Houndstone', 'Iron Bundle', 'Koraidon',
			'Miraidon', 'Palafin', 'Arena Trap', 'Moody', 'Shadow Tag', 'Booster Energy', 'Heat Rock', 'King\'s Rock', 'Baton Pass',
		],
		onSwitchIn(pokemon) {
			if (this.turn === 0) {
				this.actions.terastallize(pokemon);
				const teraType = pokemon.teraType;
				for (const poke of pokemon.side.pokemon) {
					poke.m.thirdType = teraType;
				}
			}
			if (!pokemon.terastallized) {
				this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
			}
		},
		onModifyMove(move, pokemon, target) {
			if (move.id === 'terablast') {
				const teraType = pokemon.m.thirdType;
				if (teraType && pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) {
					move.category = 'Physical';
				}
			}
		},
		onModifyType(move, pokemon, target) {
			if (move.id === 'terablast') {
				const teraType = pokemon.m.thirdType;
				if (teraType) {
					move.type = teraType;
				}
			}
		},
		pokemon: {
			getTypes(excludeAdded, preterastallized) {
				if (!preterastallized && this.terastallized) return [this.terastallized];
				const types = this.battle.runEvent('Type', this, null, null, this.types);
				if (!excludeAdded && this.addedType) return types.concat(this.addedType);
				const addTeraType = this.m.thirdType;
				if (types.length) {
					if (addTeraType) return Array.from(new Set([...types, addTeraType]));
					return types;
				}
				return [this.battle.gen >= 5 ? 'Normal' : '???'];
			},
		},
	},
	{
		name: "[Gen 9] The Loser's Game",
		desc: `The first player to lose all of their Pok&eacute;mon wins.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3714223/">The Loser's Game</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Clause Mod', '!OHKO Clause', 'Picked Team Size = 6', 'Adjust Level = 100', 'Min Source Gen = 9'],
		banlist: ['Infiltrator', 'Choice Scarf', 'Explosion', 'Final Gambit', 'Healing Wish', 'Lunar Dance', 'Magic Room', 'Memento', 'Misty Explosion', 'Self-Destruct'],
		onValidateTeam(team) {
			const familyTable = new Set<ID>();
			for (const set of team) {
				let species = this.dex.species.get(set.species);
				while (species.prevo) {
					species = this.dex.species.get(species.prevo);
				}
				if (familyTable.has(species.id)) {
					return [
						`You are limited to one Pok&eacute;mon from each family by the Family Clause.`,
						`(You have more than one evolution of ${species.name}.)`,
					];
				}
				familyTable.add(species.id);
			}
		},
		battle: {
			tiebreak() {
				if (this.ended) return false;

				this.inputLog.push(`>tiebreak`);
				this.add('message', "Time's up! Going to tiebreaker...");
				const notFainted = this.sides.map(side => (
					side.pokemon.filter(pokemon => !pokemon.fainted).length
				));
				this.add('-message', this.sides.map((side, i) => (
					`${side.name}: ${notFainted[i]} Pokemon left`
				)).join('; '));
				const maxNotFainted = Math.max(...notFainted);
				let tiedSides = this.sides.filter((side, i) => notFainted[i] === maxNotFainted);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[1]);
				}

				const hpPercentage = tiedSides.map(side => (
					side.pokemon.map(pokemon => pokemon.hp / pokemon.maxhp).reduce((a, b) => a + b) * 100 / 6
				));
				this.add('-message', tiedSides.map((side, i) => (
					`${side.name}: ${Math.round(hpPercentage[i])}% total HP left`
				)).join('; '));
				const maxPercentage = Math.max(...hpPercentage);
				tiedSides = tiedSides.filter((side, i) => hpPercentage[i] === maxPercentage);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[1]);
				}

				const hpTotal = tiedSides.map(side => (
					side.pokemon.map(pokemon => pokemon.hp).reduce((a, b) => a + b)
				));
				this.add('-message', tiedSides.map((side, i) => (
					`${side.name}: ${Math.round(hpTotal[i])} total HP left`
				)).join('; '));
				const maxTotal = Math.max(...hpTotal);
				tiedSides = tiedSides.filter((side, i) => hpTotal[i] === maxTotal);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[1]);
				}
				return this.tie();
			},
			checkWin(faintData) {
				const team1PokemonLeft = this.sides[0].pokemonLeft;
				const team2PokemonLeft = this.sides[1].pokemonLeft;
				if (!team1PokemonLeft && !team2PokemonLeft) {
					this.win(faintData?.target.side || null);
					return true;
				}
				for (const side of this.sides) {
					if (!side.pokemonLeft) {
						this.win(side);
						return true;
					}
				}
			},
		},
	},
	{
		name: "[Gen 9] Trademarked",
		desc: `Sacrifice your Pok&eacute;mon's ability for a status move that activates on switch-in.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3714688/">Trademarked</a>`,
		],

		mod: 'trademarked',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Min Source Gen = 9'],
		banlist: ['Flutter Mane', 'Koraidon', 'Miraidon', 'Slaking', 'Arena Trap', 'Magnet Pull', 'Moody', 'Shadow Tag', 'Baton Pass', 'Revival Blessing'],
		restricted: [
			'Baneful Bunker', 'Block', 'Chilly Reception', 'Copycat', 'Detect', 'Destiny Bond', 'Encore', 'Fairy Lock', 'Ingrain', 'Instruct',
			'Mean Look', 'move:Metronome', 'Parting Shot', 'Protect', 'Roar', 'Silk Trap', 'Spiky Shield', 'Sleep Talk', 'Shed Tail', 'Shell Smash',
			'Substitute', 'Teleport', 'Trick Room', 'Whirlwind',
		],
		onValidateTeam(team, format, teamHas) {
			const problems = [];
			for (const trademark in teamHas.trademarks) {
				if (teamHas.trademarks[trademark] > 1) {
					problems.push(`You are limited to 1 of each Trademark.`, `(You have ${teamHas.trademarks[trademark]} Pok\u00e9mon with ${trademark} as a Trademark.)`);
				}
			}
			return problems;
		},
		validateSet(set, teamHas) {
			const dex = this.dex;
			const ability = dex.moves.get(set.ability);
			if (!ability.exists) { // Not even a real move
				return this.validateSet(set, teamHas);
			}
			// Absolute trademark bans
			if (ability.category !== 'Status') {
				return [`${ability.name} is not a status move and cannot be used as a trademark.`];
			}
			// Contingent trademark bans
			if (this.ruleTable.isRestricted(`move:${ability.id}`)) {
				return [`${ability.name} is restricted from being used as a trademark.`];
			}
			if (set.moves.map(this.toID).includes(ability.id)) {
				return [`${set.name} may not use ${ability.name} as both a trademark and one of its moves simultaneously.`];
			}
			const customRules = this.format.customRules || [];
			if (!customRules.includes('!obtainableabilities')) customRules.push('!obtainableabilities');
			if (!customRules.includes('+noability')) customRules.push('+noability');

			const TeamValidator: typeof import('../sim/team-validator').TeamValidator =
				require('../sim/team-validator').TeamValidator;

			const validator = new TeamValidator(dex.formats.get(`${this.format.id}@@@${customRules.join(',')}`));
			const moves = set.moves;
			set.moves = [ability.id];
			set.ability = 'No Ability';
			let problems = validator.validateSet(set, {}) || [];
			if (problems.length) return problems;
			set.moves = moves;
			set.ability = 'No Ability';
			problems = problems.concat(validator.validateSet(set, teamHas) || []);
			set.ability = ability.id;
			if (!teamHas.trademarks) teamHas.trademarks = {};
			teamHas.trademarks[ability.name] = (teamHas.trademarks[ability.name] || 0) + 1;
			return problems.length ? problems : null;
		},
	},

	// Retro Other Metagames
	///////////////////////////////////////////////////////////////////
	{
		section: "Retro Other Metagames",
		column: 2,
	},
	{
		name: "[Gen 6] Pure Hackmons",
		desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/9029427/">ORAS Pure Hackmons</a>`,
		],

		mod: 'gen6',
		ruleset: ['-Nonexistent', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'EV limit = 510'],
	},

	// Randomized Format Spotlight
	///////////////////////////////////////////////////////////////////

	{
		section: "Randomized Format Spotlight",
		column: 3,
	},
	{
		name: "[Gen 9] Mix and Mega Cup",
		desc: `[Gen 9] Challenge Cup with the Mix and Mega mod. The only items are mega stones, Primal orbs and Rusted items.`,
		mod: 'mixandmega',
		team: 'randomCC',
		ruleset: ['[Gen 9] Challenge Cup 6v6'],
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.originalSpecies = pokemon.baseSpecies.name;
			}
		},
		onSwitchIn(pokemon) {
			// @ts-ignore
			const originalFormeSecies = this.dex.species.get(pokemon.species.originalSpecies);
			if (originalFormeSecies.exists && pokemon.m.originalSpecies !== originalFormeSecies.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, originalFormeSecies.requiredItem || originalFormeSecies.requiredMove, '[silent]');
				const oSpecies = this.dex.species.get(pokemon.m.originalSpecies);
				if (oSpecies.types.length !== pokemon.species.types.length || oSpecies.types[1] !== pokemon.species.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.species.get(pokemon.species.originalSpecies);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				this.add('-end', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
			}
		},
	},

	// Randomized Metas
	///////////////////////////////////////////////////////////////////

	{
		section: "Randomized Metas",
		column: 3,
	},
	{
		name: "[Gen 9] Monotype Random Battle",

		mod: 'gen9',
		team: 'random',
		ruleset: ['Obtainable', 'Same Type Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 9] Random Battle Mayhem",
		desc: `[Gen 9] Random Battle with Team Preview and elements of Camomons, Inverse, Scalemons, and Shared Power.`,

		mod: 'sharedpower',
		team: 'random',
		ruleset: ['[Gen 9] Random Battle', 'Team Preview', 'Camomons Mod', 'Inverse Mod', 'Scalemons Mod'],
		onBeforeSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen9sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				const effect = 'ability:' + ability;
				pokemon.volatiles[effect] = {id: this.toID(effect), target: pokemon};
				if (!pokemon.m.abils) pokemon.m.abils = [];
				if (!pokemon.m.abils.includes(effect)) pokemon.m.abils.push(effect);
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen9sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				if (ability === 'noability') {
					this.hint(`Mirror Armor and Trace break in Shared Power formats that don't use Shared Power as a base, so they get removed from non-base users.`);
				}
				const effect = 'ability:' + ability;
				delete pokemon.volatiles[effect];
				pokemon.addVolatile(effect);
			}
		},
	},
	{
		name: "[Gen 9] Computer-Generated Teams",
		desc: `Teams generated automatically based on heuristics (rules), with levels based on previous success/failure in battle. ` +
			`Not affiliated with Random Battles formats. Some sets will by nature be worse than others, but you can report egregiously bad sets ` +
			`with <a href="https://forms.gle/DYwQN5qGVegz3YU38">this form</a>.`,

		mod: 'gen9',
		team: 'computerGenerated',
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 9] Hackmons Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item.`,

		mod: 'gen9',
		team: 'randomHC',
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Nonexistent'],
	},
	{
		name: "[Gen 9] Doubles Hackmons Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item. Now with TWICE the Pok&eacute;mon per side!`,

		mod: 'gen9',
		team: 'randomHC',
		searchShow: false,
		gameType: 'doubles',
		ruleset: ['[Gen 9] Hackmons Cup'],
	},
	{
		name: "[Gen 9] Broken Cup",
		desc: `[Gen 9] Hackmons Cup but with only the most powerful Pokemon, moves, Abilities, and items.`,

		team: 'randomHC',
		searchShow: false,
		ruleset: ['[Gen 9] Hackmons Cup'],
		banlist: ['All Pokemon', 'All Abilities', 'All Items', 'All Moves'],
		unbanlist: [
			"10,000,000 Volt Thunderbolt", "Abomasnow-Mega", "Absol-Mega", "Accelerock", "Acid Spray", "Adaptability",
			"Aeroblast", "Aerodactyl-Mega", "Aggron", "Aggron-Mega", "Aguav Berry", "Air Balloon", "Air Slash", "Alakazam-Mega",
			"Altaria-Mega", "Ampharos-Mega", "Analytic", "Anchor Shot", "Anger Shell", "Annihilape", "Anticipation", "Apple Acid",
			"Aqua Step", "Arcanine", "Arcanine-Hisui", "Archeops", "Arena Trap", "Armarouge", "Armor Cannon", "Aromatherapy",
			"Articuno", "Articuno-Galar", "Assault Vest", "Astral Barrage", "Attack Order", "Audino-Mega", "Aura Sphere",
			"Axe Kick", "Azelf", "Baddy Bad", "Baneful Bunker", "Banette-Mega", "Barb Barrage", "Basculegion", "Basculegion-F",
			"Baton Pass", "Baxcalibur", "Beads of Ruin", "Beak Blast", "Beast Boost", "Behemoth Bash", "Behemoth Blade",
			"Belly Drum", "Berserk", "Bitter Blade", "Bitter Malice", "Blacephalon", "Blastoise", "Blastoise-Mega", "Blaziken",
			"Blaziken-Mega", "Blazing Torque", "Bleakwind Storm", "Blissey", "Blizzard", "Blue Flare", "Blunder Policy",
			"Body Press", "Body Slam", "Bolt Beak", "Bolt Strike", "Boomburst", "Bouncy Bubble", "Brave Bird", "Bright Powder",
			"Brute Bonnet", "Bug Buzz", "Buginium Z", "Bullet Punch", "Buzzwole", "Buzzy Buzz", "Calm Mind", "Calyrex-Ice",
			"Calyrex-Shadow", "Camerupt-Mega", "Catastropika", "Ceaseless Edge", "Celebi", "Celesteela", "Centiskorch",
			"Ceruledge", "Charizard", "Charizard-Mega-X", "Charizard-Mega-Y", "Chatter", "Chesnaught", "Chesto Berry", "Chi-Yu",
			"Chien-Pao", "Chilan Berry", "Chilly Reception", "Choice Band", "Choice Scarf", "Choice Specs", "Cinderace",
			"Circle Throw", "Clanging Scales", "Clangorous Soul", "Clangorous Soulblaze", "Clear Amulet", "Close Combat",
			"Cloyster", "Cobalion", "Coil", "Collision Course", "Comatose", "Combat Torque", "Competitive", "Compound Eyes",
			"Contrary", "Core Enforcer", "Cosmic Power", "Cotton Guard", "Court Change", "Covert Cloak", "Crabhammer",
			"Cresselia", "Crobat", "Custap Berry", "Dark Pulse", "Darkest Lariat", "Darkinium Z", "Darkrai", "Darmanitan-Galar-Zen",
			"Darmanitan-Zen", "Decidueye", "Decidueye-Hisui", "Defend Order", "Defiant", "Defog", "Delphox", "Deoxys",
			"Deoxys-Attack", "Deoxys-Defense", "Deoxys-Speed", "Desolate Land", "Dialga", "Dialga-Origin", "Diamond Storm",
			"Diancie", "Diancie-Mega", "Dire Claw", "Disable", "Discharge", "Dondozo", "Doom Desire", "Double Iron Bash",
			"Download", "Draco Meteor", "Draco Plate", "Dragapult", "Dragon Ascent", "Dragon Dance", "Dragon Darts",
			"Dragon Energy", "Dragon Hammer", "Dragon Pulse", "Dragon Tail", "Dragonite", "Dragonium Z", "Drain Punch",
			"Dread Plate", "Drill Peck", "Drizzle", "Drought", "Drum Beating", "Dry Skin", "Duraludon", "Dusknoir",
			"Dynamax Cannon", "Earth Eater", "Earth Plate", "Earth Power", "Earthquake", "Eerie Spell", "Effect Spore",
			"Eject Pack", "Electivire", "Electric Surge", "Electrium Z", "Electro Drift", "Emboar", "Empoleon", "Enamorus",
			"Enamorus-Therian", "Encore", "Energy Ball", "Entei", "Eruption", "Espeon", "Esper Wing", "Eternatus",
			"Eternatus-Eternamax", "Exeggutor", "Exeggutor-Alola", "Expanding Force", "Expert Belt", "Explosion",
			"Extreme Evoboost", "Extreme Speed", "Fairium Z", "Fake Out", "Feraligatr", "Fiery Wrath", "Fightinium Z",
			"Figy Berry", "Filter", "Fire Blast", "Fire Lash", "Firium Z", "First Impression", "Fishious Rend", "Fist Plate",
			"Flame Body", "Flame Charge", "Flame Plate", "Flamethrower", "Flare Blitz", "Flareon", "Flash Cannon", "Fleur Cannon",
			"Flip Turn", "Floaty Fall", "Florges", "Flower Trick", "Fluffy", "Flutter Mane", "Flyinium Z", "Focus Blast",
			"Focus Sash", "Forewarn", "Foul Play", "Freeze-Dry", "Freezing Glare", "Freezy Frost", "Frost Breath", "Fur Coat",
			"Fusion Bolt", "Fusion Flare", "Future Sight", "G-Max Cannonade", "G-Max Centiferno", "G-Max Resonance", "G-Max Steelsurge",
			"G-Max Stonesurge", "G-Max Sweetness", "G-Max Vine Lash", "G-Max Volcalith", "G-Max Wildfire", "G-Max Wind Rage",
			"Gallade-Mega", "Garchomp", "Garchomp-Mega", "Gardevoir-Mega", "Gear Grind", "Genesect", "Genesis Supernova",
			"Gengar-Mega", "Gholdengo", "Ghostium Z", "Giga Drain", "Gigaton Hammer", "Giratina", "Giratina-Origin",
			"Glaceon", "Glacial Lance", "Glaive Rush", "Glalie-Mega", "Glare", "Glastrier", "Glimmora", "Glitzy Glow", "Gogoat",
			"Golisopod", "Good as Gold", "Goodra", "Goodra-Hisui", "Gooey", "Gorilla Tactics", "Grassium Z", "Grassy Surge",
			"Grav Apple", "Great Tusk", "Greninja", "Greninja-Ash", "Groudon", "Groudon-Primal", "Groundium Z",
			"Guardian of Alola", "Gunk Shot", "Guzzlord", "Gyarados", "Gyarados-Mega", "Hadron Engine", "Hammer Arm", "Haxorus",
			"Haze", "Head Charge", "Head Smash", "Headlong Rush", "Heal Bell", "Heal Order", "Healing Wish", "Heart Swap",
			"Heat Crash", "Heat Wave", "Heatran", "Heavy-Duty Boots", "Heracross-Mega", "High Horsepower", "High Jump Kick",
			"Hippowdon", "Ho-Oh", "Hoopa", "Hoopa-Unbound", "Horn Leech", "Houndoom-Mega", "Huge Power", "Hurricane", "Hydreigon",
			"Hydro Steam", "Hyper Drill", "Iapapa Berry", "Ice Beam", "Ice Hammer", "Ice Scales", "Ice Shard", "Ice Spinner",
			"Icicle Plate", "Icium Z", "Illusion", "Imposter", "Incineroar", "Infernape", "Innards Out", "Insect Plate",
			"Inteleon", "Intimidate", "Intrepid Sword", "Iron Barbs", "Iron Bundle", "Iron Hands", "Iron Head", "Iron Jugulis",
			"Iron Leaves", "Iron Moth", "Iron Plate", "Iron Thorns", "Iron Treads", "Iron Valiant", "Jet Punch", "Jirachi",
			"Jolteon", "Judgment", "Kangaskhan-Mega", "Kartana", "Keldeo", "Keldeo-Resolute", "King's Rock", "King's Shield",
			"Kingambit", "Kingdra", "Knock Off", "Kommo-o", "Koraidon", "Kyogre", "Kyogre-Primal", "Kyurem", "Kyurem-Black",
			"Kyurem-White", "Landorus", "Landorus-Therian", "Lapras", "Last Respects", "Latias", "Latias-Mega", "Latios",
			"Latios-Mega", "Lava Plume", "Leaf Blade", "Leaf Storm", "Leafeon", "Leech Life", "Leech Seed", "Leftovers",
			"Leppa Berry", "Let's Snuggle Forever", "Levitate", "Libero", "Liechi Berry", "Life Orb", "Light Screen",
			"Light That Burns the Sky", "Light of Ruin", "Lightning Rod", "Liquidation", "Lopunny-Mega", "Lovely Kiss",
			"Low Kick", "Lucario", "Lucario-Mega", "Lugia", "Lum Berry", "Lumina Crash", "Lunala", "Lunar Blessing",
			"Lunar Dance", "Lunge", "Mach Punch", "Magearna", "Magic Bounce", "Magic Guard", "Magical Torque", "Magma Storm",
			"Magmortar", "Magnezone", "Mago Berry", "Make It Rain", "Malicious Moonsault", "Mamoswine", "Manaphy",
			"Manectric-Mega", "Marshadow", "Max Guard", "Meadow Plate", "Megahorn", "Meganium", "Melmetal", "Meloetta",
			"Meloetta-Pirouette", "Memento", "Menacing Moonraze Maelstrom", "Mental Herb", "Meowscarada", "Mesprit", "Metagross",
			"Metagross-Mega", "Meteor Beam", "Meteor Mash", "item: Metronome", "Mew", "Mewtwo", "Mewtwo-Mega-X", "Mewtwo-Mega-Y",
			"Milk Drink", "Milotic", "Mind Plate", "Minimize", "Miraidon", "Mirror Herb", "Misty Explosion", "Misty Surge",
			"Mold Breaker", "Moltres", "Moltres-Galar", "Moody", "Moonblast", "Moongeist Beam", "Moonlight", "Morning Sun",
			"Mortal Spin", "Mountain Gale", "Moxie", "Multiscale", "Muscle Band", "Mystical Fire", "Mystical Power", "Naganadel",
			"Nasty Plot", "Nature's Madness", "Necrozma", "Necrozma-Dawn-Wings", "Necrozma-Dusk-Mane", "Necrozma-Ultra",
			"Neutralizing Gas", "Night Daze", "Night Shade", "Nihilego", "No Retreat", "Noivern", "Normalium Z", "Noxious Torque",
			"Nuzzle", "Oblivion Wing", "Obstruct", "Oceanic Operetta", "Octolock", "Opportunist", "Orichalcum Pulse",
			"Origin Pulse", "Outrage", "Overdrive", "Overheat", "Palafin-Hero", "Palkia", "Palkia-Origin", "Parental Bond",
			"Parting Shot", "Perish Body", "Petaya Berry", "Pheromosa", "Photon Geyser", "Pidgeot-Mega", "Pinsir-Mega",
			"Pixie Plate", "Plasma Fists", "Play Rough", "Poison Heal", "Poisonium Z", "Pollen Puff", "Poltergeist",
			"Population Bomb", "Porygon-Z", "Power Gem", "Power Trip", "Power Whip", "Prankster", "Precipice Blades", "Primarina",
			"Primordial Sea", "Probopass", "Protean", "Protect", "Psyblade", "Psychic Fangs", "Psychic Surge", "Psychic",
			"Psychium Z", "Psycho Boost", "Psyshield Bash", "Psystrike", "Pulverizing Pancake", "Pure Power", "Purifying Salt",
			"Pursuit", "Pyro Ball", "Quaquaval", "Quick Claw", "Quiver Dance", "Rage Fist", "Raging Bull", "Raging Fury", "Raikou",
			"Rapid Spin", "Rayquaza", "Rayquaza-Mega", "Razor Claw", "Recover", "Red Card", "Reflect", "Regenerator", "Regice",
			"Regidrago", "Regieleki", "Regigigas", "Regirock", "Registeel", "Reshiram", "Rest", "Revelation Dance",
			"Revival Blessing", "Rhyperior", "Rillaboom", "Roaring Moon", "Rockium Z", "Rocky Helmet", "Roost", "Rough Skin",
			"Ruination", "Sacred Fire", "Sacred Sword", "Salac Berry", "Salamence", "Salamence-Mega", "Salt Cure", "Samurott",
			"Samurott-Hisui", "Sandsear Storm", "Sandy Shocks", "Sap Sipper", "Sappy Seed", "Scald", "Sceptile", "Sceptile-Mega",
			"Scizor-Mega", "Scope Lens", "Scream Tail", "Searing Shot", "Searing Sunraze Smash", "Secret Sword", "Seed Flare",
			"Seismic Toss", "Serene Grace", "Serperior", "Shadow Ball", "Shadow Bone", "Shadow Shield", "Shadow Sneak",
			"Shadow Tag", "Sharpedo-Mega", "Shaymin", "Shaymin-Sky", "Shed Tail", "Sheer Force", "Shell Side Arm",
			"Shell Smash", "Shield Dust", "Shift Gear", "Silk Scarf", "Silk Trap", "Silvally", "Simple", "Sinister Arrow Raid",
			"Sitrus Berry", "Sizzly Slide", "Skeledirge", "Sky Plate", "Slack Off", "Slaking", "Sleep Powder", "Slither Wing",
			"Slowbro-Mega", "Sludge Bomb", "Sludge Wave", "Snarl", "Snipe Shot", "Snorlax", "Soft-Boiled", "Solgaleo",
			"Solid Rock", "Soul-Heart", "Soul-Stealing 7-Star Strike", "Spacial Rend", "Sparkly Swirl", "Spectral Thief",
			"Spectrier", "Speed Boost", "Spikes", "Spiky Shield", "Spin Out", "Spirit Break", "Spirit Shackle", "Splash Plate",
			"Splintered Stormshards", "Splishy Splash", "Spooky Plate", "Spore", "Springtide Storm", "Stakataka", "Stakeout",
			"Stamina", "Stealth Rock", "Steam Eruption", "Steelium Z", "Steelix-Mega", "Sticky Web", "Stoked Sparksurfer",
			"Stone Axe", "Stone Edge", "Stone Plate", "Stored Power", "Storm Drain", "Storm Throw", "Strange Steam",
			"Strength Sap", "Sucker Punch", "Suicune", "Sunsteel Strike", "Super Fang", "Superpower", "Supreme Overlord", "Surf",
			"Surging Strikes", "Swampert", "Swampert-Mega", "Sword of Ruin", "Swords Dance", "Sylveon", "Synthesis",
			"Tablets of Ruin", "Tail Glow", "Tangrowth", "Tapu Bulu", "Tapu Fini", "Tapu Koko", "Tapu Lele", "Taunt",
			"Techno Blast", "Teleport", "Tera Blast", "Teravolt", "Terrakion", "Thick Fat", "Thousand Arrows", "Thousand Waves",
			"Throat Spray", "Thunder Cage", "Thunder Wave", "Thunder", "Thunderbolt", "Thunderous Kick", "Thundurus", "Thundurus-Therian",
			"Tidy Up", "Ting-Lu", "Tinted Lens", "Togekiss", "Topsy-Turvy", "Torch Song", "Tornadus", "Tornadus-Therian", "Torterra",
			"Tough Claws", "Toxic Debris", "Toxic Plate", "Toxic Spikes", "Toxic", "Tri Attack", "Triage", "Triple Arrows",
			"Triple Axel", "Turboblaze", "Type: Null", "Typhlosion", "Typhlosion-Hisui", "Tyranitar", "Tyranitar-Mega", "U-turn",
			"Umbreon", "Unaware", "Unburden", "Ursaluna", "Urshifu", "Urshifu-Rapid-Strike", "Uxie", "V-create", "Vanilluxe",
			"Vaporeon", "Venusaur", "Venusaur-Mega", "Vessel of Ruin", "Victini", "Victory Dance", "Virizion", "Volcanion",
			"Volcarona", "Volt Absorb", "Volt Switch", "Volt Tackle", "Walking Wake", "Walrein", "Water Absorb", "Water Bubble",
			"Water Shuriken", "Water Spout", "Waterfall", "Waterium Z", "Wave Crash", "Weakness Policy", "Well-Baked Body",
			"White Herb", "Wicked Blow", "Wicked Torque", "Wide Lens", "Wiki Berry", "Wild Charge", "Wildbolt Storm",
			"Will-O-Wisp", "Wise Glasses", "Wish", "Wishiwashi-School", "Wo-Chien", "Wonder Guard", "Wood Hammer", "Wyrdeer",
			"Xerneas", "Xurkitree", "Yawn", "Yveltal", "Zacian", "Zacian-Crowned", "Zamazenta", "Zamazenta-Crowned", "Zap Plate",
			"Zapdos", "Zapdos-Galar", "Zarude", "Zekrom", "Zeraora", "Zing Zap", "Zippy Zap", "Zygarde", "Zygarde-Complete",
		],
	},
	{
		name: "[Gen 9] Challenge Cup 1v1",

		mod: 'gen9',
		team: 'randomCC',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Terastal Clause', 'Picked Team Size = 1'],
	},
	{
		name: "[Gen 9] Challenge Cup 2v2",

		mod: 'gen9',
		team: 'randomCC',
		gameType: 'doubles',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Picked Team Size = 2'],
	},
	{
		name: "[Gen 9] Challenge Cup 6v6",

		mod: 'gen9',
		team: 'randomCC',
		searchShow: false,
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod'],
	},

	// Metronome Battle
	///////////////////////////////////////////////////////////////////

	{
		section: "Metronome Battle",
		column: 3,
	},
	{
		name: '[Gen 9] Metronome Battle',
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3632075/">Metronome Battle</a>`,
		],

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Max Team Size = 2', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: [
			'Pokestar Spirit', 'Shedinja + Sturdy', 'Cheek Pouch', 'Commander', 'Cursed Body', 'Dry Skin', 'Earth Eater', 'Fur Coat', 'Gorilla Tactics',
			'Grassy Surge', 'Huge Power', 'Ice Body', 'Iron Barbs', 'Moody', 'Neutralizing Gas', 'Opportunist', 'Parental Bond', 'Perish Body', 'Poison Heal',
			'Power Construct', 'Pressure', 'Pure Power', 'Rain Dish', 'Rough Skin', 'Sand Spit', 'Sand Stream', 'Seed Sower', 'Stamina',
			'Volt Absorb', 'Water Absorb', 'Wonder Guard', 'Aguav Berry', 'Assault Vest', 'Berry', 'Berry Juice', 'Berserk Gene',
			'Black Sludge', 'Enigma Berry', 'Figy Berry', 'Gold Berry', 'Iapapa Berry', 'Kangaskhanite', 'Leftovers', 'Mago Berry', 'Medichamite',
			'Steel Memory', 'Oran Berry', 'Rocky Helmet', 'Shell Bell', 'Sitrus Berry', 'Wiki Berry', 'Harvest + Jaboca Berry',
			'Harvest + Rowap Berry',
		],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			if (species.types.includes('Steel')) {
				return [`${species.name} is a Steel-type, which is banned from Metronome Battle.`];
			}
			if (set.teraType === 'Steel') {
				return [`${species.name} has Steel as its Tera type, which is banned from Metronome Battle.`];
			}
			if (species.bst > 625) {
				return [`${species.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`];
			}
			const item = this.dex.items.get(set.item);
			if (set.item && item.megaStone) {
				const megaSpecies = this.dex.species.get(item.megaStone);
				if (species.baseSpecies === item.megaEvolves && megaSpecies.bst > 625) {
					return [
						`${set.name || set.species}'s item ${item.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`,
					];
				}
			}
			if (set.moves.length !== 1 || this.dex.moves.get(set.moves[0]).id !== 'metronome') {
				return [`${set.name || set.species} has illegal moves.`, `(Pok\u00e9mon can only have one Metronome in their moveset)`];
			}
		},
	},

];
