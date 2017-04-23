(function() {
  function HomeCtrl(Room, $uibModal, $scope) {
    $scope.rooms = Room.all;

    $scope.openNewRoomModal = function() {
      $uibModal.open({
        templateUrl: '/templates/roomNameModal.html',
        controller: 'RoomNameModalCtrl',
      })
    };
  };

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', '$scope', HomeCtrl]);
})();
