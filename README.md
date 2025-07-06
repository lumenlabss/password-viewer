# Password Revealer

**Password Revealer** est une extension Chrome simple et légère qui te permet d’afficher facilement les mots de passe cachés sur n’importe quelle page web.

---

## Fonctionnalités

- Clique sur l’icône de l’extension pour révéler tous les champs de mot de passe (`<input type="password">`) sur la page courante.
- Les champs passent en clair (`type="text"`) pour que tu puisses voir ce que tu as tapé.
- Aucune interface encombrante, pas de bouton dans la page.
- Compatible avec tous les sites web (permissions globales).
- Notifications simples indiquant combien de champs ont été révélés.

---

## Installation locale (pour développement)

1. Clone ou télécharge ce dépôt :

```bash
git clone https://github.com/tonpseudo/password-revealer.git
cd password-revealer
```

2. Ouvre Chrome et va dans `chrome://extensions/`

3. Active le **Mode développeur** (coin supérieur droit)

4. Clique sur **Charger l’extension non empaquetée**

5. Sélectionne le dossier du projet cloné

6. L’icône apparaît en haut à droite dans ta barre d’extensions.

---

## Utilisation

* Va sur n’importe quelle page web avec un champ mot de passe.
* Clique sur l’icône de l’extension.
* Tous les champs mot de passe deviennent visibles.
* Une notification t’indique le nombre de champs révélés.

> **Pourquoi cette extension ?**
> Certains sites web bloquent l’affichage des mots de passe, ou empêchent d’utiliser le clic droit ou d’autres méthodes pour les révéler. Cette extension contourne ce blocage simplement en changeant le type des champs mot de passe, même sur les sites qui essaient de l’empêcher.

---

## Permissions

* **scripting** : pour injecter du JavaScript sur la page.
* **host\_permissions** : accès à tous les sites (`<all_urls>`), nécessaire pour fonctionner partout.

---

## Projet open-source

Tu peux contribuer, ouvrir des issues ou faire des pull requests.
Licence MIT — fais-en ce que tu veux !

---

## À venir

* Version Firefox
* Option pour masquer à nouveau tous les champs (toggle)
* Améliorations UI/UX

---

## Auteur

**Loris La Tegola** — [Echo-Host](https://echo-host.net)
[Contact](mailto:loris.lategola@echo-host.net)

---

Merci d’utiliser **Password Revealer** !
