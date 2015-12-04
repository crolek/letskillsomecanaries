QUnit.test("The Canary test", function( assert ) {
    var name = "Stewie",
        expected = ""

    expected = name + "'s number is: 10"
    assert.equal(stewieSays(name), expected, "Stewie's number")
});