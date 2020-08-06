var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

var textbox = $("#textbox")

var instructions = $("#instructions")

var content = ''

recognition.continuous = true

//recognition started

recognition.onstart = function () {
  instructions.text("Voice Recognition is on")
}

$("#start-btn").click(function (event) {
  if (content.length) {
    content += ''
  }

  recognition.start()
})
