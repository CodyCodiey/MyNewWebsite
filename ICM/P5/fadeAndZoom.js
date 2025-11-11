const sketchFadeAndZoom = (p) => {
    let photo;
    let vangogh;
    let time = 60 * 60;
    let pixelOrder = [];
    let index = 0;
    let isRunning = false;

    p.preload = function () {
        photo = p.loadImage('/ICM/P5/Picture.png');
        vangogh = p.loadImage('/ICM/P5/Painting.png');
    }

    p.setup = function () {
        p.createCanvas(photo.width, photo.height);
        photo.loadPixels();
        vangogh.loadPixels();
        p.pixelDensity(1);
        p.noLoop(); // Start paused

        let xCent = photo.width / 2;
        let yCent = photo.height / 2;

        let pixelsWithDist = [];
        for (let i = 0; i < photo.pixels.length / 4; i++) {
            let y = p.floor(i / photo.width);
            let x = i % photo.width;
            let d = p.dist(xCent, yCent, x, y);
            pixelsWithDist.push({ index: i, distance: d });
        }

        let smoothAmount = 100;
        pixelsWithDist.forEach(pix => {
            pix.distance += p.random(-smoothAmount, smoothAmount);
        });

        pixelsWithDist.sort((a, b) => b.distance - a.distance);

        for (let pix of pixelsWithDist) {
            pixelOrder.push(pix.index);
        }
    }

    p.draw = function () {
        p.loadPixels();

        let step = p.int(pixelOrder.length / time);
        for (let i = 0; i < step && index < pixelOrder.length; i++) {
            let pix = pixelOrder[index];
            let pIdx = pix * 4;
            p.pixels[pIdx] = vangogh.pixels[pIdx];
            p.pixels[pIdx + 1] = vangogh.pixels[pIdx + 1];
            p.pixels[pIdx + 2] = vangogh.pixels[pIdx + 2];
            p.pixels[pIdx + 3] = 255;
            index++;
        }

        for (let i = index; i < pixelOrder.length; i++) {
            let pix = pixelOrder[i];
            let pIdx = pix * 4;
            p.pixels[pIdx] = photo.pixels[pIdx];
            p.pixels[pIdx + 1] = photo.pixels[pIdx + 1];
            p.pixels[pIdx + 2] = photo.pixels[pIdx + 2];
            p.pixels[pIdx + 3] = 255;
        }

        p.updatePixels();
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

const sFadeAndZoom = new p5(sketchFadeAndZoom, 'fadeAndZoom-container');