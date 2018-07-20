function AS_Button_ae9d40d5eb744b8cb36cf8504d3e8b52(eventobject) {
    function MOVE_ACTION____d8378495459c4c7fa746a09dd15f38c0_Callback() {}
    Dashboard.FlexTrigger.animate(kony.ui.createAnimation({
        "100": {
            "left": "0%",
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
        "animationEnd": MOVE_ACTION____d8378495459c4c7fa746a09dd15f38c0_Callback
    });
}