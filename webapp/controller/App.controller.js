sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend(
    "com.john.employeeapp.com.john.employeeapp.controller.App",
    {
      onHome() {
        this.getOwnerComponent().getRouter().navTo("RouteHome");
      },

      onAbout() {
        this.getOwnerComponent().getRouter().navTo("RouteAbout");
      },

      onServices() {
        this.getOwnerComponent().getRouter().navTo("RouteServices");
      },

      onAttorney() {
        this.getOwnerComponent().getRouter().navTo("RouteAttorney");
      },

      onContact() {
        this.getOwnerComponent().getRouter().navTo("RouteContact");
      }
    }
  );
});
