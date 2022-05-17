# crypto 
Faut déjà ajouter Hardhat et donc l'installer voilà les commandes:

npm init --yes
npm install --save-dev hardhat

une fois Hardhat installé il faut ajouter certains plugins utilisés comme ethers pour avoir des ethers, etherscan qui permet de scan la blockchain

npm install --save-dev @nomiclabs/hardhat-ethers
npm install --save-dev @nomiclabs/hardhat-etherscan

la compilation du contrat se fait via la commande:
npx hardhat compile

le lancement de la blockchain avec:
npx hardhat node

ça va crée 10 nodes 

le deploiement se fait en utilisant le script deploy js 
npx hardhat run --network localhost ./scripts/deploy.js 

Une fois le contrat deployer pour verifier que tout marcher y'a le script index.js qui effectue une transaction simple 

npx hardhat run --network localhost ./scripts/index.js 

Le probleme qu'il y'a c'est que pour passer les arguments pour inserer le bloc il faut utiliser des hardhat tasks qui peuvent etre sous la forme de fichier
typescript (.ts) ou etre déclaré au niveau de hardhat.config.js

la task d'insertion s'execute sans erreurs mais la transaction ne s'effectue pas je ne sais pas pourquoi 
voilà la commande: npx hardhat insert hash jwt 

Pour la verification:
etherscan m'affique un probleme avec le network et j'ai pas trouvé comment lui dire que c'est le network local 
npx hardhat verify-private hash-recherché
