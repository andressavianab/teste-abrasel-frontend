# Teste frontend ABRASEL

Essa é uma solução para o teste frontend da [Abrasel](https://abrasel.com.br/).

## Índice

- [Visão geral](#visão-geral)
- [O teste](#o-teste)
- [Como rodar](#como-rodar)
- [Premissas assumidas](#premissas-assumidas)
- [Outras informações importantes](#outras-informações-importantes)
- [Author](#author)

## Visão geral

### O teste

Existem 4 problemas que precisamos de uma solução, que são:

- Números palíndromos são aqueles que escritos da direita para esquerda ou da esquerda para direita tem o mesmo valor. Exemplo: 929, 44, 97379. 
    - Fazer um algoritmo que imprima todos os números palíndromos entre um intervalo que será escolhido pelo usuário da aplicação.

- Suponha que um caixa disponha apenas de notas de 1, 10 e 100 reais.
    - escreva um algoritmo que mostre o número mínimo de notas que o caixa deve fornecer como troco.
    - Mostre também: o valor da compra, o valor do troco e a quantidade de cada tipo de nota do troco. Suponha que o sistema monetário não utilize moedas.
    - O valor da compra e o valor de dinheiro entregue ao caixa deve ser informado pelo usuário.

- Precisamos controlar melhor os dados de alguns veículos que ficam na nossa garagem e para isso precisamos que seja feito o seguinte:
    - Crie a interface “Veiculo” com os seguintes atributos:
        - Modelo
        - Ano de fabricação
        - Quantidade de Portas
        - Marca

    - Crie a classe “Carro”, que herda de Veículo e tem os seguintes atributos:
        - Quantidade de Portas: entre 2 e 4

    - Crie a classe “Moto”, que herda de Veículo, e possui os seguintes atributos:
        - Rodas: 2
        - Passageiros: entre 1 e 2

    - Deve ser solicitado ao usuário que preencha as informações sobre o seu veículo, os dados devem ser salvos em um arquivo JSON (para não precisar trabalhar com banco de dados, até porquê já vai ser bem próximo de um banco NoSQL);

- Deve ser informado pelo usuário 5 CEP’s, a aplicação deve consumir a api VIACep (https://viacep.com.br/) e obter dados sobre esses CEP’s. 
    - Os CEP’s informados pelo usuário devem ser inicialmente armazenados em um array, e o consumo da API deve ser de forma síncrona (aguardar a resposta do primeiro para iniciar a requisição do segundo e assim por diante).
    - Os dados após o processamento devem ser exibidos na tela.

    - Bônus: A integração com alguma api e/ou uso de alguma biblioteca para apresentar o mapa com os pins dos CEPs na interface, será um diferencial.

### Como rodar

Clone o repositório e instale as dependências:

Front-end 🖌️

```bash
cd teste-abrasel-frontend/Frontend
npm install
npm run dev
```

### Premissas Assumidas:

- Os usuários terão uma conexão de internet estável.
- Os usuários terão node.js/npm instalados na máquina.
- O sistema é projetado para funcionar em navegadores modernos, como Chrome, Firefox e Edge.

### Outras Informações Importantes:

- O layout desse aplicativo é totalmente responsivo e pode ser acessado de qualquer dispositivo.

## Author 🖋️

- linkedin - [Andressa Viana](https://www.linkedin.com/in/andressavbatista/)
- github - [Andressa Viana](https://github.com/andressavianab)