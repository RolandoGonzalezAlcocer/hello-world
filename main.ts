input.onButtonPressed(Button.A, function () {
    basic.showString("Hello World!")
    basic.showIcon(IconNames.Heart)
})
basic.showNumber(23)
basic.forever(function () {
    basic.showString("...")
})
