//@ui5-bundle bookslrp/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"bookslrp/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("bookslrp.Component",{metadata:{manifest:"json"}})});
},
	"bookslrp/i18n/i18n.properties":'# This is the resource bundle for bookslrp\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Books List Report\n\n#YDES: Application description\nappDescription=A Fiori application.',
	"bookslrp/manifest.json":'{"_version":"1.58.0","sap.app":{"id":"bookslrp","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.11.2","toolsId":"d25a1530-de45-4bf4-bb90-53d147a0d585"},"crossNavigation":{"inbounds":{"mylibrary-manage":{"signature":{"parameters":{},"additionalParameters":"allowed"},"semanticObject":"mylibrary","action":"manage"}}},"dataSources":{"mainService":{"uri":"odata/v4/service/Library/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.119.2","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"bookslrp.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"BooksList","target":"BooksList"},{"pattern":"Books({key}):?query:","name":"BooksObjectPage","target":"BooksObjectPage"},{"pattern":"Books({key})/Copies({key2}):?query:","name":"BookCopiesObjectPage","target":"BookCopiesObjectPage"},{"pattern":"Books({key})/Authors({key2}):?query:","name":"Books_BookAuthorsObjectPage","target":"Books_BookAuthorsObjectPage"}],"targets":{"BooksList":{"type":"Component","id":"BooksList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Books","variantManagement":"Page","navigation":{"Books":{"detail":{"route":"BooksObjectPage"}}}}}},"BooksObjectPage":{"type":"Component","id":"BooksObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"entitySet":"Books","navigation":{"Copies":{"detail":{"route":"Books_BookCopiesObjectPage"}},"Authors":{"detail":{"route":"Books_BookAuthorsObjectPage"}}}}}},"BookCopiesObjectPage":{"type":"Component","id":"BookCopiesObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Books/Copies"}}},"Books_BookAuthorsObjectPage":{"type":"Component","id":"Books_BookAuthorsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"entitySet":"Books_BookAuthors"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"MyLibrary.service"}}'
}});
