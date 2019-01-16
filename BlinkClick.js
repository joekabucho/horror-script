#pragma strict

var topLid : GameObject;
var bottomLid : GameObject;

var regenSanity : float = 15.0;

private var canClick : boolean = true;
var timer : float = 3.0;

private var sanityScript : InsanityManager;

function Start()
{
	sanityScript = GameObject.Find("First Person Controller").GetComponent(InsanityManager);
	topLid = GameObject.Find("EyeLid_Top");
	bottomLid = GameObject.Find("EyeLid_Bottom");
}

function Update()
{
	if (canClick) 
	{
		if (Input.GetMouseButtonDown(0)) 
		{
			timer = 3.0;
			canClick = false;
			topLid.animation.Play("BlinkTop");
			bottomLid.animation.Play("BlinkBottom");
			sanityScript.currentSanity -= regenSanity;
		}
	} 

	else 
	{
		timer -= Time.deltaTime;
		if (timer <= 0) 
		{
			canClick = true;
		}
	}
}

