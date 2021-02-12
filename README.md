
# Nave Vue Boilerplate

Boilerplate baseado no [Vue CLI](https://cli.vuejs.org/)

## Code Standard

Procure aplicar tudo que é transferível para o Vue do [nave guide](https://nave.gitlab.io/guides/nave/code-guide/), como padrão de imports e boas práticas de javascript.

1. Deixe explícito o tipo de cada uma de suas props.
2. Utilize estilos globais apenas no componente raiz da aplicação (App.vue), caso contrário utilize o atributo ***scoped*** nas tags de style dos seus componentes.
3. Caso não esteja usando uma biblioteca pronta como por exemplo Tailwind CSS, procure utilizar SCSS e manter seus estilos organizados.
4. Em caso de dúvidas utilize o [Style Guide do Vue](https://vuejs.org/v2/style-guide/) como referência para se assegurar do uso das melhores práticas possíveis de organização e code style.
5. Siga o padrão de pastas e padrão de código. Participe da construção do boilerplate, dê feedbacks e contribua com melhorias.

## Estrutura de Pastas

```
├── /public
├── /src
|   ├── /components
|   |    ├── /<component_name_folder>
|   |    |    ├── <component_name_file>.vue
|   |    |    ├── index.js
|   ├── /helpers
|   |    ├── <helper_file>.js
|   |    ├── index.js
|   ├── /providers
|   ├── /services
|   ├── /routes
|   |    ├── /<route_name_folder>
|   |    |    ├── <route_name_file>.js
|   |    |    ├── index.js
|   |    ├── /index.js
```

## Start

Clonar esse repositório e executar o comando `yarn` para instalar as dependências.

## Rodar projeto

`yarn serve`

## Commit

`git commit -m "commit message"`

## Sentry

O Sentry somente estará ativo se `VUE_APP_NODE_ENV=production`.

Para configurar o Sentry corretamente, siga as instruções [neste link](https://docs.sentry.io/platforms/javascript/guides/vue/).
