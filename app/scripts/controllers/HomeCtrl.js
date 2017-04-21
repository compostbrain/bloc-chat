(function() {
  function HomeCtrl(Room, $uibModal) {
    this.rooms = Room.all;
    this.openNewRoomModal = function() {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/roomNameModal.html',
        controller: 'RoomNameModalCtrl',
        controllerAs: 'roomNameModal'
      });
    };
  };

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
