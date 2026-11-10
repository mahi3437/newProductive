const{test,expect}=require('@playwright/test')
const{LoginPage}=require('../Pages/LoginPage')


test("FirstTest",async({page})=>{
  await page.goto("https://www.redbus.in/")
  const loginn=new LoginPage(page)
  await loginn.login("hyderabad")
  



})