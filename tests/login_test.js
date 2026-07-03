Feature('Login');

Before(({ I }) => {
  I.amOnPage('/login');
});

Scenario('Login com sucesso', ({ I }) => {
  I.fillField('#user', 'thiago@mock.com');
  I.fillField('#password', '123456');
  I.click('#btnLogin');
  I.see('Login realizado');
});

Scenario('Login com e-mail inválido', ({ I }) => {
  I.fillField('#user', 'thiagomock');
  I.fillField('#password', '123456');
  I.click('#btnLogin');
  I.see('E-mail inválido.');
});

Scenario('Login com e-mail vazio', ({ I }) => {
  I.fillField('#user', '');
  I.fillField('#password', '123456');
  I.click('#btnLogin');
  I.see('E-mail inválido.');
});

Scenario('Login com senha inválida', ({ I }) => {
  I.fillField('#user', 'thiago@mock.com');
  I.fillField('#password', '123');
  I.click('#btnLogin');
  I.see('Senha inválida.');
});

Scenario('Login com senha vazia', ({ I }) => {
  I.fillField('#user', 'thiago@mock.com');
  I.fillField('#password', '');
  I.click('#btnLogin');
  I.see('Senha inválida.');
});

Scenario('Clica no botão não tenho conta', ({ I }) => {
  I.click('#createAccount');
  I.see('Cadastro de usuário');
})

    