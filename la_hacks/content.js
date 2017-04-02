//merge it bro
var MAX_COOLDOWN = 15;							//cooldown time
var MAX_COUNTER = 4;							//number of tweets per cooldown
window.onload = onPageLoad();
var foregroundTimer;

function onPageLoad() {
	if(localStorage.using != undefined)
	{
		if(parseInt(localStorage.getItem("using")) == 1)
		{
			document.getElementById("power").checked = true;
		}
		else
		{
			document.getElementById("power").checked = false;
		}
	}
		if(localStorage.congressmen_handle == undefined)
		{
			var names = ["@lutherstrange",
"@lisamurkowski",
"@SenJohnMcCain",
"@JeffFlake",
"@SenTomCotton",
"@JohnBoozman",
"@SenCoryGardner",
"@marcorubio",
"@MikeCrapo",
"@SenatorRisch",
"@SenToddYoung",
"@ChuckGrassley",
"@joniernst",
"@SenPatRoberts",
"@JerryMoran",
"@SenateMajLdr",
"@BillCassidy",
"@SenThadCochran",
"@SenatorWicker",
"@RoyBlunt",
"@SteveDaines",
"@SenatorFischer",
"@SenDeanHeller",
"@SenatorBurr",
"@ThomTillis",
"@SenJohnHoeven",
"@robportman",
"@SenatorLankford",
"@SenToomey",
"@GrahamBlog",
"@SenatorTimScott",
"@SenJohnThune",
"@SenTedCruz",
"@SenMikeLee",
"@SenCapito",
"@SenRonJohnson",
"@SenatorEnzi",
"@SenJohnBarrasso",
"@repdonyoung",
"@robert_aderholt",
"@RepByrne",
"@USRepGaryPalmer",
"@RepMarthaRoby",
"@RepMikeRogersAL",
"@RepRickCrawford",
"@RepWesterman",
"@Rep_SteveWomack",
"@RepAndyBiggsAZ",
"@RepTrentFranks",
"@RepGosar",
"@RepMcSally",
"@RepDavid",
"@KenCalvert",
"@RepPaulCook",
"@RepJeffDenham",
"@Rep_Hunter",
"@DarrellIssa",
"@RepSteveKnight",
"@RepLaMalfa",
"@GOPLeader",
"@DevinNunes",
"@DanaRohrabacher",
"@RepEdRoyce",
"@RepDavidValadao",
"@RepMimiWalters",
"@RepKenBuck",
"@RepDLamborn",
"@RepScottTipton",
"@RepGusBillrakis",
"@VernBuchanan",
"@RepCurbelo",
"@RepDeSantis",
"@MarioDB",
"@CongBillPosey",
"@TomRooney",
"@RepDennisRoss",
"@RepWebster",
"@RepTedYoho",
"@Rep_Matt_Gaetz",
"@RepBrianMast",
"@RepRooney",
"@drnealdunnfl2",
"@JRutherfordFL",
"@RepRickAllen",
"@Rep_BuddyCarter",
"@RepDougCollins",
"@RepTomGraves",
"@CongressmanHice",
"@RepLoudermilk",
"@AustinScottGA08",
"@RepRobWoodall",
"@RepDrewFerguson",
"@RepRodBlum",
"@SteveKingIA",
"@RepDavidYoung",
"@Raul_Labrador",
"@CongressmanBost",
"@RodneyDavis",
"@RepHultgren",
"@RebKinzinger",
"@RepLaHood",
"@PeterRoskam",
"@RepShimkus",
"@SusanWBrooks",
"@RepLarryBucshon",
"@RepLukeMesser",
"@TodRokita",
"@RepWalorski",
"@RepJimBanks",
"@RepTrey",
"@RepLynnJenkins",
"@RogerMarshallMD",
"@RepAndyBarr",
"@RepGuthrie",
"@RepThomasMassie",
"@RepHalRogers",
"@CongressmanRalphAbraham",
"@SteveScalise",
"@CaptClayHiggins",
"@RepAndyHarrisMD",
"@RepPoliquin",
"@RepMikeBishop",
"@RepHuizenga",
"@RepMoolenaar",
"@RepDaveTrott",
"@RepFredUpton",
"@RepWalberg",
"@RepJackBergman",
"@RepPaulMitchell",
"@RepTomEmmer",
"@RepErikPaulsen",
"@RepJasonLewis",
"@RepSamGraves",
"@RepHartzler",
"@USRepLong",
"@RepBlainePress",
"@RepJasonSmith",
"@RepAnnWagner",
"@GregHarper",
"@RepTrentKelly",
"@CongPalazo",
"@VirginiaFoxx",
"@RepHolding",
"@RepRichHudson",
"@PatrickMcHenry",
"@RepMarkMeadows",
"@RepDavidRouzer",
"@RepMarkWalker",
"@RepTedBudd",
"@RepKevinCramer",
"@JeffFortenberry",
"@RepAdrianSmith",
"@RepDonBacon",
"@USRepRodney",
"@RepLanceNY7",
"@RepLoBiondo",
"@RepTomMacArthur",
"@RepChrisSmith",
"@RepStevePearce",
"@MarkAmodeiNV2",
"@RepChrisCollins",
"@RepDanDonovan",
"@RepJohnKatko",
"@RepPeteKing",
"@RepTomReed",
"@RepTenney",
"@RepSteveChabot",
"@RepBobGibbs",
"@RepBillJohnson",
"@Jim_Jordan",
"@RepDaveJoyce",
"@BobLatta",
"@RepJimRenacci",
"@RepSteveStivers",
"@TiberiPress",
"@RepMikeTurner",
"@RepBradWenstrup",
"@RepJBridenstine",
"@TomColeOK04",
"@RepFrankLucas",
"@RepMullin",
"@SteveRussellRep",
"@RepGregWalden",
"@RepLouBarletta",
"@RepRyanCostello",
"@RepCharlieDent",
"@MikeKellyPA",
"@RepMeehan",
"@RepTimMurphy",
"@RepScottPerry",
"@KiethRothfus",
"@RepBillShuster",
"@CongressmanGT",
"@RepSmucker",
"@repbrianfitz",
"@RepJeffDuncan",
"@TGowdySC",
"@RepTomRice",
"@RepJoeWilson",
"@RepDianeBlack",
"@MarshaBlackburn",
"@DesJarlaisTN04",
"@RepChuck",
"@DrPhilRoe",
"@repdavidkustoff",
"@RepBrianBabin",
"@RepJoeBarton",
"@RepKevinBrady",
"@MichaleCBurgess",
"@JudgeCarter",
"@ConawayTX11",
"@CongCulberson",
"@Farenthold",
"@RepBillFlores",
"@RepLouieGohmert",
"@RepKayGranger",
"@RepHensarling",
"@HurdOnTheHill",
"@RepKenMarchant",
"@McCaulPressShop",
"@OlsonPressShop",
"@JudgeTedPoe",
"@RepRatcliffe",
"@PeteSessions",
"@LamarSmithTX21",
"@MacTXPress",
"@TXRandy14",
"@RepRWilliams",
"@RepArrington",
"@RepRobBishop",
"@JasonInTheHouse",
"@RepMiaLove",
"@RepChrisStewart",
"@RepDaveBrat",
"@RepComstock",
"@RepGoodlatte",
"@ReMGriffith",
"@RobWittman",
"@Scotttaylorva",
"@Rep_Tom_Garrett",
"@CathyMcMorris",
"@RepNewhouse",
"@RepGrothman",
"@JimPressOffice",
"@RepGallagher",
"@RepEvanJenkins",
"@RepMcKinley",
"@RepAlexMooney",
"@Rep_LizCheney"]

			localStorage.setItem("congressmen_handle", JSON.stringify(names) );
		}
		if(localStorage.cooldown == undefined)
		{
			localStorage.setItem("cooldown", 0);
		}
		if(localStorage.counter == undefined)
		{
			localStorage.setItem("counter", 0);
		}
		if(parseInt(localStorage.getItem("cooldown")) > MAX_COOLDOWN - 1)
		{
			clearInterval(foregroundTimer);
			document.getElementById("counter_loc").innerHTML = localStorage.getItem("counter");
			document.getElementById("timer_loc").innerHTML = "0";
		
		}
		else
		{
			document.getElementById("counter_loc").innerHTML = "0";
			var ap = MAX_COOLDOWN - parseInt(localStorage.getItem("cooldown"));
			document.getElementById("timer_loc").innerHTML = ap.toString();
		}
}

