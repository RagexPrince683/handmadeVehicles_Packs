
function update_Pre(ins){
}
function update_Post(ins){
}
function Model_rendering(ins){
}

function GUI_rendering_3D(ins,vehicle){
	return false;
}
function GUI_rendering_2D(ins,vehicle,width,height){

	return false;
}
function GUI_rendering_HUD(ins,vehicle,width,height){
	return false;
}

function ModelUpdate_Pre(insRender,insParts){
	RenderVehicle = Packages.handmadevehicle.render.RenderVehicle;
	//print(currentWeaponName);
	//print(insParts.partsID);
	//print(insParts.partsname);
	var flag = false;
	if(insParts.partsID == 7){
		flag = missileAnimation1(insRender,insParts,RenderVehicle.currentBaseLogic);
	}
	if(insParts.partsID == 8){
		//print(insParts.partsID);
		flag = missileAnimation2(insRender,insParts,RenderVehicle.currentBaseLogic);
	}
	if(insParts.partsID == 9){
		//print(insParts.partsID);
		flag = missileAnimation3(insRender,insParts,RenderVehicle.currentBaseLogic);
	}
	if(insParts.partsID == 31)skid(insRender,insParts,RenderVehicle.currentBaseLogic);
	return flag;
}
function missileAnimation1(insRender,insParts,insVehicle){
	var turretObj = insVehicle.allturrets[2];
	var reloadState = insVehicle.allturrets[3].replaceCoolDown;
	var partialTicks = Packages.handmadeguns.HandmadeGunsCore.smooth;
	var yaw = turretObj.prevturretrotationYaw +
						(turretObj.turretrotationYaw - turretObj.prevturretrotationYaw) * partialTicks;
	
	if(reloadState > 0){
		GL11 = org.lwjgl.opengl.GL11;
		GL11.glTranslatef(-0.3939,2.460,-0.1690);
		 if(reloadState>280){
			GL11.glRotatef(yaw * ((300-reloadState)/20),0,1,0);
			GL11.glRotatef(-90 * ((300-reloadState)/20),0,1,0);
		}else if(reloadState>20){
			GL11.glRotatef(yaw,0,1,0);
			GL11.glRotatef(-90,0,1,0);
			if(reloadState > 260){
				GL11.glRotatef(-45 * ((280-reloadState)/20),1,0,0);
			}else if(reloadState > 40){
				GL11.glRotatef(-45,1,0,0);
			}else {
				GL11.glRotatef(-45 * (-(20-reloadState)/20),1,0,0);
			}
		}else {
			GL11.glRotatef(yaw * (reloadState/20),0,1,0);
			GL11.glRotatef(-90 * (reloadState/20),0,1,0);
		}
		GL11.glTranslatef(0.3939,-2.460,0.1690);
	}
	return false;
}
function missileAnimation2(insRender,insParts,insVehicle){
	var turretObj = insVehicle.allturrets[2];
	var reloadState = insVehicle.allturrets[3].replaceCoolDown;
	var partialTicks = Packages.handmadeguns.HandmadeGunsCore.smooth;
	var pitch = turretObj.prevturretrotationPitch +
						(turretObj.turretrotationPitch - turretObj.prevturretrotationPitch) * partialTicks;
	
	
	if(reloadState > 0){
		GL11 = org.lwjgl.opengl.GL11;
		GL11.glTranslatef(-0.3939,2.576,-0.09409);
		if(reloadState>280){
			GL11.glRotatef(-pitch * ((300-reloadState)/20),1,0,0);
		}else if(reloadState>20){
			GL11.glRotatef(-pitch,1,0,0);
		}else{
			GL11.glRotatef(-pitch * (reloadState/20),1,0,0);
		}
		GL11.glTranslatef(0.3939,-2.576,0.09409);
	}
	return false;
}
function missileAnimation3(insRender,insParts,insVehicle){
	var turretObj = insVehicle.allturrets[2];
	var reloadState = insVehicle.allturrets[3].replaceCoolDown;
	var partialTicks = Packages.handmadeguns.HandmadeGunsCore.smooth;
	
	
	if(reloadState > 0){
		GL11 = org.lwjgl.opengl.GL11;
		if(reloadState>60){
			GL11.glTranslatef(0,0,-1.25 * (-(40-reloadState)/20));
			return true;
		}else if(reloadState>40){
			GL11.glTranslatef(0,0,-1.25 * (-(40-reloadState)/20));
			return false;
		}else{
			return false;
		}
	}
	
	return false;
}
function skid(insRender,insParts,insVehicle){
	
}

function ModelUpdate_Post(insRender,insParts){
}