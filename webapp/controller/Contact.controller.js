sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";

    return Controller.extend(
      "com.john.employeeapp.com.john.employeeapp.controller.Contact",
      {
        onSubmit() {
          const oContactModel = this.getView().getModel("contact");

          const oContactData = oContactModel.getData();

          // Validation

          if (
            !oContactData.name ||
            !oContactData.email ||
            !oContactData.phone ||
            !oContactData.concern ||
            !oContactData.message
          ) {
            MessageToast.show("Please complete all fields.");

            return;
          }

          // Successful submission

          MessageToast.show("Consultation request submitted successfully!");

          oContactModel.setData({
            name: "",
            email: "",
            phone: "",
            concern: "",
            message: "",
          });

          console.log(oContactData);
        },
      },
    );
  },
);
