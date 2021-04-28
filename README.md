## Abhishek Choudhary

Graduate Research Assistant <br />
<a href="https://science.rpi.edu/mathematical-sciences">Department of Mathematical Sciences</a><br />
<a href="http://www.rpi.edu/">Rensselaer Polytechnic Institute</a><br />

110 8th Street, Troy, NY 12180 <br />
Office: Amos Eaton 429 <br />
Email: <a href="mailto:abhi.achoudhary@gmail.com">Abhishek Choudhary</a> <br />

### Research Interests
Probability, stochastic processes, mathematical modeling <br />
Game theory, evolutionary biology <br />

<!-- You can find my CV <a href="http://abhiachoudhary.github.io/docs/CV_Abhishek_Choudhary.pdf">here</a>. <br /> -->
You can find my CV <a href="https://github.com/abhiachoudhary/abhiachoudhary.github.io/raw/master/docs/CV_Abhishek_Choudhary.pdf">here</a>. <br />

<html lang="en">
<head>
  <meta charset="UTF-8">
  <!-- meta name="viewport" content="width=device-width, initial-scale=1.0" -->
  <link rel="stylesheet" href="style.css">
  <!-- title>My Website</title -->
</head>
<body>

<h3>Cool reverse typing box</h3>

<form action="/action_page.php">
<label for="w3review">Reverse typing box:</label>
<textarea id="reverse_text_box0" name="reverse_text_box0" dir="rtl" rows="4" cols="50">
  Just start typing in the text area.
  </textarea>
  <br><br>
  <input type="submit" value="Submit">
</form>

<!---using https://stackoverflow.com/questions/7524855/right-to-left-text-html-input -->
<script>
function rtl(element)
{   
    if(element.setSelectionRange){
        element.setSelectionRange(0,0);
    }
}
</script>

<textarea id="reverse_text_box" name="reverse_text_box" dir="rtl" rows="4" cols="50" onkeyup="rtl(this);">

<p>A function is triggered when the user releases a key in the input field. The function outputs the actual key/letter that was released inside the text field.</p>

Enter your name: <input type="text" id="fname" onkeyup="myFunction()">

<p>My name is: <span id="demo"></span></p>

<script>
function myFunction() {
  var x = document.getElementById("fname").value;
  document.getElementById("demo").innerHTML = x;
}
</script>

super6

</body>
</html>
