import $ from "jquery";
import { useEffect } from "react";

function JqueryTest(){

    function changes(){
        //   $("#box").text("hello clear").fadeOut(1000);
         $("#box").text("hello clear").fadeIn(1000);
    }

    useEffect(() => {
       

        $("#bttn").on("click", function(){
            $("#txt").hide();
        })
          $("#btn").on("click", function(){
        alert("Button cliced");
    });
    }, [])

    useEffect(() => {
        $("#fadeout").on("click", function (){
            $("#fadeoutExample").fadeOut(1000);
        })
    })

    useEffect(() => {
        $("#slideit").on("click", function(){
            $("#slideDownExample").slideDown(1000);
        });
    })

    useEffect(() => {
        $("#getApi").on("click", function(){
            $.get("https://jsonplaceholder.typicode.com/posts/1", function(data) {
                $("#result").html("<h3>" + data.title + "<h3/>")
            });
        });
    });
  
   

    return(
    <>
    <div id="box">Hello</div>
    <button onClick={changes}>changeIt</button>
    <button id="btn">changing</button>
    <h1 id="txt">The text content was showing</h1>
    <button id="bttn">hide</button>
    <h1 id="fadeoutExample">Fading Out</h1>
    <button id="fadeout">FadeOut</button>
    <h1 id="slideDownExample" style={{ display: "none" }}>Slide It down</h1>
    <button id="slideit">slide</button>
    <button id="getApi">Load Post</button>
    <div id="result"></div>
    </>
    );
}

export default JqueryTest;