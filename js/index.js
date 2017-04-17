function draw() {
    var canvas = document.getElementById("canvas");
    canvas.height = 513;
    canvas.width = 513;
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        var colorArray = ["#F0EAE1", "#D03D49", "#61A1A9", "#D4D7A7", "#A1D6C2"];
        var sqSize = 19;
        ctx.fillStyle = colorArray[0]
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        function solidSq(x, y, color) {
            ctx.fillStyle = color;
            ctx.fillRect(x, y, sqSize, sqSize);
        }

        function l2r(x, y, colorL, colorR) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + sqSize);
            ctx.lineTo(x + sqSize, y + sqSize);
            ctx.fillStyle = colorL;
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + sqSize, y);
            ctx.lineTo(x + sqSize, y + sqSize);
            ctx.fillStyle = colorR;
            ctx.fill();
        }

        function r2l(x, y, colorL, colorR) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + sqSize, y);
            ctx.lineTo(x, y + sqSize);
            ctx.fillStyle = colorL;
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(x, y + sqSize);
            ctx.lineTo(x + sqSize, y + sqSize);
            ctx.lineTo(x + sqSize, y);
            ctx.fillStyle = colorR;
            ctx.fill();
        }

        function patt1(x, y, pattC, centerC, bgC, altC) {
            solidSq(x, y, pattC);
            l2r(x + sqSize, y, bgC, pattC);
            solidSq(x + sqSize * 2, y, bgC);
            r2l(x + sqSize * 3, y, pattC, bgC);
            solidSq(x + sqSize * 4, y, pattC);
            //row2
            l2r(x, y + sqSize, pattC, bgC);
            solidSq(x + sqSize, y + sqSize, bgC);
            solidSq(x + sqSize * 2, y + sqSize, centerC);
            solidSq(x + sqSize * 3, y + sqSize, bgC);
            r2l(x + sqSize * 4, y + sqSize, bgC, pattC);
            //row3
            solidSq(x, y + sqSize * 2, bgC);
            solidSq(x + sqSize, y + sqSize * 2, centerC);
            solidSq(x + sqSize * 2, y + sqSize * 2, altC);
            solidSq(x + sqSize * 3, y + sqSize * 2, centerC);
            solidSq(x + sqSize * 4, y + sqSize * 2, bgC);
            //row4
            r2l(x, y + sqSize * 3, pattC, bgC);
            solidSq(x + sqSize, y + sqSize * 3, bgC);
            solidSq(x + sqSize * 2, y + sqSize * 3, centerC);
            solidSq(x + sqSize * 3, y + sqSize * 3, bgC);
            l2r(x + sqSize * 4, y + sqSize * 3, bgC, pattC);
            //row5
            solidSq(x, y + sqSize * 4, pattC);
            r2l(x + sqSize, y + sqSize * 4, bgC, pattC);
            solidSq(x + sqSize * 2, y + sqSize * 4, bgC);
            l2r(x + sqSize * 3, y + sqSize * 4, pattC, bgC);
            solidSq(x + sqSize * 4, y + sqSize * 4, pattC);
        };
        //pattern placement
        var colCount = 0;
        var rowCount = 0;
        for (var col = sqSize * 2; col < canvas.height - sqSize * 2; col += sqSize * 6) {
            for (var row = sqSize * 2; row < canvas.width - sqSize * 2; row += sqSize * 6) {
                if (colCount % 2 === 0) {
                    if (rowCount % 2 === 0) {
                        patt1(row, col, colorArray[1], colorArray[3], colorArray[0], colorArray[2]);
                    }
                    else {
                        patt1(row, col, colorArray[2], colorArray[3], colorArray[0], colorArray[1]);
                    }
                }
                else {
                    if (rowCount % 2 !== 0) {
                        patt1(row, col, colorArray[1], colorArray[3], colorArray[0], colorArray[2]);
                    }
                    else {
                        patt1(row, col, colorArray[2], colorArray[3], colorArray[0], colorArray[1]);
                    }
                }
                rowCount++;
            }
            colCount++
        }
        //create border
        ctx.fillStyle = colorArray[4];
        ctx.fillRect(0, 0, sqSize, canvas.height);
        ctx.fillRect(0, 0, canvas.width, sqSize);
        ctx.fillRect(canvas.width - sqSize, 0, sqSize, canvas.height);
        ctx.fillRect(0, canvas.height - sqSize, canvas.width, sqSize);
        ctx.fillStyle = colorArray[0];
        ctx.fillRect(0, sqSize, canvas.width, sqSize);
        ctx.fillRect(0, canvas.height - sqSize * 2, canvas.width, sqSize);
        ctx.fillRect(sqSize, 0, sqSize, canvas.height);
        ctx.fillRect(canvas.width - sqSize * 2, 0, sqSize, canvas.height);
    }
}
draw();