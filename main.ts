let Time = 0
let Start = 0
let Running = false
input.onLogoEvent(TouchButtonEvent.Released, function () {
    if (true) {
        Time += input.runningTime() - Start
    }
    Running = false
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.clearScreen()
    Running = true
    Start = input.runningTime()
})
basic.forever(function () {
    if (Running) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.showNumber(Math.idiv(Time, 1000))
    }
})
