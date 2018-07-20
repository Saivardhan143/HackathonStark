function AS_Button_d045621c708d464488c5730a656e6a92(eventobject) {
    function MOVE_ACTION____ge9f6a25417f42b58e05dda8491ab334_Callback() {}
    Dashboard.FlexTrigger.animate(kony.ui.createAnimation({
        "100": {
            "left": "-100%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1
    }, {
        "animationEnd": MOVE_ACTION____ge9f6a25417f42b58e05dda8491ab334_Callback
    });
}