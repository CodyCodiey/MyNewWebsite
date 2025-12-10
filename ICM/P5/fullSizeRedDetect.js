const fullSizeRedDetectSketch = (p) => {
    let gps = Array(200).fill(null).map(() => Array(200).fill(null));

    p.setup = function () {
        let canvas = p.createCanvas(200, 200);
        canvas.style('border', '1px solid #ccc');
        p.noStroke();
        p.pixelDensity(1);
    }

    p.draw = function () {
        p.background(240);

        // Get the actual displayed size of the canvas
        let canvasElement = document.getElementById('fullSizeRedDetect-container').querySelector('canvas');
        let displayWidth = canvasElement.clientWidth;
        let displayHeight = canvasElement.clientHeight;

        // Scale mouse coordinates to match internal canvas size
        let scaledMouseX = p.floor(p.mouseX * p.width / displayWidth);
        let scaledMouseY = p.floor(p.mouseY * p.height / displayHeight);

        // Record mouse position and time to array
        if (scaledMouseX >= 0 && scaledMouseX < 200 && scaledMouseY >= 0 && scaledMouseY < 200) {
            gps[scaledMouseX][scaledMouseY] = Date.now();
        }

        for (let i = 0; i < gps.length; i++) {
            for (let j = 0; j < gps[i].length; j++) {
                if (gps[i][j] != null && gps[i][j] > Date.now() - 3000) {
                    p.fill(255, 0, 0);
                    p.rect(i, j, 1);
                }
                else if (gps[i][j] != null) {
                    p.fill(0, 0, 0);
                    p.rect(i, j, 1);
                }
            }
        }
    }
};

const sFullSizeRedDetect = new p5(fullSizeRedDetectSketch, 'fullSizeRedDetect-container');
