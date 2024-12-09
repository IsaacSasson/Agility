async function startProgram() {
	await roll(0, 255, 0.85);
	await delay(2);
	await roll(90, 255, 1);
	await delay(2);
	await roll(0, 255, 1.05);
	await delay(2);
	await roll(90, 255, 2);
	await delay(2);
	await roll(225, 255, 2);
	await delay(2);
	await rawMotor(0, 255, 10);
	await delay(2);
}
