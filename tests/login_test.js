Feature('login-button');

Scenario('Login com sucesso', ({ I }) => {
  I.amOnPage('/login'); 
  I.fillField('#user', 'thiago@mock.com');
  I.fillField('#password', '123456');
  I.click('#btnLogin');
  I.see('Login realizado');
});

Scenario('Login com e-mail inválido', ({ I }) => {
  I.amOnPage('/login'); 
  I.fillField('#user', 'thiagomock');
  I.fillField('#password', '123456');
  I.click('#btnLogin');
  I.see('E-mail inválido.');
});

Scenario('Login com e-mail vazio', ({ I }) => {
  I.amOnPage('/login'); 
  I.fillField('#user', '');
  I.fillField('#password', '123456');
  I.click('#btnLogin');
  I.see('E-mail inválido.');
});

Scenario('Login com senha inválida', ({ I }) => {
  I.amOnPage('/login'); 
  I.fillField('#user', 'thiago@mock.com');
  I.fillField('#password', '123');
  I.click('#btnLogin');
  I.see('Senha inválida.');
});

Scenario('Login com senha vazia', ({ I }) => {
  I.amOnPage('/login'); 
  I.fillField('#user', 'thiago@mock.com');
  I.fillField('#password', '');
  I.click('#btnLogin');
  I.see('Senha inválida.');
});

Scenario('Clica no botão não tenho conta', ({ I }) => {
  I.amOnPage('/login');
  I.click('#createAccount');
  I.see('Cadastro de usuário');
})

    