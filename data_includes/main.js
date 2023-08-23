PennController.ResetPrefix( null );
AddHost("https://amor.cms.hu-berlin.de/~idslfahm/ibex_bilder/PWI_BB/");
PennController.DebugOff()



PennController.Sequence("init", "intro", randomize("practice"), "main_start", shuffle(randomize("fillers"), randomize("items")) , "question", "other", "send", "end" )




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Introduction HTML


PennController("intro",

             newHtml("intro", "example_intro.html")
             .print()

             ,

             newCanvas("space1", 1, 125)
             .print()

             ,

             newButton("weiter", "weiter")
             .center()
             .print()
             .wait()


    )

    .setOption("hideProgressBar", "true")
    ;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Clickworker ID


PennController("PersonalData",



               newText("EnterData", "Zun&auml;chst ein paar Angaben zu deiner Person!")
               .settings.css("font-size", "large")
               .print()

               ,

               newCanvas("space1", 1, 10)
               .print()

               ,

               newText("EnterData2", "<b>Du musst erst alle Angaben machen, bevor du auf <i>weiter</i> klickst, da das Experiment sonst abgebrochen wird!</b>")
               .settings.css("font-size", "18px")
               .print()

               ,

               newCanvas("space2", 1, 10)
               .print()

               ,

               newDropDown("language", "")
               .settings.log("last")
               .add( "Deutsch" , "Deutsch und andere Sprache(n) vor dem 5.Lebensjahr" , "andere" )

               ,

               newText("languagetext", "Muttersprache:")
               .settings.css("font-size", "18px")

               ,


               newCanvas("languagecanvas", 600, 35)
               .add(0, 20, getText("languagetext"))
               .add(200, 23, getDropDown("language"))
               .print()

               ,

               newDropDown("gender", "")
               .settings.log("last")
               .add( "weiblich" , "m&auml;nnlich" , "divers" )

               ,

               newText("gendertext", "Geschlecht:")
               .settings.css("font-size", "18px")

               ,

               newCanvas("gendercanvas", 600, 35)
               .add(0, 20, getText("gendertext"))
               .add(200, 23, getDropDown("gender"))
               .print()

               ,


               newDropDown("age", "")
               .settings.log("last")
               .add( "17 oder j&uuml;nger" , "18" , "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33 oder &auml;lter" )

               ,

               newText("agetext", "Alter:")
               .settings.css("font-size", "18px")

               ,

               newCanvas("agecanvas", 600, 35)
               .add(0, 20, getText("agetext"))
               .add(200, 23, getDropDown("age"))
               .print()

               ,

               newDropDown("browser", "")
               .settings.log("last")
               .add( "Safari" , "Firefox" , "Chrome", "Internet Explorer", "Microsoft Edge", "anderer" )

               ,

               newText("browsertext", "Verwendeter Browser:")
               .settings.css("font-size", "18px")

               ,

               newCanvas("browsercanvas", 600, 35)
               .add(0, 20, getText("browsertext"))
               .add(200, 23, getDropDown("browser"))
               .print()

               ,

               newCanvas("space3", 1, 155)
               .print()

               ,

               newButton("weiter", "weiter")
               .settings.center()
               .print()
               .wait(getDropDown("age")
                     .test.selected("18")
                     .or( getDropDown("age")
                        .test.selected("19")
                        .or( getDropDown("age")
                           .test.selected("20")
                           .or( getDropDown("age")
                             .test.selected("21")
                             .or( getDropDown("age")
                               .test.selected("22")
                               .or( getDropDown("age")
                                 .test.selected("23")
                                 .or( getDropDown("age")
                                   .test.selected("24")
                                   .or( getDropDown("age")
                                     .test.selected("25")
                                     .or( getDropDown("age")
                                       .test.selected("26")
                                       .or( getDropDown("age")
                                         .test.selected("27")
                                         .or( getDropDown("age")
                                           .test.selected("28")
                                           .or( getDropDown("age")
                                            .test.selected("29")
                                            .or( getDropDown("age")
                                              .test.selected("30")
                                              .or( getDropDown("age")
                                                .test.selected("31")
                                                .or( getDropDown("age")
                                                  .test.selected("32")
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )// ende age scale


                     .and(getDropDown("language")
                       .test.selected("Deutsch")
                       .or(getDropDown("language")
                         .test.selected("Deutsch und andere Sprache(n) vor dem 5.Lebensjahr")

                          )
                          ) //ende language scale

                     .and(getDropDown("gender")
                       .test.selected("m&auml;nnlich")
                       .or(getDropDown("gender")
                         .test.selected("weiblich")
                         .or(getDropDown("gender")
                           .test.selected("divers")
                          )
                          )
                          ) //ende gender scale

                      .and(getDropDown("browser")
                        .test.selected("Safari")
                        .or(getDropDown("browser")
                          .test.selected("Firefox")
                          .or(getDropDown("browser")
                            .test.selected("Chrome")
                            .or(getDropDown("browser")
                              .test.selected("Internet Explorer")
                              .or(getDropDown("browser")
                                .test.selected("Microsoft Edge")
                                .or(getDropDown("browser")
                                  .test.selected("anderer")
                           )
                           )
                           )
                           )
                           )
                           ) //ende browser scale


                     .success()
                     .failure(

                         getButton("weiter")
                         .remove()
                         ,
                         newText("bye", "Du kannst leider nicht an dem Experiment teilnehmen, da deine Angaben nicht mit denen bei Clickworker &uuml;bereinstimmen oder du nicht alle Angaben eingegeben hast.")
                         .color("red")
                         .print()

                             ) //ende failure

                    ) // ende wait

               ,

               newVar("gender")
               .settings.global()
               .set( getDropDown("gender") )

               ,

               newVar("age")
               .settings.global()
               .set( getDropDown("age") )

               ,

               newVar("language")
               .settings.global()
               .set( getDropDown("language") )

               ,

               newVar("browser")
               .settings.global()
               .set( getDropDown("browser") )

     )

    .setOption("hideProgressBar", "true")
    .log( "gender" ,   getVar("gender"))
    .log( "age" ,      getVar("age"))
    .log( "language" , getVar("language"))
    .log( "browser" ,  getVar("browser"))


    ;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Hinweise HTML

PennController("hinweise",

             newHtml("Hinweise_html.html")
             .print()

             ,

             newCanvas("space1", 1, 160)
             .print()

             ,

             newButton("weiter", "weiter")
             .center()
             .print()
             .wait()


    )

    .setOption("hideProgressBar", "true")
    ;




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Start_Practice


PennController("practice_one_start",


              newHtml("practice_one_start", "practice_one_start.html")
              .print()
              ,

              newButton("weiter", "weiter")
              .settings.center()
              .print()
              .wait()


    )

    .setOption("hideProgressBar", "true")

    ;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  Practice


PennController.Template("uebung.csv", variable =>

    PennController("practice",


             newText("sa", variable.sa)
             .settings.css("font-size", "18px")

             ,

             newText("sb", variable.sb)
             .settings.css("font-size", "18px")

             ,

             newText("frage", "Welche Eigenschaften w&uuml;rdest du Person B zuschreiben?")
             //.settings.css("font-size", "18px")
             ,

             newCanvas("canvas", 1000, 200)
             .add(0, 20, getText("sa"))
             .add(0, 40, getText("sb"))
             .add(0, 160, getText("frage"))
             //.add(0, 200, getScale("hoeflich"))
             //.add(0, 240, getScale("freundlich"))
             //.add(0, 280, getScale("entspannt"))
             //.add(0, 320, getScale("arrogant"))
             //.add(0, 360, getScale("pedantisch"))
             //.add(0, 400, getScale("gebildet"))
             //.add(0, 440, getScale("wortgewandt"))
             //.add(0, 480, getScale("formell"))
             .print()

             ,

             newScale("hoeflich", 6)
             .button()
             .radio()
             .before(newText("hoeflichtext1", "&uuml;berhaupt nicht h&ouml;flich").cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("hoeflichtext1", "sehr h&ouml;flich").cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("first", "last")
             ,

             newCanvas("hoeflichCanvas", 1000, 40)
             .add(0,0, getScale("hoeflich"))
             .print()
             ,

             newScale("freundlich", 6)
             .button()
             .radio()
             .before(newText("freundlichtext1", "&uuml;berhaupt nicht freundlich").cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("freundlichtext1", "sehr freundlich").cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("first", "last")
             ,

             newCanvas("freundlichCanvas", 1000, 40)
             .add(0,0, getScale("freundlich"))
             .print()
             ,

             newScale("entspannt", 6)
             .button()
             .radio()
             .before(newText("entspannttext1", "&uuml;berhaupt nicht entspannt").cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("entspannttext1", "sehr entspannt").cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("first", "last")
             ,

             newCanvas("entspanntCanvas", 1000, 40)
             .add(0,0, getScale("entspannt"))
             .print()
             ,

             newScale("arrogant", 6)
             .button()
             .radio()
             .before(newText("arroganttext1", "&uuml;berhaupt nicht arrogant").cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("arroganttext1", "sehr arrogant").cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("first", "last")
             ,

             newCanvas("arrogantCanvas", 1000, 40)
             .add(0,0, getScale("arrogant"))
             .print()
             ,

             newScale("pedantisch", 6)
             .button()
             .radio()
             .before(newText("pedantischtext1", "&uuml;berhaupt nicht pedantisch").cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("pedantischtext1", "sehr pedantisch").cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("first", "last")
             ,

             newCanvas("pedantischCanvas", 1000, 40)
             .add(0,0, getScale("pedantisch"))
             .print()
             ,

             newScale("gebildet", 6)
             .button()
             .radio()
             .before(newText("gebildettext1", "&uuml;berhaupt nicht gebildet").cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("gebildettext1", "sehr gebildet").cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("first", "last")
             ,

             newCanvas("gebildetCanvas", 1000, 40)
             .add(0,0, getScale("gebildet"))
             .print()
             ,

             newScale("wortgewandt", 6)
             .button()
             .radio()
             .before(newText("wortgewandttext1", "&uuml;berhaupt nicht wortgewandt").cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("wortgewandttext1", "sehr wortgewandt").cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("first", "last")
             ,

             newCanvas("wortgewandtCanvas", 1000, 40)
             .add(0,0, getScale("wortgewandt"))
             .print()
             ,

             newScale("formell", 6)
             .button()
             .radio()
             .before(newText("formelltext1", "&uuml;berhaupt nicht formell").cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("formelltext1", "sehr formell").cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("first", "last")
             ,

             newCanvas("formellCanvas", 1000, 40)
             .add(0,0, getScale("formell"))
             .print()
             ,

             newSelector("shuffle") // shuffle the positions of the scales
             .add(getCanvas("hoeflichCanvas"), getCanvas("freundlichCanvas"), getCanvas("entspanntCanvas"), getCanvas("arrogantCanvas"), getCanvas("pedantischCanvas"), getCanvas("gebildetCanvas"), getCanvas("wortgewandtCanvas"), getCanvas("formellCanvas"))
             .shuffle()
             .disableClicks()
             ,

             newCanvas("space", 1, 100)
             .print()

             ,

             newText("faster", "Bitte schneller bewerten!")
             ,

             newTimer("timeout", 20000) // a timeout so that when it runs out, the canvases are removed and the faster message appears
             .start()
             .log()
             .callback(getCanvas("canvas")
                      .remove()
                      ,
                      getCanvas("hoeflichCanvas")
                      .remove()
                      ,
                      getCanvas("freundlichCanvas")
                      .remove()
                      ,
                      getCanvas("entspanntCanvas")
                      .remove()
                      ,
                      getCanvas("arrogantCanvas")
                      .remove()
                      ,
                      getCanvas("pedantischCanvas")
                      .remove(),
                      getCanvas("gebildetCanvas")
                      .remove()
                      ,
                      getCanvas("wortgewandtCanvas")
                      .remove()
                      ,
                      getCanvas("formellCanvas")
                      .remove()
                      ,
                    )
             .callback(getText("faster").print())
             ,

             newButton("weiter", "weiter")
             .settings.center()
             .log()
             .print()
             .wait(getScale("hoeflich").test.selected()
                  .and(getScale("freundlich").test.selected()
                  .and(getScale("entspannt").test.selected()
                  .and(getScale("arrogant").test.selected()
                  .and(getScale("pedantisch").test.selected()
                  .and(getScale("gebildet").test.selected()
                  .and(getScale("wortgewandt").test.selected()
                  .and(getScale("formell").test.selected()
                  )
                  )
                  )
                  )
                  )
                  )
                  )
           )// cannot click weiter until all scales are selected
           .callback(getTimer("timeout").stop()) // if the weiter button is clicked before the timer runs out, stop the timer
           ,


    )

    .setOption("hideProgressBar", "true" )
    .log( "gender"               , getVar("gender")         )
    .log( "age"                  , getVar("age")            )
    .log( "language"             , getVar("language")       )
    .log( "browser"              , getVar("browser")        )
    .log("uebungnr"                , variable.uebung_nr       )
    .log( "condition"            , variable.cond       )
    .log( "control"            , variable.control       )
    )
    ;



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Start_Main

PennController("main_start",

              newHtml("main_start", "main_start.html")
              .print()

              ,
              newCanvas("space1", 1, 160)
              .print()

              ,
              newButton("weiter", "weiter")
              .settings.center()
              .print()
              .wait()


    )

    .setOption("hideProgressBar", "true")

    ;



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Main

PennController.Template("items.csv", variable =>

    PennController("items",


             newText("sa", variable.sa)
             .settings.css("font-size", "18px")

             ,

             newText("sb", variable.sb)
             .settings.css("font-size", "18px")

             ,

             newText("frage", "Welche Eigenschaften w&uuml;rdest du Person B zuschreiben?")
             //.settings.css("font-size", "18px")
             ,

             newCanvas("canvas", 1000, 200)
             .add(0, 20, getText("sa"))
             .add(0, 40, getText("sb"))
             .add(0, 160, getText("frage"))
             //.add(0, 200, getScale("hoeflich"))
             //.add(0, 240, getScale("freundlich"))
             //.add(0, 280, getScale("entspannt"))
             //.add(0, 320, getScale("arrogant"))
             //.add(0, 360, getScale("pedantisch"))
             //.add(0, 400, getScale("gebildet"))
             //.add(0, 440, getScale("wortgewandt"))
             //.add(0, 480, getScale("formell"))
             .print()

             ,

             newScale("hoeflich", 6)
             .button()
             .radio()
             .before(newText("hoeflichtext1", "&uuml;berhaupt nicht h&ouml;flich").cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("hoeflichtext1", "sehr h&ouml;flich").cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("first", "last")
             ,

             newCanvas("hoeflichCanvas", 1000, 40)
             .add(0,0, getScale("hoeflich"))
             .print()
             ,

             newScale("freundlich", 6)
             .button()
             .radio()
             .before(newText("freundlichtext1", "&uuml;berhaupt nicht freundlich").cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("freundlichtext1", "sehr freundlich").cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("first", "last")
             ,

             newCanvas("freundlichCanvas", 1000, 40)
             .add(0,0, getScale("freundlich"))
             .print()
             ,

             newScale("entspannt", 6)
             .button()
             .radio()
             .before(newText("entspannttext1", "&uuml;berhaupt nicht entspannt").cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("entspannttext1", "sehr entspannt").cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("first", "last")
             ,

             newCanvas("entspanntCanvas", 1000, 40)
             .add(0,0, getScale("entspannt"))
             .print()
             ,

             newScale("arrogant", 6)
             .button()
             .radio()
             .before(newText("arroganttext1", "&uuml;berhaupt nicht arrogant").cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("arroganttext1", "sehr arrogant").cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("first", "last")
             ,

             newCanvas("arrogantCanvas", 1000, 40)
             .add(0,0, getScale("arrogant"))
             .print()
             ,

             newScale("pedantisch", 6)
             .button()
             .radio()
             .before(newText("pedantischtext1", "&uuml;berhaupt nicht pedantisch").cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("pedantischtext1", "sehr pedantisch").cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("first", "last")
             ,

             newCanvas("pedantischCanvas", 1000, 40)
             .add(0,0, getScale("pedantisch"))
             .print()
             ,

             newScale("gebildet", 6)
             .button()
             .radio()
             .before(newText("gebildettext1", "&uuml;berhaupt nicht gebildet").cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("gebildettext1", "sehr gebildet").cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("first", "last")
             ,

             newCanvas("gebildetCanvas", 1000, 40)
             .add(0,0, getScale("gebildet"))
             .print()
             ,

             newScale("wortgewandt", 6)
             .button()
             .radio()
             .before(newText("wortgewandttext1", "&uuml;berhaupt nicht wortgewandt").cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("wortgewandttext1", "sehr wortgewandt").cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("first", "last")
             ,

             newCanvas("wortgewandtCanvas", 1000, 40)
             .add(0,0, getScale("wortgewandt"))
             .print()
             ,

             newScale("formell", 6)
             .button()
             .radio()
             .before(newText("formelltext1", "&uuml;berhaupt nicht formell").cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("formelltext1", "sehr formell").cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("first", "last")
             ,

             newCanvas("formellCanvas", 1000, 40)
             .add(0,0, getScale("formell"))
             .print()
             ,

             newSelector("shuffle") // shuffle the positions of the scales
             .add(getCanvas("hoeflichCanvas"), getCanvas("freundlichCanvas"), getCanvas("entspanntCanvas"), getCanvas("arrogantCanvas"), getCanvas("pedantischCanvas"), getCanvas("gebildetCanvas"), getCanvas("wortgewandtCanvas"), getCanvas("formellCanvas"))
             .shuffle()
             .disableClicks()
             ,

             newCanvas("space", 1, 100)
             .print()

             ,

             newText("faster", "Bitte schneller bewerten!")
             ,

             newTimer("timeout", 20000) // a timeout so that when it runs out, the canvases are removed and the faster message appears
             .start()
             .log()
             .callback(getCanvas("canvas")
                      .remove()
                      ,
                      getCanvas("hoeflichCanvas")
                      .remove()
                      ,
                      getCanvas("freundlichCanvas")
                      .remove()
                      ,
                      getCanvas("entspanntCanvas")
                      .remove()
                      ,
                      getCanvas("arrogantCanvas")
                      .remove()
                      ,
                      getCanvas("pedantischCanvas")
                      .remove(),
                      getCanvas("gebildetCanvas")
                      .remove()
                      ,
                      getCanvas("wortgewandtCanvas")
                      .remove()
                      ,
                      getCanvas("formellCanvas")
                      .remove()
                      ,
                    )
             .callback(getText("faster").print())
             ,

             newButton("weiter", "weiter")
             .settings.center()
             .log()
             .print()
             .wait(getScale("hoeflich").test.selected()
                  .and(getScale("freundlich").test.selected()
                  .and(getScale("entspannt").test.selected()
                  .and(getScale("arrogant").test.selected()
                  .and(getScale("pedantisch").test.selected()
                  .and(getScale("gebildet").test.selected()
                  .and(getScale("wortgewandt").test.selected()
                  .and(getScale("formell").test.selected()
                  )
                  )
                  )
                  )
                  )
                  )
                  )
           )// cannot click weiter until all scales are selected
           .callback(getTimer("timeout").stop()) // if the weiter button is clicked before the timer runs out, stop the timer
           ,


    )

    .setOption("hideProgressBar", "true" )
    .log( "gender"               , getVar("gender")         )
    .log( "age"                  , getVar("age")            )
    .log( "language"             , getVar("language")       )
    .log( "browser"              , getVar("browser")        )
    .log("itemnr"                , variable.item_nr       )
    .log( "condition"            , variable.cond       )
    .log( "conddrop"            , variable.cond_drop       )
    .log("condarg"              , variable.cond_arg    )
    .log("subj"                 , variable.subj )
    .log("subjgen"                 , variable.subj_gen )
    .log("objgen"                  , variable.obj_gen )
    .log("objnum"                 , variable.obj_num )
    .log("mod"                 , variable.mod )
    )
    ;

///////////////////////// Fillers

PennController.Template("fillers.csv", variable =>

    PennController("fillers",


             newText("sa", variable.sa)
             .settings.css("font-size", "18px")

             ,

             newText("sb", variable.sb)
             .settings.css("font-size", "18px")

             ,

             newText("frage", "Welche Eigenschaften w&uuml;rdest du Person B zuschreiben?")
             //.settings.css("font-size", "18px")
             ,

             newCanvas("canvas", 1000, 200)
             .add(0, 20, getText("sa"))
             .add(0, 40, getText("sb"))
             .add(0, 160, getText("frage"))
             //.add(0, 200, getScale("hoeflich"))
             //.add(0, 240, getScale("freundlich"))
             //.add(0, 280, getScale("entspannt"))
             //.add(0, 320, getScale("arrogant"))
             //.add(0, 360, getScale("pedantisch"))
             //.add(0, 400, getScale("gebildet"))
             //.add(0, 440, getScale("wortgewandt"))
             //.add(0, 480, getScale("formell"))
             .print()

             ,

             newScale("hoeflich", 6)
             .button()
             .radio()
             .before(newText("hoeflichtext1", "&uuml;berhaupt nicht h&ouml;flich").cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("hoeflichtext1", "sehr h&ouml;flich").cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("first", "last")
             ,

             newCanvas("hoeflichCanvas", 1000, 40)
             .add(0,0, getScale("hoeflich"))
             .print()
             ,

             newScale("freundlich", 6)
             .button()
             .radio()
             .before(newText("freundlichtext1", "&uuml;berhaupt nicht freundlich").cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("freundlichtext1", "sehr freundlich").cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("first", "last")
             ,

             newCanvas("freundlichCanvas", 1000, 40)
             .add(0,0, getScale("freundlich"))
             .print()
             ,

             newScale("entspannt", 6)
             .button()
             .radio()
             .before(newText("entspannttext1", "&uuml;berhaupt nicht entspannt").cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("entspannttext1", "sehr entspannt").cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("first", "last")
             ,

             newCanvas("entspanntCanvas", 1000, 40)
             .add(0,0, getScale("entspannt"))
             .print()
             ,

             newScale("arrogant", 6)
             .button()
             .radio()
             .before(newText("arroganttext1", "&uuml;berhaupt nicht arrogant").cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("arroganttext1", "sehr arrogant").cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("first", "last")
             ,

             newCanvas("arrogantCanvas", 1000, 40)
             .add(0,0, getScale("arrogant"))
             .print()
             ,

             newScale("pedantisch", 6)
             .button()
             .radio()
             .before(newText("pedantischtext1", "&uuml;berhaupt nicht pedantisch").cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("pedantischtext1", "sehr pedantisch").cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("first", "last")
             ,

             newCanvas("pedantischCanvas", 1000, 40)
             .add(0,0, getScale("pedantisch"))
             .print()
             ,

             newScale("gebildet", 6)
             .button()
             .radio()
             .before(newText("gebildettext1", "&uuml;berhaupt nicht gebildet").cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("gebildettext1", "sehr gebildet").cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("first", "last")
             ,

             newCanvas("gebildetCanvas", 1000, 40)
             .add(0,0, getScale("gebildet"))
             .print()
             ,

             newScale("wortgewandt", 6)
             .button()
             .radio()
             .before(newText("wortgewandttext1", "&uuml;berhaupt nicht wortgewandt").cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("wortgewandttext1", "sehr wortgewandt").cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("first", "last")
             ,

             newCanvas("wortgewandtCanvas", 1000, 40)
             .add(0,0, getScale("wortgewandt"))
             .print()
             ,

             newScale("formell", 6)
             .button()
             .radio()
             .before(newText("formelltext1", "&uuml;berhaupt nicht formell").cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("formelltext1", "sehr formell").cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("first", "last")
             ,

             newCanvas("formellCanvas", 1000, 40)
             .add(0,0, getScale("formell"))
             .print()
             ,

             newSelector("shuffle") // shuffle the positions of the scales
             .add(getCanvas("hoeflichCanvas"), getCanvas("freundlichCanvas"), getCanvas("entspanntCanvas"), getCanvas("arrogantCanvas"), getCanvas("pedantischCanvas"), getCanvas("gebildetCanvas"), getCanvas("wortgewandtCanvas"), getCanvas("formellCanvas"))
             .shuffle()
             .disableClicks()
             ,

             newCanvas("space", 1, 100)
             .print()

             ,

             newText("faster", "Bitte schneller bewerten!")
             ,

             newTimer("timeout", 20000) // a timeout so that when it runs out, the canvases are removed and the faster message appears
             .start()
             .log()
             .callback(getCanvas("canvas")
                      .remove()
                      ,
                      getCanvas("hoeflichCanvas")
                      .remove()
                      ,
                      getCanvas("freundlichCanvas")
                      .remove()
                      ,
                      getCanvas("entspanntCanvas")
                      .remove()
                      ,
                      getCanvas("arrogantCanvas")
                      .remove()
                      ,
                      getCanvas("pedantischCanvas")
                      .remove(),
                      getCanvas("gebildetCanvas")
                      .remove()
                      ,
                      getCanvas("wortgewandtCanvas")
                      .remove()
                      ,
                      getCanvas("formellCanvas")
                      .remove()
                      ,
                    )
             .callback(getText("faster").print())
             ,

             newButton("weiter", "weiter")
             .settings.center()
             .log()
             .print()
             .wait(getScale("hoeflich").test.selected()
                  .and(getScale("freundlich").test.selected()
                  .and(getScale("entspannt").test.selected()
                  .and(getScale("arrogant").test.selected()
                  .and(getScale("pedantisch").test.selected()
                  .and(getScale("gebildet").test.selected()
                  .and(getScale("wortgewandt").test.selected()
                  .and(getScale("formell").test.selected()
                  )
                  )
                  )
                  )
                  )
                  )
                  )
           )// cannot click weiter until all scales are selected
           .callback(getTimer("timeout").stop()) // if the weiter button is clicked before the timer runs out, stop the timer
           ,


    )

    .setOption("hideProgressBar", "true" )
    .log( "gender"               , getVar("gender")         )
    .log( "age"                  , getVar("age")            )
    .log( "language"             , getVar("language")       )
    .log( "browser"              , getVar("browser")        )
    .log("fillernr"                , variable.filler_nr       )
    .log( "condition"            , variable.cond       )
    .log( "control"            , variable.control       )
    )
    ;



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Questions

PennController("question",

              newText("bspa", "A: Hat Maria das Auto gestern verkauft?")
              .settings.css("font-size", "18px")
              ,

              newText("bspb", "B: Muss sie heute verkaufen.")
              .settings.css("font-size", "18px")
              ,

              newText("q", "Welche weitere Eigenschaften würdest du noch Person B zuschreiben?")
              .
              ,

              newCanvas("questioncanvas", 1000, 200)
              .add(0,20, getText("bspa"))
              .add(0,40, getText("bspb"))
              .add(0,160, getText("q"))
              .print()
              ,

              newTextInput("adj")
              .log()
              .lines(0)
              .size(600, 400)
              .print()
              ,

              newButton("weiter", "weiter")
              .print()
              .wait()



)
.setOption("hideProgressBar", "true")
.log( "gender"               , getVar("gender")         )
.log( "age"                  , getVar("age")            )
.log( "language"             , getVar("language")       )
.log( "browser"              , getVar("browser")        )
;


PennController("other",

              newText("qf", "Hier kannst du Kommentare und Feedbacks f&uuml;r dieses Experiment eingeben:")
              .print()
              ,
              
              newTextInput("feedback")
              .log()
              .lines(0)
              .size(400, 200)
              .print()
              ,
              newButton("weiter", "weiter")
              .print()
              .wait()



)
.setOption("hideProgressBar", "true")
.log( "gender"               , getVar("gender")         )
.log( "age"                  , getVar("age")            )
.log( "language"             , getVar("language")       )
.log( "browser"              , getVar("browser")        )
;




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Break

PennController("break",


              newCanvas("breakcanvas", 800, 400)
              .add(250,50, newText("pleasewait1", "Eine kurze Pause zur Erholung!").settings.css("font-size", "large"))
              .add(250,100, newText("pleasewait2", "Sobald du fortfahren kannst, erscheint unten der <i>weiter</i>-Knopf.").settings.css("font-size", "18px"))
              .print()


              ,

              newTimer("break", 10000)
              .start()
              .wait()

              ,

              getCanvas("breakcanvas")
              .remove()

              ,

              newCanvas("breakendcanvas", 800, 400)
              .add(215, 50, newText("continue", "Du kannst das Experiment jetzt fortsetzen.") .settings.css("font-size", "18px"))
              .print()

              ,

              newButton("weiter", "weiter")
              .center()
              .print()
              .wait()

    )

   .setOption("hideProgressBar", "true")
;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// completion screen

PennController.SendResults("send");

PennController("end",

    newText("<p>Vielen Dank f&uuml;r deine Teilnahme!</p>")
    .settings.css("font-size", "large")
    .print()

     ,

    newCanvas("empty6", 1, 10)
    .print()

    ,

    newText("close",  "Jetzt kannst du das Fenster schlie&szlig;en.")
    .settings.css("font-size", "large")
    .print()

    ,


    newButton("void")
     .wait()

)

    .setOption("hideProgressBar", "true")
