(function() {
  function HomeCtrl(Room, Message, $uibModal) {
    this.rooms = Room.all;
    this.currentRoom = null;

    this.addNewRoom = function() {
      $uibModal.open({
        templateUrl: '/templates/roomNameModal.html',
        controller: 'RoomNameModalCtrl as modal'

      });
    }
    this.setCurrentRoom = function(room) {
      this.currentRoom = room;
      this.messages = Message.getByRoomId(this.currentRoom.$id);
    }


  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
