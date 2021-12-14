var pilotSeatCNT = 45;
var pilotSeatPrev = 45;
function update_pilotSeat(target){
	pilotSeatPrev = pilotSeatCNT;
	if(target != null)pilotSeatCNT--;
	else pilotSeatCNT ++;

	if(pilotSeatCNT>45)pilotSeatCNT=45;
	else if(pilotSeatCNT<0)pilotSeatCNT = 0;
}
function update_canopy_First(insRender,insParts){
	var partialTicks = Packages.handmadeguns.HandmadeGunsCore.smooth;
//	print("" + partialTicks);
	GL11 = org.lwjgl.opengl.GL11;
	GL11.glTranslatef(0, 2.4176, 0.5334 );
	GL11.glRotatef(-(pilotSeatCNT * partialTicks + pilotSeatPrev * (1 - partialTicks)),1,0,0);
	GL11.glTranslatef(0, -2.4176, -0.5334 );
}