// ==========================================================================
// SampleControls
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global SampleControls tile */

require('views/control_sample');


SampleControls.mainPage = SC.Page.create({
  
  mainPane: SC.MainPane.design({

    childViews: [SC.TabView.design({
      
      nowShowing: 'welcome',

      items: [
        { title: "Welcome", value: "welcome" },
        { title: "Controls", value: "SampleControls.controlsPage.mainView" },
        { title: "Form", value: "SampleControls.formPage.mainView" },
        { title: "Icons", value: "SampleControls.iconsPage.mainView" }
      ],
      
      itemTitleKey: 'title',
      itemValueKey: 'value',
            
      layout: { left:12, right:12, top:12, bottom:12 },
      
      userDefaultKey: "mainPane"
      
    })]
    
  }),

  welcome: SC.LabelView.design({
    escapeHTML: NO,
    styleClass: 'welcome-tab',
    value: "<h1>Sample Controls</h1><p>SproutCore comes bundled with a wide array of controls that you can use in your own applications. Most of these controls can be created very easily using the built-in view helper functions. Consult the source code of this application for samples code to use in your own application.</p>"
  })
  
});

