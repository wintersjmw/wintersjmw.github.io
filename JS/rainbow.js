
function hsl(h, s) {
    "use strict";
    return "hsl(" + h + "," + s + "%, 42%)";
}


var boxes = document.getElementsByClassName("box"),
    i = 0,
    j = 255,
    h = 0,
    s = 100,
    direction = 1,
    maxHue = 200,
    maxColors = boxes.length,
    colorIndex = 0,
    numOfSatCycles = 10,
    colors = [],
    hChange = maxHue / boxes.length,
    sChange = 100 / numOfSatCycles;



function changeColor() {
    "use strict";
    

    window.console.log(h);
    window.console.log(s);
    window.console.log(colors.length);
    window.console.log(boxes.length);
    window.console.log(direction);
    window.console.log(colorIndex);
    window.console.log(colors[colorIndex]);
    window.console.log('');
    /**s = 50 * Math.sin(i + 1.7) + 50;**/
    
    colors[i] = hsl(h, s);
    window.console.log("Color " + i + " is:" + colors[i]);
    h += hChange;
    window.console.log("hChange");
    
    
    boxes[i].style.backgroundColor = colors[colorIndex];
    
    
    i += 1;
    colorIndex += 1;
    
    
    if (colorIndex === boxes.length) {
        colorIndex = 0;
        window.console.log('*');
    }
    
    /** 
     * This should not have a minus one after boxes.length
     *
     */
    if (i === boxes.length) {
        i = 0;
        h = 0;
        s -= sChange;
        window.console.log("sChange");
        
        if (s === 0 || s >= 100) {
            sChange *= -1;
            
            window.console.log("sReverse");
        }
            
    }
    
    
    /**
    while (j + 1 !== i) {
        for (i = 0; i < 255; i += 1) {
            boxes[elem].style.backgroundColor = "green";
            window.console.log('*');
        }

        for (j = 255; j > 0; j -= 1) {
            boxes[elem].style.backgroundColor = "hsb(" + i + ",0,0)";
            window.console.log('_');
        }
    }
    */
}

var interval = setInterval(changeColor, 1);

    