
﻿# Desafio-Fullstack


Olá, este certo tem como objetivo te guiar, em como iniciar o projeto e ultilizar a aplicação, junto com cada retorno e requisição que vai ser feita.

# PASSO 1: CRIE UM ARQUIVO .ENV E COLOQUE AS INFORMAÇÕES, o nome certo de cada propriedade para criar o banco de dados está no arquivo ENV.EXAMPLE

![image](https://user-images.githubusercontent.com/100230592/229081105-a7f41e2d-e5e6-4755-b1c0-f0ec11ac09d0.png)

# PASSO 2: NO TERMINAL USE CD BACK E PERSISTA AS MIGRAÇÕES QUE EXISTE COM O COMANDO: 
  yarn typeorm migration:run -d src/data-source.ts
  
# PASSO 3 : RODE O SERVER AINDA NA CD BACK COM O COMANDO: 
yarn run dev
Esta Mensagem Deve Aparecer: 
![image](https://user-images.githubusercontent.com/100230592/229082463-5f9aa3de-980f-4fc9-b690-d4cba826c885.png)

# PASSO 4 : INCIE O SITE AGORA CRIANDO OUTRO TERMINAL E APÓS USAR CD FRONT USE O COMANDO: 
npm run dev
Esta Mensagem Deve Aparecer
![image](https://user-images.githubusercontent.com/100230592/229082935-3cd1f025-42ec-4e35-9c4c-da61c8ef3fe0.png)

# PASSO 5 : Ultilizando a API: 

# CLIENTES

201 : POST - Criar um Cliente  - http://localhost:3001/clients/

Ex de Req: 
![image](https://user-images.githubusercontent.com/100230592/229083310-3c15f2fa-0de0-42c9-bc7e-d6bc0fcdbfc6.png)

Ex de Res: 
![image](https://user-images.githubusercontent.com/100230592/229083546-28e73881-7df8-4e46-8817-b7038ac0389f.png)

200 : PATCH - Atualizar um Cliente - http://localhost:3001/clients/"ID DO CLIENTE"

Ex de Req: 
![image](https://user-images.githubusercontent.com/100230592/229083893-418bd81e-45ff-4ee6-abe5-69f6419c4923.png)

Ex: de Res:
![image](https://user-images.githubusercontent.com/100230592/229083974-59bdf4d3-2027-45e4-9d4e-9c643e115d57.png)

204 : DELETE - Deletar um Cliente - http://localhost:3001/clients/"ID DO CLIENTE"

Ex de Req: 
NÃO POSSUI

Ex de Res:
{}

# LOGIN

200 : POST - Logar com Cliente - http://localhost:3001/login/

Ex de Req:
![image](https://user-images.githubusercontent.com/100230592/229084684-45dadabe-5bf4-4e18-b59f-1aa65800411c.png)

Ex de Res:
![image](https://user-images.githubusercontent.com/100230592/229084803-765813fd-492d-4784-bc62-caa239a3f242.png)

# CONTATO 

201 : POST - Criar um Contato  - http://localhost:3001/contacts/

Autorizações : Deve estar com Token do Cliente, no site, deve estar logado

Ex de Req: 
![image](https://user-images.githubusercontent.com/100230592/229085290-0ca0444c-c884-45e0-9fae-c5803293a06c.png)

Ex de Res: 
![image](https://user-images.githubusercontent.com/100230592/229085349-60517b53-eb53-464d-98f3-e0c2a25002e2.png)

200 : PATCH - Atualizar um Contato - http://localhost:3001/contacts/"ID DO CONTATO"

Autorizações : Deve estar com Token do Cliente dono do CONTATO, no site, deve estar logado com o cliente dono do contato

Ex de Req: 
![image](https://user-images.githubusercontent.com/100230592/229085776-cf93ce7f-1b88-48b6-b47a-b7853004d7a6.png)

Ex: de Res:
![image](https://user-images.githubusercontent.com/100230592/229085731-218386fa-d5bd-43e9-b4ea-35c36be40c16.png)

204 : DELETE - Deletar um Contato - http://localhost:3001/contacts/"ID DO CONTATO"

Autorizações : Deve estar com Token do Cliente dono do CONTATO, no site, deve estar logado com o cliente dono do contato

Ex de Req: 
NÂO POSSUI

Ex de Res: 
{}

200 : GET - Listar Contatos Do Cliente - http://localhost:3001/clients/"ID DO CLIENTE"/contacts

Autorizações : No Site vai listar os contatos do cliente logado.

Ex de Req: 
NÃO POSSUI

Ex de Res:
![image](https://user-images.githubusercontent.com/100230592/229086558-34b93209-bf11-46e9-9612-288d816a1f23.png)







