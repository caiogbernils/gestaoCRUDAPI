# gestaoCRUDAPI
CRUD criado para disciplina de DB2

# Escopo

O serviço a ser desenvolvido será um sistema para a gestão de estoque de lojistas que vendem peças novas ou usadas para veículos na modalidade de varejo, onde será possível gerenciar além do estoque, também os pedidos de compra e pedidos de venda, bem como os seus clientes. Para alcançar este objetivo optamos por utilizar a linguagem de programação JavaScript para a criação da API, utilizando NodeJs fazendo a comunicação com MongoDB.


# Problema

A necessidade deste sistema de controle surgiu após o cliente perceber que havia diversas perdas durante o processo de compra e venda de um lote de peças, problemas como peças perdidas no estoque, demora para encontrar o que o cliente desejava, preços fora da realidade do mercado atual ou até mesmo extravio de mercadorias estava se torntando cada vez mais frequente devido a falta de um controle rigido e confiavel o que tornava as informações necessárias para dar fluxo ao trabalho.


Por hora o cliente optou em resolver seus problemas utilizando uma simples tabela no Excel e abandonar o caderninho, porém apesar de ser mais moderno os problemas eram sempre os mesmos, desta vez por falta de alimentação das tabelas ou alimentação incorreta por conta de seus funcionários.

## Solução

A solução que apresentamos para o cliente foi desenvolver um Sistema Web no qual ele deveria registrar toda e qualquer movimentação de seus produtos desde a chegada desta mercadoria na sua loja até o momento de saida. Neste sistema conteria informações básicas, porém muito importantes, como por exemplo o valor e data de compra, e localização do produto no estoque. 

Essas e outras informações resolveriam todos os problemas que o cliente tem atualmente, pois o funcionário não perderia mais tempo procurando uma peça no estoque, por menor que seja ela, pois bastaria pesquisar pelo seu nome no sistema e rapidamente ele lhe taria a localização exata, como numero do corredor e baia da prateleira, facilitaria também na hora de definir um preço final para o cliente, pois no sistema, esta peça estaria vinculada a um pedido de compra no qual conteria o valor e data de compra.

Além disso poderiamos implementar outras funcionalidades futuramente, como por exemplo relatório das peças com estoque abaixo do minimo ou até mesmo uma ficha de credito para gerar bonus aos clientes fiéis.

## Requisitos

 - MongoDB
 - NodeJS (npm)
 - Express
 - Insomnia Rest (para teste).

## Execução do projeto

    npm -i
    npm run start

    Projeto executa na porta 9000.
    
## Documentação

[Insomnia](https://github.com/caiogbernils/documentacaoCRUDAPI)
