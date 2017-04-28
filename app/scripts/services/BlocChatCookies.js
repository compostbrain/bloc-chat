(function() {
    function BlocChatCookies($cookies, $uibModal) {

        var currentUser = "";
        console.log ("Current Username is" + JSON.stringify(currentUser));
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/userNameModal.html',
                size: 'sm',
                controller: 'UserNameModalCtrl as userNameModal',
                keyboard: false,
                backdrop: 'static'
            });
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
