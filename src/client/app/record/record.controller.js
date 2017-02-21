(function() {
    'use strict';

    angular
        .module('app.record')
        .controller('RecordController', RecordController);

    RecordController.$inject = ['$timeout', 'logger'];

    /* @ngInject */
    function RecordController($timeout, logger) {
        var vm = this;
        vm.play = play;
        vm.stop = stop;
        vm.record = record;

        var player = document.getElementById('player');
        var recPlayer = document.getElementById('recPlayer');
        var constraints = {
          audio: false,
          video: true
        }

        activate();

        function activate() {
          vm.uploadAvailable = false;
          vm.status = 'stop';
        }

        function play() {
          vm.status = 'play';
          navigator.mediaDevices.getUserMedia(constraints)
            .then(success).catch(error);

          function success(stream) {
            player.srcObject = stream;
          }

          function error(err) {
            logger.error(error)
          }

        }

        function stop () {
          vm.status = 'stop';
          player.srcObject = undefined;
        }

        function record() {
          vm.status = 'rec';
          var mediaRecorder = new MediaRecorder(player.srcObject, {mimeType: 'video/webm'});
          mediaRecorder.ondataavailable = onDataAvailable;

          function onDataAvailable(event) {
            recPlayer.src = window.URL.createObjectURL(event.data);
          }

          mediaRecorder.start();
          $timeout(function () {
            mediaRecorder.stop();
            vm.status = 'play';
            vm.uploadAvailable = true;
          }, 5000);
        }
    }
})();
