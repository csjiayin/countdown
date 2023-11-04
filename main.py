basic.show_string("count down")
basic.pause(2000)
basic.show_number(9)
basic.pause(1000)
basic.show_number(8)
basic.pause(1000)
basic.show_number(7)
basic.pause(1000)
basic.show_number(6)
basic.pause(1000)
basic.show_number(5)
basic.pause(1000)
basic.show_number(4)
basic.pause(1000)
basic.show_number(3)
basic.pause(1000)
basic.show_number(2)
basic.pause(1000)
basic.show_number(1)
basic.pause(1000)
basic.show_number(0)
basic.pause(1000)

def on_forever():
    basic.show_leds("""
        # # # . .
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        """)
    basic.clear_screen()
    basic.show_leds("""
        # # # # #
        # # # # .
        # # # . .
        # # . . .
        # . . . .
        """)
    basic.clear_screen()
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        # # # . .
        """)
    basic.clear_screen()
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        """)
    basic.clear_screen()
basic.forever(on_forever)
