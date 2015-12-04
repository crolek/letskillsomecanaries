QUnit.test("The Stewie test", function( assert ) {
    var name = "Stewie",
        number,
        expected = ""

    number = randomInt(0, 10)

    expected = name + "'s number is: " + number
    assert.equal(stewieSays(name, number), expected, "Stewie's number")
    assert.equal(stewieSays(), "Sherpa's number is: 0", "Default works")
    assert.equal(stewieSays(name, 20), "no", "Stewie messed with the output")
});