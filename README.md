# Raro Labs – Basic

### Definições de Código:

- Utilizar a convenções do nest.js preferencialmente.
- Nome dos arquivos em Camel Case. Ex: gerarNotaFiscal.
- Código em inglês.
- Linguagem Typescript.
- Arquivos de testes unitários juntos dos módulos.
- Arquivos de testes de integração (e2e) numa pasta específicas de tests.
- Utilizar fixtures para os mocks do teste unitários.
- Arquivo .env.example com as variáveis de ambiente e descrição.


### Definições de BD: 

- Tabelas em português.
- Nome das tabelas em Snake Case. Ex: nota_fiscal
- MySQL

### Definições de Git:

- Branchs: master, development, e homolog.
- Utiliza o conceito do git flow.
- Padrão de commit: Convetional commit ou cz-conventional-changelog (Definir).
- Nomes da branch em português.
- Texto dos commits em português. 
- Padrão de nome de branchs em Kebab Case. Ex: ajustes-na-conta-usuario
- Padrão de branch de release: release (Definir).
- Padrão de branch feature: feature/[código-da-história]-[nome-da-história]
- Padrão de branch de bugfix: bugfix/[descrição-da-correção]
- Padrão de branch de hotfix: hotfix/[descrição-da-correção]


### Instalação

```bash
$ yarn add
```

### Rodando a aplicação

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Rodando os testes

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```