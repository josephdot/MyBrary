const fs = require('fs');
const path = require('path');

function mkdir(dir) {
  fs.mkdir(dir, { recursive: true }, (err) => {
    if (err) throw err;
  });
}

function mkFile( file ) {
  const pth = path.join( __dirname, file );
  console.log( pth );
  fs.open( pth, 'w' , (err) => {
    if (err) throw err;
  });
}

function reNameFile( old, nFile ) {
  const oldFile = path.join(__dirname, old );
  const newFile = path.join( __dirname, nFile );
  fs.rename(oldFile, newFile, err => {
    if(err) throw err;
  })
}

// mkdir('views/layouts');
mkFile('1.env');
// reNameFile( 'views/layouts/layouts.js', 'views/layouts/layouts.ejs' );