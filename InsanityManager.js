#pragma strict

var currentSanity : float = 20.0;
var maxSanity : float = 100.0;
var minSanity : float = 0.0;

function Update()
{
	if(currentSanity <= 100)
	{
		currentSanity -= Time.deltaTime;
	}
	
	if(currentSanity >= 100)
	{
		currentSanity = maxSanity;
	}
	
	if(currentSanity <= 0)
	{
		currentSanity = minSanity;
	}
}

function OnGUI()
{
	GUI.Box(Rect(5, 5, 55, 25), "Sanity");
	GUI.Box(Rect(65, 5, 55, 25), currentSanity.ToString("0") + "/" + maxSanity);
}