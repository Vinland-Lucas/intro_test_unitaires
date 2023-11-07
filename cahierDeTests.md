# Liste exhaustive des différentes fonctions qui vont vous servir pour gérer votre todo-list

## PREMIER TEST : 

**NOM :** addTask <br>

**ID :** 1 <br>

**Objectif :** ajoute un élément à la todo-list <br>

**Références :** <br>

**Conditions préalables :**<br>
- instancier un tableau
- avoir une fonction addTask(object, array) --> pas besoin d'écrire cette condition car si on écrit un test, c'est que cette fonction existe forcément.

**Configurations :** <br>

**Etapes de test :** <br>
- exécuter la fonction addTask(object, array)
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
- créer un tableau et y ajouter au moins un élément (avec addTask(object, array))
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
- créer un tableau et y ajouter au moins un élément (avec addTask(object, array))
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

**Etapes de test :** <br>
- créer un tableau et y ajouter au moins un élément (avec addTask(object, array))
- exécuter la fonction deleteAllTasks(position, array.length)

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
- créer un tableau et y ajouter au moins un élément (avec addTask(object, array))
- exécuter la fonction isDone(index)

**Résultat attendu :** Le statut "done" de l'élément est true <br>

## SIXIEME TEST :

**NOM :** isIncomplete <br>

**ID :** 6<br>

**Objectif :** modifie le statut "done" à false d'un élément de la todo-list <br>

**Références :** <br>

**Conditions préalables :**<br>
- instancier un tableau contenant au moins un élément
- le statut "done" de l'élément doit être true

**Configurations :** <br> 

**Etapes de test :** <br>
- créer un tableau et y ajouter au moins un élément (avec addTask(object, array))
- exécuter la fonction isDone(index)
- exécuter la fonction isIncomplete(index)

**Résultat attendu :** Le statut "done" de l'élément est false <br>

## SEPTIEME TEST :

**NOM :** markAllAsDone <br>

**ID :** 7<br>

**Objectif :** modifie le statut done à true de tous les éléments de la todo-list. <br>

**Références :** <br> 

**Conditions préalables :**<br>
- instancier un tableau contenant au moins un élément

**Configurations :** <br>

**Etapes de test :** <br>
- créer un tableau et y ajouter au moins un élément (avec addTask(object, array))
- exécuter la fonction markAllAsDone()

**Résultat attendu :** le statut "done" de chaque élément de la todo-list est true <br>

## HUITIEME TEST :

**NOM :** markAllAsIncomplete <br>

**ID :** 8<br>

**Objectif :** modifie le "statut" done à false de tous les éléments de la todo-list <br>

**Références :** <br>

**Conditions préalables :**<br>
- instancier un tableau contenant au moins un élément
- le statut "done" d'au moins un élément doit être true

**Configurations :** <br>

**Etapes de test :** <br>
- créer un tableau et y ajouter au moins un élément (avec addTask(object, array))
- exécuter la fonction isDone(index) ou markAllAsDone()
- exécuter la fonction markAllAsIncomplete()

**Résultat attendu :** le statut "done" de chaque élément de la todo-list est false <br>

## NEUVIEME TEST :

**NOM :** moveTask <br>

**ID :** 9<br>

**Objectif :** permet de changer la place d'un élément de la todo-list selon son importance <br>

**Références :** <br>

**Conditions préalables :**<br>
- instancier un tableau contenant au moins deux éléments

**Configurations :** <br>

**Etapes de test :** <br>
- créer un tableau et y ajouter au moins deux éléments (avec addTask(object, array))
- exécuter la fonction moveTask(index1, index2)

**Résultat attendu :** l'ordre de la todo-list est modifié <br>