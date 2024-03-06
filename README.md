# Cocktails

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## git init

echo "# cocktails" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
it remote add cocktails https://github.com/sergefono/cocktails.git
git push -u origin main

## mise en place du projet

1- Commencez par supprimer le fichier src/app/app.component.spec.ts car nous ne verrons pas les tests toute suite.
2- Dans le fichier angular.json ajoutez : "skipTests": true L'option skipTests permet de ne pas générer de fichier de tests unitaires lorsque nous générons un composant avec Angular CLI
3- Mise en place des styles globaux : src/styles.scss
4- Utilisation d'une police Google font :
https://fonts.google.com/selection/embed
https://flatuicolors.com/
https://www.colorhexa.com/6c5ce7
https://open.spotify.com/search
https://www.niococktails.fr/blogs/news-1/les-cocktails-les-plus-populaires-au-monde
