// document IS A REFERENCE TO THE ENTIRE HTML ELEMENT:
// <html> 
//      ......
//      ALL THAT GOES IN IT
//      ......
// </html>

// .ready() IS AN EVENT HANDLER THAT WILL RUN AS SOON AS ALL THE ENTIRE DOCUMENT IS LOADED
$(document).ready(function () {

    // ---------------------------------------------------------------------------------------------------
    // EXAMPLE 1
    // ---------------------------------------------------------------------------------------------------


    // SELECT AN HTML ELEMENT BY ITS CLASS BY PUTTING A . BEFORE THE CLASSNAME
    var container = $(".container");

    // THIS SELECTS THE SAME CONTAINER ELEMENT, ONLY BY USING ITS ID AND A # BEFORE THE ID NAME
    // THIS IS THE SAME SYNTAX AS REFERENCING AN ELEMENT'S CLASS OR ID IN CSS
    var mainContainer = $("#main-container");

    function createRow(id) {
        // CREATE A NEW DIV HTML ELEMENT THAT IS NOT YET PART OF THE DOCUMENT
        var newDiv = $("<div>");

        // SET ATTRIBUTES USING THE .attr() METHOD
        // WE WILL THEN HAVE A DIV HTML ELEMENT THAT LOOKS LIKE:
        // <div class="row" id="the-value-of-id" name="the-value-of-id"></div>
        newDiv.attr("class", "row");
        newDiv.attr("id", id);
        newDiv.attr("name", id);

        // WE CAN ACCOMPLISH THE SAME USING OBJECT NOTATION IN THE .attr() METHOD
        newDiv.attr({
            class: "row",
            id: id,
            name: id
        })
        return newDiv;
    }

    var rowEx1 = createRow("example-1");

    // WE CAN ALSO USE THE .attr() METHOD TO GET AN ATTRIBUTE
    // HERE WE'LL STORE ITS ID ATTRIBUTE
    var idEx1 = rowEx1.attr("id");

    // THE .text() METHOD SETS AN HTML ELEMENT'S INNER TEXT TO WHATEVER WE GIVE IT.
    // IN THIS CASE, WE WILL SET ITS TEXT TO WHATEVER ITS ID ATTRIBUTE IS.
    rowEx1.text(idEx1);

    // <div class="row" id="the-value-of-id" name="the-value-of-id">example-1</div>

    // WE CAN ADD OUR JQUERY-CREATED ROW TO OUR DOM
    // HERE, .append() WILL ADD OUR ROW AS THE LAST CHILD ELEMENT WITHIN THE PARENT, mainContainer
    mainContainer.append(rowEx1);

    // ---------------------------------------------------------------------------------------------------
    // EXAMPLE 2
    // ---------------------------------------------------------------------------------------------------
    // return;

    var rowEx2 = createRow("example-2");
    var idEx2 = rowEx2.attr("id");

    // WITH OUR NEW ROW, WE CAN USE .text() AGAIN OR
    // WE COULD USE .html() TO SET AN ENTIRE HTML ELEMENT WITHIN IT
    // IN THIS CASE, A SPAN TAG WITH TEXT INSIDE READING THE ID ATTRIBUTE OF OUR ROW
    rowEx2.html(`<span> ${idEx2} </span>`)
    rowEx2.html("<span> " + idEx2 + " </span>")

    // WITH OUR NEW ROW, USING .prepend(),
    // WE CAN ADD IT AS THE FIRST CHILD ELEMENT OF OUR PARENT CONTAINER 
    mainContainer.prepend(rowEx2);

    // ---------------------------------------------------------------------------------------------------
    // EXAMPLE 3
    // ---------------------------------------------------------------------------------------------------
    // return;

    var rowEx3 = createRow("example-3");
    var idEx3 = rowEx3.attr("id");

    // THE .text() AND .html() METHODS CAN ALSO BE USED WITHOUT ARGUMENTS TO "GET" RATHER THAN "SET"
    var textEx1 = rowEx1.text();
    var htmlEx2 = rowEx2.html();
    rowEx3.html(`${textEx1} ${htmlEx2} <strong>${idEx3} </strong>`);

    // THE .appendTo() and .prependTo() METHODS ACHIEVE THE SAME GOAL AS .append() and .prepend(),
    // BUT WE REFERENCE THE CHILD FIRST AND THEN THE PARENT
    rowEx3.prependTo(mainContainer);

    // ---------------------------------------------------------------------------------------------------
    // EXAMPLE 4
    // ---------------------------------------------------------------------------------------------------
    // return;

    var rowEx4 = createRow("example-4");

    // IF WE WANTED TO ADD A CLASS TO rowEx4, instead of using .attr(),
    // WE WOULD USE .addClass() TO AVOID OVERRIDING ITS EXISTING CLASSES
    rowEx4.addClass("not-a-row")

    // IF WE DID WANT TO REMOVE A PARTICULAR CLASS, 
    // WE'D SIMILARLY USE .removeClass()
    rowEx4.removeClass("row")

    // WE'LL SET THE HTML OF THIS ROW TO ITS CLASS NAME AND ID 
    rowEx4.html(`${rowEx4.attr("class")} ${rowEx4.attr("id")}`)

    // THIS TIME USING .appendTo INSTEAD OF .prependTo()
    rowEx4.appendTo(mainContainer);

    // ---------------------------------------------------------------------------------------------------
    // EXAMPLE 5
    // ---------------------------------------------------------------------------------------------------
    // return;

    var rowEx5 = createRow("example-5");
    var idEx5 = rowEx5.attr("id")

    // WITHIN OUR NEXT ROW, WE HAVE A FORM WITH A BUTTON AND INPUT
    var formEx5 = $("<form>");
    var inputEx5 = $("<input>");
    var buttonEx5 = $("<button>");

    formEx5.attr({
        id: "form-example-5"
    });

    inputEx5.attr("placeholder", idEx5);

    // WE CAN STACK METHODS IN ONE LINE IF WE LIKE
    buttonEx5
        .text(idEx5)
        .attr("id", "button-example-5");

    // THE .on("click",) METHOD WILL RUN A CALLBACK FUNCTION WHENEVER THE HTML ELEMENT IS CLICKED
    buttonEx5.on("click", function (event) {
        // event.preventDefault() WILL STOP THE DEFAULT ACTION OF ATTEMPTING TO SEND DATA / RELOAD THE PAGE
        event.preventDefault();

        // WE CAN GET OUR INPUT VALUE USING. val()
        var valEx5 = inputEx5.val();

        // HERE WE WILL SET THE TEXT OF THE BUTTON TO WHATEVER THE VALUE OF THE INPUT IS
        // WE CAN REFERENCE OUR BUTTON WITHIN THE SCOPE OF THE CALLBACK FUNCTION USING $(this)
        $(this).text(valEx5);
    })

    // ADD INPUT AND BUTTON TO OUR FORM, THEN INSERT FORM INTO OUR ROW
    inputEx5.appendTo(formEx5);
    buttonEx5.appendTo(formEx5);
    rowEx5.html(formEx5);

    mainContainer.append(rowEx5);

    // ---------------------------------------------------------------------------------------------------
    // EXAMPLE 6
    // ---------------------------------------------------------------------------------------------------
    // return;

    var rowEx6 = createRow("example-6");
    var idEx6 = rowEx6.attr("id");

    // WITHIN OUR NEXT ROW, WE HAVE A FORM WITH A FEW BUTTONS AND A SPAN TAG
    // WE CAN ASSIGN ELEMENTS ATTRIBUTES IN THE SAME LINE THAT WE CREATE THEM
    var showButtonEx6 = $("<button>").text("Show");
    var hideButtonEx6 = $("<button>").text("Hide");
    var toggleButtonEx6 = $("<button>").text("Toggle");
    var spanEx6 = $("<span>").text(idEx6);

    showButtonEx6.on("click", function (event) {
        event.preventDefault();

        // THE .show() METHOD DISPLAYS AN ELEMENT (SETS DISPLAY TO ITS INITIAL VALUE)
        spanEx6.show();
    });
    hideButtonEx6.on("click", function (event) {
        event.preventDefault();

        // THE .hide() METHOD HIDES AN ELEMENT (SETS DISPLAY TO NONE)
        spanEx6.hide();
    });
    toggleButtonEx6.on("click", function (event) {
        event.preventDefault();

        // THE .toggle() METHOD CHANGES AN ELEMENT'S DISPLAY FROM ITS INITIAL VALUE TO NONE, BACK AND FORTH
        spanEx6.toggle();
    });

    showButtonEx6.appendTo(rowEx6);
    hideButtonEx6.appendTo(rowEx6);
    toggleButtonEx6.appendTo(rowEx6);
    spanEx6.appendTo(rowEx6);

    mainContainer.append(rowEx6);

    // ---------------------------------------------------------------------------------------------------
    // EXAMPLE 7
    // ---------------------------------------------------------------------------------------------------
    // return;

    var rowEx7 = createRow("example-7");
    var idEx7 = rowEx7.attr("id");

    // IN THIS ROW WE SET UP A SERIES OF BUTTONS, A <span>, AND A <p> TAG
    var emptyButtonEx7 = $("<button>").text("Empty");
    var removeButtonEx7 = $("<button>").text("Remove");
    var detachButtonEx7 = $("<button>").text("Detach");
    var reuseButtonEx7 = $("<button>").text("Re-use");
    var spanEx7 = $("<span>")
        .text(idEx7)
        .attr({
            class: "fixed-width"
        })
    var pEx7 = $("<p>");


    spanEx7.on("click", function (event) {
        event.preventDefault();

        // THE SPAN'S ON CLICK EVENT USES THE .toggleClass() METHOD TO ADD OR REMOVE THE CLASS "dark"
        // DEPENDING ON WHETHER THAT CLASS IS PRESENT/ABSENT ALREADY
        spanEx7.toggleClass("dark");
    })

    emptyButtonEx7.on("click", function (event) {
        event.preventDefault();

        // THE .empty() METHOD WILL EMPTY OUT EVERYTHING WITHIN THE ELEMENT
        spanEx7.empty();
    });
    removeButtonEx7.on("click", function (event) {
        event.preventDefault();

        // THE .remove() METHOD WILL REMOVE THE ELEMENT FROM THE document ENTIRELY
        // WE CAN STILL RETRIEVE IT AND REINSERT IT INTO THE document USING OUR VARIABLE,
        // BUT IT WILL LOSE JQUERY DATA, LIKE ITS ON CLICK EVENT
        spanEx7.remove();
    });
    detachButtonEx7.on("click", function (event) {
        event.preventDefault();

        // THE .detach() METHOD WILL REMOVE THE ELEMENT FROM THE document ENTIRELY
        // WE CAN STILL RETRIEVE IT AND REINSERT IT INTO THE document USING OUR VARIABLE,
        // AND RETAIN ALL OF ITS JQUERY DATA, LIKE ITS ON CLICK EVENT
        spanEx7.detach();
    });
    reuseButtonEx7.on("click", function (event) {
        event.preventDefault();

        // SPAN WILL ONLY TOGGLE ITS CLASS IF YOU called .detach() vs .remove()
        pEx7.html(spanEx7);
    });

    spanEx7.appendTo(rowEx7);
    emptyButtonEx7.appendTo(rowEx7);
    removeButtonEx7.appendTo(rowEx7);
    detachButtonEx7.appendTo(rowEx7);
    reuseButtonEx7.appendTo(rowEx7);
    pEx7.appendTo(rowEx7);

    mainContainer.append(rowEx7);

    // ---------------------------------------------------------------------------------------------------
    // EXAMPLE 8
    // ---------------------------------------------------------------------------------------------------
    // return;

    var rowEx8 = createRow("example-8");
    var idEx8 = rowEx8.attr("id")

    // WITHIN OUR NEXT ROW, WE HAVE A FORM WITH A BUTTON AND INPUT
    var formEx8 = $("<form>")
        .attr({
            id: "form-example-8"
        });
    var inputEx8 = $("<input>")
        .attr("placeholder", idEx8);

    var submitButtonEx8 = $("<button>")
        .text("on Click")
        .attr("id", "submit-button-example-8");

    var changeButtonEx8 = $("<button>")
        .text("on Change")
        .attr("id", "change-button-example-8");

    var keyUpButtonEx8 = $("<button>")
        .text("on KeyUp")
        .attr("id", "change-button-example-8");

    // THE .on("submit",) METHOD WILL RUN A CALLBACK FUNCTION WHENEVER THE FORM IS SUBMITTED
    formEx8.on("submit", function (event) {
        // event.preventDefault() WILL STOP THE DEFAULT ACTION OF ATTEMPTING TO SEND DATA / RELOAD THE PAGE
        event.preventDefault()

        var valEx8 = inputEx8.val();
        submitButtonEx8.text(valEx8);
    });

    // THIS .on("click",) METHOD WILL ACHIEVE THE SAME GOAL AS THE .on("submit",) METHOD
    // NOTE THAT IT REQUIRES A DIFFERENT SELECTOR, THOUGH,
    //  AND THEREFORE $(this) refers to the button, not the form
    submitButtonEx8.on("click", function (event) {
        event.preventDefault()

        var valEx8 = inputEx8.val();
        $(this).text(valEx8);
    });

    // THE .on("change",) METHOD GETS CALLED WHENEVER THE INPUT'S VALUE CHANGES, 
    // HOWEVER, IT DOES NOT CHANGE WHILE INPUT IS STILL SELECTED
    inputEx8.on("change", function () {
        changeButtonEx8.text($(this).val());
    });

    // THE .on("keyup",) METHOD GETS CALLED WHENEVER THE KEYUP EVENT FIRES ON THAT ELEMENT 
    inputEx8.on("keyup", function () {
        keyUpButtonEx8.text($(this).val());
    });

    inputEx8.appendTo(formEx8);
    submitButtonEx8.appendTo(formEx8);
    changeButtonEx8.appendTo(formEx8);
    keyUpButtonEx8.appendTo(formEx8);
    rowEx8.html(formEx8);

    mainContainer.append(rowEx8);


    // ---------------------------------------------------------------------------------------------------
    // EXAMPLE 9
    // ---------------------------------------------------------------------------------------------------
    // return;

    var rowEx9 = createRow("example-9");
    var idEx9 = rowEx9.attr("id");
    rowEx9.html(idEx9);

    var buttonEx9 = $("<button>")
        .attr({
            class: "dynamic-example",
            id: "button-example-9",
            type: "button"
        })
        .text("Click me!")
        .on("click", showClicked);

    function showClicked(event) {
        event.preventDefault()
        $(this).text("I've been clicked!")
    }

    rowEx9.append(buttonEx9);

    // THIS CONSOLE LOG RETURNS "undefined"
    // SELECTING OUR ROW BY ITS ID WILL NOT WORK SINCE IT'S DYNAMICALLY GENERATED IN OUR .JS FILE
    console.log($("#example-9").attr("id"));

    mainContainer.append(rowEx9);

    // ---------------------------------------------------------------------------------------------------
    // EXAMPLE 10
    // ---------------------------------------------------------------------------------------------------
    // return;

    // IN THIS EXAMPLE, WE'LL REFERENCE OUR ROW THAT ALREADY EXISTED IN THE HTML
    $("#example-10").html("<p>" + $("#example-10").attr("id") + "</p>");
    // THE FOLLOWING LINE DOES THE SAME THING
    // $("#example-10").html(`<p>${$("#example-10").attr("id")}</p>`);

    var buttonEx10 = $("<button>")
        .attr({
            class: "dynamic-example",
            id: "button-example-10",
            type: "button"
        })
        .text("Click me!")
        .on("click", showClicked);

    $("#example-10").append(buttonEx10);

    // THIS CONSOLE LOG RETURNS "example-10"
    console.log($("#example-10").attr("id"));

    // .clone() METHOD WILL CREATE A DEEP CLONE OF AN ELEMENT
    // IT TAKES 2 PARAMETERS, BY DEFAULT THESE ARE FALSE
    // THE FIRST PARAMETER COPIES EVENT HANDLERS/DATA OF THE ELEMENT TO OUR CLONE
    // THE SECOND PARAMETER COPIES EVENT HANDLERS/DATA TO THE CHILD ELEMENTS TO OUR CLONE'S CHILD ELEMENTS
    var rowEx10 = $("#example-10").clone(true, true);

    // WE WILL APPEND OUR CLONE TO THE DOCUMENT AND REMOVE THE ORIGINAL FROM IT
    mainContainer.append(rowEx10);
    $("#example-10").detach();

    // ---------------------------------------------------------------------------------------------------
    // EXAMPLE 11
    // ---------------------------------------------------------------------------------------------------
    // return;

    // HERE WE ARE USING A CLONE OF OUR LAST ROW
    // WITHOUT HAVING SET THOSE PARAMETERS TO TRUE, THE .on("click",) FUNCTION FOR THE BUTTON WON'T RUN
    var rowEx11 = $("#example-10").clone(false, false);

    // WE CAN .find() THE FIRST CHILD ELEMENT OF THE ROW THAT IS A BUTTON AND RESET THE TEXT
    rowEx11.find("button").text("Click Me! I don't work");

    // OR WE CAN USE .children() TO SELECT ALL CHILD ELEMENTS OF THE ROW THAT IS A BUTTON 
    // (IN THIS CASE WE ONLY HAVE ONE) AND RESET THEIR TEXT
    rowEx11.children("button").text("Click Me! I don't work");

    rowEx11.find("p").text("example-11");

    mainContainer.append(rowEx11);

    // ---------------------------------------------------------------------------------------------------
    // EXAMPLE 12
    // ---------------------------------------------------------------------------------------------------
    // return;

    var rowEx12 = createRow("example-12");
    var idEx12 = rowEx12.attr("id");
    rowEx12.html(idEx12);

    //  HERE, WE RECREATE EXAMPLE 9, BUT WE HAVE A DIFFERENT BUTTON THAT CREATES OUR "CLICK ME!" BUTTON

    function createBrokenClickMe(event) {
        event.preventDefault();

        var buttonEx12 = $("<button>")
            .attr({
                class: "dynamic-example",
                id: "button-example-12",
                type: "button"
            })
            .text("Click me! I also won't work");

        // SELECT THE PARENT OF THIS CREATE BUTTON
        $(this).parent().append(buttonEx12);
    }

    // WE DON'T ADD OUR ON CLICK EVENT TO THE BUTTON WHEN DEFINING IT
    var createButtonEx12 = $("<button>")
        .attr({
            class: "create-button",
            id: "create-button-12",
            type: "button"
        })
        .text('Create "Click Me!" Button')
        .on("click", createBrokenClickMe);

    // IF WE WANTED TO ADD OUR ON CLICK FUNCTION LATER, THE BELOW APPROACH WON'T WORK
    // HERE WE ARE SELECTING BY THE BUTTON'S ID
    // THE SELECTOR IS INVALID BECAUSE WE DYNAMICALLY CREATED THE BUTTON IN OUR createBrokenClickMe FUNCTION
    $("#button-example-12").on("click", function (event) {
        event.preventDefault();
        $(this).text("I've been clicked!");
    });

    rowEx12.append(createButtonEx12);

    mainContainer.append(rowEx12);

    // ---------------------------------------------------------------------------------------------------
    // EXAMPLE 13
    // ---------------------------------------------------------------------------------------------------
    // return;

    var rowEx13 = createRow("example-13");
    var idEx13 = rowEx13.attr("id");
    rowEx13.html(idEx13);

    function createWorkingClickMe(event) {
        event.preventDefault();

        var buttonEx13 = $("<button>")
            .attr({
                class: "dynamic-example",
                id: "button-example-13",
                type: "button"
            })
            .text("Click me! I WILL work");

        // SELECT THE PARENT OF THIS CREATE BUTTON
        $(this).parent().append(buttonEx13);
    }

    // WE DON'T ADD OUR ON CLICK EVENT TO THE BUTTON WHEN DEFINING IT
    var createButtonEx13 = $("<button>")
        .attr({
            class: "create-button",
            id: "create-button-13",
            type: "button"
        })
        .text('Create "Click Me!" Button')
        .on("click", createWorkingClickMe);

    // IF WE WANTED TO ADD OUR ON CLICK FUNCTION LATER, THE BELOW APPROACH WILL WORK
    // HERE WE ARE SELECTING THE ENTIRE DOCUMENT AND USING .find() BY THE BUTTON'S ID
    // THIS IS VALID EVEN THOUGH WE DYNAMICALLY CREATED THE BUTTON IN OUR createWorkingClickMe FUNCTION
    $(document).on("click", "#button-example-13", function (event) {
        event.preventDefault();
        $(this).text("I've been clicked!");
    });

    rowEx13.append(createButtonEx13);

    mainContainer.append(rowEx13);

    // ---------------------------------------------------------------------------------------------------
    // EXAMPLE 14
    // ---------------------------------------------------------------------------------------------------
    // return;

    var trHeader = $("<tr>");
    var tdCount = 0;

    for (var i = 0; i < 2; i++) {
        var tr = $("<tr>");

        for (var j = 0; j < 9; j++) {
            tdCount++;

            if (i === 0) {
                var th = $("<th>").text(`Column ${j}`);
                trHeader.append(th);
            }
            var td = $("<td>").text(tdCount);
            tr.append(td);
        }

        $("#table-example-14").append(tr);
    }
    $("#table-example-14").prepend(trHeader);


    console.log($("#table-example-14").attr("id"));
    console.log($("#table-example-14").children());

    // SELECT PARENT TABLE, THEN 1ST CHILD ELEMENT TR FROM TABLE'S CHILD ELEMENTS
    $("#table-example-14 tr:nth-child(1)")
    // EDIT CSS PROPERTIES OF ELEMENT USING .css()
        .css({
            "border-color": "rgb(189, 189, 189)",
            "border-style": "dashed",
            "border-width": "0px 2px 0px 2px"
        })
        .append(" - Selected!");

// SELECT TR ELEMENTS, THEN 3RD CHILD ELEMENT TR FROM TABLE'S CHILD ELEMENTS
        $("tr td:nth-child(3n)")
        .css({
            "border-color": "rgb(189, 189, 189)",
            "border-style": "dashed",
            "border-width": "0px 2px 0px 2px"
        })
        .append(" - Also Selected!");


    var rowEx14 = $("#example-14");
    rowEx14.detach();
    var newRowEx14 = rowEx14.clone(true,true);
    
    mainContainer.append(newRowEx14);

});

