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
* Allez à la racine du projet saas-api
* Lancez la commande npm install
* Lancez la commande npx supabase init
* Lancez la commande npx supabase start (cela prendra un certain temps la première fois, car cela va télécharger les images docker nécessaire à supabase sur votre ordinateur)
* Mettez à jour votre fichier .env (créez le si vous n’en avez pas) mettez y dedans le contenu suivant:


## Create a new migration for the database


## Generate drizzle model types to update ORM types
To generate/update the types of drizzle ORM to make them fit the current staging or dev database data model, follow the below instructions  
* ( find the postrgres CONNECTION_STRING_TO_THE_DATABASE in supabase, it should looks like this ->postgres://postgres.......@aws-0-eu-central-1.pooler.supabase.com:5432/postgres) 
* ```npx drizzle-kit introspect:pg --out ./src/models/db --driver pg --connectionString=<CONNECTION_STRING_TO_THE_DATABASE>```  

These steps will generate/update the types in ./src/models/db/schema to use them in the code


## CI/CD pipelines
