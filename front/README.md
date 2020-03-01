This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

prod: https://olymps-etrhn5z3v.now.sh/

## Argumentaire Timothée 
 Mon travail : 
J’ai réalisé la partie correspondant au deuxième écran du site : la partie historique qui affiche les données en fonction de l’année sélectionnée au scroll. Elle comprend les composants suivants : GameHistory et ses composants enfants Box, GameCircle, GameHistograms, GameHost. Je me suis aussi occupé du curseur et de son changement animé. J’ai également réalisé les barres de progressions sur la map threeJs (visible sur la branche dev) et une partie du css du tooltip. 

Méthode de travail : 
J’ai pris soin de ne pas utiliser de Classes react et de travailler uniquement avec des fonctions. Par conséquent, j’ai appris à utiliser de nombreux hooks de react. Cela m’a permis d’avoir une écriture plus concise sans être obligé d’instancier de classes avec des constructors et de ne pas utiliser le this pour éviter des erreurs liées à sa référence. Le useContext m’a également été très pratique pour communiquer l’état de l’année actuelle à tous mes composants. En effet, au scroll de mon année j’actualise l’id de celle-ci dans year-context.jsx et en important ce contexte dans tous mes composants, ils peuvent s’actualiser au changement de valeur l'id de l'année avec un hook useEffect (mon id d'année en paramètre du tableau d'exécution du useEffect). 

GSAP 
Notre site étant expérientiel et basé sur le ressenti utilisateur, il était indispensable d'avoir une librairie pour les animations. J'ai utilisé la librairie GSAP pour certaines animations afin d'améliorer le sentiment de fluidité du site. Ayant déjà travaillé avec et connaissant sa simplicité d'utilisation, notre choix s'est porté sur celle-ci. 
Elle a été très utile notamment pour le scroll des années (composant Box) et la gestion du curseur. En effet, le scroll des années est en réalité une animation qui en fonction de la position du curseur translate la position des années pour créer une sensation de scroll. GSAP m'a permis de changer la taille du curseur de manière smooth et de tracker la position de ma souris avec une duration. 

D3JS
Ne sachant pas comment réaliser le cercle (GameCircle) de la partie historique pour que les mots se tournent en gardant un sens de lecture lisible, hélène a trouver un exemple avec D3.js. Il est disponible au lien suivant : https://bl.ocks.org/mbostock/4583749. 
J'ai repris cet exemple et je l'ai adapté pour notre cas. La fonction range de D3 m' a été très utile pour placer mes disciplines en fonction du nombre total. Réaliser ce cercle m'a permis de prendre en main les principes de bases de cette librairie. J'ai profité des compétences acquises et de l'installation de cette bibliothèque pour réaliser les barres de progression (GameHistograms). 


## Argumentaire Hélène

Mon travail : 

J’ai réalisé la partie correspondant au troisième écran du site , c’est à dire la partie « map » de notre  site. Elle comprend les composants Canvas et MapInfos pour la gestion de la carte et du tooltip.
Je me suis aussi occupé de la gestion de l’audio et des éléments videos.
J’ai aussi passé beaucoup de temps à faire des tests que ce soir sur codepen ou sur des repositories test.

Méthode de travail : 
Pour la partie map avec three.js, je n’avais pas de connaissances au préalable j’ai donc commencé par faire beaucoup de tests en vanilla Javascript. Puis ai réussi à réécrire mon code en React j’ai aussi beaucoup appris sur la gestion des événements avec Three et React. J’ai aussi pour la première fois appris à utiliser les hooks. Pour cela j’ai passé beaucoup de temps sur la documentation React.
J’ai aussi utilisé le debuggeur Canvas de safari pour acceder aux éléments de mon canvas. 

Choix des solutions : ThreeJS & SVG & D3

Je voulais faire une carte 3d intéractive, j’ai donc eu un long moment de recherche sur les possibilités qui s’offraient à moi en terme de technologies.

J’ai choisi d’utiliser la librairie ThreeJs pour pouvoir faire de la 3d sans webgl avec l’utilisation de canvas et svg.
J’ai choisi d’utiliser svg pour pouvoir créer ma propre carte de Paris dans un format scalable.
J’ai aussi créer un model 3d sur blender à partir du svg mais je me suis vite rendu compte que les objets 3d directement importé étaient trop lourd.

Avant d’être capable de pouvoir utiliser le svg que j’ai dessiné sur Illustator je suis passée par une fonction pour pourvoir le reformater, supprimer les polygones et avoir seulement des paths en forme de coordonnées.

Avec La librairie threeJs j’ai ainsi pue extruder le svg et donc passer d’une carte en 2 dimensions à une carte en 3 dimentions.
ThreeJs m’a aussi permis d’animer la carte au survol du curseur.
mais aussi de pouvoir utiliser la camera de la scène du canvas pour créer un effet 3d plus illusionniste.

Pour que le tooltip apparaissent sur la carte en fonction de l’arrondissement j’ai appris à utiliser Raycaster qui permet de connaître la position du curseur dans un environnement 3d. Je copie donc les adresses vectoriel à chaque instant et lorsqu’elle intersect un élément object dans cet espace je lui applique une animation et une transformation.

J’ai aussi travaillé sur la partie ‘test’ de la section History.
À partir du fichier Json que j’avais créé et avant d’importer celui-ci sur la base de donnée j’ai écrit un code capable de récupérer les informations correspondantes à chaque Jeux Paralympiques.
J’ai aussi fait des tests pour pouvoir recréer la disposition des éléments sur un cercle polaire sans librairie mais je me suis rendu compte que c’était complexe et ai finalement décider d’utiliser la librairie D3.
