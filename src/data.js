// var defaultValues = (() => Array(100).fill(Array(100).fill('#F00')))()

// How the pixel matrix was made from the png
// var rgbToHex = function (rgb) { 
//   var hex = Number(rgb).toString(16);
//   if (hex.length < 2) {
//        hex = "0" + hex;
//   }
//   return hex;
// }
// 
// var getpix = require("get-pixels")
// 
// getpix("./src/chrome-boi.png", function(err, pixels) {
//   if(err) {
//     console.log("Bad image path")
//     return
//   }

//   const x = []
//   for (let y = 0; y < 100; y++) {
//     let row = ['#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000']
//     for (let x = 0; x < 79; x++) {
//       row.push(`#${rgbToHex(pixels.get(x, y, 0))}${rgbToHex(pixels.get(x, y, 1))}${rgbToHex(pixels.get(x, y, 2))}`)
//     }
//     row.push(...['#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000'])
//     x.push(row)
//   }
//   console.log(x);
// })

var chromeBoi = [ [ '#000','#000','#000','#000','#000','#000','#000','#000','#000' ],
[ '#000','#000','#000','#000','#000','#000','#000','#000','#000' ],
[ '#000','#000','#000','#000','#000','#000','#000','#000','#000' ],
[ '#000','#000','#000','#000','#000','#000','#000','#000','#000' ]
     ] 

export default chromeBoi
