sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {

    "use strict";


    return Controller.extend(
        "com.john.employeeapp.com.john.employeeapp.controller.Confirmation",
        {


            onBackHome() {

                this.getOwnerComponent()
                    .getRouter()
                    .navTo("RouteHome");

            }


        });

});