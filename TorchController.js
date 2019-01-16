#pragma strict

var torchClick : AudioClip;

var flashLight : Light;

var torchWind : AudioClip;

function Start()
{
	flashLight.light.enabled = false;
	flashLight.light.intensity = 2;
}

function Update()
{
	if(flashLight.light.enabled == true)
	{
		flashLight.light.intensity -= 0.1 * Time.deltaTime / 5;
		//Debug.Log(flashLight.light.intensity);
	}
	
	if(Input.GetKeyDown("f"))
	{
		audio.PlayOneShot(torchClick);
		
		if(flashLight.light.enabled == false)
		{
			flashLight.light.enabled = true;
		}
		
		else
		{
			flashLight.light.enabled = false;
		}
	}
	
	if(flashLight.light.enabled == true && Input.GetKeyDown("q"))
	{
	
		flashLight.light.intensity += 0.05;
		audio.PlayOneShot(torchWind);
	}
}