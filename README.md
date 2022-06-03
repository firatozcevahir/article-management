# ArticleManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

##

- This application supports multi language (tr, en currently)
- You can list, insert, edit, delete articles
- Article insert, edit and delete operations are authentication protected
- There is one user currently (username: *firot*, password: *123*). Can be added more in *src/app/_core/services/auth.service.ts*
- Article list can be filtered using search input on top of the list (searching in title, author, summary fields)
- Articles are stored in *localStorage*

## How to Run the Project
- Download the project or clone the repository from github
- Run `npm insall` to install packages
- Run `ng serve` then navigate to `http://localhost:4200/` or simply `npm run start`
