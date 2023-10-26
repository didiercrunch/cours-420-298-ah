import mocha from "https://esm.sh/mocha@10.2.0"
import {assert} from "https://esm.sh/chai@4.3.10"
mocha.setup('bdd');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

describe("question 1", function(){
    it("should have proper title", function(){
        const expt = "Les Bases De La Programmation";
        assert.equal(expt, document.getElementById("main-title").innerText)
    })
});

describe("question 2", function(){
    it("should copy a random text", async function() {
        const expt = "toto";
        document.getElementById("input-1").value = expt;
        document.getElementById("button-1").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-1").innerText)
    });

    it("should copy an empty text", async function() {
        const expt = "";
        document.getElementById("input-1").value = expt;
        document.getElementById("button-1").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-1").innerText)
    });
});

describe("question 3", function(){
    it("should mark when input starts with letter a", async function() {
        const expt = "input-2 commence par la lettre 'a'";
        document.getElementById("input-2").value = "a la la";
        document.getElementById("button-2").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-2").innerText)
    });

    it("should mark when input does not starts with letter a", async function() {
        const expt = "input-2 ne commence pas par la lettre 'a'";
        document.getElementById("input-2").value = "o lo lo";
        document.getElementById("button-2").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-2").innerText)
    });
});


describe("question 4", function(){
    it("should mark when input-2 < input-3", async function() {
        const expt = "input-2 < input-3";
        document.getElementById("input-2").value = "allo";
        document.getElementById("input-3").value = "bonjour";
        document.getElementById("button-3").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-3").innerText)
    });

    it("should mark when input-2 == input-3", async function() {
        const expt = "input-2 >= input-3";
        document.getElementById("input-2").value = "allo";
        document.getElementById("input-3").value = "lila";
        document.getElementById("button-3").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-3").innerText)
    });

    it("should mark when input-2 > input-3", async function() {
        const expt = "input-2 >= input-3";
        document.getElementById("input-2").value = "bonjour";
        document.getElementById("input-3").value = "allo";
        document.getElementById("button-3").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-3").innerText)
    });
});

describe("question 5", function(){
    it("should mark when all equals", async function() {
        const expt = "Tout est pareil";
        document.getElementById("input-1").value = "privet";
        document.getElementById("input-2").value = "privet";
        document.getElementById("input-3").value = "privet";
        document.getElementById("input-4").value = "privet";

        document.getElementById("button-4").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-4").innerText)
    });

    it("should mark when not all equals", async function() {
        const expt = "Rien n'est pareil";
        document.getElementById("input-1").value = "privet";
        document.getElementById("input-2").value = "";
        document.getElementById("input-3").value = "privet";
        document.getElementById("input-4").value = "privet";

        document.getElementById("button-4").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-4").innerText)
    });

});

describe("question 6", function(){
    it("should compute correctly when number", async function() {
        const n = 5.5
        const expt = (n - 32) * 1.8;
        document.getElementById("input-1").value = n;

        document.getElementById("button-5").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-1").innerText)
    });

    it("should compute correctly when number (second point)", async function() {
        const n = 10
        const expt = (n - 32) * 1.8;
        document.getElementById("input-1").value = n;

        document.getElementById("button-5").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-1").innerText)
    });

    it("should error message when input not a number", async function() {
        const expt = "impossible de calculer";
        document.getElementById("input-1").value = "hello";
        document.getElementById("button-5").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-1").innerText)
    });

    it("should error message when input empty", async function() {
        const expt = "impossible de calculer";
        document.getElementById("input-1").value = "";
        document.getElementById("button-5").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-1").innerText)
    });

});


describe("question 7", function(){
    it("should compute correctly when positive number", async function() {
        const n = 5.5
        const expt = 5.5;
        document.getElementById("input-2").value = n;

        document.getElementById("button-6").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-2").innerText)
    });

    it("should compute correctly when negative number", async function() {
        const n = -5.5
        const expt = 5.5;
        document.getElementById("input-2").value = n;

        document.getElementById("button-6").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-2").innerText)
    });

    it("should error message when input not a number", async function() {
        const expt = "impossible de calculer";
        document.getElementById("input-2").value = "ceci n'est pas un nombre";
        document.getElementById("button-6").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-2").innerText)
    });

    it("should error message when input empty", async function() {
        const expt = "impossible de calculer";
        document.getElementById("input-2").value = "";
        document.getElementById("button-6").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-2").innerText)
    });
});


