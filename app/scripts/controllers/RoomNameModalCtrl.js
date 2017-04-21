(function() {
  function RoomNameModalCtrl($uibModal) {







    //       //cancel method
    //need to access the scope associated with the modal content to close it using $dismiss method 
    this.cancel = function() {
      HomeCtrl.openNewRoomModal.$dismiss('cancel');
    };

    //submit data to firebase method
    this.createRoom = function() {
      room.addRoom(roomName);
      scope.$close('added a room');
    };
  }
  angular
    .module('blocChat')
    .controller('RoomNameModalCtrl', ['$uibModal', RoomNameModalCtrl]);
})();
