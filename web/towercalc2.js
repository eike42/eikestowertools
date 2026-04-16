const coinbonus = [0,1,1.8,2.6,3.4,4.2,5.0,5.8,6.6,7.5,8.7,10.3,12.2,14.7,17.6,21.3];

const EB_MODIFIER = [1,1.3,1.4,1.5,1.6,1.7,1.8,1.9];
const WS_MODIFIER = [0,9,10,11,13,15,17,19];
const WA_MASTERY = [1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2];
const EB_MASTERY = [6,12,18,24,30,36,42,48,54,60];

const elite_proc = [
0,
0.33,
1.33,
3,
5,
8,
12,
16,
21,
27,
33
]

const elite_1 =  [
    {
      "T": "T1",
      "values": [0, 500, 1000, 1500, 2000, 3000, 4000, 5000, 6000, 7000, 8000]
    },
    {
      "T": "T2",
      "values": [0, 450, 900, 1350, 1800, 2700, 3600, 4500, 5400, 6300, 7200]
    },
    {
      "T": "T3",
      "values": [0, 405, 810, 1215, 1620, 2430, 3240, 4050, 4860, 5670, 6480]
    },
    {
      "T": "T4",
      "values": [0, 365, 729, 1094, 1458, 2187, 2916, 3645, 4374, 5103, 5832]
    },
    {
      "T": "T5",
      "values": [0, 328, 656, 984, 1312, 1968, 2624, 3281, 3937, 4593, 5249]
    },
    {
      "T": "T6",
      "values": [0, 295, 590, 886, 1181, 1771, 2362, 2952, 3543, 4133, 4724]
    },
    {
      "T": "T7",
      "values": [0, 266, 531, 797, 1063, 1594, 2126, 2657, 3189, 3720, 4252]
    },
    {
      "T": "T8",
      "values": [0, 239, 478, 717, 957, 1435, 1913, 2391, 2870, 3348, 3826]
    },
    {
      "T": "T9",
      "values": [0, 215, 430, 646, 861, 1291, 1722, 2152, 2583, 3013, 3444]
    },
    {
      "T": "T10",
      "values": [0, 194, 387, 581, 775, 1162, 1550, 1937, 2325, 2712, 3099]
    },
    {
      "T": "T11",
      "values": [0, 174, 349, 523, 697, 1046, 1395, 1743, 2092, 2441, 2789]
    },
    {
      "T": "T12",
      "values": [0, 157, 314, 471, 628, 941, 1255, 1569, 1883, 2197, 2510]
    },
    {
      "T": "T13",
      "values": [0, 141, 282, 424, 565, 847, 1130, 1412, 1695, 1977, 2259]
    },
    {
      "T": "T14",
      "values": [0, 127, 254, 381, 508, 763, 1017, 1271, 1525, 1779, 2033]
    },
    {
      "T": "T15",
      "values": [0, 114, 229, 343, 458, 686, 915, 1144, 1373, 1601, 1830]
    },
    {
      "T": "T16",
      "values": [0, 41, 102, 205, 308, 411, 617, 823, 1029, 1235, 1441]
    },
    {
      "T": "T17",
      "values": [0, 37, 92, 185, 277, 370, 555, 741, 926, 1111, 1297]
    },
    {
      "T": "T18",
      "values": [0, 33, 83, 166, 250, 333, 500, 667, 833, 1000, 1167]
    }
  ];

