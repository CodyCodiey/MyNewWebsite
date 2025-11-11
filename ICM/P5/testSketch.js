const sketch1 = (p) => {
    let img;
    let progress = [];
    let skip = 4;
    let decayRate = 0.01;
    let restoreRadius = 100;
    let isRunning = false;

    p.preload = function () {
        img = p.loadImage("/ICM/P5/Photo.png");
    }

    p.setup = function () {
        img.resize(img.width * 0.2, img.height * 0.2);
        p.createCanvas(img.width, img.height);
        p.pixelDensity(1);
        p.noLoop(); // Start paused

        for (let x = 0; x < img.width; x++) {
            progress[x] = [];
            for (let y = 0; y < img.height; y++) {
                progress[x][y] = 255;
            }
        }
    }

    p.draw = function () {
        img.loadPixels();
        let cx = img.width / 2;
        let cy = img.height / 2;

        for (let x = 0; x < img.width; x += skip) {
            for (let y = 0; y < img.height; y += skip) {
                let d = p.dist(x, y, cx, cy);
                let maxDist = p.dist(0, 0, cx, cy);

                let fadeFactor = p.map(d, restoreRadius, maxDist, 0, 1, true);
                progress[x][y] -= fadeFactor * decayRate * 255;
                let idx = (x + y * img.width) * 4;
                img.pixels[idx + 3] = progress[x][y];
            }
        }

        img.updatePixels();
        p.image(img, 0, 0);

        if (p.frameCount > 600) p.noLoop();
    }

    p.startAnimation = function () {
        if (!isRunning) {
            isRunning = true;
            p.loop();
        }
    }

    p.stopAnimation = function () {
        isRunning = false;
        p.noLoop();
    }
};

const s1 = new p5(sketch1, 'sketch1-container');
