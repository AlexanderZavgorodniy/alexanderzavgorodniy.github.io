var NoMouseMovement_Scene_Map_processMapTouch = Scene_Map.prototype.processMapTouch;
Scene_Map.prototype.processMapTouch = function() {
	NoMouseMovement_Scene_Map_processMapTouch.call(this);
	$gameTemp.clearDestination();
};