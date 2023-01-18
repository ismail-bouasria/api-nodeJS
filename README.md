# api-nodeJS
Api sous node.js et Express.js
Projet Annuaire

Maintenant que vous êtes prêts à utiliser Node JS, il est temps de développer votre
propre API. Le projet de la semaine va être de développer le back end d’un annuaire.
Cette API comportera plusieurs entités avec les champs pour chaque entité associés :
- Les users :
- email
- password
- firstname
- lastname

- createdAt
- updatedAt
- Les groupes :
- name
- createdAt
- updatedAt

Les utilisateurs peuvent appartenir à un seul groupe et les groupes peuvent avoir
plusieurs utilisateurs.
Votre annuaire va être composé de plusieurs routes:
- Une route qui permet à un utilisateur de s’enregistrer en complétant les champs
prenom, nom, email et un groupe.
- Une route qui permet à l’utilisateur de se connecter
- Une route qui retourne tous les utilisateurs dans une liste contenant les champs
prenom et nom.
- Une route qui retourne uniquement les noms des groupes (groupe 1, groupe 2, ...)
- Une route qui retourne les groupes ainsi que les users qui y sont rattachés
(uniquement prenom et nom)
- Une route qui permet d’avoir les détails d’un user (nom prenom email groupe)
- Une route qui permet aux utilisateur de s’ajouter à un groupe
- Une route qui permet de modifier ses informations (uniquement celles de
l’utilisateur connecté)
- Les routes qui permettent de supprimer, modifier un user
- Les routes qui permettent d’ajouter, modifier, supprimer un groupe
- Une route qui permet de modifier les utilisateurs présents dans un groupe
En vert : ce sont les routes ouvertes à tous, qui ne requièrent pas d’authentification
En orange : ce sont les routes ouvertes uniquement aux utilisateurs authentifiés, et à
l’admin
En rouge: ce sont les routes ouvertes uniquement à l’admin
