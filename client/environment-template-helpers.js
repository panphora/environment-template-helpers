Meteor.call('isProductionEnvironment', function (error, isProd) {
  if (error) {
    throw new Meteor.Error('detect-environment', 'Could not determine if in a production environment or not.');
  } else {
    Session.set('isDevEnvironment', !isProd);
    Session.set('isProdEnvironment', isProd);
  }
});

Template.registerHelper('isDevEnvironment', function (template) {
  return Session.get('isDevEnvironment');
});

Template.registerHelper('isProdEnvironment', function (template) {
  return Session.get('isProdEnvironment');
});
