Feature('Cadastro de usuário');

Before(({ I }) => {
  I.amOnPage('/register');
});


Scenario('Cadastro com sucesso', ({ I }) => {
    I.fillField('#user', 'Chuck Norris');
    I.fillField('#email', 'chuck.norris@mock.com');
    I.fillField('#password', '123456');
    I.click('#btnRegister');
    I.see('Cadastro realizado!');
})

Scenario('Cadastro sem nome', ({ I }) => {
    I.fillField('#email', 'chuck.norris@mock.com');
    I.fillField('#password', '123456');
    I.click('#btnRegister');
    I.see('O campo nome deve ser prenchido');
})

Scenario('Cadastro sem informar e-mail', ({ I }) => {
    I.fillField('#user', 'Chuck Norris');
    I.fillField('#password', '123456');
    I.click('#btnRegister');
    I.see('O campo e-mail deve ser prenchido corretamente');
})

Scenario('Cadastro sem informar senha', ({ I }) => {
    I.fillField('#user', 'Chuck Norris');
    I.fillField('#email', 'chuck.norris@mock.com');
    I.click('#btnRegister');
    I.see('O campo senha deve ter pelo menos 6 dígitos');
})

Scenario('Cadastro informar senha inválida', ({ I }) => {
    I.fillField('#user', 'Chuck Norris');
    I.fillField('#email', 'chuck.norris@mock.com');
    I.fillField('#password', '1234');
    I.click('#btnRegister');
    I.see('O campo senha deve ter pelo menos 6 dígitos');
})

Scenario('Cadastro sem nome e sem email', ({ I }) => {
    I.fillField('#password', '123456');
    I.click('#btnRegister');
    I.see('O campo nome deve ser prenchido');
})

Scenario('Cadastro sem nome e sem senha', ({ I }) => {
    I.fillField('#email', 'chuck.norris@mock.com');
    I.click('#btnRegister');
    I.see('O campo nome deve ser prenchido');

})

Scenario('Cadastro sem preencher formulário', ({ I }) => {
    I.click('#btnRegister');
    I.see('O campo nome deve ser prenchido');
})