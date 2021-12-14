var pilotSeatCNT = 45;
var pilotSeatPrev = 45;
var wingPos = 40;
var prevWingPos = 40;
function update_pilotSeat(target,vehicle){
	pilotSeatPrev = pilotSeatCNT;
	if(target != null)pilotSeatCNT--;
	else pilotSeatCNT ++;

	if(pilotSeatCNT>45)pilotSeatCNT=45;
	else if(pilotSeatCNT<0)pilotSeatCNT = 0;
	wingTarget = 0;
	if(vehicle.mc_Entity.field_70122_E && vehicle.localMotionVec.z < 0.1){
		wingTarget = 45 * (1-vehicle.flaplevel/75)
	}else{
		wingTarget = -vehicle.localMotionVec.z * 20-20;
	}
	if(wingTarget < 0)wingTarget = 0;
	if(wingTarget > 40)wingTarget = 40;
	prevWingPos = wingPos;
	if(wingTarget > wingPos+1)wingPos += 1;
	else if(wingTarget < wingPos-1)wingPos -=1;
	else wingPos = wingTarget;
	
	vehicle.prefab_vehicle.flapliftfactor = 0.00007 * (1-wingPos/40);
}
function LWing(insRender,insParts){
	var partialTicks = Packages.handmadeguns.HandmadeGunsCore.smooth;
//	print("" + pilotSeatCNT);
	GL11 = org.lwjgl.opengl.GL11;
	GL11.glTranslatef( 2.932, 2.787, -0.8060 );
	GL11.glRotatef((wingPos * partialTicks + prevWingPos * (1 - partialTicks)),0,1,0);
	GL11.glTranslatef(-2.932,-2.787,  0.8060 );
}
function RWing(insRender,insParts){
	var partialTicks = Packages.handmadeguns.HandmadeGunsCore.smooth;
//	print("" + pilotSeatCNT);
	GL11 = org.lwjgl.opengl.GL11;
	GL11.glTranslatef(-2.932, 2.787, -0.8060 );
	GL11.glRotatef(-(wingPos * partialTicks + prevWingPos * (1 - partialTicks)),0,1,0);
	GL11.glTranslatef(2.932,-2.787,  0.8060 );
}
function Canopy(insRender,insParts){
	var partialTicks = Packages.handmadeguns.HandmadeGunsCore.smooth;
//	print("" + pilotSeatCNT);
	GL11 = org.lwjgl.opengl.GL11;
	GL11.glTranslatef(0, 3.6253, 2.1753 );
	GL11.glRotatef(-(pilotSeatCNT * partialTicks + pilotSeatPrev * (1 - partialTicks))/2,1,0,0);
	GL11.glTranslatef(0, -3.6253, -2.1753 );
}