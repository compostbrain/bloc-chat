(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    return {
      all: messages,

      getByRoomId: function(roomID) {
        return $firebaseArray(ref.orderByChild('roomID').equalTo(roomID));
      },

      send: function(newMessage) {
        messages.$add(newMessage);
        //newMessage.timestamp = firebase.database.ServerValue.TIMESTAMP;
      }



    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
