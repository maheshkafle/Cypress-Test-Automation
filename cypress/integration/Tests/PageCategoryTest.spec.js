import CategoryPage from '../PageObjects/PageCategory'

describe('Validate the total displayed number of results for Smart Home Category | Televisions',function(){
    before(function(){
            cy.fixture('config').then(function(data){
            this.data=data ;
            cy.visit(this.data.url);
        })
    })

    it('Category Test',function(){ 
   
        const catg=new CategoryPage();
        catg.navigateToCategoryList()
        catg.selectCategorySmartHome()
        catg.selectSubCategoryHomeEntertainment()
        catg.selectSubCategoryTelevisions()
        catg.verifyTotalDisplayedProducts()
    })
})