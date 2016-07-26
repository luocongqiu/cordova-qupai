function QupaiVideo() {

}

QupaiVideo.prototype.capture = function (successCallback, errorCallback, options) {
    cordova.exec(successCallback, errorCallback, "QupaiVideo", "capture", [options]);
};

QupaiVideo.install = function () {
    if (!window.plugins) {
        window.plugins = {};
    }
    window.plugins.qupaiVideo = new QupaiVideo();
    return window.plugins.qupaiVideo;
};

cordova.addConstructor(QupaiVideo.install);