describe("question 8", function(){

    it("should compute correctly when all numbers", async function() {
        const expt = 2 * 3 * 4 * 5;
        document.getElementById("input-1").value = 2;
        document.getElementById("input-2").value = 3;
        document.getElementById("input-3").value = 4;
        document.getElementById("input-4").value = 5;

        document.getElementById("button-7").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-3").innerText)
    });

    it("should compute correctly when some numbers", async function() {
        const expt = 2 * 1 * 4 * 1;
        document.getElementById("input-1").value = 2;
        document.getElementById("input-2").value = "gizz";
        document.getElementById("input-3").value = 4;
        document.getElementById("input-4").value = "eezzz";

        document.getElementById("button-7").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-3").innerText)
    });

    it("should compute correctly when floats", async function() {
        const expt = 2.6 * 1 * 4.5 * 1;
        document.getElementById("input-1").value = 2.6;
        document.getElementById("input-2").value = "gizz";
        document.getElementById("input-3").value = 4.5;
        document.getElementById("input-4").value = "eezzz";

        document.getElementById("button-7").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-3").innerText)
    });

    it("should compute correctly when no values", async function() {
        const expt = 1;
        document.getElementById("input-1").value = "";
        document.getElementById("input-2").value = "gizz";
        document.getElementById("input-3").value = "";
        document.getElementById("input-4").value = "eezzz";

        document.getElementById("button-7").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-3").innerText)
    });
});


describe("question 9", function(){

    it("should compute correctly when all numbers", async function() {
        const expt = 2 + 3 + 4 + 5;
        document.getElementById("input-1").value = 2;
        document.getElementById("input-2").value = 3;
        document.getElementById("input-3").value = 4;
        document.getElementById("input-4").value = 5;

        document.getElementById("button-8").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-4").innerText)
    });

    it("should compute correctly when some numbers", async function() {
        const expt = 2 + 0 + 4 + 0;
        document.getElementById("input-1").value = 2;
        document.getElementById("input-2").value = "gizz";
        document.getElementById("input-3").value = 4;
        document.getElementById("input-4").value = "eezzz";

        document.getElementById("button-8").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-4").innerText)
    });

    it("should compute correctly when floats", async function() {
        const expt = 2.6 + 0 + 4.5 + 0;
        document.getElementById("input-1").value = 2.6;
        document.getElementById("input-2").value = "gizz";
        document.getElementById("input-3").value = 4.5;
        document.getElementById("input-4").value = "eezzz";

        document.getElementById("button-8").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-4").innerText)
    });

    it("should compute correctly when no values", async function() {
        const expt = 0;
        document.getElementById("input-1").value = "";
        document.getElementById("input-2").value = "gizz";
        document.getElementById("input-3").value = "";
        document.getElementById("input-4").value = "eezzz";

        document.getElementById("button-8").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-4").innerText)
    });
});


describe("question 10", function(){

    it("should translate Lapin", async function() {
        const expt = 'Kuniklo';
        document.getElementById("input-1").value = 'Lapin';
        document.getElementById("button-9").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-1").innerText)
    });

    it("should translate Lapinne", async function() {
        const expt = 'Kuniklino';
        document.getElementById("input-1").value = 'Lapinne';
        document.getElementById("button-9").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-1").innerText)
    });

    it("should translate Ville", async function() {
        const expt = 'Urbo';
        document.getElementById("input-1").value = 'Ville';
        document.getElementById("button-9").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-1").innerText)
    });

    it("should translate Téléphone Cellulaire", async function() {
        const expt = 'Poŝtelefono';
        document.getElementById("input-1").value = 'Téléphone Cellulaire';
        document.getElementById("button-9").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-1").innerText)
    });

    it("should not translate empty word", async function() {
        const expt = 'mot non trouvé';
        document.getElementById("input-1").value = '';
        document.getElementById("button-9").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-1").innerText)
    });

    it("should not translate unknown word", async function() {
        const expt = 'mot non trouvé';
        document.getElementById("input-1").value = 'chauve-souris';
        document.getElementById("button-9").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-1").innerText)
    });

});


