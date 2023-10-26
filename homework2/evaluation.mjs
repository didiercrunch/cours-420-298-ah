import mocha from "https://esm.sh/mocha@10.2.0"
import {assert} from "https://esm.sh/chai@4.3.10"
mocha.setup('bdd');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
it('should run a bogus test', () => {
    assert.equal(1 + 1, 2);
});

it("should copy text", async () => {
    const expt = "toto";
    document.getElementById("input-1").value = expt;
    document.getElementById("button-1").click();
    await sleep(1000);
    assert.equal(expt, document.getElementById("result-box-1").innerText)

});
mocha.run();