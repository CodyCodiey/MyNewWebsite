const simpleRedDetectSketch = (p) => {
    let currentTime = 29304480;
    let gps = [[3, 16, 19], [4, null, 20], [5, 18, 21]];

    p.setup = function () {
        p.createCanvas(200, 200);
        p.noStroke();
    }

    p.draw = function () {
        p.background(255);
        for (let i = 0; i < gps.length; i++) {
            for (let j = 0; j < gps[i].length; j++) {
                if (gps[i][j] != null && gps[i][j] > 20) {
                    p.fill(255, 0, 0);
                    p.rect(i * p.width / gps.length, j * p.height / gps[i].length, 100);
                }
                else if (gps[i][j] != null) {
                    p.fill(0, 0, 0);
                    p.rect(i * p.width / gps.length, j * p.height / gps[i].length, p.width / gps.length);
                }
            }
        }
    }
};

const sSimpleRedDetect = new p5(simpleRedDetectSketch, 'simpleRedDetect-container');