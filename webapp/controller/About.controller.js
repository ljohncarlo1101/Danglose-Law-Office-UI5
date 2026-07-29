sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
(
    Controller
) => {

    "use strict";


    return Controller.extend(
        "com.john.employeeapp.com.john.employeeapp.controller.About",
        {


            onOpenMap() {


                const sMapUrl =
                    this.getView()
                        .getModel("about")
                        .getProperty("/mapUrl");


                window.open(
                    sMapUrl,
                    "_blank"
                );


            }


        });

});