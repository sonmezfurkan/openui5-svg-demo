sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict"
    
	return Controller.extend("demo.interactive.svg.Main", {

		onInit() {

            // create local model to hold selected paths
            this.getView().setModel(new JSONModel([]), "selected")

            // load svg image from local file
            $.ajax({
                url: "assets/united-kingdom.svg",
                async: true,
                success: data => {
                    const content = new XMLSerializer().serializeToString(data)
                    this.getView().byId("idSvgContainer").setContent(content)
                }
            })
        },
        
        _handlePathClick(oEvent) {

            // get clicked path
            const oPath = $(oEvent.target)
            const sCountry = oPath.attr("countryId")
            const sDescription = oPath.attr("aria-label")

            // toggle selected style class
            oPath.toggleClass("selected")

            // if it is in the selected list, remove it
            // else, add it to the list
            const aSelected = this.getView().getModel("selected").getProperty("/")

            this.getView().getModel("selected").setProperty("/",
                aSelected.some(item => item.description === sDescription) ?
                    aSelected.filter(item => item.description !== sDescription) :
                    aSelected.concat({ countryId: sCountry, description: sDescription }))
        },

		onSvgContainerRendered(oEvent) {

            // get all path elements inside the svg
            const aPaths = oEvent.getSource().$().find("path")

            // check elements are already in the DOM
            if (!aPaths.length) return

            // register onclick event for the elements
            aPaths.bind("click", this._handlePathClick.bind(this))
        },

	});
});