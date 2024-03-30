# calculator
A calculator created as the final challenge for the odin project's foundation course.
The calculator should have additions, subscrations, divisions, and multiplications.

Known bugs:

- Input line should not be able to become longer than the screen.
- When equal is pressed, it should be possible to start a new operation from
    that result.
- Pressing value resetting calculator functionality introduced a new bug where if we try to operate back to back it resets the calculator. Probably because it's checking to see if result is in line one and by that point previousInput === result.