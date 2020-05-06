import { TestCase, TestModule, gondola } from "gondolajs";
import HomePage from "../pages/gondola_test_site/homePage";
import ProductPage from "../pages/gondola_test_site/productPage";
import CartPage from "../pages/gondola_test_site/cartPage";
import { Payment } from "../data/payment";

const firstProduct: string = "Knit Sweater with Zips";
const secondProduct: string = "Golden Pilot Jacket";
const validPayment: Payment = new Payment();
const invalidPayment: Payment = new Payment("5432");

TestModule("WebDriver sample tests");

/**
 * Testcase 01: Check Cart items displayed correctly
 * 
 * 1. Navigate to 'https://demo.gondolatest.com/'
 * 2. Select "Women's" link on navigation bar.
 * 3. Click 'Add to cart' button in 'Knit Sweater with Zips' and 'Golden Pilot Jacket' product. 
 * 4. Select shopping cart.
 * 5. Verify selected items displayed in cart page.
 */
TestCase("Testcase 01: Check Cart items displayed correctly", async () => {
    await HomePage.navigateTo();
    await HomePage.selectWomenTab();

    await ProductPage.addToCart(firstProduct);
    await ProductPage.addToCart(secondProduct);
    await ProductPage.openShoppingCart();

    await CartPage.checkItemDisplayed(firstProduct);
    await CartPage.checkItemDisplayed(secondProduct);
});

/**
 * Testcase 02: Check Payment button is disabled when user inputs invalid information.
 * 
 * 1. Navigate to 'https://demo.gondolatest.com/'
 * 2. Verify that home page title displayed.
 * 3. Select "Women's" link on navigation bar.
 * 4. Click 'Add to cart' button in 'Knit Sweater with Zips' product and 'Golden Pilot Jacket' product. 
 * 5. Select shopping cart.
 * 6. Input INVALID payment information: 
 * 7. Verify "PAY WITH CREDIT CARD" button is disabled.
 * 8. Input VALID payment information.
 * 9. Verify "PAY WITH CREDIT CARD" button is enabled.
 */
TestCase("Testcase 02: Check Payment button is disabled when user inputs invalid information.", async () => {
    await HomePage.navigateTo();
    await HomePage.selectWomenTab();

    await ProductPage.addToCart(firstProduct);
    await ProductPage.addToCart(secondProduct);
    await ProductPage.openShoppingCart();

    await CartPage.fillPaymentInfo(invalidPayment);
    await CartPage.checkPaymentButtonDisabled();
    await CartPage.fillPaymentInfo(validPayment);
    await CartPage.checkPaymentButtonEnabled();
});
