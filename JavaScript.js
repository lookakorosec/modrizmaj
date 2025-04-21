//kaj je JavaScritp in kaj je Objekt v js in njegov prototype, in to je vse kar je za vedt! Pišem vsem ljudem, programerji pomerte se ♥!
//vse v JavaScriptu so objekti katerim definiramo prototype (zdej bom uporablju sam terminologijo iz JavaScripta), res je simpl.

(function () {"use strict"; //use strict wrapper


    //to je JavaScipt ->



    const mojObjekt = function(){ //constructor objekta, se pravi nič druzga k navadn node, škatlca u katero daš not informacije

       
        // navadna vsebina, ki bi jo rad imel u objektu, u tem primeru navadn tekst
        mesto: "Ljubljana", 



        //navadna funkcija, k se doda objektu(navadnmu nodu) -> funkcija sproži neko akcijo -> kliče se jo z: mojObjekt.lepPozdrav(); 
        lepPozdrav() {

          //tko ti u brskalniku rukne ven string (string ni nič druzga k navadn tekst), se prav neki ste nardil, da se zgodi. 
          console.log(`Greetings from ${this.mesto}`); // this ti pokaže pot v objektu samem, in ti ne izda nič drugega kot informacijo škatlice/objekta

        },
    };
    

    //JavaScript kako se naknadno širi objekt :: sprogramira po želji novo vsebino v objekt(škatlico informacij) kot so poslušalci dogotkov (event listener), funkcije itd., se prav kako se programira.
    mojObjekt.prototype = {

      //let je beseda ki definera mojo škatlico za informacije, temu se reče varjabla
      let observer = new MutationObserver(txtHandler); //tle ukradem objekt ki mi ga da na razbolagko API/bibilioteka v naprej sprogramiranih miljon objektov ki mi jih nudijo iz APIjov.
      let elTarget = document.getElementById("gesture-text"); // tle na spletni strani sam že uporabim že predefinirano funkcijo k mi jo nudi JavaScript, in <div>/element is spletne u mojo škatlco.
      let objConfig = { childList: !0, subtree: !0, attributes: !1, characterData: !1 }; // tle definerate parametre moja poslušalca, k sem ga sam ustvaru. Pri predefineranmu poslušalcu dogotkov tega ne rabte.
  
      //observe je predefineran v js, pošljušalec dogotkov. Teh posljšalcev imate predefiniranih malo morje. Kot je click, ki posluša, če kdo klikne z miško na neki itd -> google.
      observer.observe(elTarget, objConfig);
          //spet ena varjabla, nič druzga k škatlica za informacijo
          let lastMove = 0; // to rabim za ustavit poslušalca, dostkrat pri umetni inteligenci
          
          //moja funkcija, nič druzga kt da rečem kaj se nej zgodi
          function txtHandler() {
              //ker dobim preveč dogotkov, moram poslušalec ustavt za 0.8 sekund(pogosto pri umetni inteligenci), da mi ne pobezla vse tko. Pri "click" tega ne rabite, 
              // ker je samo en event, pač samo uporabnik enkrat klikne na zadevo. Umetna inteligenca ti ponavad vrže 1000če dogotkov v sekundi. (je druga verzija rešitve sam pustmo), mi gledamo JavaScirpt
              if (Date.now() - lastMove > 800) {
                  //tuki napišem kaj se nej zgodi, k bo moj poslušalec dogotkov (event listener), poslal informacijo, če se bo kej zgodil
                  
                  //sprva tle definiram na krateko način velik varjabl/škatlic informacij -> $("socialL"); je iz MooToolsa predefinirana funkcija za 
                  //document.getElementById("Luka"); -> <div id="Luka">, <div>/element spletne strani k ima id Luka ---- sam krajš pišem če mam MooToolse 
                  //(kup stvari mi ni treba definirat, k so jih oni, in je skoz upToDate). -> https://mootools.net/core/docs/1.6.0 (vsi primeri predefiniranih funkcij, kako se velik krajš vse piše)
                  let e = $("gesture-text").outerText.toString()/*tle definiram informacijo k jo dobim iz elementa spletne strani <div>*/, t = $("socialD"), i = $("socialL");

                  //drugič tle povem kaj mi nej nardi u primeru če dobim informacijo k jo želim, se pravi na podlagi informacije sporži ali funcijo "socialD", ali funkcijo "socialL" 
                  // na dogodek/event klik miške. tega sem napiremer definiral v totalno drugem objektu, in odpru varjable celem programu -> global variabla -> googli
                  "right" === e /*e sem definiru vrstico višji, je moja varjabla*/ ? t.fireEvent("click", "socialD") : "left" === e && i.fireEvent("click", "socialL"), 
                

                //tle sem ustau moj stopper za preveč poslušanja  
                (lastMove = Date.now());
                //tle se zapre mojo funkcijo
              }
        }
    }; // tle zaprem moj objekt mojObjekt.

    //to je vse kar je treba vedt. To je JavaScript u bistvu, ki je prototajpni jezik.
    //se pravi kako zdej umetno inteligenco programirat. Ja nič druzga kot da grete na stran na primer: https://huggingface.github.io/transformers.js/ , tuki vam bom dau kasnej boljše primere APijov k so simpl.
    //pogledate kašne funkcije pa objekte majo že sprogramirane in jih uporabite(velik drugih je k majo tud vse u naprej sprogramiran, sam googlite). 
    //Se prav vse je že u naprej sprogramiran, vi sam kličete funkcije k jih rabte, rezultate spravljate v variable in nardite svoj objekt.
    //stvari mečete v objekt -> škatlico k jo delate. In dobili boste program. Defakto zadevo k bo neki delala.



    //tko startate program
    mojObjekt(); 


    }());// end_wrapper_"use strict" 