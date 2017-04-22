(function() {
  function RoomNameModalCtrl($uibModal, Room) {







    //       //cancel method
    //need to access the scope associated with the modal content to close it using $dismiss method
    this.cancel = function() {
      roomNameModal.$dismiss('cancel');
    };

    //submit data to firebase method
    this.createRoom = function() {
      close(Room.addRoom(roomName));


    };
  }
  angular
    .module('blocChat')
    .controller('RoomNameModalCtrl', ['$uibModal', RoomNameModalCtrl]);
})();
