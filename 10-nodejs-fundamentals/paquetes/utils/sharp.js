const sharp = require('sharp')

sharp('original.png')
    .resize(80, 80)
    .grayscale()
    .blur(1)
    .toFile('resized.png')