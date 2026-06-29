Feature('Cadastro de checkout');

Scenario('Cadastro de checkout com sucesso', ({ I }) => {
    I.amOnPage('/checkout-one');
    I.fillField('#fname', 'Chuck');
    I.fillField('#lname', 'Norris');
    I.fillField('#cname', 'Industria Norris');
    I.fillField('#email', 'chucknorris@mock.com');
    I.selectOption('#country', 'usa');
    I.selectOption('#city', 'Aland Islands');
    I.fillField('#zip', '54123654');
    I.fillField('#faddress', 'Rua das Flores');
    I.fillField('#messages', 'Mensagem de complemento com sucesso');
    I.checkOption('#materialUnchecked');
    I.click('.checkout-area-bg > .theme-btn-one');
    I.see('Billings Information registred with success!');
})

Scenario('Cadastro de checkout sem firstName', ({ I }) => {
    I.amOnPage('/checkout-one');
    I.fillField('#lname', 'Norris');
    I.fillField('#cname', 'Industria Norris');
    I.fillField('#email', 'chucknorris@mock.com');
    I.selectOption('#country', 'usa');
    I.selectOption('#city', 'Aland Islands');
    I.fillField('#zip', '54123654');
    I.fillField('#faddress', 'Rua das Flores');
    I.fillField('#messages', 'Mensagem de complemento com sucesso');
    I.checkOption('#materialUnchecked');
    I.click('.checkout-area-bg > .theme-btn-one');
    I.see('O campo First Name deve ser prenchido');
})

Scenario('Cadastro de checkout sem lastName', ({ I }) => {
    I.amOnPage('/checkout-one');
    I.fillField('#fname', 'Chuck');
    I.fillField('#cname', 'Industria Norris');
    I.fillField('#email', 'chucknorris@mock.com');
    I.selectOption('#country', 'usa');
    I.selectOption('#city', 'Aland Islands');
    I.fillField('#zip', '54123654');
    I.fillField('#faddress', 'Rua das Flores');
    I.fillField('#messages', 'Mensagem de complemento com sucesso');
    I.checkOption('#materialUnchecked');
    I.click('.checkout-area-bg > .theme-btn-one');
    I.see('O campo Last Name deve ser prenchido');
})

Scenario('Cadastro de checkout sem companyName', ({ I }) => {
    I.amOnPage('/checkout-one');
    I.fillField('#fname', 'Chuck');
    I.fillField('#lname', 'Norris');
    I.fillField('#email', 'chucknorris@mock.com');
    I.selectOption('#country', 'usa');
    I.selectOption('#city', 'Aland Islands');
    I.fillField('#zip', '54123654');
    I.fillField('#faddress', 'Rua das Flores');
    I.fillField('#messages', 'Mensagem de complemento com sucesso');
    I.checkOption('#materialUnchecked');
    I.click('.checkout-area-bg > .theme-btn-one');
    I.see('O campo Company deve ser prenchido');
})

Scenario('Cadastro de checkout sem emailAddress', ({ I }) => {
    I.amOnPage('/checkout-one');
    I.fillField('#fname', 'Chuck');
    I.fillField('#lname', 'Norris');
    I.fillField('#cname', 'Industria Norris');
    I.selectOption('#country', 'usa');
    I.selectOption('#city', 'Aland Islands');
    I.fillField('#zip', '54123654');
    I.fillField('#faddress', 'Rua das Flores');
    I.fillField('#messages', 'Mensagem de complemento com sucesso');
    I.checkOption('#materialUnchecked');
    I.click('.checkout-area-bg > .theme-btn-one');
    I.see('O campo E-mail deve ser prenchido ou é inválido');
})

Scenario('Cadastro de checkout sem country', ({ I }) => {
    I.amOnPage('/checkout-one');
    I.fillField('#fname', 'Chuck');
    I.fillField('#lname', 'Norris');
    I.fillField('#cname', 'Industria Norris');
    I.fillField('#email', 'chucknorris@mock.com');
    I.selectOption('#city', 'Aland Islands');
    I.fillField('#zip', '54123654');
    I.fillField('#faddress', 'Rua das Flores');
    I.fillField('#messages', 'Mensagem de complemento com sucesso');
    I.checkOption('#materialUnchecked');
    I.click('.checkout-area-bg > .theme-btn-one');
    I.see('O campo Country deve ser prenchido');
})

