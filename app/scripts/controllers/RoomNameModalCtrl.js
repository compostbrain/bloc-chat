(function() {
  function RoomNameModalCtrl($scope, $uibModalInstance, Room) {
    $scope.rooms = Room.all;

    $scope.createNewRoom = function() {
      Room.addRoom($scope.newRoomName);
      $uibModalInstance.close();
    };
  }
  angular
    .module('blocChat')
    .controller('RoomNameModalCtrl', ['$scope', '$uibModalInstance', 'Room', RoomNameModalCtrl]);
})();
