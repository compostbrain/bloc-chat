(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);


    return {
      all: rooms,
      addRoom: function(newRoomName) {
        rooms.$add({'name':newRoomName});
    }
  };
}
  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
