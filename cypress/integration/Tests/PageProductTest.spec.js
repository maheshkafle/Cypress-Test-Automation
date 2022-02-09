import PageProduct from '../PageObjects/PageProduct'


describe('Search for the product, select the product, add to cart and verifyf the product details', function(){
    before(function(){
        cy.fixture('config').then(function(data){
        this.data=data ;
        cy.visit(this.data.url);
        })
    })

    it('Product Details Test',function(){
        const product  = new PageProduct()
        product.chooseElectronicsSubMenu()
        product.searchProduct()
        product.clickOnProduct()
        product.verifyIsProductAvailable()
        product.verifyProductRating()
        product.verifyProductPrice()
        product.verifyShippingDetails()
        product.verifyAddToCart()
    })
})