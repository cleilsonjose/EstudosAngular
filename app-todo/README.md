
<h1 align="center"> To-do List </h1>
## Criar um modulo home, na pasta modules

```
ng g m modules/home
```

### Declare o export class HomeModule { } como HomeModule, no imports do app.module.ts

## Pages
 <p>Criar uma pasta 'pages' e dentro dela o componente Home</p>
 
```
ng g c  modules/home/pages/home
```
<p>No arquivo app-routing.module.ts crie uma rota para a pagina home, é só add o código abaixo na const routes, a qual recebe um objeto </p>

```
{ path:"", component: HomeComponent }
```

## Componentes 
<p>Vamos criar os componentes que vamos usar na nossa aplicação</p>

```
ng g c modules/home/componets/header
```

```
ng g c modules/home/componets/todoList
```

```
ng g c modules/home/componets/todoInputAddItens
```

```
ng g c modules/home/componets/todoButtoonDeleteAll
```

## todoList

<p>Importe o FormsModule no home.modules.ts</p>
```
imports: [
    CommonModule,
    FormsModule
  ]
```
