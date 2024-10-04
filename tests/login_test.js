Feature('login-button');

const baseUrl = 'https://www.saucedemo.com/';

Scenario('login-button com usuário não cadastro', ({ I }) => {
  I.amOnPage(baseUrl); 
  I.fillField('user-name', 'standard_use');
  I.fillField('password', 'secret_sauce');
  I.click('login-button');
  I.see('Epic sadface: Username and password do not match any user in this service')
});


Scenario('login-button com usuário não informado', ({ I }) => {
  I.amOnPage(baseUrl); 
  I.fillField('password', 'secret_sauce');
  I.click('login-button');
  I.see('Epic sadface: Username is required')
});


Scenario('login-button com senha não informada', ({ I }) => {
  I.amOnPage(baseUrl); 
  I.fillField('user-name', 'standard_user');
  I.click('login-button');
  I.see('Epic sadface: Password is required')
});

Scenario('login-button com sucesso', ({ I }) => {
  I.amOnPage(baseUrl); 
  I.fillField('user-name', 'standard_user');
  I.fillField('password', 'secret_sauce');
  I.click('login-button');
  I.see('Products')
});