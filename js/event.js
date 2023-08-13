function makeRed() {
    document.body.style.backgroundColor = 'red';
}
const blueButton = document.getElementById('make-blue')

blueButton.onclick = makeBlue

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

const purpleButton = document.getElementById('make-purple')
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

const tomatoButton = document.getElementById('make-tomato')
tomatoButton.addEventListener('click', makeTomato)
function makeTomato(){
    document.body.style.backgroundColor = 'tomato'
}

// will use always 
document.getElementById('make-pink').addEventListener('click',function(){
    document.body.style.backgroundColor = 'pink'
})

document.getElementById('btn-update').addEventListener('click', function(){
    const inputField = document.getElementById('input-text');
    const inputText = inputField.value;
    const p = document.getElementById('text-display')
    p.innerText = inputText
    inputField.value = '';

})

// comment post 

// add event listener 
document.getElementById('btn-post').addEventListener('click',function(){
    // get the comment 
    const cmtBox =  document.getElementById('new-comment');
    const newCmnt = cmtBox.value;

    const cmtContainer = document.getElementById('cmt-container');
    const p = document.createElement('p')
    p.innerText = newCmnt;
    cmtContainer.appendChild(p);
})