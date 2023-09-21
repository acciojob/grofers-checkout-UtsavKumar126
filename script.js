const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


const getSum = () => {
// //Add your code here
	const rates=document.getElementsByClassName("price");

	let price=0;
	for(let i=0;i<rates.length;i++){
		if(parseInt(rates[i].textContent)!=NaN){
			price+=parseInt(rates[i].textContent)
		}
	}

	let newRow=document.createElement("tr");
	newRow.innerHTML=`<td></td>
//  <td>${price}</td>`;
	newRow.id="ans"

	const table=document.getElementsByTagName("TABLE")[0];
	table.appendChild(newRow);
}

getSumBtn.addEventListener("click", getSum);