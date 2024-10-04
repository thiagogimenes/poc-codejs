## Poc de automação utilizando codeceptjs com playwright

### Site para testes
> https://www.saucedemo.com/

### Passos para instalação

#### Pré-requisitos
> node e npm 

#### Instalação
> npm init -y

#### Instalação do codeceptjs e o playwright
> npm install codeceptjs playwright --save-dev

#### Inicializar o codeceptjs e criar arquivos de configuração do framework
> npx codeceptjs init

#### Allure report 
> npm install @codeceptjs/allure-legacy --save-dev

#### Rodar testes
> npx codeceptjs run --steps