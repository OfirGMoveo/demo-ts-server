npm install
echo 'install done'

npm run build && rm -rf src && mdir src && touch src/dummy
echo 'build done'
echo 'del source done'