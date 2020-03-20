var btn = document.querySelector(".btn")
var input1 = document.querySelector("input")
var dname = document.querySelector(".dname")
var dloc = document.querySelector(".dloc")
var dGate = document.querySelector(".dGate")
var dEnt = document.querySelector(".dEnt")
var dBoss = document.querySelector(".dBoss")
function search(key){
	key1 = key.toLowerCase()
	for (var i = 0; i < 103; i++) {
		b1 = eval("a" + i)
		for (var j = 0; j < b1.Skey.length; j++) {
			b2 = b1.Skey[j].toLowerCase()
			if (b2 == key1) {
				dname.textContent = b1.dname
				dloc.textContent = b1.dloc
				dGate.textContent = b1.dGate
				dEnt.textContent = b1.dEnt
				dBoss.textContent = b1.dBoss
				return
			}else{

			}
		}
	}
	alert("Invalid Keyword")
}
btn.addEventListener("click",function(){
	search(input1.value)
})
input1.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    search(input1.value)
  }
});