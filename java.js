function message()
{
    let msg ="Juhu, JavaScript wurde erfolgreich mit einem externen Script eingebunden. Wenn sie sich auch so sehr darüber freuen wie ich, bestätigen sie bitte mit: Ok";
    alert(msg);
}

function submit()
{
    let submit ="Daten unerfolgreich gespeichert";
    alert(submit);
}

function method()
{
    let method = form.elements.pay.value;
}

function processFormData() {
    let form = document.getElementById('myForm');
  
    let cardNumber = form.elements.number.value;
    let holder = form.elements.holder.value;
    let method = form.elements.pay.value;
  
    insertdata(cardNumber, holder, method);
      
    clearFormData();
  };

