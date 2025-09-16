import $ from 'jquery';
import { useEffect } from 'react';

function Jquery(){

    function changeJquery(){
    $("#sample").text("The text content got changed").fadeOut(1000);
    // $("#sample").text("The text content got changed").fadeIn(1000);
    }

    

    useEffect(() => {
         $("#buttonSample").on("click", function(){
        $("#onclick").text("Value changed");
    });

    $("#buttonhideout").on("click", function(){
        $("#hideout").text("changes").hide();
    })
    },[])


    useEffect(() => {
        $("#getfunction").on("click", function() {
            $.get("https://jsonplaceholder.typicode.com/posts/1", function(data){
                console.log(data);
                $("#sampleNew").html("<h1>"+ data.title + "<h1/>");
            })
        })
    })
    
   


    return(
        <>
        <h1 id="sample">Hi this is jquery sample</h1>
        <button onClick={changeJquery}>change</button>
        <h1 id="onclick">Sample to test click function</h1>
        <button id='buttonSample'>changeIT</button>
         <h1 id="hideout">Sample to test click function</h1>
        <button id='buttonhideout'>changeIT</button>
        <div id='sampleNew'></div>
        <button id='getfunction'>GetCall</button>
        </>
    );
}

export default Jquery;