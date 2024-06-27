sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/satinfotech/cloudapps/product/test/integration/FirstJourney',
		'com/satinfotech/cloudapps/product/test/integration/pages/ProductLocalList',
		'com/satinfotech/cloudapps/product/test/integration/pages/ProductLocalObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductLocalList, ProductLocalObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/satinfotech/cloudapps/product') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductLocalList: ProductLocalList,
					onTheProductLocalObjectPage: ProductLocalObjectPage
                }
            },
            opaJourney.run
        );
    }
);