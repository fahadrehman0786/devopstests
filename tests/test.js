const {Builder,By,until} = require('selenium-webdriver');
async function login(username,password)
{
    let driver = await new Builder().forBrowser('chrome').build();
    
     try {
     driver.get('http://localhost:3000/login');
    await driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/form/div/div[1]/div/input')).sendKeys(username);
    await driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/form/div/div[2]/div/input')).sendKeys(password);
  await driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/form/div/div[3]/button')).click();
    await driver.wait(until.urlIs('http://localhost:3000/'), 1000);
    console.log('Login successful');
    logout();

  } catch (error) {
    console.log(error);
  } finally {
  await driver.quit();
  }
}

async function signupAsApplicant(username,email,password,type,language)
{
    let driver = await new Builder().forBrowser('chrome').build();
    
     try {
     driver.get('http://localhost:3000/register');
    await driver.findElement(By.xpath('//*[@id="root"]/div/main/div[3]/form/div[1]/input')).sendKeys(username);
    await driver.findElement(By.xpath('//*[@id="root"]/div/main/div[3]/form/div[2]/input')).sendKeys(email);
    await driver.findElement(By.xpath('//*[@id="root"]/div/main/div[3]/form/div[3]/input')).sendKeys(password);
    await driver.findElement(By.xpath('//*[@id="root"]/div/main/div[3]/form/div[4]/div/select')).sendKeys(type);
    await driver.findElement(By.xpath('//*[@id="root"]/div/main/div[3]/form/div[5]/div/div/input')).sendKeys(language);
  await driver.findElement(By.xpath('//*[@id="root"]/div/main/div[3]/form/div[6]/input')).click();
    await driver.wait(until.urlIs('http://localhost:3000/login'), 1000);
    console.log('Signup as applicant successful');
  } catch (error) {
    console.log(error);
  } finally {
    await driver.quit();
  }
}

async function signupAsRecruiter(username,email,password,type,number,bio)
{
    let driver = await new Builder().forBrowser('chrome').build();
    
     try {
     driver.get('http://localhost:3000/register');
    await driver.findElement(By.xpath('//*[@id="root"]/div/main/div[3]/form/div[1]/input')).sendKeys(username);
    await driver.findElement(By.xpath('//*[@id="root"]/div/main/div[3]/form/div[2]/input')).sendKeys(email);
    await driver.findElement(By.xpath('//*[@id="root"]/div/main/div[3]/form/div[3]/input')).sendKeys(password);
    await driver.findElement(By.xpath('//*[@id="root"]/div/main/div[3]/form/div[4]/div/select')).sendKeys(type);
    await driver.findElement(By.xpath('//*[@id="root"]/div/main/div[3]/form/div[5]/div/div/input')).sendKeys(number);
    await driver.findElement(By.xpath('//*[@id="root"]/div/main/div[3]/form/div[5]/div/div[2]/input')).sendKeys(bio);
    await driver.findElement(By.xpath('//*[@id="root"]/div/main/div[3]/form/div[6]/input')).click();
    console.log('contact number length is short or bio is too long keep it under 250 words');
  } catch (error) {

    console.log(error);
  } finally {
    //await driver.quit();
  }
}


async function logout()
{
    let driver = await new Builder().forBrowser('chrome').build();
    
     try {
     driver.get('http://localhost:3000/');
  await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/nav/div/ul/li[1]/a')).click();
    await driver.wait(until.urlIs('http://localhost:3000/login'), 1000);
    console.log('Logout successful');
  } catch (error) {
    console.log(error);
  } finally {
    //await driver.quit();
  }
}



login("fahad091@gmail.com","1234567890")