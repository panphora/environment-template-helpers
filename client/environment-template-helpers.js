Meteor.call('isProductionEnvironment', function (error, isProd) {
  Session.set('isDevEnvironment', !isProd);
  Session.set('isProdEnvironment', isProd);
});

Template.registerHelper('isDevEnvironment', function (template) {
  return Session.get('isDevEnvironment');
});

Template.registerHelper('isProdEnvironment', function (template) {
  return Session.get('isProdEnvironment');
});
