//Variables
///////////////////////////////////////////////////////////////////////////////////////////////////

var Warframe;

//Functions
///////////////////////////////////////////////////////////////////////////////////////////////////

function LowerCase(value)
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

            //Extract Data
			document.getElementById("warframename").innerHTML = "Name : " + json[0].name;
			document.getElementById("health").innerHTML = "Health : " + json[0].health;
			document.getElementById("shield").innerHTML = "Shield : " + json[0].shield;
			document.getElementById("armor").innerHTML = "Armor : " + json[0].armor;
			document.getElementById("sprint").innerHTML = "Sprint Speed : " + json[0].sprintSpeed;

			document.getElementById("description").innerHTML = "Description : " + json[0].description;

			document.getElementById("mastery").innerHTML = "Mastery Requirement : " + json[0].masteryReq;
			document.getElementById("Thumbnail").src = json[0].wikiaThumbnail;
		}
    }

    //https://api.warframestat.us/warframes/search/
	xhr.open('GET', `https://api.warframestat.us/warframes/search/${Warframe}`, true);

	xhr.send();
}