/**
 * {license_notice}
 *
 * @copyright   {copyright}
 * @license     {license_link}
 */
/*jshint browser:true jquery:true*/
/*global alert*/
define(
    [
        'ko',
        'Magento_Ui/js/form/component',
        'Magento_Customer/js/action/login',
        'Magento_Customer/js/model/customer',
        'Magento_Checkout/js/model/step-navigator'
    ],
    function(ko, Component, login, customer, navigator) {
        var stepName = 'authentication';
        return Component.extend({
            stepNumber: function(){
                return navigator.getStepNumber(stepName);
            },
            isAllowedGuestCheckout: true,
            isRegistrationAllowed: true,
            isMethodRegister: false,
            isCustomerMustBeLogged: false,
            registerUrl: '',
            forgotPasswordUrl: '',
            username: '',
            password: '',
            defaults: {
                template: 'Magento_Checkout/authentication'
            },
            login: function() {
                login(this.username, this.password);
            },
            isActive: function() {
                if (customer.isLoggedIn()()) {
                    navigator.setStepEnabled(stepName, false);
                }
                return !customer.isLoggedIn()();
            }
        });
    }
);
