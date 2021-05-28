PennController.ResetPrefix( null );
AddHost("https://amor.cms.hu-berlin.de/~idslfahm/ibex_bilder/PWI_BB/");
PennController.InitiateRecorder( "https://amor.cms.hu-berlin.de/~idslfahm/recordings/Recording.php").label( "init" );
PennController.DebugOff()


//order of main blocks can be changed here
PennController.Sequence("init", "intro", "PersonalData", "hinweise", "familiarization_start", "practice_one_start", "practice_two_start",  "send", "end")
//PennController.Sequence("init", "intro", "PersonalData", "hinweise", "familiarization_start", "familiarization", "test", "practice_start", "practice", "main_start",   sepWithN("break", "main", 4)   ,  "send", "end")
//PennController.Sequence("init", "intro", "PersonalData", "hinweise", "familiarization_start", "familiarization", "practice_one_start", randomize("practice_one"), "practice_two_start", randomize("practice_two"), "main_start",  "main_SOA100ms1", "question1", "question2", "break", "main_SOA100ms2", "question3", "question4", "break","main_SOA-100ms1", "question5","question6", "break","main_SOA-100ms2", "question7","question8", "break","main_SOA0ms1", "question9", "question10", "break","main_SOA0ms2",  "send", "end" ) //order of main blocks can be changed here
// PennController.Sequence("init", "intro", "PersonalData", "hinweise", "familiarization_start", "familiarization", "practice_one_start", randomize("practice_one"), "practice_two_start", randomize("practice_two"), "main_start",  "main_SOA-100ms1", "question5", "question6", "break", "main_SOA-100ms2", "question7", "question8", "break","main_SOA0ms1", "question9", "question10", "break","main_SOA0ms2", "question3","question4", "break","main_SOA100ms1", "question1", "question2", "break","main_SOA100ms2", "send", "end" )
// PennController.Sequence("init", "intro", "PersonalData", "hinweise", "familiarization_start", "familiarization", "practice_one_start", randomize("practice_one"), "practice_two_start", randomize("practice_two"), "main_start",  "main_SOA0ms1","question7", "question8" "break", "main_SOA0ms2", "question9","question10", "break","main_SOA100ms1", "question1", "question2", "break","main_SOA100ms2", "question3","question4", "break","main_SOA-100ms1", "question5","quesion6", "break","main_SOA-100ms2",  "send", "end" )




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

               newTextInput("ID", "")
               .settings.log()

               ,

               newText("IDtext", "Clickworker ID:")
               .settings.css("font-size", "18px")

               ,

               newCanvas("IDcanvas", 600, 45)
               .add(0, 20, getText("IDtext"))
               .add(200, 23, getTextInput("ID"))
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


                      .and(getTextInput("ID")
                        .test.text(/^\d+$/)
                           )



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

               newVar("ID")
               .settings.global()
               .set( getTextInput("ID") )

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
    .log( "ID" ,       getVar("ID"))
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



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Familiarization_Start


