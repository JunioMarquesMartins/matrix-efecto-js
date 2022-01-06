const   canvas = document.getElementById('canvas'),
        context = canvas.getContext( '2d' );
        canvas.width = window.innerWidth - 4;
        canvas.height = window.innerHeight - 4,
        posX = new Array(), 
        posY = new Array(), 
        posYSliderDownTime = new Array(), 
        matrixFontSize = new Array();

const   textMatrix = ['F', 'E', 'L', 'I', 'Z', 'ト', '2', '0', '2', '2', 'ウ' ];
const   matrixColors = ['#ffffff', '#6fdb5f', '#389128', '#4dd135'];

Array.from(Array(60).keys()).forEach(index => {
    posX[index] = Math.floor(Math.random()*1265);
    posY[index] = 0;
    posYSliderDownTime[index] = Math.floor(Math.random()*100)+4;
    matrixFontSize[index] = Math.floor(Math.random()*30)+8;
});

setInterval(() => {
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);
    Array.from(Array(60).keys()).forEach(index => {

        context.font = matrixFontSize[index]+'px MatrixCode';
        context.textBaseline = 'top';
        context.textAlign = 'center';
        
        if (posY[index] > canvas.height) {
            posX[index] = Math.floor(Math.random()*canvas.width);
            posY[index] = 0;
            posYSliderDownTime[index] = Math.floor(Math.random()*10)+4;
            matrixFontSize[index] = Math.floor(Math.random()*30)+8;renderText(posX[index], posY[index]);
        }
        renderText(posX[index], posY[index]);
        posY[index] += posYSliderDownTime[index];
    });
}, 80);

function renderText(posX, posY) {
    
    new Array(textMatrix.length).fill().map((_, index) => index++).forEach(index => {
        var textRandom = textMatrix[Math.floor(Math.random()*textMatrix.length)];
        context.fillStyle = matrixColors[index];
        context.fillText(textRandom, posX, posY);
        posY -= matrixFontSize[index];
    });
}

