<h1>API E-Commerce - Bagy</h1>
API de e-commerce desenvolvida utilizando-se <strong>GraphQL</strong> para gerenciar as requisições e <strong>SQLite</strong> para gerenciamento de banco de dados.
Nesta API foram implementados os CRUDs de Clientes, Produtos e Pedidos.

<h2>Para Iniciar Aplicação</h2>

<h4>Instalando dependências</h4>
Após clonar o repositório, no diretório de projeto execute o seguinte código no terminal:

```
npm install
```

Assim serão instaladas das dependências para execução da aplicação.

<h4>Variáveis de ambiente</h4>
Para enviar emails aos clientes quando um pedido é feito, é necessário passar o login e senha como variáveis de ambiente. Para isso, na <strong>raiz do
projeto</strong>, crie um arquivo com o nome <strong>.env</strong> e dentro dele escreva o seguinte código:

```
EMAIL=<email responsavel >
EMAIL_SENHA=<senha>
PORT=<porta de execução da aplicação>
```

Substitua <strong> <email responsável> </strong> pelo email utilizado para enviar os emails aos clientes e "<senha>" sua respectiva senha.
<strong><porta de execução da aplicação></strong> é a porta onde a aplicação será executada(Ex: 4000).

<h4>Iniciar aplicação</h4>
Para iniciar a aplicação, no diretório raiz do projeto, execute o seguinte comando no terminal:

```
npm start
```

Assim será criado o banco de dados utilizado pela API e a aplicação estará rendando na PORT escolhida ou, por padrão, na porta 4000.

