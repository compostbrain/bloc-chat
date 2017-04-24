(function() {
  function RoomNameModalCtrl($uibModalInstance, Room) {
    this.rooms = Room.all;


    this.createNewRoom = function() {
      Room.addRoom(this.newRoomName);
      $uibModalInstance.close();
    };
  }
  angular
    .module('blocChat')
    .controller('RoomNameModalCtrl', ['$uibModalInstance', 'Room', RoomNameModalCtrl]);
})();
