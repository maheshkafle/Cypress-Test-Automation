class PageProduct
{

    chooseElectronicsSubMenu(){
        const electronics=cy.get('#searchDropdownBox');
        electronics.select('Electronics',{force: true});
    }

    searchProduct(){
        const search=cy.get('#twotabsearchtextbox');
        search.type('Apple ');
        cy.get('.s-suggestion').contains('apple airpods').click();
        //const suggestion=cy.get('.s-suggestion').contains('apple airpods').click();
       // suggestion.click();
    }

    clickOnProduct(){
        const product=cy.get('div>h2>a').contains('Apple AirPods').first();
        product.click();
    }

    verifyIsProductAvailable(){
        const stockVerification=cy.get('#availability > span');
        stockVerification.contains('Stock',{matchCase: false});
    }

    verifyProductRating(){
        const productRating=cy.get('span.a-declarative>a>i.a-icon.a-icon-star.a-star-4-5');
        productRating.contains('out of 5 stars');
    }

    verifyProductPrice(){
        const price=cy.get('#priceblock_ourprice_row');
        price.contains('Price:');
        const priceValue=cy.get('td>span#priceblock_ourprice');
        priceValue.should('not.be.empty');
    }

    verifyShippingDetails(){
        const shipping=cy.get('#ourprice_shippingmessage > span.a-size-base.a-color-secondary');
        shipping.contains('Shipping');
    }
 
    verifyAddToCart(){
        const addToCartButton=cy.get('#add-to-cart-button');
        addToCartButton.click();
        const addedtoCart=cy.get('#huc-v2-confirm-text-container');
        addedtoCart.contains('Added to Cart');
    }
}

export default PageProduct

