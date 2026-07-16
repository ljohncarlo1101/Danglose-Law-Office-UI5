sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";

    return Controller.extend(
      "com.john.employeeapp.com.john.employeeapp.controller.Home",
      {
        onInit() {},

        onBookConsultation() {
          const oRouterBook = this.getOwnerComponent().getRouter();

          oRouterBook.navTo("RouteContact");
        },

        onOurServices() {
          const oRouter = this.getOwnerComponent().getRouter();

          oRouter.navTo("RouteServices");
        },

        onServices() {
          this.getOwnerComponent().getRouter().navTo("RouteServices");
        },
      },
    );
  },
);
