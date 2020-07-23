//Variables
///////////////////////////////////////////////////////////////////////////////////////////////////

var Weapon;

//Functions
///////////////////////////////////////////////////////////////////////////////////////////////////

function LowerCase(value)
{
	return value.toString().toLowerCase();
}

//Api Queries
///////////////////////////////////////////////////////////////////////////////////////////////////

function getWeaponStats()
{
	
	var weaponname = document.getElementById("searchWeapon").value;
	Weapon = LowerCase(weaponname);

	var xhr = new XMLHttpRequest();

	console.log("Getting Weapon Statistics");

	xhr.onreadystatechange = function()
	{
		if (this.readyState === 4 && this.status === 200)
		{
			//Parse Data
			var json = JSON.parse(this.responseText);

            //Extract Data
			document.getElementById("weaponname").innerHTML = "Name : " + json[0].name;
			document.getElementById("criticalchance").innerHTML = "Critical Chance : " + json[0].criticalChance;
			document.getElementById("critmultiplier").innerHTML = "Critical Multiplier : " + json[0].criticalMultiplier;
			document.getElementById("statuschance").innerHTML = "Status Chance : " + json[0].procChance;

			if(json[0].slot == 1)
			{
				document.getElementById("multishot").innerHTML = "Multi-Shot : " + json[0].multishot;
			}
			else if(json[0].slot == 5)
			{
				document.getElementById("multishot").innerHTML = "Range : " + json[0].range;
			}
			
			document.getElementById("mastery").innerHTML = "Mastery Requirement : " + json[0].masteryReq;
			document.getElementById("magsize").innerHTML = "Magazine Size : " + json[0].magazineSize;
			document.getElementById("reload").innerHTML = "Reload Time : " + json[0].reloadTime;
			document.getElementById("firemode").innerHTML = "Firing Mode : " + json[0].trigger;
			document.getElementById("noiselevel").innerHTML = "Noise Level : " + json[0].noise;

			document.getElementById("description").innerHTML = "Description : " + json[0].description;
		}
    }

    //https://api.warframestat.us/weapons/search/acceltra
	xhr.open('GET', `https://api.warframestat.us/weapons/search/${Weapon}`, true);

	xhr.send();
}