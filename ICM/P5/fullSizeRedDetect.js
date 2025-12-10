const fullSizeRedDetectSketch = (p) => {
    let gps = Array(200).fill(null).map(() => Array(200).fill(null));
    let mouseIsOver = false;
    let canvasElement = null;
    let currentMouseX = -1;
    let currentMouseY = -1;

    p.setup = function () {
        let canvas = p.createCanvas(200, 200);
        canvas.style('border', '1px solid #ccc');
        canvasElement = canvas.elt;

        // Track mouse position directly from the DOM event
        canvasElement.addEventListener('mousemove', function (e) {
            let rect = canvasElement.getBoundingClientRect();
            // Get mouse position relative to canvas, scaled to internal 200x200
            currentMouseX = p.floor(((e.clientX - rect.left) / rect.width) * 200);
            currentMouseY = p.floor(((e.clientY - rect.top) / rect.height) * 200);
        });

        canvasElement.addEventListener('mouseenter', function () {
            mouseIsOver = true;
        });

        canvasElement.addEventListener('mouseleave', function () {
            mouseIsOver = false;
            currentMouseX = -1;
            currentMouseY = -1;
        });

        p.noStroke();
        p.pixelDensity(1);
    }

    p.draw = function () {
        p.background(240);

        // Only track mouse when it's actually over the canvas
        if (mouseIsOver && currentMouseX >= 0 && currentMouseX < 200 && currentMouseY >= 0 && currentMouseY < 200) {
            gps[currentMouseX][currentMouseY] = Date.now();
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