PennController("familiarization_start",

              newHtml("fam", "fam_start.html")
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


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Familiarization


PennController.Template("fam.csv", variable =>

              PennController("familiarization",

              newCanvas("Col", 800, 35)
              .add(390, 0, newText("Color", variable.Farbe).settings.css("font-size", "25px").settings.css("font-family", "Times New Roman").settings.css("font-weight", "bold"))
              .print()
              ,
              newCanvas("Row1", 800, 220)
              .add (175,   0, newImage( "Bild1", variable.Bild1).size(200,200))
              .add(230, 210, newText ( "Wort1", variable.Wort1).settings.css("font-size", "20px").settings.css("font-family", "Times New Roman") )
              //.add(325,   0, newImage( "Bild2", variable.Bild2).size(150,150))
              //.add(375, 155, newText ( "Wort2", variable.Wort2).settings.css("font-size", "20px").settings.css("font-family", "Times New Roman") )
              .add(450,   0, newImage( "Bild2", variable.Bild2).size(200,200))
              .add(500, 210, newText ( "Wort2", variable.Wort2).settings.css("font-size", "20px").settings.css("font-family", "Times New Roman") )
              .print()

              ,

              newCanvas("space1", 1, 25)
              .print()

              ,

              newCanvas("Row2", 800, 220)
              .add( 175,   0, newImage("Bild3", variable.Bild3).size(200,200))
              .add(230, 210, newText ("Wort3", variable.Wort3).settings.css("font-size", "20px").settings.css("font-family", "Times New Roman") )
              //.add(325,   0, newImage("Bild4", variable.Bild5).size(150,150))
              //.add(375, 155, newText ("Wort4", variable.Wort5).settings.css("font-size", "20px").settings.css("font-family", "Times New Roman") )
              .add(450,   0, newImage("Bild4", variable.Bild4).size(200,200))
              .add(500, 210, newText ("Wort4", variable.Wort4).settings.css("font-size", "20px").settings.css("font-family", "Times New Roman") )
              .print()

              ,

              newTimer("presentpic", 7000)
              .start()
              .wait()

              ,

              newCanvas("space2", 1, 25)
              .print()

              ,

              newButton("weiter", "weiter")
              .center()
              .print()
              .wait()


    )


    .setOption("hideProgressBar", "true")
    .log( "Bild1"       , variable.Bild1 )     //die logs braucht man eigentlich nur, wenn Reihenfolge bzw. Anordnung zwischen den Probanden variiert
    .log( "Wort1"       , variable.Wort1 )
    .log( "Bild2"       , variable.Bild2 )
    .log( "Wort2"       , variable.Wort2 )
    .log( "Bild3"       , variable.Bild3 )
    .log( "Wort3"       , variable.Wort3 )
    .log( "Bild4"       , variable.Bild4 )
    .log( "Wort4"       , variable.Wort4 )
    //.log( "Bild5"       , variable.Bild5 )
    //.log( "Wort5"       , variable.Wort5 )
    //.log( "Bild6"       , variable.Bild6 )
    //.log( "Wort6"       , variable.Wort6 )
    .log( "Farbe"       , variable.Farbe )
    .log( "ID"          , getVar("ID")      )
    .log( "gender"      , getVar("gender")  )
    .log( "age"         , getVar("age")     )
    .log( "language"    , getVar("language"))
    .log( "browser"     , getVar("browser") )

   )
   ;



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Test_familiarization

PennController("test",


              newText("Bitte w&auml;hle f&uuml;r alle Objekte aus, ob sie vorkamen (&quot;ja&quot;) oder nicht (&quot;nein&quot;)")
              .settings.css("font-size", "18px")
              .print()

              ,

              newCanvas("space1", 1, 10)
              .print()

              ,

              newText("<b>Du musst erst alle Angaben machen, bevor du auf <i>weiter</i> klickst, da das Experiment sonst abgebrochen wird!</b>")
              .settings.css("font-size", "18px")
              .print()

              ,

              newCanvas("space2", 1, 20)
              .print()

              ,

              newScale("Zunge","ja", "nein").labelsPosition("right")
              .settings.log("last")

              ,

              newCanvas("zungecanvas", 800, 40)
              .add(300, 10, newText("zungetext", "Zunge:").settings.css("font-size", "18px"))
              .add(420, 13, getScale("Zunge"))
              .print()

              ,

              newScale("Frosch","ja", "nein").labelsPosition("right")
              .settings.log("last")

              ,

              newCanvas("froschcanvas", 800, 40)
              .add(300, 10, newText("froschtext", "Frosch:").settings.css("font-size", "18px"))
              .add(420, 13, getScale("Frosch"))
              .print()

              ,

              newScale("Nest","ja", "nein").labelsPosition("right")
              .settings.log("last")

              ,

              newCanvas("nestcanvas", 800, 40)
              .add(300, 10, newText("nesttext", "Nest:").settings.css("font-size", "18px"))
              .add(420, 13, getScale("Nest"))
              .print()

              ,

              newScale("Reifen","ja", "nein").labelsPosition("right")
              .settings.log("last")

              ,

              newCanvas("reifencanvas", 800, 40)
              .add(300, 10, newText("reifentext", "Reifen:").settings.css("font-size", "18px"))
              .add(420, 13, getScale("Reifen"))
              .print()

              ,

              newScale("Kette", "ja", "nein").labelsPosition("right")
              .settings.log("last")

              ,

              newCanvas("kettecanvas", 800, 40)
              .add(300, 10, newText("kettetext", "Kette:").settings.css("font-size", "18px"))
              .add(420, 13, getScale("Kette"))
              .print()

              ,

              newScale("Gespenst", "ja", "nein").labelsPosition("right")
              .settings.log("last")

              ,

              newCanvas("gespenstcanvas", 800, 40)
              .add(300, 10, newText("gespensttext", "Gespenst:").settings.css("font-size", "18px"))
              .add(420, 13, getScale("Gespenst"))
              .print()

              ,

              newCanvas("space", 1, 90)
              .print()

              ,

              newButton("weiter", "weiter")
               .settings.center()
               .print()
               .wait( getScale("Zunge")
                      .test.selected("nein")
                        .or(getScale("Zunge")
                        .test.selected("ja")
                     )
                      .and( getScale("Frosch")
                            .test.selected("nein")
                              .or(getScale("Frosch")
                              .test.selected("ja")
                              ))
                      .and( getScale("Nest")
                            .test.selected("nein")
                              .or(getScale("Nest")
                              .test.selected("ja")
                              ))
                      .and( getScale("Reifen")
                            .test.selected("nein")
                              .or(getScale("Reifen")
                              .test.selected("ja")
                              ))
                      .and( getScale("Kette")
                            .test.selected("nein")
                              .or(getScale("Kette")
                              .test.selected("ja")
                              ))
                      .and( getScale("Gespenst")
                            .test.selected("nein")
                              .or(getScale("Gespenst")
                              .test.selected("ja")
                              ))


                     .success() //continue as normal
                     .failure(  // otherwise, remove all canvases and display the "bye" text
                         getButton("weiter")
                         .remove()
                         ,
                         newText("bye", "Da du nicht  f&uuml;r alle Objekte eine Angabe gemacht hast, kannst du leider nicht an der Studie teilnehmen.")
                         .color("red")
                         .print()

                              ) // ende failure

                    ) //ende wait

             ) // ende penncontroller

    .setOption("hideProgressBar", "true")
    .log( "ID"       , getVar("ID")      )
    .log( "gender"   , getVar("gender")  )
    .log( "age"      , getVar("age")     )
    .log( "language" , getVar("language"))
    .log( "browser"  , getVar("browser") )

    ;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Start_Practice1


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


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  Practice1


PennController.Template("uebung.csv", variable =>

    PennController("practice_one",


             newImage("SetupPic", variable.setup_pic)
             .size(300, 300)

             ,

             newImage("TargetPic", variable.target_pic)
             .size(300, 300)

             ,

             newCanvas("FixationCanvas", 300, 300)
             .add(150, 150, newText("fixation", "+").settings.bold().settings.css("font-size", "xx-large"))
             .print()

             ,

             newTimer("ShowFixation", 1000)
             .start()
             .wait()

             ,

             getText("fixation")
             .remove()

             ,

             newTimer("ShowBlank", 500)
             .start()
             .wait()

             ,

             getCanvas("FixationCanvas")
             .remove()

             ,

             newCanvas("SetupCanvas", 300, 300)
             .add(0, 0, getImage("SetupPic"))
             .print()

             ,

             newVoiceRecorder("SetupRecorder")
             .record()

             ,

             newTimer("ShowSetup", 1000) // Bild wird 1000 ms gezeigt
             .start()
             .wait()

             ,

             getCanvas("SetupCanvas")
             .remove()

             ,

             newTimer("RecordSetup", 1500) // Recording geht noch 1500 ms weiter -> insgesamt also 2500ms
             .start()
             .wait()

             ,

             getVoiceRecorder("SetupRecorder")
             .stop()

             ,

             newTimer("Intertrial", 750)
             .start()
             .wait()

             ,

             newCanvas("TargetCanvas", 300, 300)
             .add(0, 0, getImage("TargetPic"))
             //.add(110, 140, getText("Distractor").settings.css("font-size", "30px").settings.css("font-family", "Times New Roman")) // SOA = 0ms --> Uebung fuer jeweilige SOA anpassen?
             .print()


             ,

             newVoiceRecorder("TargetRecorder")
             .record()

             ,

             newTimer("ShowTarget", 1000) // Bild wird 1000 ms gezeigt
             .start()
             .wait()

             ,

             getCanvas("TargetCanvas")
             .hidden()

             ,

             newTimer("RecordTarget", 1500) // Recording geht noch 1500 ms weiter -> insgesamt also 2500ms
             .start()
             .wait()

             ,

             getVoiceRecorder("TargetRecorder")
             .stop()

             ,

             newCanvas("space1", 1, 100)
             .print()

             ,

             newButton("weiter", "weiter")

             ,

             newSelector("button")
             .add(getButton("weiter") )
             .settings.keys(     " "                   )
             .wait()

    )

    .setOption("hideProgressBar", "true" )
    .log( "ID"                   , getVar("ID")             )
    .log( "gender"               , getVar("gender")         )
    .log( "age"                  , getVar("age")            )
    .log( "language"             , getVar("language")       )
    .log( "browser"              , getVar("browser")        )
    .log( "SetupObject"          , getVar("setup_pic")      )
    .log( "TargetObject"         , getVar("target_pic")     )
    //.log( "Distractor"           , getVar("distractor")     )
    .log( "SetupColor"           , variable.setup_col       )
    .log( "TargetColor"          , variable.target_col      )
    //.log( "DistractorCondition"  , variable.distractor_cond )
    //.log( "FocusCondition"       , variable.focus_cond      )
    .log( "Condition"            , variable.condition       )
    //.log( "Itempaar"             , variable.itempaar        )
    )
    ;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Start_Practice2

PennController("practice_two_start",


                  newHtml("practice_two_start", "practice_two_start.html")
                  .print()
                  ,

                  newButton("weiter", "weiter")
                  .settings.center()
                  .print()
                  .wait()


        )

        .setOption("hideProgressBar", "true")

        ;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  Practice2


PennController.Template("uebung2.csv", variable =>

        PennController("practice_two",

                 newText("Distractor" , variable.distractor)
                 //.settings.bold()

                 ,

                 newImage("SetupPic", variable.setup_pic)
                 .size(300, 300)

                 ,

                 newImage("TargetPic", variable.target_pic)
                 .size(300, 300)

                 ,

                 newCanvas("FixationCanvas", 300, 300)
                 .add(150, 150, newText("fixation", "+").settings.bold().settings.css("font-size", "xx-large"))
                 .print()

                 ,

                 newTimer("ShowFixation", 1000)
                 .start()
                 .wait()

                 ,

                 getText("fixation")
                 .remove()

                 ,

                 newTimer("ShowBlank", 500)
                 .start()
                 .wait()

                 ,

                 getCanvas("FixationCanvas")
                 .remove()

                 ,

                 newCanvas("SetupCanvas", 300, 300)
                 .add(0, 0, getImage("SetupPic"))
                 .print()

                 ,

                 newVoiceRecorder("SetupRecorder")
                 .record()

                 ,

                 newTimer("ShowSetup", 1000) // Bild wird 1000 ms gezeigt
                 .start()
                 .wait()

                 ,

                 getCanvas("SetupCanvas")
                 .remove()

                 ,

                 newTimer("RecordSetup", 1500) // Recording geht noch 1500 ms weiter -> insgesamt also 2500ms
                 .start()
                 .wait()

                 ,

                 getVoiceRecorder("SetupRecorder")
                 .stop()

                 ,

                 newTimer("Intertrial", 750)
                 .start()
                 .wait()

                 ,

                 newCanvas("TargetCanvas", 300, 300)
                 .add(0, 0, getImage("TargetPic"))
                 .add(110, 120, getText("Distractor").settings.css("font-size", "30px").settings.css("font-family", "Times New Roman")) // SOA = 0ms --> Uebung fuer jeweilige SOA anpassen?
                 .print()


                 ,

                 newVoiceRecorder("TargetRecorder")
                 .record()

                 ,

                 newTimer("ShowTarget", 1000) // Bild wird 1000 ms gezeigt
                 .start()
                 .wait()

                 ,

                 getCanvas("TargetCanvas")
                 .hidden()

                 ,

                 newTimer("RecordTarget", 1500) // Recording geht noch 1500 ms weiter -> insgesamt also 2500ms
                 .start()
                 .wait()

                 ,

                 getVoiceRecorder("TargetRecorder")
                 .stop()

                 ,

                 newCanvas("space1", 1, 100)
                 .print()

                 ,

                 newButton("weiter", "weiter")

                 ,

                 newSelector("button")
                 .add(getButton("weiter") )
                 .settings.keys(     " "                   )
                 .wait()

        )

        .setOption("hideProgressBar", "true" )
        .log( "ID"                   , getVar("ID")             )
        .log( "gender"               , getVar("gender")         )
        .log( "age"                  , getVar("age")            )
        .log( "language"             , getVar("language")       )
        .log( "browser"              , getVar("browser")        )
        .log( "SetupObject"          , getVar("setup_pic")      )
        .log( "TargetObject"         , getVar("target_pic")     )
        .log( "Distractor"           , getVar("distractor")     )
        .log( "SetupColor"           , variable.setup_col       )
        .log( "TargetColor"          , variable.target_col      )
        //.log( "DistractorCondition"  , variable.distractor_cond )
        //.log( "FocusCondition"       , variable.focus_cond      )
        .log( "Condition"            , variable.condition       )
        //.log( "Itempaar"             , variable.itempaar        )
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
///////SOA0
PennController.Template("uebung_v2.csv", variable =>

    PennController("main_SOA0ms1",

             newText("Distractor" , variable.distractor)
             //.settings.bold()

             ,

             newImage("SetupPic", variable.setup_pic)
             .size(300, 300)

             ,

             newImage("TargetPic", variable.target_pic)
             .size(300, 300)

             ,

             newCanvas("FixationCanvas", 300, 300)
             .add(150, 150, newText("fixation", "+").settings.bold().settings.css("font-size", "xx-large"))
             .print()

             ,

             newTimer("ShowFixation", 1000)
             .start()
             .wait()

             ,

             getText("fixation")
             .remove()

             ,

             newTimer("ShowBlank", 500)
             .start()
             .wait()

             ,

             getCanvas("FixationCanvas")
             .remove()

             ,

             newCanvas("SetupCanvas", 300, 300)
             .add(0, 0, getImage("SetupPic"))
             .print()

             ,

             newVoiceRecorder("SetupRecorder")
             .record()

             ,

             newTimer("ShowSetup", 1000) // Bild wird 1000 ms gezeigt
             .start()
             .wait()

             ,

             getCanvas("SetupCanvas")
             .remove()

             ,

             newTimer("RecordSetup", 1000) // Recording geht noch 1000 ms weiter -> insgesamt also 2000ms
             .start()
             .wait()

             ,

             getVoiceRecorder("SetupRecorder")
             .stop()

             ,

             newTimer("Intertrial", 750)
             .start()
             .wait()

             ,

             newCanvas("TargetCanvas", 300, 300)
             .add(0, 0, getImage("TargetPic"))
             .add(110, 140, getText("Distractor").settings.css("font-size", "30px").settings.css("font-family", "Times New Roman")) // SOA = 0ms --> Uebung fuer jeweilige SOA anpassen?
             .print()


             ,

             newVoiceRecorder("TargetRecorder")
             .record()

             ,

             newTimer("ShowTarget", 1000) // Bild wird 1000 ms gezeigt
             .start()
             .wait()

             ,

             getCanvas("TargetCanvas")
             .hidden()

             ,

             newTimer("RecordTarget", 1000) // Recording geht noch 1000 ms weiter -> insgesamt also 2000ms
             .start()
             .wait()

             ,

             getVoiceRecorder("TargetRecorder")
             .stop()

             ,

             newCanvas("space1", 1, 100)
             .print()

             ,

             newButton("weiter", "weiter")

             ,

             newSelector("button")
             .add(getButton("weiter") )
             .settings.keys(     " "                   )
             .wait()

    )

    .setOption("hideProgressBar", "true" )
    .log( "ID"                   , getVar("ID")             )
    .log( "gender"               , getVar("gender")         )
    .log( "age"                  , getVar("age")            )
    .log( "language"             , getVar("language")       )
    .log( "browser"              , getVar("browser")        )
    .log( "SetupObject"          , getVar("setup_pic")      )
    .log( "TargetObject"         , getVar("target_pic")     )
    .log( "Distractor"           , getVar("distractor")     )
    .log( "SetupColor"           , variable.setup_col       )
    .log( "TargetColor"          , variable.target_col      )
    .log( "DistractorCondition"  , variable.distractor_cond )
    .log( "FocusCondition"       , variable.focus_cond      )
    .log( "Condition"            , variable.condition       )
    .log( "Itempaar"             , variable.itempaar        )
    )
    ;




///////SOA0
PennController.Template("uebung_v2.csv", variable =>

        PennController("main_SOA0ms2",

                 newText("Distractor" , variable.distractor)
                 //.settings.bold()

                 ,

                 newImage("SetupPic", variable.setup_pic)
                 .size(300, 300)

                 ,

                 newImage("TargetPic", variable.target_pic)
                 .size(300, 300)

                 ,

                 newCanvas("FixationCanvas", 300, 300)
                 .add(150, 150, newText("fixation", "+").settings.bold().settings.css("font-size", "xx-large"))
                 .print()

                 ,

                 newTimer("ShowFixation", 1000)
                 .start()
                 .wait()

                 ,

                 getText("fixation")
                 .remove()

                 ,

                 newTimer("ShowBlank", 500)
                 .start()
                 .wait()

                 ,

                 getCanvas("FixationCanvas")
                 .remove()

                 ,

                 newCanvas("SetupCanvas", 300, 300)
                 .add(0, 0, getImage("SetupPic"))
                 .print()

                 ,

                 newVoiceRecorder("SetupRecorder")
                 .record()

                 ,

                 newTimer("ShowSetup", 1000) // Bild wird 1000 ms gezeigt
                 .start()
                 .wait()

                 ,

                 getCanvas("SetupCanvas")
                 .remove()

                 ,

                 newTimer("RecordSetup", 1000) // Recording geht noch 1000 ms weiter -> insgesamt also 2000ms
                 .start()
                 .wait()

                 ,

                 getVoiceRecorder("SetupRecorder")
                 .stop()

                 ,

                 newTimer("Intertrial", 750)
                 .start()
                 .wait()

                 ,

                 newCanvas("TargetCanvas", 300, 300)
                 .add(0, 0, getImage("TargetPic"))
                 .add(110, 140, getText("Distractor").settings.css("font-size", "30px").settings.css("font-family", "Times New Roman")) // SOA = 0ms --> Uebung fuer jeweilige SOA anpassen?
                 .print()


                 ,

                 newVoiceRecorder("TargetRecorder")
                 .record()

                 ,

                 newTimer("ShowTarget", 1000) // Bild wird 1000 ms gezeigt
                 .start()
                 .wait()

                 ,

                 getCanvas("TargetCanvas")
                 .hidden()

                 ,

                 newTimer("RecordTarget", 1000) // Recording geht noch 1000 ms weiter -> insgesamt also 2000ms
                 .start()
                 .wait()

                 ,

                 getVoiceRecorder("TargetRecorder")
                 .stop()

                 ,

                 newCanvas("space1", 1, 100)
                 .print()

                 ,

                 newButton("weiter", "weiter")

                 ,

                 newSelector("button")
                 .add(getButton("weiter") )
                 .settings.keys(     " "                   )
                 .wait()

        )

        .setOption("hideProgressBar", "true" )
        .log( "ID"                   , getVar("ID")             )
        .log( "gender"               , getVar("gender")         )
        .log( "age"                  , getVar("age")            )
        .log( "language"             , getVar("language")       )
        .log( "browser"              , getVar("browser")        )
        .log( "SetupObject"          , getVar("setup_pic")      )
        .log( "TargetObject"         , getVar("target_pic")     )
        .log( "Distractor"           , getVar("distractor")     )
        .log( "SetupColor"           , variable.setup_col       )
        .log( "TargetColor"          , variable.target_col      )
        .log( "DistractorCondition"  , variable.distractor_cond )
        .log( "FocusCondition"       , variable.focus_cond      )
        .log( "Condition"            , variable.condition       )
        .log( "Itempaar"             , variable.itempaar        )
        )
        ;




///////SOA100
PennController.Template("uebung_v2.csv", variable =>

            PennController("main_SOA100ms1",

                     newText("Distractor" , variable.distractor)
                     //.settings.bold()

                     ,

                     newImage("SetupPic", variable.setup_pic)
                     .size(300, 300)

                     ,

                     newImage("TargetPic", variable.target_pic)
                     .size(300, 300)

                     ,

                     newCanvas("FixationCanvas", 300, 300)
                     .add(150, 150, newText("fixation", "+").settings.bold().settings.css("font-size", "xx-large"))
                     .print()

                     ,

                     newTimer("ShowFixation", 1000)
                     .start()
                     .wait()

                     ,

                     getText("fixation")
                     .remove()

                     ,

                     newTimer("ShowBlank", 500)
                     .start()
                     .wait()

                     ,

                     getCanvas("FixationCanvas")
                     .remove()

                     ,

                     newCanvas("SetupCanvas", 300, 300)
                     .add(0, 0, getImage("SetupPic"))
                     .print()

                     ,

                     newVoiceRecorder("SetupRecorder")
                     .record()

                     ,

                     newTimer("ShowSetup", 1000) // Bild wird 1000 ms gezeigt
                     .start()
                     .wait()

                     ,

                     getCanvas("SetupCanvas")
                     .remove()

                     ,

                     newTimer("RecordSetup", 1000) // Recording geht noch 1000 ms weiter -> insgesamt also 2000ms
                     .start()
                     .wait()

                     ,

                     getVoiceRecorder("SetupRecorder")
                     .stop()

                     ,

                     newTimer("Intertrial", 750)
                     .start()
                     .wait()

                     ,

                     newCanvas("TargetCanvas", 300, 300)
                     .add(0, 0, getImage("TargetPic"))
                     .print()


                     ,

                     newVoiceRecorder("TargetRecorder")
                     .record()

                     ,

                     newTimer("ShowWord", 100) // Nach 100ms Distraktor zeigen
                     .start()
                     .wait()
                     ,
                     getCanvas("TargetCanvas")
                     .add(110, 120, getText("Distractor").settings.css("font-size", "30px").settings.css("font-family", "Times New Roman"))
                     .print()
                     ,

                     newTimer("ShowTarget", 900) // Bild wird 900 ms weiter gezeigt (1000ms insgesamt)
                     .start()
                     .wait()

                     ,

                     getCanvas("TargetCanvas")
                     .hidden()

                     ,

                     newTimer("RecordTarget", 1000) // Recording geht noch 1000 ms weiter -> insgesamt also 2000ms
                     .start()
                     .wait()

                     ,

                     getVoiceRecorder("TargetRecorder")
                     .stop()

                     ,

                     newCanvas("space1", 1, 100)
                     .print()

                     ,

                     newButton("weiter", "weiter")

                     ,

                     newSelector("button")
                     .add(getButton("weiter") )
                     .settings.keys(     " "                   )
                     .wait()

            )

            .setOption("hideProgressBar", "true" )
            .log( "ID"                   , getVar("ID")             )
            .log( "gender"               , getVar("gender")         )
            .log( "age"                  , getVar("age")            )
            .log( "language"             , getVar("language")       )
            .log( "browser"              , getVar("browser")        )
            .log( "SetupObject"          , getVar("setup_pic")      )
            .log( "TargetObject"         , getVar("target_pic")     )
            .log( "Distractor"           , getVar("distractor")     )
            .log( "SetupColor"           , variable.setup_col       )
            .log( "TargetColor"          , variable.target_col      )
            .log( "DistractorCondition"  , variable.distractor_cond )
            .log( "FocusCondition"       , variable.focus_cond      )
            .log( "Condition"            , variable.condition       )
            .log( "Itempaar"             , variable.itempaar        )
            )
            ;




///////SOA100
PennController.Template("uebung_v2.csv", variable =>

                        PennController("main_SOA100ms2",

                                 newText("Distractor" , variable.distractor)
                                 //.settings.bold()

                                 ,

                                 newImage("SetupPic", variable.setup_pic)
                                 .size(300, 300)

                                 ,

                                 newImage("TargetPic", variable.target_pic)
                                 .size(300, 300)

                                 ,

                                 newCanvas("FixationCanvas", 300, 300)
                                 .add(150, 150, newText("fixation", "+").settings.bold().settings.css("font-size", "xx-large"))
                                 .print()

                                 ,

                                 newTimer("ShowFixation", 1000)
                                 .start()
                                 .wait()

                                 ,

                                 getText("fixation")
                                 .remove()

                                 ,

                                 newTimer("ShowBlank", 500)
                                 .start()
                                 .wait()

                                 ,

                                 getCanvas("FixationCanvas")
                                 .remove()

                                 ,

                                 newCanvas("SetupCanvas", 300, 300)
                                 .add(0, 0, getImage("SetupPic"))
                                 .print()

                                 ,

                                 newVoiceRecorder("SetupRecorder")
                                 .record()

                                 ,

                                 newTimer("ShowSetup", 1000) // Bild wird 1000 ms gezeigt
                                 .start()
                                 .wait()

                                 ,

                                 getCanvas("SetupCanvas")
                                 .remove()

                                 ,

                                 newTimer("RecordSetup", 1000) // Recording geht noch 1000 ms weiter -> insgesamt also 2000ms
                                 .start()
                                 .wait()

                                 ,

                                 getVoiceRecorder("SetupRecorder")
                                 .stop()

                                 ,

                                 newTimer("Intertrial", 750)
                                 .start()
                                 .wait()

                                 ,

                                 newCanvas("TargetCanvas", 300, 300)
                                 .add(0, 0, getImage("TargetPic"))
                                 .print()


                                 ,

                                 newVoiceRecorder("TargetRecorder")
                                 .record()

                                 ,

                                 newTimer("ShowWord", 100) // Nach 100ms Distraktor zeigen
                                 .start()
                                 .wait()
                                 ,
                                 getCanvas("TargetCanvas")
                                 .add(110, 120, getText("Distractor").settings.css("font-size", "30px").settings.css("font-family", "Times New Roman"))
                                 .print()
                                 ,

                                 newTimer("ShowTarget", 900) // Bild wird 900 ms weiter gezeigt (1000ms insgesamt)
                                 .start()
                                 .wait()

                                 ,

                                 getCanvas("TargetCanvas")
                                 .hidden()

                                 ,

                                 newTimer("RecordTarget", 1000) // Recording geht noch 1000 ms weiter -> insgesamt also 2000ms
                                 .start()
                                 .wait()

                                 ,

                                 getVoiceRecorder("TargetRecorder")
                                 .stop()

                                 ,

                                 newCanvas("space1", 1, 100)
                                 .print()

                                 ,

                                 newButton("weiter", "weiter")

                                 ,

                                 newSelector("button")
                                 .add(getButton("weiter") )
                                 .settings.keys(     " "                   )
                                 .wait()

                        )

                        .setOption("hideProgressBar", "true" )
                        .log( "ID"                   , getVar("ID")             )
                        .log( "gender"               , getVar("gender")         )
                        .log( "age"                  , getVar("age")            )
                        .log( "language"             , getVar("language")       )
                        .log( "browser"              , getVar("browser")        )
                        .log( "SetupObject"          , getVar("setup_pic")      )
                        .log( "TargetObject"         , getVar("target_pic")     )
                        .log( "Distractor"           , getVar("distractor")     )
                        .log( "SetupColor"           , variable.setup_col       )
                        .log( "TargetColor"          , variable.target_col      )
                        .log( "DistractorCondition"  , variable.distractor_cond )
                        .log( "FocusCondition"       , variable.focus_cond      )
                        .log( "Condition"            , variable.condition       )
                        .log( "Itempaar"             , variable.itempaar        )
                        )
                        ;



///////SOA-100
PennController.Template("uebung_v2.csv", variable =>

                    PennController("main_SOA-100ms1",

                             newText("Distractor" , variable.distractor)
                             //.settings.bold()

                             ,

                             newImage("SetupPic", variable.setup_pic)
                             .size(300, 300)

                             ,

                             newImage("TargetPic", variable.target_pic)
                             .size(300, 300)

                             ,

                             newCanvas("FixationCanvas", 300, 300)
                             .add(150, 150, newText("fixation", "+").settings.bold().settings.css("font-size", "xx-large"))
                             .print()

                             ,

                             newTimer("ShowFixation", 1000)
                             .start()
                             .wait()

                             ,

                             getText("fixation")
                             .remove()

                             ,

                             newTimer("ShowBlank", 500)
                             .start()
                             .wait()

                             ,

                             getCanvas("FixationCanvas")
                             .remove()

                             ,

                             newCanvas("SetupCanvas", 300, 300)
                             .add(0, 0, getImage("SetupPic"))
                             .print()

                             ,

                             newVoiceRecorder("SetupRecorder")
                             .record()

                             ,

                             newTimer("ShowSetup", 1000) // Bild wird 1000 ms gezeigt
                             .start()
                             .wait()

                             ,

                             getCanvas("SetupCanvas")
                             .remove()

                             ,

                             newTimer("RecordSetup", 1000) // Recording geht noch 1000 ms weiter -> insgesamt also 2000ms
                             .start()
                             .wait()

                             ,

                             getVoiceRecorder("SetupRecorder")
                             .stop()

                             ,

                             newTimer("Intertrial", 750)
                             .start()
                             .wait()

                             ,

                             newCanvas("TargetCanvas", 300, 300)
                             .add(110, 120, getText("Distractor").settings.css("font-size", "30px").settings.css("font-family", "Times New Roman"))
                             .print()

                             ,
                             newTimer("ShowWord", 100) //Distraktor wird 100ms davor gezeigt
                             .start()
                             .wait()
                             ,

                             newVoiceRecorder("TargetRecorder")
                             .record()

                             ,
                             getCanvas("TargetCanvas")
                             .add(0, 0, getImage("TargetPic"))
                             .add(110, 120, getText("Distractor").settings.css("font-size", "30px").settings.css("font-family", "Times New Roman"))
                             .print()
                             ,

                             newTimer("ShowTarget", 1000) // Bild wird 1000 ms gezeigt
                             .start()
                             .wait()

                             ,

                             getCanvas("TargetCanvas")
                             .hidden()

                             ,

                             newTimer("RecordTarget", 1000) // Recording geht noch 1000 ms weiter -> insgesamt also 2000ms
                             .start()
                             .wait()

                             ,

                             getVoiceRecorder("TargetRecorder")
                             .stop()

                             ,

                             newCanvas("space1", 1, 100)
                             .print()

                             ,

                             newButton("weiter", "weiter")

                             ,

                             newSelector("button")
                             .add(getButton("weiter") )
                             .settings.keys(     " "                   )
                             .wait()

                    )

                    .setOption("hideProgressBar", "true" )
                    .log( "ID"                   , getVar("ID")             )
                    .log( "gender"               , getVar("gender")         )
                    .log( "age"                  , getVar("age")            )
                    .log( "language"             , getVar("language")       )
                    .log( "browser"              , getVar("browser")        )
                    .log( "SetupObject"          , getVar("setup_pic")      )
                    .log( "TargetObject"         , getVar("target_pic")     )
                    .log( "Distractor"           , getVar("distractor")     )
                    .log( "SetupColor"           , variable.setup_col       )
                    .log( "TargetColor"          , variable.target_col      )
                    .log( "DistractorCondition"  , variable.distractor_cond )
                    .log( "FocusCondition"       , variable.focus_cond      )
                    .log( "Condition"            , variable.condition       )
                    .log( "Itempaar"             , variable.itempaar        )
                    )
                    ;



///////SOA-100
PennController.Template("uebung_v2.csv", variable =>

                        PennController("main_SOA-100ms2",

                                                 newText("Distractor" , variable.distractor)
                                                 //.settings.bold()

                                                 ,

                                                 newImage("SetupPic", variable.setup_pic)
                                                 .size(300, 300)

                                                 ,

                                                 newImage("TargetPic", variable.target_pic)
                                                 .size(300, 300)

                                                 ,

                                                 newCanvas("FixationCanvas", 300, 300)
                                                 .add(150, 150, newText("fixation", "+").settings.bold().settings.css("font-size", "xx-large"))
                                                 .print()

                                                 ,

                                                 newTimer("ShowFixation", 1000)
                                                 .start()
                                                 .wait()

                                                 ,

                                                 getText("fixation")
                                                 .remove()

                                                 ,

                                                 newTimer("ShowBlank", 500)
                                                 .start()
                                                 .wait()

                                                 ,

                                                 getCanvas("FixationCanvas")
                                                 .remove()

                                                 ,

                                                 newCanvas("SetupCanvas", 300, 300)
                                                 .add(0, 0, getImage("SetupPic"))
                                                 .print()

                                                 ,

                                                 newVoiceRecorder("SetupRecorder")
                                                 .record()

                                                 ,

                                                 newTimer("ShowSetup", 1000) // Bild wird 1000 ms gezeigt
                                                 .start()
                                                 .wait()

                                                 ,

                                                 getCanvas("SetupCanvas")
                                                 .remove()

                                                 ,

                                                 newTimer("RecordSetup", 1000) // Recording geht noch 1000 ms weiter -> insgesamt also 2000ms
                                                 .start()
                                                 .wait()

                                                 ,

                                                 getVoiceRecorder("SetupRecorder")
                                                 .stop()

                                                 ,

                                                 newTimer("Intertrial", 750)
                                                 .start()
                                                 .wait()

                                                 ,

                                                 newCanvas("TargetCanvas", 300, 300)
                                                 .add(110, 120, getText("Distractor").settings.css("font-size", "30px").settings.css("font-family", "Times New Roman"))
                                                 .print()

                                                 ,
                                                 newTimer("ShowWord", 100) //Distraktor wird 100ms davor gezeigt
                                                 .start()
                                                 .wait()
                                                 ,

                                                 newVoiceRecorder("TargetRecorder")
                                                 .record()

                                                 ,
                                                 getCanvas("TargetCanvas")
                                                 .add(0, 0, getImage("TargetPic"))
                                                 .add(110, 120, getText("Distractor").settings.css("font-size", "30px").settings.css("font-family", "Times New Roman"))
                                                 .print()
                                                 ,

                                                 newTimer("ShowTarget", 1000) // Bild wird 1000 ms gezeigt
                                                 .start()
                                                 .wait()

                                                 ,

                                                 getCanvas("TargetCanvas")
                                                 .hidden()

                                                 ,

                                                 newTimer("RecordTarget", 1000) // Recording geht noch 1000 ms weiter -> insgesamt also 2000ms
                                                 .start()
                                                 .wait()

                                                 ,

                                                 getVoiceRecorder("TargetRecorder")
                                                 .stop()

                                                 ,

                                                 newCanvas("space1", 1, 100)
                                                 .print()

                                                 ,

                                                 newButton("weiter", "weiter")

                                                 ,

                                                 newSelector("button")
                                                 .add(getButton("weiter") )
                                                 .settings.keys(     " "                   )
                                                 .wait()

                                        )

                        .setOption("hideProgressBar", "true" )
                        .log( "ID"                   , getVar("ID")             )
                        .log( "gender"               , getVar("gender")         )
                        .log( "age"                  , getVar("age")            )
                        .log( "language"             , getVar("language")       )
                        .log( "browser"              , getVar("browser")        )
                        .log( "SetupObject"          , getVar("setup_pic")      )
                        .log( "TargetObject"         , getVar("target_pic")     )
                        .log( "Distractor"           , getVar("distractor")     )
                        .log( "SetupColor"           , variable.setup_col       )
                        .log( "TargetColor"          , variable.target_col      )
                        .log( "DistractorCondition"  , variable.distractor_cond )
                        .log( "FocusCondition"       , variable.focus_cond      )
                        .log( "Condition"            , variable.condition       )
                        .log( "Itempaar"             , variable.itempaar        )
                        )
                        ;




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Questions

PennController("question1",

              newText("Nein", "<small>Nein [F]</small>")
              .settings.center()
              .settings.after(newText("Ja", "<small>Ja [J]</small>").settings.css("padding-left", "100pt").settings.css("font-size", "18px"))
              .settings.css("font-size", "medium")
              ,
              newCanvas("questioncanvas", 800, 400)
              .add(250,50, newText("question", "Wurde ein schwarzer Tisch gezeigt?").settings.css("font-size", "large"))
              .add(270,150, getText("Nein").settings.css("font-size", "18px"))
              .print()
              ,

              newSelector("select")
                .settings.add(getText("Nein"), getText("Ja"))
                .settings.keys("F", "J")
                .settings.log()
                .wait()
              ,



)
.setOption("hideProgressBar", "true")
;


PennController("question2",

              newText("Nein", "<small>Nein [F]</small>")
              .settings.center()
              .settings.after(newText("Ja", "<small>Ja [J]</small>").settings.css("padding-left", "100pt").settings.css("font-size", "18px"))
              .settings.css("font-size", "medium")
              ,
              newCanvas("questioncanvas", 800, 400)
              .add(250,50, newText("question", "Wurde eine braune Nuss gezeigt?").settings.css("font-size", "large"))
              .add(270,150, getText("Nein").settings.css("font-size", "18px"))
              .print()
              ,

              newSelector("select")
                .settings.add(getText("Nein"), getText("Ja"))
                .settings.keys("F", "J")
                .settings.log()
                .wait()
              ,



)
.setOption("hideProgressBar", "true")
;

PennController("question3",

              newText("Nein", "<small>Nein [F]</small>")
              .settings.center()
              .settings.after(newText("Ja", "<small>Ja [J]</small>").settings.css("padding-left", "100pt").settings.css("font-size", "18px"))
              .settings.css("font-size", "medium")
              ,
              newCanvas("questioncanvas", 800, 400)
              .add(250,50, newText("question", "Wurde ein wei&szlig;er Brief gezeigt?").settings.css("font-size", "large"))
              .add(270,150, getText("Nein").settings.css("font-size", "18px"))
              .print()
              ,

              newSelector("select")
                .settings.add(getText("Nein"), getText("Ja"))
                .settings.keys("F", "J")
                .settings.log()
                .wait()
              ,



)
.setOption("hideProgressBar", "true")
;


PennController("question4",

              newText("Nein", "<small>Nein [F]</small>")
              .settings.center()
              .settings.after(newText("Ja", "<small>Ja [J]</small>").settings.css("padding-left", "100pt").settings.css("font-size", "18px"))
              .settings.css("font-size", "medium")
              ,
              newCanvas("questioncanvas", 800, 400)
              .add(250,50, newText("question", "Wurde ein brauner Anzug gezeigt?").settings.css("font-size", "large"))
              .add(270,150, getText("Nein").settings.css("font-size", "18px"))
              .print()
              ,

              newSelector("select")
                .settings.add(getText("Nein"), getText("Ja"))
                .settings.keys("F", "J")
                .settings.log()
                .wait()
              ,



)
.setOption("hideProgressBar", "true")
;

PennController("question5",

              newText("Nein", "<small>Nein [F]</small>")
              .settings.center()
              .settings.after(newText("Ja", "<small>Ja [J]</small>").settings.css("padding-left", "100pt").settings.css("font-size", "18px"))
              .settings.css("font-size", "medium")
              ,
              newCanvas("questioncanvas", 800, 400)
              .add(250,50, newText("question", "Wurde eine wei&szlig;e Raupe gezeigt?").settings.css("font-size", "large"))
              .add(270,150, getText("Nein").settings.css("font-size", "18px"))
              .print()
              ,

              newSelector("select")
                .settings.add(getText("Nein"), getText("Ja"))
                .settings.keys("F", "J")
                .settings.log()
                .wait()
              ,



)
.setOption("hideProgressBar", "true")
;

PennController("question6",

              newText("Nein", "<small>Nein [F]</small>")
              .settings.center()
              .settings.after(newText("Ja", "<small>Ja [J]</small>").settings.css("padding-left", "100pt").settings.css("font-size", "18px"))
              .settings.css("font-size", "medium")
              ,
              newCanvas("questioncanvas", 800, 400)
              .add(250,50, newText("question", "Wurde eine braune Geige gezeigt?").settings.css("font-size", "large"))
              .add(270,150, getText("Nein").settings.css("font-size", "18px"))
              .print()
              ,

              newSelector("select")
                .settings.add(getText("Nein"), getText("Ja"))
                .settings.keys("F", "J")
                .settings.log()
                .wait()
              ,



)
.setOption("hideProgressBar", "true")
;

PennController("question7",

              newText("Nein", "<small>Nein [F]</small>")
              .settings.center()
              .settings.after(newText("Ja", "<small>Ja [J]</small>").settings.css("padding-left", "100pt").settings.css("font-size", "18px"))
              .settings.css("font-size", "medium")
              ,
              newCanvas("questioncanvas", 800, 400)
              .add(250,50, newText("question", "Wurde ein schwarzer Ring gezeigt?").settings.css("font-size", "large"))
              .add(270,150, getText("Nein").settings.css("font-size", "18px"))
              .print()
              ,

              newSelector("select")
                .settings.add(getText("Nein"), getText("Ja"))
                .settings.keys("F", "J")
                .settings.log()
                .wait()
              ,



)
.setOption("hideProgressBar", "true")
;

PennController("question8",

              newText("Nein", "<small>Nein [F]</small>")
              .settings.center()
              .settings.after(newText("Ja", "<small>Ja [J]</small>").settings.css("padding-left", "100pt").settings.css("font-size", "18px"))
              .settings.css("font-size", "medium")
              ,
              newCanvas("questioncanvas", 800, 400)
              .add(250,50, newText("question", "Wurde eine rote Krone gezeigt?").settings.css("font-size", "large"))
              .add(270,150, getText("Nein").settings.css("font-size", "18px"))
              .print()
              ,

              newSelector("select")
                .settings.add(getText("Nein"), getText("Ja"))
                .settings.keys("F", "J")
                .settings.log()
                .wait()
              ,



)
.setOption("hideProgressBar", "true")
;

PennController("question9",

              newText("Nein", "<small>Nein [F]</small>")
              .settings.center()
              .settings.after(newText("Ja", "<small>Ja [J]</small>").settings.css("padding-left", "100pt").settings.css("font-size", "18px"))
              .settings.css("font-size", "medium")
              ,
              newCanvas("questioncanvas", 800, 400)
              .add(250,50, newText("question", "Wurde ein schwarzes Klavier gezeigt?").settings.css("font-size", "large"))
              .add(270,150, getText("Nein").settings.css("font-size", "18px"))
              .print()
              ,

              newSelector("select")
                .settings.add(getText("Nein"), getText("Ja"))
                .settings.keys("F", "J")
                .settings.log()
                .wait()
              ,



)
.setOption("hideProgressBar", "true")
;

PennController("question10",

              newText("Nein", "<small>Nein [F]</small>")
              .settings.center()
              .settings.after(newText("Ja", "<small>Ja [J]</small>").settings.css("padding-left", "100pt").settings.css("font-size", "18px"))
              .settings.css("font-size", "medium")
              ,
              newCanvas("questioncanvas", 800, 400)
              .add(250,50, newText("question", "Wurde ein roter Reifen gezeigt?").settings.css("font-size", "large"))
              .add(270,150, getText("Nein").settings.css("font-size", "18px"))
              .print()
              ,

              newSelector("select")
                .settings.add(getText("Nein"), getText("Ja"))
                .settings.keys("F", "J")
                .settings.log()
                .wait()
              ,



)
.setOption("hideProgressBar", "true")
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

    newText("Code",  "Wichtiger Hinweis:  <br /> Bitte kopiere den folgenden Code und f&uuml;ge ihn in das daf&uuml;r vorgesehene Feld innerhalb deines Clickworker-Aufgabenformulars ein. <br /> Ohne die Eingabe dieses Codes kann eine Gutschrift deines Honorars nicht erfolgen!")
    .settings.css("font-size", "large")
    .print()

    ,

     newCanvas("empty7", 1, 5)
    .print()

    ,

    newText("Code2", "<b> Code: PWIBB1 </b>")
    .settings.css("font-size", "large")
    .print()

    ,


    newButton("void")
     .wait()

)

    .setOption("hideProgressBar", "true")
