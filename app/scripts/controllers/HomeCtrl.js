(function() {
  function HomeCtrl(Room, Message, $uibModal, $cookies) {
    this.rooms = Room.all;
    this.currentRoom = null;
    this.currentUser = $cookies.get('blocChatCurrentUser');

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
    //method for sending messages
    this.sendMessage = function () {
            this.newMessage.roomID = this.currentRoom.$id;
            this.newMessage.username = this.currentUser;
            this.newMessage.timestamp = firebase.database.ServerValue.TIMESTAMP;
            Message.send(this.newMessage);
            this.newMessage.content = "";
        }


  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
