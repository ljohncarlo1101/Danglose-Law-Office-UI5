sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageBox"
], (
  Controller,
  MessageBox
) => {

  "use strict";


  return Controller.extend(
    "com.john.employeeapp.com.john.employeeapp.controller.Contact",
    {


      onInit() {

      },



      onSubmit() {


        const oName =
          this.byId("nameInput");


        const oEmail =
          this.byId("emailInput");


        const oPhone =
          this.byId("phoneInput");


        const oService =
          this.byId("serviceSelect");


        const oMessage =
          this.byId("messageInput");



        // Reset previous states

        [
          oName,
          oEmail,
          oPhone,
          oService,
          oMessage
        ].forEach(control => {

          control.setValueState("None");

        });



        let bValid = true;



        // Validate Name

        if (!oName.getValue().trim()) {

          oName.setValueState("Error");

          oName.setValueStateText(
            "Please enter your full name."
          );

          bValid = false;

        }



        // Validate Email

        const sEmail =
          oEmail.getValue().trim();



        const emailPattern =
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



        if (!emailPattern.test(sEmail)) {

          oEmail.setValueState("Error");

          oEmail.setValueStateText(
            "Please enter a valid email address."
          );

          bValid = false;

        }



        // Validate Contact Number

        if (!oPhone.getValue().trim()) {

          oPhone.setValueState("Error");

          oPhone.setValueStateText(
            "Please enter your contact number."
          );

          bValid = false;

        }



        // Validate Service

        if (!oService.getSelectedKey()) {

          oService.setValueState("Error");

          bValid = false;

        }



        // Validate Message

        if (!oMessage.getValue().trim()) {

          oMessage.setValueState("Error");

          oMessage.setValueStateText(
            "Please describe your concern."
          );

          bValid = false;

        }



        if (!bValid) {

          MessageBox.error(
            "Please complete all required fields."
          );

          return;

        }




        MessageBox.success(
          "Your consultation request has been prepared successfully."
        );


      }



    });

});