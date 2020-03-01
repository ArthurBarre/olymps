# Olymps

## Symfony Api

### Requirements

- Php@7.3

- composer and symfony in latest version

---

```bash
git clone project
```

```bash
git checkout dev
```

- modifier le .env situé en api/.env

```bash
composer install
```

```bash
php bin/console doctrine:database:create

```

- Import paris-jo.sql in your Mysql Database

```bash
symfony serve
```

---

## React Front

```bash
 npm install
```

```bash
 npm start
```

---

## Documentation Back-End

### MCD

![MCD](./doc/image/MCD.png)

- En adéquation avec les besoins du front, nous avons organisé une architecture simple en 3 blocs distincts, tout d'abord la table Location qui répertorie les données relatives aux infrastructures sportives accessibles aux personnes en situation de handicap, associée à une table de jointure ( location_type ), permettant de rencenser la liste des accessibilités par lieu.
  Ensuite la table Event qui, elle, répertorie les différentes données relatives à l'historique des jeux paralympiques par année, elle aussi liée avec une table de jointure, permettant la récupération des sports présents pour chaque édition des jeux paralympiques, et enfin la table BestDistrict qui, elle, répertorie les donnée sur la partie "jeux paralympiques et pratique du sport pour les personnes en situation de handicap à Paris".

- Par exemple, pour obtenir les différents types d'accessibilité de chacune des infrastructures sportives ( Location ), nous avons mis en place une relation OneToMany, avec une table de jointure. Pour cela, en lisant la documentation de Doctrine, nous avons constaté qu'il fallait utiliser la relation ManyToMany en raison de la cardinalité (1,n ; 1,n). Nous lions donc la table Location et HandiType ( qui recense les différentes accessibilités ) avec la table LocationType, qui nous permet, pour chaque Location, d'obtenir dans un tableau ( ArrayCollection en Symfony ), les différents types dans des objets avec leur id , leur titre et la description du type.
  Pour vulgariser tout cela, lorsque nous demandons de retourner une Location en particulier, Symfony va chercher dans la table de jointure les lignes oú id_location = id_location dans la table Location et LocationType. Puis, Symfony, récupère les lignes qui correspondent et va retourner dans le tableau typesList au sein de l'entité Location les bons types (id, titre et description)

- Nous avons décidé de ne pas utiliser ApiPlatform après reflexion et test de cet outil, notamment car nous n'avions pas besoin de CRUD par exemple mais simplement besoin de la méthode GET, puis nous trouvions plus simple l'utilisation de Symfony "classique", car nous comprenions mieux quelle partie du code fait quoi et notre choix s'est porté vers cette approche.
- Pour la réalisation de l'API, en concertation avec l'équipe front, nous avons convenu que nous avions besoin de 3 endpoints principaux:
- Tout d'abord, l'endpoint /district/, lié à l'entité Location en GET: il permet en renseignant l'arrondissement qui nous intéresse dans la requête, d'obtenir les informations relatives à celui-ci. ( le endpoint /districts/ permet, lui, de retourner les données de tous les arrondissements sans filtre)
- Ensuite, le endpoint /event/, lié à l'entité Event en GET également qui permet de récupérer, par année, les données relatives aux jeux paralympiques de l'année sélectionné, et de la même manière que pour Location l'endpoint /events/ retourne tous les Events.
- Enfin, le endpoint district_info, qui permet de nourrir la data-viz de la partie Map, du front de notre projet, et fonctionne de la même manière avec la méthode GET.
- Nous n'avons pas protégé notre API car les données la constituant sont toutes récupérées et remodelées depuis les API et données existantes sur le web et ne représente qu'une source de data existante et non confidentielle.

## Documentation Technique

### Entité

- Location

### Url

- http://localhost:8000/district?district=75019

### Méthode

- GET

### Schema

![schema data location](./doc/image/location.png)

### Entité

- Event

### Url

- http://localhost:8000/event?district=75019

### Méthode

- GET

### Schema

![schema data event](./doc/image/event.png)

### Entité

- BestDistrict

### Url

- http://localhost:8000/district_info

### Méthode

- GET

### Schema

![schema data bestDistrict](./doc/image/bestDistrict.png)