Scenario('Cadastro de checkout sem state/city', ({ I }) => {
    I.amOnPage('/checkout-one');
    I.fillField('#fname', 'Chuck');
    I.fillField('#lname', 'Norris');
    I.fillField('#cname', 'Industria Norris');
    I.fillField('#email', 'chucknorris@mock.com');
    I.selectOption('#country', 'usa');
    I.fillField('#zip', '54123654');
    I.fillField('#faddress', 'Rua das Flores');
    I.fillField('#messages', 'Mensagem de complemento com sucesso');
    I.checkOption('#materialUnchecked');
    I.click('.checkout-area-bg > .theme-btn-one');
    I.see('O campo City deve ser prenchido');
})

Scenario('Cadastro de checkout sem zipcode', ({ I }) => {
    I.amOnPage('/checkout-one');
    I.fillField('#fname', 'Chuck');
    I.fillField('#lname', 'Norris');
    I.fillField('#cname', 'Industria Norris');
    I.fillField('#email', 'chucknorris@mock.com');
    I.selectOption('#country', 'usa');
    I.selectOption('#city', 'Aland Islands');
    I.fillField('#faddress', 'Rua das Flores');
    I.fillField('#messages', 'Mensagem de complemento com sucesso');
    I.checkOption('#materialUnchecked');
    I.click('.checkout-area-bg > .theme-btn-one');
    I.see('O campo Zip Code deve ser prenchido');
})

Scenario('Cadastro de checkout sem full address', ({ I }) => {
    I.amOnPage('/checkout-one');
    I.fillField('#fname', 'Chuck');
    I.fillField('#lname', 'Norris');
    I.fillField('#cname', 'Industria Norris');
    I.fillField('#email', 'chucknorris@mock.com');
    I.selectOption('#country', 'usa');
    I.selectOption('#city', 'Aland Islands');
    I.fillField('#zip', '54123654');
    I.fillField('#messages', 'Mensagem de complemento com sucesso');
    I.checkOption('#materialUnchecked');
    I.click('.checkout-area-bg > .theme-btn-one');
    I.see('O campo Address deve ser prenchido');
})

Scenario('Cadastro de checkout sem additional notes', ({ I }) => {
    I.amOnPage('/checkout-one');
    I.fillField('#fname', 'Chuck');
    I.fillField('#lname', 'Norris');
    I.fillField('#cname', 'Industria Norris');
    I.fillField('#email', 'chucknorris@mock.com');
    I.selectOption('#country', 'usa');
    I.selectOption('#city', 'Aland Islands');
    I.fillField('#zip', '54123654');
    I.fillField('#faddress', 'Rua das Flores');
    I.checkOption('#materialUnchecked');
    I.click('.checkout-area-bg > .theme-btn-one');
    I.see('O campo Additional Notes deve ser prenchido');
})

/*
Scenario('Pagamento com Direct Bank Transfer sem dados do pagamento', ({ I }) => {
    I.amOnPage('/checkout-one');
    I.checkOption('//*[@id="html"]', 'Direct Bank Transfer')
    I.click('//*[@id="checkout_one"]/div/div/div[2]/div[2]/button')
    I.see('Preencha os dados de pagamento!')
})

Scenario('Pagamento com Mobile Banking sem dados do pagamento', ({ I }) => {
    I.amOnPage('/checkout-one');
    I.checkOption('//*[@id="html"]', '#headingTwo > div > [name="payment"]')
    I.click(':nth-child(2) > :nth-child(2) > .theme-btn-one')
    I.see('Preencha os dados de pagamento!')
})

Scenario('Pagamento com Paypal sem dados do pagamento', ({ I }) => {
    I.amOnPage('/checkout-one');
    I.checkOption('#html', '#headingThree > div > [name="payment"]')
    I.click(':nth-child(2) > :nth-child(2) > .theme-btn-one')
    I.see('Preencha os dados de pagamento!')
})
*/