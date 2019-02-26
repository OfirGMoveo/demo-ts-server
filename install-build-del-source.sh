npm install
echo 'install done'

rm -rf dist && npm run build && rm -rf src && mkdir src && touch src/dummy.ts
echo 'build done'
echo 'del source done'