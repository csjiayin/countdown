basic.forever(function () {
    basic.showNumber(5)
    basic.pause(1000)
    basic.showNumber(4)
    basic.pause(1000)
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
    basic.showNumber(0)
    basic.pause(2000)
    basic.showLeds(`
        # . . # .
        . # . . .
        . . . # .
        . # . . #
        . . . # .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . . # .
        . . # . #
        # . . . .
        . . . # .
        # . # . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        # . . . #
        . . . # .
        . # . . .
        . . . # .
        `)
    basic.clearScreen()
    basic.showLeds(`
        # . # . .
        . . . . .
        . # . # .
        . . # . .
        # . . . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . . # .
        . # . . .
        . . . # .
        . # . . .
        # . . # .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . . . #
        # . # . .
        . # . . .
        . . # . .
        # . . . #
        `)
    basic.clearScreen()
    basic.pause(2000)
})
