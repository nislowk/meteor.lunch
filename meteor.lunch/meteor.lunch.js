if(Meteor.isClient){
Template.register.events({
'submit form': function(event, template){
    event.preventDefault();
    var emailVar = template.find('#register-email').value;
    var passwordVar = template.find('#register-password').value;
    Accounts.createUser({
        email: emailVar,
        password: passwordVar
    });
   }
 });
};

if(Meteor.isClient){
Template.login.events({
'submit form': function(event, template){
    event.preventDefault();
    var emailVar = template.find('#login-email').value;
    var passwordVar = template.find('#login-password').value;
    Meteor.loginWithPassword(emailVar, passwordVar);
  }
 });
};


if(Meteor.isClient){
Template.dashboard.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
 });
}