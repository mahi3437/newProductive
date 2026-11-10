class LoginPage{

    constructor(page){
        this.page=page
        this.sourceName=page.locator("#srcinput")
        this.sourceNames=page.locator("//div[contains(@class,'leftListCont')]/div/div[1]");
        this.destinyName=page.locator("destinput")

    }


async login(sourceIn){
    await this.sourceName.fill(sourceIn)

   const count=await this.sourceNames.count()

   for(let i=0;i<count;i++){

    const sourceOneName=this.sourceNames.nth(i)
    const text=await sourceOneName.textContent()

    if(text?.trim===sourceIn){
        await sourceOneName.click()
        break
    }

   }
}
}


module.exports={LoginPage}