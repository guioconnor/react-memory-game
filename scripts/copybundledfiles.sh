#! #!/usr/bin/env bash 

mkdir -p ./lib/bundled
cp ./build/static/js/main*.js ./lib/bundled/react-memory-game.js
cp ./build/static/js/main*.js.map ./lib/bundled/react-memory-game.js.map
cp ./build/static/css/main*.css ./lib/bundled/react-memory-game.css
cp ./build/static/css/main*.css.map ./lib/bundled/react-memory-game.css.map