describe("question 11", function() {

    it("should mark all big numbers", async function () {
        const expt = "Est un grand nombre";
        document.getElementById("input-1").value = 2000;
        document.getElementById("input-2").value = 2000;
        document.getElementById("input-3").value = 2000;
        document.getElementById("input-4").value = 2000;
        document.getElementById("button-10").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-1").innerText)
        assert.equal(expt, document.getElementById("result-box-2").innerText)
        assert.equal(expt, document.getElementById("result-box-3").innerText)
        assert.equal(expt, document.getElementById("result-box-4").innerText)
    });

    it("should mark small big numbers", async function () {
        const expt = "Est un petit nombre";
        document.getElementById("input-1").value = 500;
        document.getElementById("input-2").value = 500;
        document.getElementById("input-3").value = 500;
        document.getElementById("input-4").value = 500;

        document.getElementById("button-10").click();
        await sleep(100);

        assert.equal(expt, document.getElementById("result-box-1").innerText)
        assert.equal(expt, document.getElementById("result-box-2").innerText)
        assert.equal(expt, document.getElementById("result-box-3").innerText)
        assert.equal(expt, document.getElementById("result-box-4").innerText)
    });

    it("should mark all on the threshold", async function () {
        const expt = "Est un grand nombre";
        document.getElementById("input-1").value = 1000;
        document.getElementById("input-2").value = 1000;
        document.getElementById("input-3").value = 1000;
        document.getElementById("input-4").value = 1000;

        document.getElementById("button-10").click();
        await sleep(100);

        assert.equal(expt, document.getElementById("result-box-1").innerText)
        assert.equal(expt, document.getElementById("result-box-2").innerText)
        assert.equal(expt, document.getElementById("result-box-3").innerText)
        assert.equal(expt, document.getElementById("result-box-4").innerText)
    });

    it("should mark all not number", async function () {
        const expt = "N'est pas un nombre";
        document.getElementById("input-1").value = "gratte";
        document.getElementById("input-2").value = "gratte";
        document.getElementById("input-3").value = "gratte";
        document.getElementById("input-4").value = "gratte";

        document.getElementById("button-10").click();
        await sleep(100);

        assert.equal(expt, document.getElementById("result-box-1").innerText)
        assert.equal(expt, document.getElementById("result-box-2").innerText)
        assert.equal(expt, document.getElementById("result-box-3").innerText)
        assert.equal(expt, document.getElementById("result-box-4").innerText)
    });
});

describe("question 12", function() {

    it("should mark when sorted numbers", async function () {
        const expt = "les données sont ordonnées";
        document.getElementById("input-1").value = 1;
        document.getElementById("input-2").value = 2;
        document.getElementById("input-3").value = 3;
        document.getElementById("input-4").value = 4;

        document.getElementById("button-11").click();
        await sleep(100);

        assert.equal(expt, document.getElementById("result-box-3").innerText)
    });

    it("should mark when sorted numbers (2)", async function () {
        const expt = "les données sont ordonnées";
        document.getElementById("input-1").value = 1;
        document.getElementById("input-2").value = 1;
        document.getElementById("input-3").value = 2;
        document.getElementById("input-4").value = 2;

        document.getElementById("button-11").click();
        await sleep(100);

        assert.equal(expt, document.getElementById("result-box-3").innerText)
    });

    it("should mark when not a number", async function () {
        const expt = "les données ne sont pas ordonnées";
        document.getElementById("input-1").value = 1;
        document.getElementById("input-2").value = 1;
        document.getElementById("input-3").value = 2;
        document.getElementById("input-4").value = "hello";

        document.getElementById("button-11").click();
        await sleep(100);

        assert.equal(expt, document.getElementById("result-box-3").innerText)
    });

    it("should mark when no numbers", async function () {
        const expt = "les données ne sont pas ordonnées";
        document.getElementById("input-1").value = "a";
        document.getElementById("input-2").value = "b";
        document.getElementById("input-3").value = "c";
        document.getElementById("input-4").value = "e";

        document.getElementById("button-11").click();
        await sleep(100);

        assert.equal(expt, document.getElementById("result-box-3").innerText)
    });

});


