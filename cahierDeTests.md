# Liste exhaustive des différentes fonctions qui vont vous servir pour gérer votre todo-list

## PREMIER TEST : 

**NOM :** addTask <br>

**ID :** 1 <br>

**Objectif :** ajoute un élément à la todo-list <br>

**Références :** <br>

**Conditions préalables :**<br>
- instancier un tableau
- avoir une fonction addTask() --> pas besoin d'écrire cette condition car si on écrit un test, c'est que cette fonction existe forcément.

**Configurations :** <br>

**Etapes de test :** <br>
- exécuter la fonction addTask
- le tableau doit contenir la tâche/élément ajoutée

**Résultat attendu :** le tableau doit contenir l'élément ajouté <br>

## DEUXIEME TEST :

**NOM :** deleteTask <br>

**ID :** 2<br>

**Objectif :** supprime un élément à la todo-list <br>

**Références :** <br>

**Conditions préalables :**<br>
- instancier un tableau contenant au moins un élément

**Configurations :** <br>

**Etapes de test :** <br>
- créer un tableau et y ajouter au moins un élément (avec addTask())
- exécuter la fonction deleteTask(index)

**Résultat attendu :** le tableau ne doit plus contenir l'élément supprimé <br>

## TROISIEME TEST :

**NOM :** modifyTask <br> 

**ID :** 3<br>

**Objectif :** modifier un élément de la todo-list <br>

**Références :** <br>

**Conditions préalables :**<br>
- instancier un tableau contenant au moins un élément

**Configurations :** <br>

**Etapes de test :** <br>
- créer un tableau et y ajouter au moins un élément (avec addTask())
- exécuter la fonction modifyTask(index, label)

**Résultat attendu :** l'élément sélectionné dans le tableau doit ête modifié <br>

## QUATRIEME TEST :

**NOM :** deleteAllTasks <br>

**ID :** 4<br>

**Objectif :** supprimer tous les éléments de la todo-list <br> 

**Références :** <br> 

**Conditions préalables :**<br>
- instancier un tableau contenant au moins un élément

**Configurations :** <br>
- créer un tableau et y ajouter au moins un élément (avec addTask())
- exécuter la fonction deleteAllTasks()

**Etapes de test :** <br>
- créer un tableau et y ajouter au moins un élément (avec addTask())
- exécuter la fonction deleteAllTasks(pos, n)

**Résultat attendu :** tous les éléments du tableau doivent être supprimés <br>

## CINQUIEME TEST :

**NOM :** isDone <br>

**ID :** 5<br>

**Objectif :** modifie le statut "done" à true d'un élément de la todo-list <br>

**Références :**

**Conditions préalables :**<br>
- instancier un tableau contenant au moins un élément

**Configurations :**

**Etapes de test :**<br>
- créer un tableau et y ajouter au moins un élément (avec addTask())
- exécuter la fonction isDone(index)

**Résultat attendu :** Le statut "done" de l'élément est true <br>

## SIXIEME TEST :

**NOM :** isIncomplete <br>

**ID :** <br>

**Objectif :** modifie le statut "incomplete" à true d'un élément de la todo-list <br>

**Références :** <br>

**Conditions préalables :**<br>
- instancier un tableau contenant au moins un élément

**Configurations :** <br> 

**Etapes de test :** <br> 

**Résultat attendu :** Le statut "done" de l'élément est false <br>

## SEPTIEME TEST :

**NOM :** marklAllAsDone <br>
**ID :** <br>
**Objectif :** modifie le statut done à true de tous les éléments de la todo-list. <br>
**Références :** <br> 
**Conditions préalables :** il faut qu'il y ait au moins un élément dans la todo-list et que son statut "done" ne soit pas true <br>
**Configurations :** <br>
**Etapes de test :** <br>
**Résultat attendu :** le statut "done" de chaque élément de la todo-list est true <br>

## HUITIEME TEST :

**NOM :** markAllAsIncomplete <br>
**ID :** <br>
**Objectif :** modifie le "statut" done à false de tous les éléments de la todo-list <br>
**Références :** <br>
**Conditions préalables :** il faut qu'il y ait au moins un élément dans la todo-list et que son statut "done" ne soit pas false <br>
**Configurations :** <br>
**Etapes de test :** <br>
**Résultat attendu :** le statut "done" de chaque élément de la todo-list est true <br>

## NEUVIEME TEST :

**NOM :** moveTask <br>
**ID :** <br>
**Objectif :** permet à l'utilisateur de changer la place d'un élément de la todo-list selon son importance <br>
**Références :** <br>
**Conditions préalables :** il faut qu'il y ait au moins un élément dans la todo-list <br>
**Configurations :** <br>
**Etapes de test :** <br>
**Résultat attendu :** l'ordre de la todo-list est modifié <br>