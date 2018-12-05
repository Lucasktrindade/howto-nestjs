## O que é o NestJS?

O NestJS é um framework server-side em Node focado em criar aplicações entreprise, trazendo recursos de linguagens como C# e Java com coisas recentes do Javascript como decorators e também utilizando muito o TypeScript para usar os recursos de OO. 

## Por que devo usar o NestJS?

Desde a criação do Node, diversas aplicações foram criadas por conta de sua facilidade para iniciar, o grande número de pacotes existentes do npm e pela facilidade que o Javascript oferece. Porém, um problema que acontece após iniciar um projeto Node é manter ele escalável, manutenível, testável e com baixo acoplamento. 

Dado os problemas acima, o Nest vem pra solucionar esses problemas trazendo injeção de dependência, modularização, testabilidade e com o TypeScript trouxe coisas como tipos e interface.

## O quê vai aprender durante o tutorial?

Inicialmente o projeto vai ser focado em criar uma API Rest para uma loja online em que o usuário consiga comprar produtos e realizar pagamentos.

## Como iniciar com o NestJS?

É bem simples, basta instalar globalmente o Nest CLI:

```
npm i -g @nestjs/cli
```

Após a instalação do cli, rode o comando abaixo para criar um novo projeto:

```
nest new store-api
```