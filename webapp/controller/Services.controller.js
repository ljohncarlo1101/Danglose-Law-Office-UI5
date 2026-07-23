sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {

    "use strict";

    return Controller.extend(
        "com.john.employeeapp.com.john.employeeapp.controller.Services",
        {

            onInit() {

            },

            onLearnMore(oEvent) {


                const oButton = oEvent.getSource();


                const oContext =
                    oButton.getBindingContext("services");


                const sTitle =
                    oContext.getProperty("title");


                const oRouter =
                    this.getOwnerComponent().getRouter();


                oRouter.navTo(
                    "RouteServiceDetail",
                    {
                        serviceId: sTitle
                    }
                );


            }

        });

});