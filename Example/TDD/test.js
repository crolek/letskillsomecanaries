QUnit.test("The Canary test", function( assert ) {
    var name = "Stewie",
        number = 99,
        expected = ""

    expected = name + "'s number is: " + number
    assert.equal(stewieSays(name, number), expected, "Stewie's number")
});