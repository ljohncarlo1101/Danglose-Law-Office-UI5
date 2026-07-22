sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {

    "use strict";

    return Controller.extend(
        "com.john.employeeapp.com.john.employeeapp.controller.ServiceDetail",
        {

            onInit() {

                const oRouter =
                    this.getOwnerComponent()
                    .getRouter();


                oRouter
                    .getRoute("RouteServiceDetail")
                    .attachPatternMatched(
                        this._onServiceMatched,
                        this
                    );

            },


            _onServiceMatched(oEvent) {


                const sServiceTitle =
                    decodeURIComponent(
                        oEvent
                        .getParameter("arguments")
                        .serviceId
                    );


                const oModel =
                    this.getView()
                    .getModel("services");


                const aServices =
                    oModel.getProperty("/services");


                const oSelectedService =
                    aServices.find(
                        service =>
                            service.title === sServiceTitle
                    );


                oModel.setProperty(
                    "/selected",
                    oSelectedService
                );


            }


        });
});