const elite_2 = [
    {
      "T": "T1",
      "values": [0, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000]
    },
    {
      "T": "T2",
      "values": [0, 7200, 8100, 9000, 9900, 10800, 11700, 12600, 13500, 14400, 15300]
    },
    {
      "T": "T3",
      "values": [0, 6480, 7290, 8100, 8910, 9720, 10530, 11340, 12150, 12960, 13770]
    },
    {
      "T": "T4",
      "values": [0, 5832, 6561, 7290, 8019, 8748, 9477, 10206, 10935, 11664, 12393]
    },
    {
      "T": "T5",
      "values": [0, 5249, 5905, 6561, 7217, 7873, 8529, 9185, 9841, 10497, 11153]
    },
    {
      "T": "T6",
      "values": [0, 4724, 5314, 5905, 6495, 7086, 7676, 8267, 8857, 9448, 10038]
    },
    {
      "T": "T7",
      "values": [0, 4252, 4783, 5314, 5846, 6377, 6909, 7440, 7972, 8503, 9034]
    },
    {
      "T": "T8",
      "values": [0, 3826, 4305, 4783, 5261, 5740, 6218, 6696, 7174, 7653, 8131]
    },
    {
      "T": "T9",
      "values": [0, 3444, 3874, 4305, 4735, 5166, 5596, 6027, 6457, 6887, 7318]
    },
    {
      "T": "T10",
      "values": [0, 3099, 3487, 3874, 4262, 4649, 5036, 5424, 5811, 6199, 6586]
    },
    {
      "T": "T11",
      "values": [0, 2789, 3138, 3487, 3835, 4184, 4533, 4881, 5230, 5579, 5928]
    },
    {
      "T": "T12",
      "values": [0, 2510, 2824, 3138, 3452, 3766, 4080, 4394, 4708, 5022, 5336]
    },
    {
      "T": "T13",
      "values": [0, 2259, 2542, 2824, 3107, 3389, 3672, 3954, 4236, 4519, 4801]
    },
    {
      "T": "T14",
      "values": [0, 2033, 2288, 2542, 2796, 3050, 3304, 3559, 3813, 4067, 4321]
    },
    {
      "T": "T15",
      "values": [0, 1830, 2059, 2288, 2516, 2745, 2974, 3203, 3432, 3660, 3889]
    },
    {
      "T": "T16",
      "values": [0, 1441, 1647, 1853, 2058, 2264, 2470, 2676, 2882, 3088, 3294]
    },
    {
      "T": "T17",
      "values": [0, 1297, 1482, 1667, 1853, 2038, 2223, 2408, 2594, 2779, 2964]
    },
    {
      "T": "T18",
      "values": [0, 1167, 1334, 1500, 1667, 1834, 2001, 2168, 2334, 2501, 2668]
    }
  ];
  
  
function AddElites(tier,wave,total,wsLevel,ebLevel, )
{
	elites = 0;
	for(var i=1;i<11;i++)
	{
		perc = elite_proc[i] / 100;
		wave_this = elite_1[tier-1].values[i];
		wave_next = i==10 ? 1000000 : elite_1[tier-1].values[i+1];
		var waves_in_class = Math.min(wave, wave_next) - Math.min(wave,wave_this);
		waves_in_class *= 1 - (WS_MODIFIER[wsLevel] / 100);
		elites += waves_in_class * perc;
	}
	// double spawn
	for(var i=1;i<11;i++)
	{
		perc = elite_proc[i] / 100;
		wave_this = elite_2[tier-1].values[i];
		wave_next = i==10 ? 1000000 : elite_2[tier-1].values[i+1];
		var waves_in_class = Math.min(wave, wave_next) - Math.min(wave,wave_this);
		waves_in_class *= 1 - (WS_MODIFIER[wsLevel] / 100);
		elites += waves_in_class * perc;
	}
	total.vampire = Math.ceil(elites);
	total.ray = Math.ceil(elites);
	total.scatter = Math.ceil(elites * 31);
	total.spawns += total.vampire + total.ray + total.scatter;
}

  
function AddElites2(tier,wave,total,skipfactor,ebLevel, ebmastery)
{
	if(!ebmastery) ebmastery = 1;
	elites = 0;
	for(var i=1;i<11;i++)
	{
		perc = elite_proc[i] / 100;
		wave_this = elite_1[tier-1].values[i];
		wave_next = i==10 ? 1000000 : elite_1[tier-1].values[i+1];
		var waves_in_class = Math.min(wave, wave_next) - Math.min(wave,wave_this);
		waves_in_class *= skipfactor;
		elites += waves_in_class * perc;
	}
	// double spawn
	for(var i=1;i<11;i++)
	{
		perc = elite_proc[i] / 100;
		wave_this = elite_2[tier-1].values[i];
		wave_next = i==10 ? 1000000 : elite_2[tier-1].values[i+1];
		var waves_in_class = Math.min(wave, wave_next) - Math.min(wave,wave_this);
		waves_in_class *= skipfactor;
		elites += waves_in_class * perc;
	}
	total.vampire = Math.ceil(elites * ebmastery);
	total.ray = Math.ceil(elites * ebmastery);
	total.scatter = Math.ceil(elites * 31 * ebmastery);
	total.spawns += total.vampire + total.ray + total.scatter;
}

