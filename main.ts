radio.setGroup(1)
RoboDog.Open("None")
RoboDog.gesture(RoboDogConstants.GestureAction.READY)
basic.pause(2500)

RoboDog.move(RoboDogConstants.MoveDirection.STOP, 0)
RoboDog.bodyLED(RoboDogConstants.BodyLEDColor.BLUE)
RoboDog.headLEDExp(RoboDogConstants.HeadLEDExpression.SPARKLING_EYES)
basic.showString("R")

radio.onReceivedString(function (text) {
    if (text == "GO") {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        RoboDog.bodyLED(RoboDogConstants.BodyLEDColor.RED)
        RoboDog.headLEDExp(RoboDogConstants.HeadLEDExpression.SHARP_EYES)
        RoboDog.move(RoboDogConstants.MoveDirection.FORWARD, 50)

    } else if (text == "BACK") {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        RoboDog.bodyLED(RoboDogConstants.BodyLEDColor.YELLOW)
        RoboDog.headLEDExp(RoboDogConstants.HeadLEDExpression.ROLL_EYES)
        RoboDog.move(RoboDogConstants.MoveDirection.BACKWARD, 50)

    } else if (text == "LEFT") {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        RoboDog.bodyLED(RoboDogConstants.BodyLEDColor.GREEN)
        RoboDog.headLEDExp(RoboDogConstants.HeadLEDExpression.BLINK)
        RoboDog.spin(RoboDogConstants.SpinDirection.CCW, 40)

    } else if (text == "RIGHT") {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        RoboDog.bodyLED(RoboDogConstants.BodyLEDColor.GREEN)
        RoboDog.headLEDExp(RoboDogConstants.HeadLEDExpression.BLINK)
        RoboDog.spin(RoboDogConstants.SpinDirection.CW, 40)

    } else if (text == "STOP") {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        RoboDog.move(RoboDogConstants.MoveDirection.STOP, 0)
        RoboDog.spin(RoboDogConstants.SpinDirection.STOP, 0)
        RoboDog.bodyLED(RoboDogConstants.BodyLEDColor.BLUE)
        RoboDog.headLEDExp(RoboDogConstants.HeadLEDExpression.SPARKLING_EYES)
    }
})