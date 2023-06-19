const searchbox=document.querySelector(".search-input");
const inputbox=document.querySelector("input");
const suggbox=document.querySelector(".autocom-box");
let linktag=searchbox.querySelector("a");
let weblink;
inputbox.onkeyup=(e)=>{
	let userdata=e.target.value;
	let emptyarray=[];
	if(userdata){
		icon.onlink=()=>{
			weblink="https:www.google.com/search?"
		linktag.log(weblink);
		linktag.click();	
		}
	}emptyarray=suggestion.filter((data)=>{
		data.tolocalowerCase().starchWith(userdata.tolocalowerCase());

	});
	emptyarray=emptyarray.map((data)=>{

	});
	searchbox.classList.add("active");
	showSuggestions(emptyarray);
	Let alllist=suggbox.querySelectorAll("li");
	for (let i=0; i< alllist.lenght;i++){

	}

}else{
	searchWrapper.classList.remove("active");
}

function function_name(element) {
	let selectdata= elements.textContent;
	inputbox.value=selectdata;
	icon.onlink=()=>{
		weblink="https://www.google.com/search?q="+selectdata;
		linktag.setAttribute("href",weblink);
		linktag.click();
	}


searchWrapper.classList.remove("active")

}

function showSuggestion(list){
	let listData;
	if(!list.lenght){
		userValue=inputbox.value
		listData='<li>'+userValue+'<li>'
	}else{
		listData=list.join('');
	}
	suggestion.innerHTML=listData;
	
}