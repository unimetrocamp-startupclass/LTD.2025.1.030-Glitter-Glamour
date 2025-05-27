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
- [11. Carta de Apresentação](#11-carta-de-apresentação)  
- [12. Carta de Autorização](#12-carta-de-autorização)  
- [13. Relato Individual do Processo](#13-relato-individual-do-processo)

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

O frontend do sistema ainda está em construção. A seguir, apresentamos a estrutura planejada das principais telas da aplicação, que serão implementadas nas próximas etapas do projeto. As imagens dos protótipos serão adicionadas assim que estiverem disponíveis.

---

#### Página Inicial

- Exibe os produtos em destaque e o catálogo geral.
- Usuários poderão clicar em um produto para ver mais detalhes.
- Terá menu de navegação com acesso ao carrinho e login.

> *(Imagem em breve)*

---

#### Página de Detalhes do Produto

- Mostrará as informações completas do produto selecionado.
- O usuário poderá escolher o tamanho e a quantidade desejada.
- Permitirá adicionar o item ao carrinho de compras.

> *(Imagem em breve)*

---

#### Carrinho de Compras

- Listará os produtos selecionados pelo usuário.
- Permitirá alterar a quantidade ou remover produtos.
- Exibirá o valor total do pedido e botão para finalizar.

> *(Imagem em breve)*

---

#### Painel Administrativo (Cliente)

- Acesso restrito via login.
- Permitirá adicionar, editar e remover produtos.
- Exibirá uma lista com os pedidos recebidos.

> *(Imagem em breve)*


### Códigos das Principais Funcionalidades

Abaixo estão os principais trechos de código do backend da aplicação, implementados com Node.js, Express e TypeORM, divididos entre **services** e **controllers** para manter a separação de responsabilidades e com explicações breves.

---
### 📌 Registro de Usuário com Endereço Integrado

```js
// services/users/userCreate.service.js

const userService = {
  async register(username, password, confirmPassword, email, cpf, cellphone, addressData, is_adm = false) {
    const userRepository = getRepository(UserSchema);
    const addressRepository = getRepository(AddressSchema);

    if (password !== confirmPassword) {
      throw new Error('As senhas não coincidem');
    }

    const existingUser = await userRepository.findOne({ where: { email } });
    if (existingUser) {
      throw new Error('Usuário com esse email já existe');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = userRepository.create({
      username,
      password: hashedPassword,
      email,
      cpf,
      cellphone,
      is_adm
    });

    await userRepository.save(newUser);

    const newAddress = addressRepository.create({
      ...addressData,
      user: newUser
    });

    await addressRepository.save(newAddress);

    return { message: 'Usuário criado com sucesso', user: newUser, address: newAddress };
  }
};
```
- Cria um novo usuário com senha criptografada, verificações básicas e já associa um endereço à conta.

---

### 📌 Login com Geração de Token JWT

```js
// services/users/userCreate.service.js

async login(username, password) {
  const userRepository = getRepository(UserSchema);
  const user = await userRepository.findOne({ where: { username } });

  if (!user) {
    throw new Error('Usuário não encontrado');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Senha incorreta');
  }

  const token = jwt.sign(
    { id: user.id, username: user.username, is_adm: user.is_adm },
    'sua_chave_secreta',
    { expiresIn: '1h' }
  );

  return { message: 'Login bem-sucedido', token, user: { id: user.id, username: user.username, is_adm: user.is_adm } };
}

```

- Valida credenciais do usuário e gera um token JWT com validade de 1 hora.

---

### 📌 Criação de Produto com Verificação de Categoria

```js
// services/products/productCreate.service.js

const productCreateService = {
  async createProduct(productname, price, description, detail, is_newArrivals, size, cover_image, first_image, second_image, third_image, category) {
    if (![1, 2, 3, 4].includes(category)) {
      throw new Error('A categoria deve ser um número entre 1 e 4.');
    }

    const productRepository = getRepository(ProductSchema);

    const newProduct = productRepository.create({
      productname,
      price,
      description,
      detail,
      is_newArrivals,
      size,
      cover_image,
      first_image,
      second_image,
      third_image,
      category,  
    });

    await productRepository.save(newProduct);

    return { message: 'Produto criado com sucesso', product: newProduct };
  }
};

```
- Registra um novo produto no banco de dados, incluindo múltiplas imagens e categoria validada

---

### 📌 Criação de Pedido com Itens Relacionados

```js
// services/orders/orderCreate.service.js

const orderCreateService = {
  async createOrder(userId, addressId, items) {
    const user = await getRepository(UserSchema).findOne({ where: { id: userId } });
    if (!user) throw new Error('Usuário não encontrado.');

    const address = await getRepository(AddressSchema).findOne({ where: { id: addressId } });
    if (!address) throw new Error('Endereço não encontrado.');

    const orderRepository = getRepository(OrderSchema);
    const orderItemRepository = getRepository(OrderItemSchema);
    const productRepository = getRepository(ProductSchema);

    let total = 0;

    const newOrder = orderRepository.create({ user, address, total: 0, items: [] });
    await orderRepository.save(newOrder);

    const orderItems = [];

    for (const item of items) {
      const product = await productRepository.findOne({ where: { id: item.productId } });
      if (!product) throw new Error(`Produto com ID ${item.productId} não encontrado.`);

      const orderItem = orderItemRepository.create({
        order: newOrder,
        product,
        quantity: item.quantity,
        price: product.price,
      });

      await orderItemRepository.save(orderItem);
      orderItems.push(orderItem);

      total += parseFloat(product.price) * item.quantity;
    }

    newOrder.total = total;
    newOrder.items = orderItems;

    await orderRepository.save(newOrder);

    return { message: 'Pedido criado com sucesso', order: newOrder };
  }
};

```

- Cria um pedido vinculado a um usuário e endereço, calcula o total com base nos produtos e salva os itens.
  
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
Após as entregas parciais, realizadas de acordo com os requisitos do sistema e o cronograma, o MVP foi apresentado em uma reunião realizada entre o time de desenvolvedores e o cliente.

| Foto | Legenda |
|------|---------|
| ![Foto 1](https://github.com/user-attachments/assets/454e53d2-93c2-4175-922f-7556f033f58c)| Da esquerda para a direita: Angelica e Kelliane junto ao cliente, com a pagina inicial ao fundo. |
| ![Foto 2](https://github.com/user-attachments/assets/ae7c2c1d-7826-4529-9d78-767a03fa09d6)| Apresentação do MVP realizada por Kelliane. |
| ![Foto 3](https://github.com/user-attachments/assets/5e9d6777-ff9c-484c-810f-b210e918762d)| Participantes da homologação acompanhando a apresentação do MVP. |

### Lista de Presença


| Nome                          | Papel       |
|-------------------------------|-------------|
| Andréa Maria Zaule Moreira                  | Cliente     |
| Angelica Maria Zaule Moreira                | Desenvolvedor |
| Kelliane Vieira dos Santos                  | Desenvolvedora |


---

## 10. Divulgação

### Artigo no LinkedIn 

![artigo angelica](https://github.com/user-attachments/assets/e36a2525-9c8d-420e-b341-333a496c703d)

🔗 [Link do artigo](https://www.linkedin.com/posts/angelica-moreira_activity-7328888905041182720-xKSx?utm_source=share&utm_medium=member_desktop&rcm=ACoAADquB1ABskEsBroC5FzB_RxUJSt5Njf7pCg)

**Perfil da Aluna 2**  
![artigo kelliane](https://github.com/user-attachments/assets/be7a7b44-b941-4aaa-8aca-d4adca9b04b8)

🔗 [Link do artigo](https://www.linkedin.com/posts/kelliane-vieira_activity-7331463119627616256-KIOb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADquB1ABskEsBroC5FzB_RxUJSt5Njf7pCg)




#### Fotos da Apresentação
| Foto | Legenda |
|------|---------|
| ![Foto 1](https://github.com/user-attachments/assets/0e0c12d4-1a1c-4fe6-bf68-021a3dc926ba)| Da esquerda para a direita: Kelliane e Angelica – apresentação do artigo |
| ![Foto 2](https://github.com/user-attachments/assets/28e56bf5-13a6-46dc-ba0b-5e64b0133842)| Kelliane - Slide de introdução ao fundo |
| ![Foto 3](https://github.com/user-attachments/assets/6b73e2f2-5176-4936-b5ac-f435cb7665e9)| Visão geral da sala – apresentação de frente para o fundo |
| ![Foto 4](https://github.com/user-attachments/assets/cb9ca08a-10a3-4303-ae8f-09d38f7d748d)| Visão geral da sala – apresentação do fundo para a frente |


### Lista de Presença

| Nome Completo                   | Matrícula          |
|--------------------------------|---------------------|
| João Paulo da Silva Júnior     | 202402531409        |
| João Victor Romagnóli Vendito  | 202402531425        |
| João Lucas Las Casas Alves     | 202208700471        |
| Vinicius Mastrangelo Dias      | 202208700438        |
| Angelica Maria Zaule Moreira   | 202402395394        |
| Kelliane Vieira dos Santos     | 202402410581        |
| Marcelo Jeronimo de Oliveira   | 202209188676        |
| Matheus Girardi de Oliveira    | 202208700462        |
| Camila Marinho Dourado         | 20240239383920      |
| Gustavo Ian Gonçalves Tavares  | 202404410196        |
| Giovanni Garcia de Souza       | 202102636728        |
| Victor Ronqui de Souza         | 202402392905        |

---


## 11. Carta de Apresentação

📄 [Visualizar PDF da Carta de Apresentação](https://drive.google.com/file/d/1mL-wX8V87_i_WaiumTmRYGTf2vcOc2eX/view?usp=sharing)

---

## 12. Carta de Autorização

📄 [Visualizar PDF da Carta de Autorização](https://drive.google.com/file/d/1JoQ1oL5cpPqLpTJZfGS4TLhZL1Qi4KPX/view?usp=sharing)

---

## 13. Relato Individual do Processo

- **Angelica Moreira:** 
  - O processo de construção do software foi uma experiência desafiadora e enriquecedora. Trabalhar com um cliente real nos motivou a entender de forma mais profunda as reais necessidades do usuário final, o que exigiu empatia, escuta ativa e capacidade de adaptação. Durante o desenvolvimento, aplicamos metodologias ágeis que facilitaram a organização e a divisão de tarefas entre os membros da equipe. Aprendemos muito sobre trabalho em equipe, responsabilidade com prazos e a importância de manter uma comunicação clara com o cliente.

- **Kelliane Vieira:** 
  - Participar do desenvolvimento deste projeto foi uma experiência muito enriquecedora, pois envolveu criar uma solução digital para uma cliente real: uma lojista de roupas que tem  pouca familiaridade com tecnologia, mas com o desejo de expandir suas vendas para o meio online. O nosso principal desafio foi construir um sistema acessível, simples e eficiente. No backend, utilizamos tecnologias como Express, TypeORM, PostgreSQL, JWT e Bcrypt para garantir segurança e organização dos dados. No frontend, aplicamos React, com Webpack, Babel e CSS, sempre com foco em usabilidade. O design foi totalmente desenvolvido no Figma, buscando sempre uma interface clara e intuitiva.
Trabalhamos diretamente na construção das funcionalidades principais, como o cadastro de produtos, visualização de pedidos e painel administrativo, sempre pensando na experiência da nossa cliente. Foi necessário adaptar a linguagem visual e funcional do sistema para torná-lo acessível a alguém que possui  pouca experiência digital. Esse projeto me ensinou a importância de ouvir o cliente, adaptar soluções à realidade do usuário final e equilibrar aspectos técnicos com empatia. Mais do que desenvolver um sistema, ajudamos a cliente a dar um passo importante na digitalização do seu negócio e futuramente  expandir ainda mais seu e-commerce conforme ela for se familiarizando com esse meio tecnológico.



---
