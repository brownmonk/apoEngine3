module.exports = function(apo){

  // Rejected EyeContact response
  var rejectedReason = {
    apoType: "error",
    "error": {
      eyeContact: "EyeContact Rejected."
    }
  };

  // Verify the EyeContact
  var verifyEyeContact = function(data, client){
    // TODO: check / update the model sent with the eyeContact

  var clientToken = {
    // TODO: Send some kind of client token
    apoType: 'eyeContact',
    apoSubType: 'token',
    authorized: true,
    session: "AEF876",
    channel: "AEF877"
  };

  console.log('created channel:' + clientToken.channel);

  apo.channels[clientToken.channel] = clientChannel;
  apo.clients.push(client);

  return clientToken;
};


};