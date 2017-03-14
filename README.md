# 2017-checkpoint-1
Wild Code School Checkpoint 1 - Vendredi 17 mars
JS / PHP - 4h

#### Kézako ?

- Une site en html/css dans lequel certain élément manque
- Le site à été réalisé à l'aide du framework css/js Bootstrap

#### Contenu

- Un dossier css comprenant la feuille de style du projet
- Un dossier font dans lequel se trouve la font folkard_.ttf
- Un dossier vendor dans lequel se trouve les fichiers du framework bootstrap (tu ne dois pas toucher à ce dossier, juste l'utiliser)
- Un dossier image (avec les images :-))
- Un gitignore permettant (dans le cas présent) d'ignorer le fichier .DS_Store qui est un fichier de conf spécifique aux mac (si tu as d'autre chose à ignorer par git, n'hesite pas à l'utiliser ;-))
- Un fichier index.html, template du site
- Un dossier README.md (ce que tu es en train de lire en faites)

## Etape 1
Une fois le dépôt cloné, crée toi une branche sur git portant ton nom, c'est sur cette dernière que tu travailleras.
Une fois le travail effectué tu pousseras ton travail dessus

## Etape 2

- Pour le moment (ba oui, tu vas bosser un peu quand même), le fichier index.html comporte un mini header ainsi qu'une liste d'article saisi en dur dans le code.
 - Modifier la barre de navigation afin que l'on y retrouve:
   - Un logo placé à gauche qui sera un lien vers la page d'accueil
   - lien vers une page pour ajouter une citation (que tu vas devoir également créer)
 - Créer un footer avec:
   - Icone des reseaux sociaux (twitter, facebook, githuh), pour cela utilise font awesome. Les icones devront être centrés au milieu du footer
 - Page d'ajout de citation:
   - Formulaire avec:
     - Un champ pour l'auteur de la citation
     - Un champ pour la citation
     - Un champ pour l'épisode dans lequel la citation est dites
     - Un champ pour la date d'ajout de la citation (en bonus la date sera défini automatiquement lors de la création)
     - En bonus: Un champ file permettant d'uploader une image (le moment on l'auteur dit la citation dans l'épisode)
 - Page édition de citation:
   - Formulaire avec les même champs que celui d'ajout de citation

#### Hint

 - Il est possible que le projet tel que tu l'a récupéré comporte quelque bug, résout les en même temps.
 - Il manque également quelque class bootstrap afin que le site soit responsive, ajoute les.
 - Le site a également été codé avec les pieds (faut bien qu'on se fixe des challenge nous aussi), du coup, l'indentation laisse à désirer... tu sais ce qu'il te reste à faire..

## Etape 3 - PHP - Le CRUD

Maintenant que tu as créer tes formulaires, autant les utiliser, rend le site administrable.
 - On doit pouvoir:
   - Ajouter une citation
   - Visualiser toutes les citations directement depuis la page d'accueil, avec le design actuel
   - Modifier une citation ciblé (tu peux utiliser les boutons déjà existant pour créer tes liens)
   - Supprimer une citation ciblé  

Pour cela, tu vas devoir créer une base de donnée, et ce grâce à mysql en mode cli.  
 La base de donnée devra s'appeler "kaamelott_1_2017" et devra contenir:
   - Une table nommé "citation" contenant
     - Un champs id qui sera la clé unique de la table, ce dernier ne devra jamais être nul, et devrai s'incrémenter automatiquement
     - Un champs author de 100 caractères maximum
     - Un champs chapter de 100 caractères maximum
     - Un champs content de 65 535 caractères maximum
     - Un champs date de type date
     - Un champs image de 65 535 caractères maximum  

**Une fois la base de donnée créé, execute les commandes suivantes dans le terminal et fais un copier collé du résultat dans un fichier sql.txt que tu mettra également sur Github avec le reste de ton projet:**  
 - ```echo  > ~/.mysql_history```
 - ```cat ~/.mysql_history```  

Une fois la base de donnée créé, il te reste à réaliser ce que l'on appel le CRUD, les actions pour Create, Read, Update, et Delete une/des citation(s).
1. Etape 1: Ajouter un citation via le formulaire créé ci dessus
2. Etape 2: Visualiser les citations depuis la page d'accueil
3. Etape 3: Supprimer une citation via le bouton delete situé sous chaque citation
4. Etape 4: Editer un article via le bouton edit situé sous chaque citation  

Ton fichier de connexion à la base de donnée ne devra pas se trouver sur le dépôt

#### Hint
 - Limite au maximum la redondance de code
 - Google, DuckDuckGo, Qwant... sont tes meilleurs amis
 - Pour tester ton code, tu trouvera ici quelques exemples de citations :-D : [Citation Kaamelott](https://fr.wikiquote.org/wiki/Kaamelott)

# Bon courage
