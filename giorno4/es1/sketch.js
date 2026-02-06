
const A = [
  0, 10,   // inizio base sinistra
  2.5, 0,  // punta superiore
  5, 0,    // punta superiore
  7.5, 10, // base destra
  6.5, 10, // interno lato destro
  5, 6,    // interno vertice
  2.5, 6,  // interno vertice
  1.5, 10  // interno lato sinistro
]



let posX, posY

function setup() {
	createCanvas(windowWidth, windowHeight)
	posX = width / 2
	posY = height / 2
    
    
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
  posX = width / 2
  posY = height / 2
  baseScale = min(width, height) * 0.35
}

function draw() {
	background("#020b68")
	stroke("#cb7900")
	noFill()
	strokeWeight(1)

     

	// segue il mouse con inerzia
	posX = lerp(posX, mouseX, 0.12)
	posY = lerp(posY, mouseY, 0.12)

	const layers = 70
	const baseScale = min(width, height) * 0.35

	for (let i = 0; i < layers; i++) {
		push()
		translate(posX, posY)

		// ROTAZIONE PIÙ VELOCE E AMPIA
		rotate(sin((frameCount + i) * 0.06) * 0.8)

		const s = baseScale - i * 3
		beginShape()
		for (let j = 0; j < A.length; j += 2) {
			const x = (A[j] - 5) * s
			const y = (A[j + 1] - 5) * s
			vertex(x, y)
		}
		endShape(CLOSE)
		pop()
	}
}

