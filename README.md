# Sumilação de Investimento
  Essa aplicação que simula de forma simples um investimento com valores de juros fixo

# Principais Telas
![image](https://user-images.githubusercontent.com/60005589/105565867-b5babb00-5d07-11eb-96c9-a16b0c719b5f.png)
![image](https://user-images.githubusercontent.com/60005589/105565891-cf5c0280-5d07-11eb-82f6-b4cd1e45e406.png)
![image](https://user-images.githubusercontent.com/60005589/105566156-62e20300-5d09-11eb-94b6-d2912edb7c50.png)

# Usabilidade
### Iniciando aplicação
```sh
$ yarn dev
```
### CPF's cadastrados

 - 999.999.999-99 -> Cliente Teste 1
 - 222.222.222-29 -> Cliente Teste 2
 
# API
A Api foi feita com o próprios next, onde temos 3 rotas
- http://localhost:3333/api/table
- http://localhost:3333/api/client
- http://localhost:3333/api/solicitations

# To Do
  - Upload de image na AWS S3
  - Interface com animações
  - Lista de Solicitações
  - Testes
  - Identificação da bandeira dos cartão pelos seus prefixos
  - Layout mais fiel da última página
 
 # Techs
  - ReactJs
  - NextJS
  - Redux
  - Styled-Components
  - Text-Mask
  - Axios

# Deploy
Deploy realizada na vercel : https://installment-simulation.vercel.app/
