#! /usr/bin/env node
const fs = require('fs');
const path = require('path')

function copyFileFunction(src, dest) {
  var targetFile = dest;
  //if target is a directory a new file with the same name will be created
  if(fs.existsSync(dest)) {
    if(fs.lstatSync(dest).isDirectory()) {
      targetFile = path.join(dest, path.basename(src));
    }
  }
  fs.copyFileSync(src, targetFile)
}

function copyFolder(src, dest) {
  var files = [];
  //check if folder needs to be created or integrated
  var targetFolder = path.join(dest, path.basename(src));
  if(!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  //copy
  if(fs.lstatSync(src).isDirectory()) {
    files = fs.readdirSync(src);
    files.forEach(function(file) {
      var curSource = path.join(src, file);
      if(fs.lstatSync(curSource).isDirectory()) {
        copyFolder(curSource, targetFolder);
      } else {
        copyFileFunction(curSource, targetFolder);
      }
    });
  }
}

// create file structure
var folders = [
  'dest/css',
  'dest/js',
  'src'
];

// create files
for(folder of folders) {
  if(!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
}

// copy files from node_modules to dest
var dependencies = [
  ['node_modules/bootstrap/dist/css/bootstrap.min.css', 'dest/css/bootstrap.min.css'],
  ['node_modules/bootstrap/dist/js/bootstrap.min.js', 'dest/js/bootstrap.min.js'],
  ['node_modules/jquery/dist/jquery.min.js', 'dest/js/jquery.min.js'],
  ['node_modules/web-setup-cli/gulpfile.js', 'gulpfile.js']
]
for(dependency of dependencies) {
  copyFileFunction(dependency[0], dependency[1]);
}
copyFolder('node_modules/web-setup-cli/src', '.');
// add browserlistrc
fs.writeFileSync('.browserslistrc', 'last 4 version', function(err){
  if (err) throw err;
});

console.log('folder structure created');
console.log('run `gulp` to complete the process and start developing');