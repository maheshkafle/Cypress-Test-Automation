class PageCategory {

    navigateToCategoryList(){
        const categoryList= cy.get('#nav-hamburger-menu');
        categoryList.click();
        cy.wait(2000)
    }

    selectCategorySmartHome(){
        const selectSmartHome=cy.get('a.hmenu-item[data-menu-id="7"]').contains('Smart Home',{force: true});
        selectSmartHome.click();
    }

    selectSubCategoryHomeEntertainment(){
        const selectHomeEntertainment=cy.get('a[href="/gp/browse.html?node=21216826011&ref_=nav_em_sh_home-entertainment_0_2_7_10"]').contains('Home Entertainment',{force: true});
        selectHomeEntertainment.click();
    }

    selectSubCategoryTelevisions(){            
        const selectTelevision=cy.get('img[alt="Smart Televisions"]');
        selectTelevision.click();
    }
  
    verifyTotalDisplayedProducts(){
        const totalproducts=cy.get('div.a-spacing-medium:nth-child(3)').children();
        console.log(totalproducts)
        totalproducts.should('have.length',12);
    }
}


export default PageCategory