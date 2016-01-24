var SlackClient = require('slack-client');
 
var slackClient = new SlackClient("xoxb-19266121941-itkmb64VmItoYqMCVlSHcdKI");
 
var bot; // Track bot user .. for detecting messages by yourself
 
slackClient.on('loggedIn', function(user, team) {
    bot = user;
 //    console.log("*** USER OBJECT ***")
	// console.log(user);
	// console.log("*** END ***")
    console.log("Logged in as " + user.name
        + " of " + team.name + ", but not yet connected");
});
 
slackClient.on('open', function() {
    console.log('Connected');
});

slackClient.on('team_join', function() {
	console.log("*** NEW MEMBER ***")
    console.log("someone joined!");
    console.log("*** END ***")
});
 
slackClient.on('message', function(message) {
    if (message.user == bot.id) return; // Ignore bot's own messages
  //   console.log("*** MESSAGE OBJECT ***")
 	// console.log(message);
 	// console.log("*** END ***")
 	var user = slackClient.getUserByID(message.user);
 	console.log("*** USER OBJECT ***")
    console.log(user);
    console.log("*** END ***")
    var channel = slackClient.getChannelGroupOrDMByID(message.channel);
    channel.send(message.text + " " + user.name);
 
    // More goes here later..
});

 
slackClient.login();