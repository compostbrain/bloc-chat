(function() {
  function UserNameModalCtrl($cookies, $uibModalInstance) {

    this.createUsername = function () {
            $cookies.put('blocChatCurrentUser', this.username);
            $uibModalInstance.close();
            var currentUser = $cookies.get('blocChatCurrentUser');
            console.log ("Current Username is" + JSON.stringify(currentUser));
        };
    }

  angular
    .module('blocChat')
    .controller('UserNameModalCtrl', ['$cookies', '$uibModalInstance', UserNameModalCtrl]);
})();
