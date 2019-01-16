#pragma strict

private var mBlur : MotionBlur;

private var sanityScript : InsanityManager;

function Start()
{
	mBlur = GameObject.Find("Main Camera").GetComponent(MotionBlur);
	sanityScript = GameObject.Find("First Person Controller").GetComponent(InsanityManager);
	mBlur.enabled = false;
}

function Update()
{
	if(sanityScript.currentSanity >= 20)
	{
		mBlur.enabled = true;
		mBlur.blurAmount = 0.2f;
	}
	
	if(sanityScript.currentSanity >= 40)
	{
		mBlur.enabled = true;
		mBlur.blurAmount = 0.4f;
	}
	
	if(sanityScript.currentSanity >= 60)
	{
		mBlur.enabled = true;
		mBlur.blurAmount = 0.6f;
	}
	
	if(sanityScript.currentSanity >= 80)
	{
		mBlur.enabled = true;
		mBlur.blurAmount = 0.85f;
	}
	
		if(sanityScript.currentSanity >= 90)
	{
		mBlur.enabled = true;
		mBlur.blurAmount = 0.99f;
	}
}