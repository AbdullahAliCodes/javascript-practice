document.getElementById("app").innerHTML = `
<h1>Zaio Playground</h1>
<div>
    test and play around with concepts here
</div>
`;

// create a paragraph element, set some text, add to document
const p  = document.createElement("p");
p.innerHTML = "I am a paragraph from Javascript";
document.body.append(p);

// change the background or document, and colour of paragraph created
document.body.style.background = "blue";
p.style.color = "white";
p.style.cursor = "pointer";

// addEventlistener to paragraph click
p.addEventListener("click", () =>  {
    alert(p.innerHTML);
})