const SPAWN_THRESHOLDS = [
  0,
  1,
  3,
  6,
  20,
  40,
  60,
  80,
  100,
  150,
  160,
  200,
  250,
  300,
  320,
  400,
  600,
  750,
  800,
  1000,
  1250,
  1500,
  2000,
  2500,
  3000,
  3500,
  4000,
  4500,
  5000,
  5500,
  6000,
  6500,
  Number.POSITIVE_INFINITY,
];

function getTotalHealth(spawns, hp, amount)
{
	var t = spawns.spawns * hp + spawns.tank * hp * 4+ spawns.boss * hp * 20;
	return t * amount;
}

function waveSpawns(
  wave,
  ebLevel,
  wsLevel,
  tier,
  iswaves,
  wamastery
) {

  
  var waincrease = 1;
  if(wamastery >=0)
    waincrease = WA_MASTERY[wamastery];

  var INDIVIDUAL_THRESHHOLDS=[];
  for (let i = 0; i < SPAWN_THRESHOLDS.length; i++) {
    if(SPAWN_THRESHOLDS[i] == Number.POSITIVE_INFINITY) 
      INDIVIDUAL_THRESHHOLDS.push(Number.POSITIVE_INFINITY)
    else
      INDIVIDUAL_THRESHHOLDS.push(parseInt(SPAWN_THRESHOLDS[i] / waincrease));
  }

  // ignores protectors

  // Define spawn rates for each threshold range
  const spawnRateTable = [
    { fast: 5, tank: 0, ranged: 0, spawn: 10 },    // 0
    { fast: 5, tank: 2, ranged: 0, spawn: 11 },    // 3
    { fast: 6, tank: 4, ranged: 1, spawn: 13 },    // 6
    { fast: 7, tank: 6, ranged: 2, spawn: 15 },    // 20
    { fast: 8, tank: 7, ranged: 3, spawn: 17 },    // 40
    { fast: 9, tank: 8, ranged: 4, spawn: 19 },    // 60
    { fast: 10, tank: 8, ranged: 5, spawn: 20 },   // 80
    { fast: 10, tank: 9, ranged: 6, spawn: 22 },   // 100
    { fast: 11, tank: 10, ranged: 6, spawn: 24 },  // 150
    { fast: 11, tank: 10, ranged: 6, spawn: 24 },  // 160
    { fast: 12, tank: 11, ranged: 7, spawn: 26 },  // 200
    { fast: 12, tank: 12, ranged: 7, spawn: 28 },  // 250
    { fast: 12, tank: 13, ranged: 8, spawn: 30 },  // 300
    { fast: 12, tank: 13, ranged: 8, spawn: 30 },  // 320
    { fast: 13, tank: 13, ranged: 9, spawn: 32 },  // 400
    { fast: 13, tank: 14, ranged: 10, spawn: 34 }, // 600
    { fast: 13, tank: 14, ranged: 10, spawn: 34 }, // 750
    { fast: 13, tank: 14, ranged: 11, spawn: 36 }, // 800
    { fast: 14, tank: 15, ranged: 11, spawn: 37 }, // 1000
    { fast: 15, tank: 16, ranged: 11, spawn: 38 }, // 1250
    { fast: 15, tank: 16, ranged: 14, spawn: 39 }, // 1500
    { fast: 17, tank: 17, ranged: 14, spawn: 40 }, // 2000
    { fast: 18, tank: 18, ranged: 15, spawn: 42 }, // 2500
    { fast: 19, tank: 19, ranged: 16, spawn: 44 }, // 3000
    { fast: 20, tank: 19, ranged: 17, spawn: 46 }, // 3500
    { fast: 21, tank: 20, ranged: 18, spawn: 48 }, // 4000
    { fast: 21, tank: 20, ranged: 19, spawn: 49 }, // 4500
    { fast: 22, tank: 20, ranged: 19, spawn: 50 }, // 5000
    { fast: 23, tank: 21, ranged: 19, spawn: 52 }, // 5500
    { fast: 24, tank: 21, ranged: 20, spawn: 54 }, // 6000
    { fast: 24, tank: 22, ranged: 21, spawn: 56 }, // 6500
    { fast: 24, tank: 22, ranged: 21, spawn: 56 }, // >6500 (overflow)
  ];

  // Find the correct threshold index for the current wave
  let idx = 0;
  for (let i = 1; i < INDIVIDUAL_THRESHHOLDS.length; i++) {
    if (wave < INDIVIDUAL_THRESHHOLDS[i]) {
      idx = i - 2;
      break;
    }
    // If wave is above all thresholds, use the last
    if (i === INDIVIDUAL_THRESHHOLDS.length - 1) {
      idx = spawnRateTable.length - 1;
    }
  }

  if(wave==0) idx = 0;

  // Clamp index to available spawnRateTable
  if (idx >= spawnRateTable.length) idx = spawnRateTable.length - 1;

  const { fast, tank, ranged, spawn } = spawnRateTable[idx];

  // Protector logic
  let protectorRate = tier == 1 ? 0 :
    wave >= 750 ? 4 :
    wave >= 320 ? 3 :
    wave >= 160 ? 2 :
    wave >= 80 ? 1 : 0;

  if (tier >= 12) protectorRate++;
  if (tier >= 13) protectorRate++;

  protectorRate = 0; // always 0 as in original

  const basicRate = 100 - (fast + tank + ranged + protectorRate);
  let spawns = spawn * EB_MODIFIER[ebLevel] * 2;
  const isBossWave = wave % 10 === 0;
  const boss = isBossWave ? 1 : 0;
  let basic = Math.floor((basicRate * spawns) / 100 - boss);
  let fastCount = Math.floor((fast * spawns) / 100);
  let tankCount = Math.floor((tank * spawns) / 100);
  let rangedCount = Math.floor((ranged * spawns) / 100);
  let protectors = Math.floor((protectorRate * spawns) / 100);

  if (iswaves > wave) {
    spawns = spawns / 10;
    basic = basic / 10;
    fastCount = fastCount / 10;
    tankCount = tankCount / 10;
    rangedCount = rangedCount / 10;
    protectors = protectors / 10;
  }

  return {
    spawns: spawns,
    basic: basic,
    fast: fastCount,
    tank: tankCount,
    ranged: rangedCount,
    boss: boss,
    protector: protectors
  };
};

