(function() {
  function HomeCtrl(Room, $uibModal) {
    this.rooms = Room.all;

    this.openNewRoomModal = function() {
      $uibModal.open({
        templateUrl: '/templates/roomNameModal.html',
        controller: 'RoomNameModalCtrl as modal'

      });
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