describe("question 13", function() {

    it("should work as expected (1)", async function () {
        const minMessage = "Minima";
        const maxMessage = "Maxima";
        const noMinOrMaxMessage = "Ni minima, ni maxima";
        const noNumberMessage = "Pas un nombre";
        document.getElementById("input-1").value = 1;
        document.getElementById("input-2").value = 2;
        document.getElementById("input-3").value = 3;
        document.getElementById("input-4").value = 4;

        document.getElementById("button-12").click();
        await sleep(100);

        assert.equal(minMessage, document.getElementById("result-box-1").innerText)
        assert.equal(noMinOrMaxMessage, document.getElementById("result-box-2").innerText)
        assert.equal(noMinOrMaxMessage, document.getElementById("result-box-3").innerText)
        assert.equal(maxMessage, document.getElementById("result-box-4").innerText)
    });

    it("should work as expected (2)", async function () {
        const minMessage = "Minima";
        const maxMessage = "Maxima";
        const noMinOrMaxMessage = "Ni minima, ni maxima";
        const noNumberMessage = "Pas un nombre";
        document.getElementById("input-1").value = 1;
        document.getElementById("input-2").value = 2;
        document.getElementById("input-3").value = 1;
        document.getElementById("input-4").value = 2;

        document.getElementById("button-12").click();
        await sleep(100);

        assert.equal(minMessage, document.getElementById("result-box-1").innerText)
        assert.equal(maxMessage, document.getElementById("result-box-2").innerText)
        assert.equal(minMessage, document.getElementById("result-box-3").innerText)
        assert.equal(maxMessage, document.getElementById("result-box-4").innerText)
    });

    it("should work as expected (3)", async function () {
        const minMessage = "Minima";
        const maxMessage = "Maxima";
        const noMinOrMaxMessage = "Ni minima, ni maxima";
        const noNumberMessage = "Pas un nombre";
        document.getElementById("input-1").value = 1;
        document.getElementById("input-2").value = "ramallah";
        document.getElementById("input-3").value = 1;
        document.getElementById("input-4").value = 2;

        document.getElementById("button-12").click();
        await sleep(100);

        assert.equal(minMessage, document.getElementById("result-box-1").innerText)
        assert.equal(noNumberMessage, document.getElementById("result-box-2").innerText)
        assert.equal(minMessage, document.getElementById("result-box-3").innerText)
        assert.equal(maxMessage, document.getElementById("result-box-4").innerText)
    });

    it("should work as expected (4)", async function () {
        const minMessage = "Minima";
        const maxMessage = "Maxima";
        const noMinOrMaxMessage = "Ni minima, ni maxima";
        const noNumberMessage = "Pas un nombre";
        document.getElementById("input-1").value = "";
        document.getElementById("input-2").value = "";
        document.getElementById("input-3").value = "";
        document.getElementById("input-4").value ="";

        document.getElementById("button-12").click();
        await sleep(100);

        assert.equal(noNumberMessage, document.getElementById("result-box-1").innerText)
        assert.equal(noNumberMessage, document.getElementById("result-box-2").innerText)
        assert.equal(noNumberMessage, document.getElementById("result-box-3").innerText)
        assert.equal(noNumberMessage, document.getElementById("result-box-4").innerText)
    });

    it("should work as expected (5)", async function () {
        const minMessage = "Minima";
        const maxMessage = "Maxima";
        const noMinOrMaxMessage = "Ni minima, ni maxima";
        const noNumberMessage = "Pas un nombre";
        document.getElementById("input-1").value = 5;
        document.getElementById("input-2").value = "";
        document.getElementById("input-3").value = "";
        document.getElementById("input-4").value = 1;

        document.getElementById("button-12").click();
        await sleep(100);

        assert.equal(maxMessage, document.getElementById("result-box-1").innerText)
        assert.equal(noNumberMessage, document.getElementById("result-box-2").innerText)
        assert.equal(noNumberMessage, document.getElementById("result-box-3").innerText)
        assert.equal(minMessage, document.getElementById("result-box-4").innerText)
    });

    it("should work as expected (6)", async function () {
        const minMessage = "Minima";
        const maxMessage = "Maxima";
        const noMinOrMaxMessage = "Ni minima, ni maxima";
        const noNumberMessage = "Pas un nombre";
        document.getElementById("input-1").value = 5;
        document.getElementById("input-2").value = 5;
        document.getElementById("input-3").value = 5;
        document.getElementById("input-4").value = 5;

        document.getElementById("button-12").click();
        await sleep(100);

        assert.equal(minMessage, document.getElementById("result-box-1").innerText)
        assert.equal(minMessage, document.getElementById("result-box-2").innerText)
        assert.equal(minMessage, document.getElementById("result-box-3").innerText)
        assert.equal(minMessage, document.getElementById("result-box-4").innerText)
    });

});

mocha.run();