<h4>Workplace</h4>
Para realizar requisições siga os seguintes paços:
<ol>
<li>Abra o seu Browser</li>
<li>Acesse o seguinte endereço <strong>http://127.0.0.1:<em>PORT</em></strong></li>
</ol>
Onde <strong>PORT</strong> é a porta de execução, por padrão 4000 (Ex: http://127.0.0.1:4000/).

<h2>Queries</h2>
Para interagir com a API é necessário a realização de queries. Aqui estão alguns exemplos de querys que podem ser feitas.

<h4>Create</h4>
<details><summary>Clientes</summary>

```
mutation {
  createCliente(cliente: {
    nome: "larissa"
    email: "larissapaganini@gamail.com"
    cpf: "15442311723"
    dataNasc: "27/10/2000"
    rua: "expe"
    bairro: "bairro alto"
    cidade: "iconha"
    estado: "es"
    pais: "brasil"
    cep: 29280000
    numero: "n/a"
  }) {
    ... on Cliente {
      	id
        nome
        email
        dataNasc
        cpf
        endereco {
          rua
        }
    }
    ... on objErr {
      err {
        path
        message
      }
    }
  }
}
```

</details>
<details><summary>Produtos</summary>

```
mutation {
  createProduto(produto: {
    nome: "trem"
    imagem: "https://imagens.com/trem"
    descricao: "trem de 5 vagões"
    peso: 60.65
    preco: 20.99
    estoque: 200
  }) {
    ...on Produto {
      id
      nome
      descricao
      imagem
      peso
      preco
      estoque
    }
    ...on objErr {
      err {
        path
        message
      }
    }
  }
}
```

</details>
<details><summary>Pedidos</summary>

```
mutation {
  createPedido(pedido:{
    compradorId: 1
    parcelas: 5
    status: "aprovado"
  }, produtos: {
    produtos: [{quantidade: 1, id: 2}, {quantidade: 5, id: 1}]
  }) {
    ...on PedidoCriado {
      id
      total
      itens {
        quantidade
        nome
        preco
      }
      parcelas
      status
    }
    ...on objErr {
      err {
        path
        message
      }
    }
  }
}
```

</details>

<h4>Update</h4>
<details><summary>Clientes</summary>
  
```
mutation {
  updateCliente(id: 2, dados: {
    nome: "Larissa Paganini"
    email: "larissapaganini@gamail.com"
    cpf: "15442311723"
    dataNasc: "27/10/2000"
    rua: "expe"
    bairro: "bairro alto"
    cidade: "iconha"
    estado: "es"
    pais: "brasil"
    cep: 29280000
    numero: "n/a"
  }) {
    ... on Cliente {
      	id
        nome
        email
        dataNasc
        cpf
        endereco {
          rua
        }
    }
    ... on objErr {
      err {
        path
        message
      }
    }
  }
}
```
  
</details>
<details><summary>Produtos</summary>
  
```
mutation {
  updateProduto(id: 3, dados: {
    nome: "Trem"
    imagem: "https://imagens.com/trem"
    descricao: "trem de 5 vagões"
    peso: 60.65
    preco: 20.99
    estoque: 200
  }) {
    ...on Produto {
      id
      nome
      descricao
      imagem
      peso
      preco
      estoque
    }
    ...on objErr {
      err {
        path
        message
      }
    }
  }
} 
```
  
</details>
<details><summary>Pedidos</summary>
 
```
mutation {
  updatePedido(id: 8, dados:{
    compradorId: 1
    parcelas: 5
    status: "enviado"
  }) {
    ...on Pedido {
      id
      compradorId
      status
    }
    ...on objErr {
      err {
        path
        message
      }
    }
  }
}
```
  
</details>
<h4>Delete</h4>
<details><summary>Clientes</summary>

```
mutation {
  deleteCliente(id: 3)
}
```

</details>
<details><summary>Pedidos</summary>

```
mutation {
  deletePedido(id: 1)
}
```

</details>
<details><summary>Produtos</summary>

```
mutation {
  deleteProduto(id: 1)
}
```

</details>
<h4>GET</h4>
<details><summary>Clientes</summary>
 
```
query {
  clientes {
    ... on Cliente {
      result {
        id
        nome
        email
        dataNasc
        cpf
        rua
        bairro
        cidade
        numero
        cep
      }
    }
    ... on objErr {
      err {
        path
        message
      }
    }
  }
}
```

</details>
<details><summary>Cliente por ID</summary>
  
```
  Cliente por ID:
query {
  cliente(id: 1) {
    ... on Cliente {
      id
      nome
      email
      dataNasc
      cpf
      rua
      bairro
      cidade
      numero
      cep
    }
    ... on objErr {
      err {
        path
        message
      }
    }
  }
}
```
  
</details>
<details><summary>Produtos</summary>
  
```
query {
  produtos {
    ... on Produtos {
      result {
        id
        nome
        preco
        peso
        estoque
      }
    }
    ... on objErr {
      err {
        path
        message
      }
    }
  }
}
```

</details>
<details><summary>Produto por ID</summary>
  
```
query {
  produto(id: 2) {
    ... on Produto {
        id
        nome
        preco
        peso
        estoque
    }
    ... on objErr {
      err {
        path
        message
      }
    }
  }
}
```
  
</details>
<details><summary>Pedidos</summary>
  
```
query {
  pedidos {
    ...on Pedidos {
      result {
        id
        compradorId
        dataCriacao
        status
      }
    }
    ... on objErr {
      err {
        path
        message
      }
  }
}
```
  
</details>
<details><summary>Pedido por ID</summary>

```
query {
  pedido(id: 2) {
    ...on Pedido {
      id
      parcelas
      compradorId
      status
      dataCriacao
    }
    ...on objErr {
      err {
        path
        message
      }
    }
  }
}
```
  
</details>
<details><summary>Resumo de pedido</summary>

```
query {
  resumoPedido(id: 2) {
    ...on ResumoPedido {
      montante
      email
      pedido
      cliente
    }
    ...on objErr {
      err {
        path
        message
      }
    }
  }
}
```
  
</details>

<h2>Tecnologias Utilizadas</h2>
  <ul>
    <li>NodeJS</li>
    <li>GraphQL</li>
    <li>SQLite</li>
  </ul>

