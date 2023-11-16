import mocha from "https://esm.sh/mocha@10.2.0"
import {assert} from "https://esm.sh/chai@4.3.10"
mocha.setup('bdd');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

describe("question 1", function(){
    it("should have proper title", function(){
        const expt = "Travail Pratique III";
        assert.equal(expt, document.getElementById("main-title").innerText)
    })
});

describe("question 2",  function(){

    async function testQuestion2(userInput, expt){
        document.getElementById("input-1").value = userInput;
        document.getElementById("button-1").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-1").innerText)
    }

    it("should sum up to 3", async function(){
        const userInput = (3) + "";
        const expt = (1 + 2 + 3) + "";
        await testQuestion2(userInput, expt);
    })

    it("should sum up to 10", async function(){
        const userInput = (10) + "";
        const expt = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10) + "";
        await testQuestion2(userInput, expt);
    })

    it("should work on zero", async function(){
        const userInput = "0";
        const expt = "0";
        await testQuestion2(userInput, expt);
    })

    it("should not work on random string", async function(){
        const userInput = "allo";
        const expt = "Entré invalide";
        await testQuestion2(userInput, expt);
    })

    it("should not work on negative values", async function(){
        const userInput = "-12";
        const expt = "Entré invalide";
        await testQuestion2(userInput, expt);
    })
});

describe("question 3",  function(){

    async function testQuestion3(stepUserInput, limitUserInput, expt){
        document.getElementById("input-1").value = stepUserInput;
        document.getElementById("input-2").value = limitUserInput;
        document.getElementById("button-2").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-2").innerText)
    }

    it("should sum up to 3", async function(){
        const stepUserInput = "1"
        const limitUserInput = "3";
        const expt = (1 + 2 + 3) + "";
        await testQuestion3(stepUserInput, limitUserInput, expt);
    })

    it("should sum up to 10 by step of 2", async function(){
        const stepUserInput = "2"
        const limitUserInput =  "10";
        const expt = (2 + 4 + 6 + 8 + 10) + "";
        await testQuestion3(stepUserInput, limitUserInput, expt);
    })

    it("should not work with step as a string", async function(){
        const stepUserInput = "allo"
        const limitUserInput =  "10";
        const expt = "Entré invalide";
        await testQuestion3(stepUserInput, limitUserInput, expt);
    })

    it("should not work with negative step", async function(){
        const stepUserInput = "-2"
        const limitUserInput =  "10";
        const expt = "Entré invalide";
        await testQuestion3(stepUserInput, limitUserInput, expt);
    })

    it("should not work with limit as a string", async function(){
        const stepUserInput = "2"
        const limitUserInput =  "allo";
        const expt = "Entré invalide";
        await testQuestion3(stepUserInput, limitUserInput, expt);
    })

    it("should not work with negative limit", async function(){
        const stepUserInput = "2"
        const limitUserInput =  "-10";
        const expt = "Entré invalide";
        await testQuestion3(stepUserInput, limitUserInput, expt);
    })

});


describe("question 4",  function(){
    async function testQuestion4(userInput, expt){
        document.getElementById("input-3").value = userInput;
        document.getElementById("button-3").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-3").innerText)
    }

    it("should find the proper country of an existing city", async function(){
        await testQuestion4("Oran", "Algerie");
    });


    it("should show error message when city not found in data", async function(){
        await testQuestion4("Paris", "ville non trouvée");
    });

})

describe("question 5",  function(){
    async function testQuestion5(userInput, expt){
        document.getElementById("input-4").value = userInput;
        document.getElementById("button-4").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-4").innerText)
    }

    it("should find the proper number of existing country is input by user", async function(){
        await testQuestion5("Canada", 3);
    });

    it("should show zero when non existing country is input by user", async function(){
        await testQuestion5("France", 0);
    });

})


describe("question 6",  function(){
    async function testQuestion7(userInput, expt){
        document.getElementById("input-1").value = userInput;
        document.getElementById("button-5").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-1").innerText)
    }

    it("should find the proper population of existing country is input by user", async function(){
        await testQuestion7("Canada", 1762949 + 2794356 + 662248);
    });

    it("should show zero when non existing country is input by user", async function(){
        await testQuestion7("France", 0);
    });
})


describe("question 7",  function(){
    async function testQuestion7(userInput, expt){
        document.getElementById("input-2").value = userInput;
        document.getElementById("button-6").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-2").innerText)
    }

    it("should find the proper city of existing country is input by user", async function(){
        await testQuestion7("Canada", "Toronto");
    });

    it("should show zero when non existing country is input by user", async function(){
        await testQuestion7("France", "aucune ville trouvée");
    });
})

describe("question 8",  function(){
    async function testQuestion8(userInput, expt){
        document.getElementById("input-3").value = userInput;
        document.getElementById("button-7").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-3").innerText)
    }

    it("should find the proper country of existing person entered by input by user", async function(){
        await testQuestion8("Djaffar Bensetti", "Algerie");
    });

    it("should show error message when person not found", async function(){
        await testQuestion8("Marie Antoinette", "aucune personne trouvée");
    });
})

describe("question 9",  function(){
    async function testQuestion9(userInput, expt){
        document.getElementById("input-4").value = userInput;
        document.getElementById("button-8").click();
        await sleep(100);
        assert.equal(expt, document.getElementById("result-box-4").innerText)
    }

    it("Canada", async function(){
        await testQuestion9("Canada", 3);
    });

    it("Mexique", async function(){
        await testQuestion9("Mexique", 0);
    });

    it("France", async function(){
        await testQuestion9("France", 0);
    });

})


mocha.run();