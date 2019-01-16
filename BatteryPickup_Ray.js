#pragma strict

private var torchScript : TorchController;

private var guiShow : boolean = false;

var battery : GameObject;

var rayLength = 10;

function Start()
{
	torchScript = GameObject.Find("Torch").GetComponent(TorchController);
}

function OnGUI()
{
	if(guiShow == true)
	{
		GUI.Box(Rect(Screen.width / 2, Screen.height / 2, 100, 25 ), "Pick up batteries!");
	}
}

function Update() 
{
	Debug.Log(guiShow);
	var hit : RaycastHit;
	var fwd = transform.TransformDirection (Vector3.forward);
    
    if (Physics.Raycast (transform.position, fwd, hit, rayLength)) 
    {
        if(hit.collider.gameObject.tag == "Battery")
		{
			guiShow = true;
			if(Input.GetKeyDown("e"))
			{
				torchScript.flashLight.light.intensity += 0.5;
				Destroy(battery);
				guiShow = false;
			}
		}
    }
    
    else
    {
    	guiShow = false;
    }
}