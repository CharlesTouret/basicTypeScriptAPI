# BasicTypeScriptAPI
The goals of this repository is to help start a new API from scratch, it's kind of a boilerplate.
It use the libraries
* express (as API framework)
* supabase (to handle authentification + files saving in a bucket)
* drizzle (as a ORM)
* zod (as to validate our API schemas)
* sentry (to alert on 500 API response)
* knex (as database migration tool)
* eslint / prettier (as linter tools)

In a next version I plan to add also 
* brevo to setup mails
* stripe to setup payments

A swagger api will be generated at your_api_url/api-docs 

## Launch the environment in local with docker - docker-compose - supabase
To be able to launch the environment in local you will need to follow the following process ->
* Téléchargez docker desktop
* Allez à la racine du projet 
* Lancez la commande npm install
* Lancez la commande npx supabase init
* Lancez la commande npx supabase start (cela prendra un certain temps la première fois, car cela va télécharger les images docker nécessaire à supabase sur votre ordinateur)
* Mettez à jour votre fichier .env (créez le si vous n’en avez pas) mettez y dedans le contenu suivant: 
TODO: ajouter les variables d'environnement
* Vérifiez bien que les variables SUPABASE_CLIENTS_BUCKET_URL, SUPABASE_URL, SUPABASE_KEY et DATA_BASE_URL match bien les valeurs que vous voyez lorsque vous 
* lancez la commande npx supabase status
* Vous devriez à présent une base de donnée à jour avec celle de staging si vous allez sur http://127.0.0.1:54323/project/default 
* Si la base de donnée ne semble pas à jour, lancez la commande npx supabase reset qui s’assurera que votre base de donnée locale est bien la même que celle qui se trouve dans le fichier de votre repository supabase/seed.sql
* Ca y est bien joué, vous devriez pouvoir travailler sur votre environnement local, vous pouvez aller vous inscrire via le frontend et vous connectez ensuite à la plateforme sur votre environnement local 🙂


## Create a new migration for the database
* Attention, ne modifiez pas votre base de donnée local depuis l’UI de votre supabase local directement, pour se faire vous devez faire un migration avec knex
pour pouvoir l'appliquer ensuite sur les autres environnements (dev, staging, production)
* Pour appliquer des changements à votre base de donnée local, veuillez utiliser l’outil de migration Knex qui est en place dans le backend
* Allez à la racine du projet 
* Lancez la commande npm install
* Commencez par créer une migration en lançant la commande
* npm run db:migrate:create <nom_de_votre_migration>*
* Après avoir lancé la commande, vous verrez apparaître dans le dossier /database/migrations/migrations un nouveau fichier qui commencera par une suite de chiffres et qui aura le nom de migration que vous avez indiqué à la fin, c’est votre migration !
* Dedans vous allez retrouver un fichier composé d’une fonction up() et d’une fonction down()
* Ecrivez la fonction up et down dans le fichier généré (s'inspirer des autres migrations)
* Quand on est sur on peut tester la migration en lançant la commande npm run migrate:up pour appliquer la migration à notre db et npm run migrate:down pour la rollback 
* Après avoir appliquer la migration allez vérifier si la migration a fait le travail escompté dans l’UI supabase
* Si les changements sont bons vous pouvez continuer, sinon faitesun  npm run migrate:down reécrivez votre fonction up et relancez npm run migrate:up 
* Il est important quoiqu’il en soit de vérifier que les commandes npm run migrate:up et npm run migrate:down fonctionnent bien en les lançant plusieurs fois
* Une fois votre migration appliqué et fonctionnel, il va falloir que vous mettiez à jour votre fichier src/db/models/schema.ts qui est votre fichier de types pour l’ORM drizzle, pour mettre à jour ce fichier, lancez la commande
* npx drizzle-kit introspect:pg --out ./src/models/db --driver pg --connectionString=postgresql://postgres:postgres@127.0.0.1:54322/postgres
* Une fois votre code fini, vous pouvez directement aller faire un pull request sur staging, lors de l’acceptation de la pull request votre migration sera appliquée sur l'environnement staging 🙂

## Generate drizzle model types to update ORM types
To generate/update the types of drizzle ORM to make them fit the current staging or dev database data model, follow the below instructions  
* ( find the postrgres CONNECTION_STRING_TO_THE_DATABASE in supabase, it should looks like this ->postgres://postgres.......@aws-0-eu-central-1.pooler.supabase.com:5432/postgres) 
* ```npx drizzle-kit introspect:pg --out ./src/models/db --driver pg --connectionString=<DATA_BASE_URL>```  
* DATA_BASE_URL=postgresql://postgres:postgres@127.0.0.1:54322/postgres if  you are in local 

These steps will generate/update the types in ./src/models/db/schema to use them in the code


## CI/CD pipelines
You will find the ci / cd pipelines in the .github folder, these pipelines are commented for the moment, uncomment them and put your production and development server informations to make them work