function CoinsPerWave(
	maxwave,
	ebLevel,
	wsLevel,
	Multiplier,
	coinPerk,
	GTPerk,
	CTP,
)
{
	result = [];
	
	sumcoins = 0;
	multi = 1;
	
	for(var i=1;i<=maxwave;i++)
	{
		const spawns = waveSpawns(i, ebLevel, wsLevel);
		var coins = getCoins(spawns, Multiplier)
		sumcoins+=coins * multi;
		
		result.push([i,sumcoins]);
		
		if(i == GTPerk) multi *= 1.5;
		if(i == CTP) multi *= 1.8;
		if(coinPerk.indexOf(i)!=-1) multi *= 1.15;
	}
	return result;
}

function calcCPM(coins)
{
	var res=[];
	var last=[], moving = 0;
	// waves per minute = 10
	for(var i=1;i<coins.length;i++)
	{
		if(last.length==50) 
			moving -= last.shift();
		
		last.push(coins[i][1] - coins[i-1][1]);
		moving += coins[i][1] - coins[i-1][1];
		res.push([i,moving * 200]);
	}
	
	return res;

	
	
	
}

function getCoins(spawns, Multiplier)
{
	return Multiplier * (spawns.fast * 2 + spawns.tank * 4 +  spawns.ranged * 2 +  spawns.boss * 5);
}



