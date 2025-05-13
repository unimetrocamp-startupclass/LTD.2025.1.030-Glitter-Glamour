# LTD.2025.1.030-Glitter-Glamour
Um e-commerce de roupas

# Documentação do Sistema - Projeto 2025.1
---

## Sumário

- [Dados do Cliente](#dados-do-cliente)  
- [Equipe de Desenvolvimento](#equipe-de-desenvolvimento)  
- [1. Introdução](#1-introdução)  
- [2. Objetivo](#2-objetivo)  
- [3. Escopo](#3-escopo)  
- [4. Backlogs do Produto](#4-backlogs-do-produto)  
- [5. Cronograma](#5-cronograma)  
- [6. Materiais e Métodos](#6-materiais-e-métodos)  
- [7. Resultados](#7-resultados)  
- [8. Conclusão](#8-conclusão)  
- [9. Homologação do MVP](#9-homologação-do-mvp)  
- [10. Divulgação](#10-divulgação)  
- [11. FENETEC](#11-fenetec)  
- [12. Carta de Apresentação](#12-carta-de-apresentação)  
- [13. Carta de Autorização](#13-carta-de-autorização)  
- [14. Relato Individual do Processo](#14-relato-individual-do-processo)

---

## Dados do Cliente

- **Título do Projeto:** Glitter&Glamour: um e-commerce de roupas
- **Cliente:** Andréa Maria Zaule Moreira
- **CNPJ/CPF:** 223.954.118.09
- **Contato:** Andrea Moreira
- **Email do Contato:** andreamariazm@gmail.com

---

## Equipe de Desenvolvimento

| Nome Completo                    | Curso                                  | Disciplina                                 |
|----------------------------------|--------------------------------------- |--------------------------------------------|
| Angelica Maria Zaule Moreira     | Sistemas de Informação                 | Programação Orientada a Objetos em Java    |
| Kelliane Vieira dos Santos       | Analise e desenvolvimento de sistesmas | Programação Orientada a Objetos em Java    |


**Professor Orientador:** Kessede Rodrigues

---

## 1. Introdução

A cliente, proprietária de uma loja física de roupas, identificou a necessidade de expandir suas vendas para o meio digital, em sua cidade. Por ser uma pessoa de mais idade e com pouco domínio de tecnologia, ela precisa de uma solução prática, acessível e de fácil utilização para gerenciar sua loja virtual sem complicações.

Para resolver esse problema, será desenvolvido um sistema de e-commerce completo, com frontend e backend integrados, que permitirá o cadastro de produtos, controle de pedidos e visualização de vendas. A interface será intuitiva, com navegação simplificada, garantindo uma boa experiência tanto para a cliente quanto para os consumidores.

As tecnologias utilizadas no backend incluem Express, TypeORM, PostgreSQL, Bcrypt para criptografia de senhas, JWT para autenticação segura, além de CORS e Dotenv para configuração do ambiente. No frontend, o projeto utilizará React para a construção da interface, com Webpack e Babel para empacotamento e transpilação dos arquivos, além de CSS para estilização avançada. Para o design será utilizado o figma.

Esse sistema irá transformar a operação da loja física em uma plataforma digital acessível e eficiente, ampliando o alcance das vendas e facilitando a gestão da loja pela cliente.

---

## 2. Objetivo

Criar um sistema de e-commerce completo que permita à cliente vender seus produtos pela internet, facilitando o cadastro e visualização de peças, o recebimento de pedidos e o acompanhamento das vendas. A plataforma será desenvolvida com foco em usabilidade, oferecendo uma interface amigável e acessível mesmo para pessoas com pouca experiência digital. O sistema visa proporcionar praticidade no dia a dia da cliente e ampliar o alcance da loja no mercado local.

---

## 3. Escopo

O sistema será composto por um e-commerce completo com foco em facilitar a experiência de venda online da cliente. Os principais requisitos que serão implementados incluem:

1. **Catálogo de Produtos e Compras Online**  
   O sistema permitirá o cadastro e visualização de produtos com fotos, preços, tamanhos e descrições. Os usuários poderão acessar o catálogo, selecionar itens e realizar pedidos por meio de um processo de compra simples.

2. **Painel de Gerenciamento para a Cliente**  
   Será desenvolvido um painel administrativo exclusivo para a cliente, onde ela poderá cadastrar, editar e excluir produtos, além de visualizar os pedidos realizados. A interface será intuitiva, adequada para pessoas com pouca familiaridade com tecnologia.

 **Limites da Implementação**  
   A aplicação será voltada inicialmente apenas para o público da cidade da cliente, sem integração com serviços de entrega externos.  
   O sistema não contará, nesta etapa, com funcionalidades como pagamento online integrado e sistema de estoque detalhado.

---

## 4. Backlogs do Produto

 Principais requisitos definidos com base nas necessidades da cliente e nas discussões realizadas com a equipe de desenvolvimento:

1. **Cadastro de Produtos**  
   A cliente poderá adicionar novos produtos ao sistema, informando nome, descrição, preço, imagem e tamanhos disponíveis.

2. **Listagem de Produtos no Site**  
   Os usuários poderão visualizar todos os produtos cadastrados em uma vitrine virtual, com fotos, descrições e preços.

3. **Página de Detalhes do Produto**  
   Cada produto terá uma página com informações mais detalhadas e opção para o usuário selecionar tamanho e quantidade.

4. **Sistema de Pedidos**  
   O cliente poderá adicionar produtos ao carrinho e realizar um pedido. Os dados do pedido serão armazenados para posterior visualização pela cliente.

5. **Painel Administrativo**  
   A cliente terá acesso a um painel onde poderá visualizar os pedidos realizados e gerenciar os produtos (editar ou excluir).

6. **Autenticação e Segurança**  
   A cliente precisará realizar login para acessar o painel administrativo, com uso de autenticação JWT e criptografia de senha com Bcrypt.

7. **Design Responsivo e Intuitivo**  
   A interface será projetada de forma limpa e simples, adequada para fácil navegação em dispositivos móveis e por pessoas com pouca experiência digital.

Esses são os requisitos iniciais definidos para o projeto. Conforme o desenvolvimento avança, novos itens podem ser adicionados ou ajustados conforme necessidade e viabilidade.

---

## 5. Cronograma

| Sprint | Período              | Atividades Principais                                                                 |
|--------|----------------------|----------------------------------------------------------------------------------------|
| 1      | 01/04 – 14/04        | Levantamento de requisitos, definição do escopo, criação do repositório, modelagem do banco de dados e design no figma. |
| 2      | 15/04 – 28/04        | Desenvolvimento do backend: criação de entidades, rotas, autenticação e conexão com o banco de dados. |
| 3      | 29/04 – 12/05        | Desenvolvimento do frontend: layout com React, páginas de produtos, carrinho e painel administrativo. |
| 4      | 13/05 – 26/05        | Integração entre frontend e backend, testes de funcionalidades e correção de erros.   |
| 5      | 27/05 – 05/06        | Ajustes finais, testes de usabilidade, documentação e entrega do projeto.             |


## 6. Materiais e Métodos

### Modelagem do Sistema

Para representar a estrutura e o comportamento do sistema, foram utilizados os seguintes diagramas:

- **Diagrama de Casos de Uso (UML)**  
  Representa os principais atores do sistema (cliente, administrador) e suas interações com o sistema. Auxilia na identificação e comunicação dos requisitos funcionais.

- **Modelo Entidade-Relacionamento (MER)**  
  Modela a estrutura do banco de dados, identificando as entidades principais e os relacionamentos entre elas, como: `Usuário`, `Produto`, `Pedido`, `Endereço`, entre outros.

Os diagramas foram desenvolvidos utilizando a ferramenta [Draw.io](https://app.diagrams.net/) pela sua praticidade e colaboração em tempo real.

> **Imagens dos Diagramas**  
> 
> ![MER](https://github.com/user-attachments/assets/9f8ab000-96b5-4e53-9623-1af5c5dd59fd)
>
> ![caso de uso](https://github.com/user-attachments/assets/c2ed9b0d-48aa-423f-b7dd-353e7593472e)



### Tecnologias Utilizadas

| Tecnologia       | Tipo                    | Descrição                                                                 |
|------------------|-------------------------|---------------------------------------------------------------------------|
| **JavaScript**   | Linguagem               | Utilizada no backend e frontend.                                          |
| **Node.js + Express** | Framework Backend   | Criação da API RESTful.                                                  |
| **React**        | Biblioteca Frontend     | Construção da interface do usuário.                                       |
| **PostgreSQL**   | Banco de Dados          | Armazenamento de produtos, pedidos, usuários, etc.                        |
| **TypeORM**      | ORM                     | Mapeamento objeto-relacional no backend.                                  |
| **Bcrypt**       | Biblioteca               | Criptografia de senhas.                                                  |
| **JWT**          | Biblioteca               | Autenticação baseada em token.                                           |
| **Dotenv**       | Biblioteca               | Gerenciamento de variáveis de ambiente.                                  |
| **Figma**        | Ferramenta de Design    | Criação de protótipos de interface.                                       |
| **Draw.io / Lucidchart** | Ferramentas de Modelagem | Criação de diagramas UML e MER.                                  |

---

### Arquitetura do Sistema

O sistema segue a arquitetura padrão de **cliente-servidor**, separada em três camadas:

1. **Frontend (React)**  
   Interface que interage com o usuário final. Responsável por consumir a API e exibir dados de forma intuitiva.

2. **Backend (Express/Node.js)**  
   Responsável pelas regras de negócio, autenticação, persistência de dados e respostas à interface.

3. **Banco de Dados (PostgreSQL)**  
   Armazena as informações de usuários, produtos, pedidos e endereços.

> **Diagrama da Arquitetura (Fluxo de Dados)**  
> ![Diagrama da Arquitetura](https://github.com/user-attachments/assets/688b8d23-6095-4b91-929a-b5c4c242f419)

## 7. Resultados

###  Protótipo


### Códigos das Principais Funcionalidades


---

## 8. Conclusão

### Impacto do Sistema

O sistema desenvolvido atendeu aos principais objetivos definidos no início do projeto, proporcionando à cliente a possibilidade de gerenciar sua loja virtual de forma prática e intuitiva.  
Com a plataforma, foi possível:

- Ampliar o alcance da loja para o meio digital, permitindo que mais pessoas da cidade conhecessem os produtos.
- Facilitar o processo de cadastro e gerenciamento de produtos, mesmo para uma usuária com pouca familiaridade com tecnologia.
- Oferecer uma experiência de compra simples e agradável para os consumidores, com um catálogo organizado e um fluxo de compra claro.

A implementação do sistema trouxe mais autonomia e eficiência para a gestão da loja, contribuindo para o aumento das vendas e da visibilidade no mercado local.

### Melhorias Futuras

Embora o sistema entregue as funcionalidades essenciais previstas no escopo, algumas melhorias podem ser consideradas em futuras versões para aprimorar ainda mais a experiência:

- **Integração com sistemas de pagamento online** (ex.: PIX, cartão de crédito) para facilitar as transações.
- **Sistema de controle de estoque**, com alertas de baixo estoque.
- **Integração com serviços de entrega**, como cálculo de frete automático e rastreamento de pedidos.
- **Criação de um módulo de relatórios** para acompanhar vendas, faturamento e desempenho dos produtos.


---

## 9. Homologação do MVP

### Fotos da Homologação


### Lista de Presença


---

## 10. Divulgação

### Perfil no LinkedIn do Projeto


### Vídeo da Apresentação (Seminário de Projetos)



#### Fotos da Apresentação



### Lista de Presença


---

## 11. FENETEC

### Apresentação do Projeto

#### Fotos do Evento



### Lista de Visitantes


---

## 12. Carta de Apresentação



---

## 13. Carta de Autorização



---

## 14. Relato Individual do Processo

- **Nome do aluno 1:** 
  - *Relato pessoal sobre o processo.*

- **Nome do aluno 2:** 
  - *Relato pessoal sobre o processo.*



---
