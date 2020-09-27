//Variables
///////////////////////////////////////////////////////////////////////////////////////////////////

var platform = "pc";

//Functions
///////////////////////////////////////////////////////////////////////////////////////////////////

function Start()
{
	console.log("Started getting events");

	getAllEvents();
	getEarthState();
	getCetusState();
}

var countDownDate = new Date(Date.UTC("Aug 1, 2020 12:00:00")).getTime();

var x = setInterval(
	function() 
	{
		//Get current time
		var currentDate = new Date().getTime();
	
		var distance = countDownDate - currentDate;
	
		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
		// Display the result in the element with id="demo"
		document.getElementById("tennocontime").innerHTML = days + "d " + hours + "h "
		+ minutes + "m " + seconds + "s ";
	
		// If the count down is finished, write some text
		if (distance < 0) {
		clearInterval(x);
		document.getElementById("tennocontime").innerHTML = "EXPIRED";
		}
	}, 1000);

//Api Queries
///////////////////////////////////////////////////////////////////////////////////////////////////

function getAllEvents()
{
	var xhr = new XMLHttpRequest();

	console.log("Getting Live Events");

	xhr.onreadystatechange = function()
	{
		if (this.readyState === 4 && this.status === 200)
		{
			//Parse Data
			var json = JSON.parse(this.responseText);

			//Extract Data
			if(json[0] != undefined)
			{
				var event1json = json[0];
				document.getElementById("event1title").innerHTML = event1json.description;

				if(event1json.node != undefined)
				{
					document.getElementById("event1location").innerHTML = "Location : " + event1json.node;
				}
				else if(event1json.victimNode != undefined)
				{
					document.getElementById("event1location").innerHTML = "Location : " + event1json.victimNode;
				}
				else
				{
					document.getElementById("event1location").innerHTML = "Location : Unknown";
				}
			}
			else
			{
				document.getElementById("event1title").innerHTML = "No Event";
			}

			if(json[1] != undefined)
			{
				var event2json = json[1];
				document.getElementById("event2title").innerHTML = event2json.description;

				if(event2json.node != undefined)
				{
					document.getElementById("event2location").innerHTML = "Location : " + event2json.node;
				}
				else if(event2json.victimNode != undefined)
				{
					document.getElementById("event2location").innerHTML = "Location : " + event2json.victimNode;
				}
				else
				{
					document.getElementById("event2location").innerHTML = "Location : Unknown";
				}
			}
			else
			{
				document.getElementById("event2title").innerHTML = "No Event";
			}
			
			if(json[2] != undefined)
			{
				var event3json = json[2];
				document.getElementById("event3title").innerHTML = event3json.description;
			}
			else
			{
				document.getElementById("event3title").innerHTML = "No Event";
			}
			
			if(json[3] != undefined)
			{
				var event4json = json[3];
				document.getElementById("event4title").innerHTML = event4json.description;
			}
			else
			{
				document.getElementById("event4title").innerHTML = "No Event";
			}
		}
    }

    //https://api.warframestat.us/pc/events
	xhr.open('GET', `https://api.warframestat.us/${platform}/events`, true);

	xhr.send();
}

function getEarthState()
{
	var xhr = new XMLHttpRequest();

	console.log("Getting Earth Status");

	xhr.onreadystatechange = function()
	{
		if (this.readyState === 4 && this.status === 200)
		{
			//Parse Data
			var json = JSON.parse(this.responseText);

			//Extract Data
			document.getElementById("earthcycle").innerHTML = "Time of day : " + json.state;
		}
    }

    //https://api.warframestat.us/pc/earthCycle
	xhr.open('GET', `https://api.warframestat.us/${platform}/earthCycle`, true);

	xhr.send();
}

function getCetusState()
{
	var xhr = new XMLHttpRequest();

	console.log("Getting Cetus Status");

	xhr.onreadystatechange = function()
	{
		if (this.readyState === 4 && this.status === 200)
		{
			//Parse Data
			var json = JSON.parse(this.responseText);

			//Extract Data
			document.getElementById("cetuscycle").innerHTML = "Time of day : " + json.state;
		}
    }

    //https://api.warframestat.us/pc/cetusCycle
	xhr.open('GET', `https://api.warframestat.us/${platform}/cetusCycle`, true);

	xhr.send();
}