(function() {
  function Room($scope, $firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    return {
      all: rooms,
      //need a function to add a room to the firebase.database

      addRoom: function(roomName) {
          rooms.$add({roomName: 'roomName'}).then(function(ref) {
            var id = ref.key();
            console.log('added record with id' + id);//returns location in the array
          });
      }
    };
    //make rooms available in DOM
    $scope.rooms = rooms;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$scope', '$firebaseArray', Room]);
})();
