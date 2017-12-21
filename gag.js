const CATEGORIES = ["hammer", "pillar", "game", "tree"];
const ITEMS = [
	["Sharing", "Praising", "Voting", "Trading", "Healing", "Cooperating", "Singing", "Subverting", "Nurturing", "Creating", "Avoiding", "Boasting", "Collecting", "Complaining", "Deceiving", "Delaying", "Destroying", "Disarming", "Embarassing", "Exploiting", "Harassing", "Haunting", "Jamming", "Melting", "Protecting", "Punishing", "Smashing", "Tempting", "Walking", "Yelling"],
	["Sexism\n(stereotypes of and discrimination based on sexual roles)\nstrategies: education, awareness, legislation", "Colonialism\n(exploitation of one group by people of another)\nstrategies: economic, political, or cultural resistance", "Racism\n(personal and instituional discrimination based on race, belief in the superiority of one race)\nstrategies: education, diversification, legislation", "Food Politics\n(GMO crops, factory farming, low availability of quality foods in low-income neighborhoods)\nstrategies: incentives for sustainable agriculture, food co-ops", "Displacement\n(forced relocation, refugess, migrant workers)\nstrategies: security, economic developement", "Pollution\n(toxic waste, emissions, trash, unclean air)\nstrategies: clean-ups, legislation, incentives for sustainable practices", "Crime\n(theft, abuse, violence, corruption)\nstrategies: community developement, law enforcement", "Social Inequality\n(income disparity, technological divides, gentrification, lack of healthcare, targeting by police)\nstrategies: income redistribution, welfare programs, anarchosyndicalism", "Addiction\n(destructive dependence on drugs, alcohol, wealth, pleasure, etc.)\nstrategies: emotional support, counseling, peer pressure", "Disease\n(HIV/ADIS, epidemics, diabetes, cancer, healthcare)\nstrategies: medical research, government investment, public education"],
	["Super Mario Brothers\naracede scrolling platform game\nevade or destroy enemies\nrun and jump from platform to platform\nsuper power modes", "Asteroids\narcade shooting game\nmoving field of asteroids\nevade or destroy objects\nplayer-controlled starship\nlaser, rotation, thrusters and teleportation", "Gran Tourismo\narcade car racing game\ncompete against the computer or other players\nwin prize money to upgrade car", "Centipede\narcade shooting game\nevade or destroy enemies\nchanging field of mushrooms\nlaser weapon\nenemy morphs or divides when hit", "Pac-Man\narcade maze game\nnavigate maze\nevade or temporarily destroy enemies\nconsume all dots on screen to advance", "Tetris\naracde puzzle game\nmatchfalling pieces to form solid rows\nsolid rows disapear to make room for more pieces", "Quake\nfirst person shooter\nevade or destroy enemies\nmultiple weapons\nmultiple levels", "Myst\nsingle-player adventure puzzle game\nsolve story puzzles\nexplore immersive worlds\nlogic and skill puzzles","Scrabble\nturn-base board game\nspell words with lettered tiles\nlarger words earn more points", "Monopoly\nturn-base board game\nacquire wealth and property\nbankrupt opponents\nbuy, sell, trade develop and rent properties", "Age of Empires\nreal time strategy game\ncommand armiesin battle\nconquer foes to acquire new territory\nlead a civilization through increasing technological developement", "Portal\nfirst-person puzzle game\nsue a teleportation gun to overcome obstacles\nexcape from scientific laboratory", "Manhunt\nthird-person stealth game\navoid detection while eliminationg enemies\nuse variety of weapons to brutally kill", "World of Warcraft\nmassively multiplayer online role playing game\ncreate a hero or villain and work in groups to complete quests\nearn money and upgrade weapons, equipment and skills", "The Sims\nstrategic life-simulation game\nmanage daily lives of avatars\nkeeps Sims happy and fullfilled by balancing work, recreation and romance", "Donkey Kong\nplatform game\njump over barrels while ascending series of ramps and ladders", "Grand Theft Auto\nsandbox-style action adventure game\ncomplete missions involving criminal activity in an open, non-linear world to increase your status\nuse a variety of weapons and unarmed combat\ncomplete various side mission", "Guitar Hero\nmusic game\nmanipulate a guitar-style controller to match on-screen cues\nkeep the crowd excited by playing accurately", "Sonic the Hedgehog\nside-scrolling platform game\nhigh-speed gameplay\nrun through levels avoiding obstacles\necological theme", "Katamari Damacy\nthird-person puzzle action game\ncollect objects by rolling them together into a ball\ncollect objects to create clusters of a certain size in the time limit"],
	["Accountability", "Autonomy", "Community", "Confidence", "Creativity", "Democracy", "Dignity", "Efficiency", "Egalitarianism", "Freedom", "Generosity", "Happiness", "Humility", "Humor", "Individualism", "Justice", "Liberty", "Openmindedness", "Peace", "Preserverance", "Privacy", "Respect", "Style", "Sustainability", "Sympathy", "Status", "Tenacity", "Tradition", "Trust", "Wealth"],
];

window.onload = function(e){
	var cards = document.getElementsByClassName('card');

	Array.from(cards).forEach(function(card){
		loadCard(card);
		card.addEventListener('click', function(event){
			loadCard(this);
		});
	});
}

function loadCard(div){
	div.innerText = "";
	classes = Array.from(div.classList);
	
	classes.forEach(function(category){
		if(CATEGORIES.indexOf(category) > -1){
			loadCategoryCard(div, category);
			return;
		}
	});
}

function loadCategoryCard(div, category){
	var idx_cat = CATEGORIES.indexOf(category);
	var l = ITEMS[idx_cat].length;
	var item = ITEMS[idx_cat][Math.floor(l*Math.random())];

	var strings = item.split("\n");
	var i = 0;
	var inn = document.createElement('h2');
	
	switch(category) {
		case "hammer": inn.innerText = "Action"; break;
		case "pillar": inn.innerText = "Challenge"; break;
		case "game":   inn.innerText = "Game"; break;
		case "tree":   inn.innerText = "Goals"; break;
	}
	div.appendChild(inn)
	strings.forEach(function(s){
		var inner = document.createElement(i==0?'h3':'div');
		inner.innerText = s;
		div.appendChild(inner);
		i++;
	});
}