//always runs the code below because not in a function
var holder = parseInt(localStorage.getItem("counter"));
if(holder >= MAX_COUNTER)
{
	//alert("cooling down");
	foregroundTimer = setInterval(updateDisplay, 1000);
}
else{
		document.getElementById("counter_loc").innerHTML = MAX_COUNTER - localStorage.getItem("counter");
		document.getElementById("timer_loc").innerHTML = "0";
}



function updateDisplay()
{
	if(parseInt(localStorage.getItem("cooldown")) > MAX_COOLDOWN - 1)
	{
		clearInterval(foregroundTimer);
		document.getElementById("counter_loc").innerHTML = localStorage.getItem("counter");
		document.getElementById("timer_loc").innerHTML = "0";
	
	}
	else
	{
		document.getElementById("counter_loc").innerHTML = "0";
		var ap = MAX_COOLDOWN - parseInt(localStorage.getItem("cooldown"));
		document.getElementById("timer_loc").innerHTML = ap.toString();
	}
}

function messWithCongress()											//function called when the button is pressed
{
	var check = document.getElementById("power").checked;			//check if the button is on or off and update the local storage
	if(check == false)
	{
		localStorage.setItem("using", 0);
	}
	else
	{
		localStorage.setItem("using", 1);
	}
}

document.getElementById("power").onclick =messWithCongress;