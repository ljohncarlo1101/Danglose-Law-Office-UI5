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

        this.sendConsultation();


      },

      sendConsultation() {

        const oButton =
          this.byId("submitButton");


        oButton.setEnabled(false);

        oButton.setText(
          "Sending Request..."
        );


        const oData = {

          name:
            this.byId("nameInput").getValue(),

          email:
            this.byId("emailInput").getValue(),

          phone:
            this.byId("phoneInput").getValue(),

          service:
            this.byId("serviceSelect")
              .getSelectedItem()
              .getText(),

          message:
            this.byId("messageInput").getValue(),

          contactMethod:
            this.byId("contactMethod")
              .getSelectedButton()
              .getText()

        };



        fetch(
          "https://script.google.com/macros/s/AKfycbxL3czpfheESpWS6gIqIMOtyz24L4ogjeqYjiOBonPCVfJq0q-3dLyDJsk1cDlhLKoBiw/exec",
          {

            method: "POST",

            body:
              JSON.stringify(oData)

          }
        )


          .then(response => response.json())


          .then(data => {


            if (data.success) {


              oButton.setEnabled(true);


              oButton.setText(
                "Submit Consultation Request"
              );


              MessageBox.success(
                "Your consultation request has been sent successfully.",
                {

                  onClose: () => {

                    this.clearForm();

                  }

                }
              );


            }


          })


          .catch(error => {


            console.error(error);


            oButton.setEnabled(true);


            oButton.setText(
              "Submit Consultation Request"
            );


            MessageBox.error(
              "Unable to send your consultation request. Please try again."
            );


          });


      },

      clearForm() {


        this.byId("nameInput")
          .setValue("");


        this.byId("emailInput")
          .setValue("");


        this.byId("phoneInput")
          .setValue("");


        this.byId("serviceSelect")
          .setSelectedKey("");


        this.byId("messageInput")
          .setValue("");


        this.byId("contactMethod")
          .setSelectedIndex(-1);


      }



    });

});