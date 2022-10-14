const date = new Date()

const changeTerm = () => {
  const buttons = document.getElementsByClassName("term-button")
  for (const button of buttons) {
    if (button.checked) {
      updateTimes(button.value)
    }
  }
}

const updateTimes = (term) => {
  if (term === "fall-spring") {
    if (document.getElementById("additional-time").style.display === "block") {
      document.getElementById("additional-time").style.display = "none"
    }

    document.getElementById("time-1-label").innerHTML = "6:30 AM"
    document.getElementById("time-2-label").innerHTML = "7:00 AM"
    document.getElementById("time-3-label").innerHTML = "7:15 AM"
    return
  }
  if (term === "interim") {
    document.getElementById("additional-time").style.display = "block"

    document.getElementById("time-1-label").innerHTML = "6:30 PM"
    document.getElementById("time-2-label").innerHTML = "7:00 PM"
    document.getElementById("time-3-label").innerHTML = "7:30 PM"
    document.getElementById("time-4-label").innerHTML = "8:00 PM"
    return
  }
}

const submit = () => {
  const times = document.getElementsByClassName("time-button")
  const terms = document.getElementsByClassName("term-button")
  let time, term
  
  // get the value of the term input
  for (const termButton of terms) {
    if (termButton.checked) {
      term = termButton.value
    }
  }
  // get the value of the date input
  const dateInput = document.getElementById("date").value
  if (dateInput.value === "") {
    alert("Please enter your registration date")
  }
  const date = new Date(document.getElementById("date").value)
  let registerTime = date.getTime() + (date.getTimezoneOffset() * 60 * 1000)
  console.log(registerTime)

  // get the value of the time input
  for (const timeButton of times) { // which time
    if (timeButton.checked) {
      time = timeButton.value
    }
  }
  if (time === "6:30 AM") {
    registerTime += 23400000
  }

  else if (time === "7:00 AM") {
    registerTime += 25200000
  }

  else {
    registerTime += 26100000
  }

  registerTime += 10 // add 10ms delay
  console.log(registerTime)

  // the usable code
  document.getElementById("code-output").innerHTML = `
  const date = new Date()
  const buttons = document.getElementsByClassName("btn btn-sm btn-primary")
  while (true) {
    if (date.getTime() === ` + registerTime + ` ) {
      window.location.reload()
      for (const button of buttons) {
        button.click()
      }
      break
    }
  }`
  document.getElementById("code-output").style.display = "block"
}



