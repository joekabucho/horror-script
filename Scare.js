#pragma strict

private var sanityScript : InsanityManager;

var scarePerc : float = 20.0;

function Start()
{
	sanityScript = GameObject.Find("First Person Controller").GetComponent(InsanityManager);
}

function OnTriggerEnter(Col : Collider)
{
	if(Col.tag == "Player")
	{
		sanityScript.currentSanity += scarePerc;
		Destroy(gameObject);
	}
}