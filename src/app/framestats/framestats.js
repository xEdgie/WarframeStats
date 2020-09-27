//Variables
///////////////////////////////////////////////////////////////////////////////////////////////////

var Warframe;

//Functions
///////////////////////////////////////////////////////////////////////////////////////////////////

function LowerCase (value)
{
	return value.toString().toLowerCase();
}

//Api Queries
///////////////////////////////////////////////////////////////////////////////////////////////////

function getWarframeStats()
{
	
	var warframename = document.getElementById("searchWarframe").value;
	Warframe = LowerCase(warframename);

	var xhr = new XMLHttpRequest();

	console.log("Getting Warframe Statistics");

	xhr.onreadystatechange = function()
	{
		if (this.readyState === 4 && this.status === 200)
		{
			//Parse Data
			var json = JSON.parse(this.responseText);

            //Basic Stats
			document.getElementById("warframename").innerHTML = "Name : " + json[0].name;
			document.getElementById("health").innerHTML = "Health : " + json[0].health;
			document.getElementById("shield").innerHTML = "Shield : " + json[0].shield;
			document.getElementById("armor").innerHTML = "Armor : " + json[0].armor;
			document.getElementById("sprint").innerHTML = "Sprint Speed : " + json[0].sprintSpeed;
			document.getElementById("description").innerHTML = "Description : " + json[0].description;
			document.getElementById("mastery").innerHTML = "Mastery Requirement : " + json[0].masteryReq;
			document.getElementById("thumbnail").src = json[0].wikiaThumbnail;

			//Abilities
			document.getElementById("ability1").innerHTML = json[0].abilities[0].name;
			document.getElementById("ability1Description").innerHTML = json[0].abilities[0].description;

			document.getElementById("ability2").innerHTML = json[0].abilities[1].name;
			document.getElementById("ability2Description").innerHTML = json[0].abilities[1].description;

			document.getElementById("ability3").innerHTML = json[0].abilities[2].name;
			document.getElementById("ability3Description").innerHTML = json[0].abilities[2].description;

			document.getElementById("ability4").innerHTML = json[0].abilities[3].name;
			document.getElementById("ability4Description").innerHTML = json[0].abilities[3].description;

			//Components
			var relic1 = "Relic : ";
			var relic2 = "Relic : ";
			var relic3 = "Relic : ";
			var relic4 = "Relic : ";

			if(json[0].components[1].tradable == true)
			{
				document.getElementById("component1").innerHTML = json[0].name + " " + json[0].components[1].name;
			}
			else
			{
				document.getElementById("component1").innerHTML = json[0].components[1].name;
			}

			if(json[0].components[2].tradable == true)
			{
				document.getElementById("component2").innerHTML = json[0].name + " " + json[0].components[2].name;
			}
			else
			{
				document.getElementById("component2").innerHTML = json[0].components[2].name;
			}

			if(json[0].components[3].tradable == true)
			{
				document.getElementById("component3").innerHTML = json[0].name + " " + json[0].components[3].name;
			}
			else
			{
				document.getElementById("component3").innerHTML = json[0].components[3].name;
			}

			if(json[0].components[4].tradable == true)
			{
				document.getElementById("component4").innerHTML = json[0].name + " " + json[0].components[4].name;
			}
			else
			{
				document.getElementById("component4").innerHTML = json[0].components[4].name;
			}

			//Relics
			document.getElementById("relic1").innerHTML = "Relic : " + json[0].components[1].drops[0].location;
			document.getElementById("relic2").innerHTML = "Relic : " + json[0].components[2].drops[0].location;
			document.getElementById("relic3").innerHTML = "Relic : " + json[0].components[3].drops[0].location;
			document.getElementById("relic4").innerHTML = "Relic : " + json[0].components[4].drops[0].location;
		}
    }

    //https://api.warframestat.us/warframes/search/
	xhr.open('GET', `https://api.warframestat.us/warframes/search/${Warframe}`, true);

	xhr.send();
}