function totalSpawns2(
  wave,
  ebLevel,
  skips,
  tier,
  iswaves,
  wamastery,
  ebmastery
)
{
  if(!iswaves) iswaves = 0;
  if(!ebmastery) ebmastery = -1;
  var skipfactor= 1 - skips/wave;
  var total = {
    spawns: 0,
    basic: 0,
    fast: 0,
    tank: 0,
    ranged: 0,
    boss: 0,
	//protector:0,
	skipped: (1 - skipfactor) *  wave
  };
  
  var waincrease = 1;
  var ebincrease = 1;
  if(wamastery >=0)
    waincrease = WA_MASTERY[wamastery];

  if(ebmastery >=0)
	  ebincrease = EB_MASTERY[ebmastery] / 100 + 1;

  var myTHRESHOLDS = [];
  // create copy of SPAWN_THRESHOLDS, but every values is divided by waincrease
  for (let i = 0; i < SPAWN_THRESHOLDS.length; i++) {
    if(SPAWN_THRESHOLDS[i] == Number.POSITIVE_INFINITY) 
      myTHRESHOLDS.push(Number.POSITIVE_INFINITY)
    else
      myTHRESHOLDS.push(parseInt(SPAWN_THRESHOLDS[i] / waincrease));
  }


  if(iswaves!=0) myTHRESHOLDS.push(iswaves);
  myTHRESHOLDS.sort(function (a, b) {  return a - b;  });

  let previousThresholdWave = 0;
  for (let threshold = 0; threshold < myTHRESHOLDS.length; threshold += 1) {
    const thresholdWave = myTHRESHOLDS[threshold];
    const cutoffWave = Math.min(thresholdWave, wave);
    const spawnsForThreshold = waveSpawns(cutoffWave, ebLevel, skipfactor, tier, iswaves, wamastery);
    console.log(spawnsForThreshold);
    const wavesSincePrevious = cutoffWave - previousThresholdWave;
    total.spawns += spawnsForThreshold.spawns * wavesSincePrevious * skipfactor;
    total.basic += spawnsForThreshold.basic * wavesSincePrevious * skipfactor;
    total.fast += spawnsForThreshold.fast * wavesSincePrevious * skipfactor;
    total.tank += spawnsForThreshold.tank * wavesSincePrevious * skipfactor;
    total.ranged += spawnsForThreshold.ranged * wavesSincePrevious * skipfactor;
    //total.protector += spawnsForThreshold.protector * wavesSincePrevious * skipfactor;
    total.boss +=
      (Math.floor(cutoffWave / 10) - Math.floor(previousThresholdWave / 10)) * skipfactor;

    if (wave <= thresholdWave) break;

    previousThresholdWave = thresholdWave;
  }
  AddElites2(tier,wave,total,skipfactor,ebLevel ,ebincrease);

  return total;
};





function totalSpawns(
  wave,
  ebLevel,
  skips,
  tier,
  iswaves
)
{
  if(!iswaves) iswaves = 0;
  var  skipfactor= 1 - skips/wave;
  var total = {
    spawns: 0,
    basic: 0,
    fast: 0,
    tank: 0,
    ranged: 0,
    boss: 0,
	//protector:0,
	skipped: skipfactor * wave
  };
  
  var myTHRESHOLDS = SPAWN_THRESHOLDS.slice();

  if(iswaves!=0) myTHRESHOLDS.push(iswaves);
  myTHRESHOLDS.sort(function (a, b) {  return a - b;  });

  let previousThresholdWave = 0;
  for (let threshold = 0; threshold < myTHRESHOLDS.length; threshold += 1) {
    const thresholdWave = myTHRESHOLDS[threshold];
    const cutoffWave = Math.min(thresholdWave, wave);
    const spawnsForThreshold = waveSpawns(cutoffWave, ebLevel, skipfactor, tier, iswaves);
    const wavesSincePrevious = cutoffWave - previousThresholdWave;
    total.spawns += spawnsForThreshold.spawns * wavesSincePrevious * skipfactor;
    total.basic += spawnsForThreshold.basic * wavesSincePrevious * skipfactor;
    total.fast += spawnsForThreshold.fast * wavesSincePrevious * skipfactor;
    total.tank += spawnsForThreshold.tank * wavesSincePrevious * skipfactor;
    total.ranged += spawnsForThreshold.ranged * wavesSincePrevious * skipfactor;
    //total.protector += spawnsForThreshold.protector * wavesSincePrevious * skipfactor;
    total.boss +=
      (Math.floor(cutoffWave / 10) - Math.floor(previousThresholdWave / 10)) * skipfactor;

    if (wave <= thresholdWave) break;

    previousThresholdWave = thresholdWave;
  }
  AddElites2(tier,wave,total,skipfactor,ebLevel);

  return total;
};

