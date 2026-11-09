const litres = document.querySelector("#litres");
const litresMessage = document.querySelector("#litres-message");

function checkLiters (){
    const amount = Number(litres.value);
    if(litres.value == ""){
        litresMessage.textContent = "";
        litres.classList.remove("invalid");
    } else if(amount <= 0){
        litresMessage.textContent =
            "Litres must be more than 0";
        litres.classList.add("invalid");    
    } else{
        litresMessage.textContent = "";
        litres.classList.remove("invalid");
        litres.value = amount;
    }
}

//event listener
litres.addEventListener("input", checkLiters);

const member = document.querySelector("#member");
const memberMessage = document.querySelector("#member-message");
let memberRegex = RegExp(/^ER-[0-9]{4}$/);
function checkMember(){
    let typed = member.value.trim() .toUpperCase();
    if(memberRegex.test(typed)){
        memberMessage.textContent = "";
        member.classList.remove("invalid");
    }else{
        memberMessage.textContent = "A member number looks like ER-0001";
        member.classList.add("invalid");
    }
}

member.addEventListener("blur", checkMember);