function submitForm() {
  let formData = new FormData(document.getElementById("contact-form"));
  if (checkform() == true) {
    fetch("https://app.headlessforms.cloud/api/v1/form-submission/B3z2pz6exM", {
      method: "POST",
      body: formData,
    }).catch((error) => console.log(error));
  }
}

function checkform() {
  const form = document.getElementById("contact-form");
  let inputs = form.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].hasAttribute("required")) {
      if (inputs[i].value == "") {
        return false;
      }
    }
  }

  inputs = form.getElementsByTagName("textarea");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].hasAttribute("required")) {
      if (inputs[i].value == "") {
        return false;
      }
    }
  }

  if (!document.getElementById("gdprconsent").checked) {
    return false;
  }

  return true;
}