function TierDiff(tier) {
  if (tier == 1) {
    return 1;
  } else {
    return (
      (1 + (tier - 1) * 15.5) *
      (Math.pow(1.43, tier - 2) + 0.2 * (tier - 1)) *
      (
        tier < 5 ? 1 :
        tier == 5 ? 1.05 :
        tier == 6 ? 1.05 * 1.11 :
        tier == 7 ? 1.05 * 1.11 * 1.2 :
        tier == 8 ? 1.05 * 1.11 * 1.2 * 1.38 :
        tier == 9 ? 1.05 * 1.11 * 1.2 * 1.38 * 1.75 :
        tier == 10 ? 1.05 * 1.11 * 1.2 * 1.38 * 1.75 * 4.3 :
        tier == 11 ? 1.05 * 1.11 * 1.2 * 1.38 * 1.75 * 4.3 * 41 :
        tier == 12 ? 1.05 * 1.11 * 1.2 * 1.38 * 1.75 * 4.3 * 41 * 410 :
        tier == 13 ? 1.05 * 1.11 * 1.2 * 1.38 * 1.75 * 4.3 * 41 * 410 * 9000 :
        tier == 14 ? 1.05 * 1.11 * 1.2 * 1.38 * 1.75 * 4.3 * 41 * 410 * 9000 * 5000 :
        1.05 * 1.11 * 1.2 * 1.38 * 1.75 * 4.3 * 41 * 410 * 9000 * 5000 * 1000
      )
    );
  }
}

function HPexp(tier,tourn) {
var value;
if (tourn) {
    value = 2.308;
  } else {
  value = 2.13;
  }
    if (tier >= 10) {
      value += 0.01;
    }
    if (tier >= 11) {
      value += 0.01;
    }
    if (tier >= 12) {
      value += 0.08;
    }
    if (tier >= 13) {
      value += 0.12;
    }
    return value;
  
}

function DMGexp(tier,tourn) {
var value;
if (tourn) {
    value = 2.105;
  } else {
  value = 2.007;
  }
    if (tier >= 10) {
      value += 0.002;
    }
    if (tier >= 11) {
      value += 0.002;
    }
    if (tier >= 12) {
      value += 0.016;
    }
    if (tier >= 13) {
      value += 0.025;
    }
    return value;
  
}

function ENEMYHP(wave,tier,tourn) { //  Int, Int, Boolean
  
  var baseMod;                // Tournament Base Modifier  
  var scalingMod;             // Tournament Scale Modifier
  var expMod;                 // Tournament Exponential Modifier, Added Tower Game v22.6 

  if (tourn) {
    baseMod = 9.3;
    scalingMod = 7.3;
    expMod = 1.004;
  } 
  else {
    baseMod = 1;
    scalingMod = 1;
    expMod = 1;
  }

  return (0.05 * baseMod * Math.pow(wave, HPexp(tier,tourn)) + 0.8 * scalingMod * wave + 1.5) * (
    (
      1 + (
        0.04  * Math.floor(wave / 5)    + 
        0.05  * Math.floor(wave / 10)   + 
        0.06  * Math.floor(wave / 25)   + 
        0.08  * Math.floor(wave / 50)   + 
        0.1   * Math.floor(wave / 60)   + 
        0.18  * Math.floor(wave / 72)   + 
        0.2   * Math.floor(wave / 83)   + 
        0.21  * Math.floor(wave / 94)   + 
        0.12  * Math.floor(wave / 100)  + 
        0.1   * Math.floor(wave / 107)  +
        0.15  * Math.floor(wave / 200)  + 
        0.35  * Math.floor(wave / 900)
      )
    ) * (
      Math.pow(1.035, Math.floor(wave / 30))    * 
      Math.pow(1.02,  Math.floor(wave / 60))    * 
      Math.pow(1.025, Math.floor(wave / 72))    * 
      Math.pow(1.03,  Math.floor(wave / 83))    * 
      Math.pow(1.03,  Math.floor(wave / 94))    * 
      Math.pow(1.02,  Math.floor(wave / 100))   * 
      Math.pow(1.02,  Math.floor(wave / 107))   * 
      Math.pow(1.11,  Math.floor(wave / 139))   * 
      Math.pow(1.11,  Math.floor(wave / 182))   * 
      Math.pow(1.03,  Math.floor(wave / 200))   * 
      Math.pow(1.13,  Math.floor(wave / 241))   * 
      Math.pow(1.13,  Math.floor(wave / 332))   * 
      Math.pow(1.06,  Math.floor(wave / 400))   * 
      Math.pow(1.15,  Math.floor(wave / 900))   * 
      Math.pow(1.15,  Math.floor(wave / 1024))
    )
  ) * TierDiff(tier) * Math.pow(expMod, wave);

}

