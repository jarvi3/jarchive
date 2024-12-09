addbtn = document.getElementById('addbtn');
sidebar = document.getElementById('sidebar');
textarea = document.getElementById('textarea');
var num = 0;
var viewing = false;

for (var i = 1; i <= localStorage.length; i++) {
    var newbtn = document.createElement('button');
    newbtn.textContent = i;
    sidebar.appendChild(newbtn);
    newbtn.addEventListener('click', function() {
        textarea.value = localStorage.getItem(this.textContent);
        viewing = true;
    });
    num = i;
}

function addnote() {
    if (viewing == true) {
        textarea.value = '';
        viewing = false;
    }
    else {
        var newbtn = document.createElement('button');
        num = num + 1;
        newbtn.textContent = num;
        sidebar.appendChild(newbtn);
        localStorage.setItem(num, textarea.value);
        textarea.value = '';
        location.reload();
    }

   
}

noteclick = document.querySelectorAll('.note');



addbtn.addEventListener('click', addnote);