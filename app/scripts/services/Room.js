(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    return {
      all: rooms,
      //need a function to add a room to the firebase.database
      addRoom: function(roomName) {
          rooms.$add({'roomName':roomName})
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