function ENEMYDMG(wave,tier,tourn) { 
               // Int ,Int ,Boolean

  var baseMod;      // Tournament Base Modifier
  var scalingMod;   // Tournament Scale Modifier
  
  if (tourn) {
    baseMod = 9.3;
    scalingMod = 7.3;
  } 
  else {
    baseMod = 1;
    scalingMod = 1;
  }

  return (0.021 * baseMod * Math.pow(wave, DMGexp(tier,tourn)) + 0.16 * scalingMod * wave + 1.07) *
  (((1 + (0.02 
  * Math.floor(wave / 5) + 0.025 
  * Math.floor(wave / 10) + 0.012 
  * Math.floor(wave / 25) + 0.017 
  * Math.floor(wave / 50) + 0.02 
  * Math.floor(wave / 100) + 0.025 
  * Math.floor(wave / 200) + 0.02 
  * Math.floor(wave / 900))) 
  * (Math.pow(1.005, Math.floor(wave / 30)) 
  * Math.pow(1.01, Math.floor(wave / 72))))  
  * ((Math.pow(1.01, Math.floor(wave / 83)) 
  * Math.pow(1.01, Math.floor(wave / 94)) 
  * Math.pow(1.01, Math.floor(wave / 107)) 
  * Math.pow(1.02, Math.floor(wave / 200)) 
  * Math.pow(1.02, Math.floor(wave / 400)) 
  * Math.pow(1.035, Math.floor(wave / 900)) 
  * Math.pow(1.05, Math.floor(wave / 1024)) 
  *       (tier >= 7 ? Math.pow(1.025, Math.floor(wave / 139)) : 1) *
          (tier >= 8 ? Math.pow(1.025, Math.floor(wave / 182)) : 1) *
          (Math.pow(1.03, Math.floor(wave / 241)) * Math.pow(1.03, Math.floor(wave / 332)))
        )
      )
    ) * TierDiff(tier) * (tier < 4 ? 0.94 : (tier < 7 ? 0.9 : 0.86)) * NewDMG(tier);

}
function NewDMG(tier){
var value;
value = 1;
  
   if (tier >= 10) {
    value *= 0.43478245;
  }
  if (tier >= 11) {
    value *= 0.2;
  }
  if (tier >= 12) {
    value *= .1;
  }
  if (tier >= 13) {
    value *= .02;
  }
  if (tier >= 14) {
    value *= .02;
  }
  if (tier >= 15) {
    value *= .02;
  }
  return value;
}

function towerNum(num)
{
	l10 = Math.log10(Math.abs(num));
	if(l10<3) return num.toFixed(2);
	if(l10<6) return (num/1000).toFixed(2)+"k";
	if(l10<9) return (num/1000000).toFixed(2)+"M";
	if(l10<12) return (num/1000000000).toFixed(2)+"B";
	if(l10<15) return (num/1000000000000).toFixed(2)+"T";
	if(l10<18) return (num/1000000000000000).toFixed(2)+"q";
	if(l10<21) return (num/1000000000000000000).toFixed(2)+"Q";
	if(l10<24) return (num/1000000000000000000000).toFixed(2)+"s";
	
	return (num/1000000000000000000000000).toFixed(2)+"S";
	
	
	
	
}


function parseTower(s)
{
	s=s.trim();
	var val=s.slice(0, -1);
	var mult = s.slice(-1);
	var value = parseFloat(val);
	switch(mult)
	{
		case "k": value *= 1000; break;
		case "M": value *= 1000000; break;
		case "B": value *= 1000000000; break;
		case "T": value *= 1000000000000; break;
		case "q": value *= 1000000000000000; break;
		case "Q": value *= 1000000000000000000; break;
	}

	return value;
}
