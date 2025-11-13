# THI — Site Next.js

Projet Next.js pour apprentissage du framework.

## Prérequis

Node.js ≥ 18
npm (fourni avec Node)

## Installation

1) Cloner le projet

HTTPS :
```bash
git clone https://github.com/Rei333/thi_nextjs.git
cd thi_nextjs
```

SSH :
```bash
git clone git@github.com:Rei333/thi_nextjs.git
cd thi_nextjs
```

2) Installer les dépendances

```bash
npm install
```

3) Création du fichier .env.local

```bash
cp template.env .env.local
```

## Configurer Supabase
1) Créer un projet Supabase

- Allez sur app.supabase.com -> *New project*
- Récupérez le **Project URL** et **API Key** et ajoutez-les au fichier .env.local
- Récuppérez le *service_role* dans *Project Settings* > *API Keys* et ajoutez-la au fichier .env.local

2) Ajouter la structure et les données du projet

- Dans Supabase -> *SQL Editor*
- Collez le contenu du fichier db.sql et exécutez le script

## Configurer l'authentification avec Google
1) Créer un ID client 0Auth

- Allez sur Google Cloud et sur l'onglet *Identifiants*
- Cliquez sur *Créer des identifiants* > *ID client 0Auth*
- Suivez les étapes puis *Créer un client OAuth* et remplissez les informations du projet
- Récupérez le **ID client** et le **Code secret du client** et ajoutez-les au .env.local

## Ajouter le NEXTAUTH_SECRET
Générez votre secret ici : https://generate-secret.vercel.app/32 et ajoutez-le au fichier .env.local

## Lancer le serveur de développement

```bash
npm run dev
```