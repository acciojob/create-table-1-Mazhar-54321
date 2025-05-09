function insert_Row() {
  //Write your code here
 const table = document.getElementById("sampleTable");
 const children = table.childNodes;
 
 console.log(children);
 const tr = document.createElement("tr");
 const cell1 = document.createElement("td");
 cell1.textContent="New Cell1"
 const cell2 = document.createElement("td");
 cell2.textContent="New Cell2";
 tr.appendChild(cell1);
 tr.appendChild(cell2);
 table.prepend(tr);
// table.appendChild(children)

}