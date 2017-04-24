(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        return {
        all: messages,

        getByRoomId: function (roomID) {
            return $firebaseArray(ref.orderByChild('roomID').equalTo(roomID));
        }



      };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
