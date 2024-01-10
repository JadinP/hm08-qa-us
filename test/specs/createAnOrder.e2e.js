const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
/*    it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    }) */

    it('should wait for the taxi driver', async () => {
        // call the taxi to the adress
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        // Selecting Supportive plan
        const selectSupportivePlanButton = await $(page.selectSupportivePlanButton);
        await selectSupportivePlanButton.waitForDisplayed();
        await selectSupportivePlanButton.click();

        await browser.pause(5000);

        // input phone number
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        
        await browser.pause(5000);

        // Adding payment card
        await page.addPaymentMethodCard();

        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect(await $(cardPaymentMethodIcon)).toBeExisting ();

        await browser.pause(5000);
        
        // Message to the driver
        const messageToTheDriverField = await $(page.messageToTheDriverField);
        await messageToTheDriverField.waitForDisplayed();
        await messageToTheDriverField.setValue('hi guys');
        await expect(await $(messageToTheDriverField)).toBeExisting ();

        await browser.pause(5000);

        // Ordering a Blanket and handkerchiefs
        const blanketAndHandkerchiefsButton = await $(page.blanketAndHandkerchiefsButton);
        await blanketAndHandkerchiefsButton.waitForDisplayed();
        await blanketAndHandkerchiefsButton.click();
        await expect(await $(blanketAndHandkerchiefsButton)).toBeExisting ();

        await browser.pause(5000);

        // Ordering 2 ice creams
        const increaseIceCreamCount = await $(page.increaseIceCreamCount);
        await increaseIceCreamCount.waitForDisplayed();
        await increaseIceCreamCount.click();
        await increaseIceCreamCount.waitForDisplayed();
        await increaseIceCreamCount.click();
        await expect(await $(increaseIceCreamCount)).toBeExisting ();

        await browser.pause(5000);

        // Search for a ride button
        const searchForNewTaxiButton = await $(page.searchForNewTaxiButton);
        await searchForNewTaxiButton.waitForDisplayed();
        await searchForNewTaxiButton.click();
        await expect(await $(searchForNewTaxiButton)).toBeExisting ();

        await browser.pause(5000);
        
        


    })
})

