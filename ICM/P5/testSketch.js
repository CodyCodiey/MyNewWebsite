let img;
let progress = [];
let skip = 4;
let decayRate = 0.01;
let restoreRadius = 100;

function preload() {
    img = loadImage("P5/Photo.png");
}

function setup() {
    img.resize(img.width * 0.2, img.height * 0.2);
    createCanvas(img.width, img.height);
    pixelDensity(1);


    for (let x = 0; x < img.width; x++) {
        progress[x] = [];
        for (let y = 0; y < img.height; y++) {
            progress[x][y] = 255;
        }
    }
}

function draw() {
    img.loadPixels();
    let cx = img.width / 2;
    let cy = img.height / 2;

    for (let x = 0; x < img.width; x += skip) {
        for (let y = 0; y < img.height; y += skip) {
            let d = dist(x, y, cx, cy);
            let maxDist = dist(0, 0, cx, cy);


            let fadeFactor = map(d, restoreRadius, maxDist, 0, 1, true);
            progress[x][y] -= fadeFactor * decayRate * 255;
            let idx = (x + y * img.width) * 4;
            img.pixels[idx + 3] = progress[x][y];
        }
    }

    img.updatePixels();
    image(img, 0, 0);


    if (frameCount > 600) noLoop();
}
