import speech_recognition as sr

# Initialize the recognizer
text = None
def speech():
    sp = sr.Recognizer()

    # Load the audio file (replace 'Lecture.wav' with your own file)
    audio_file = "./02_Speech_Recog/Lecture.wav" # change path as necessary

    # Listen to the audio file and convert it to text
    with sr.AudioFile(audio_file) as source:
        audio_data = sp.record(source)
        converted_text = sp.recognize_google(audio_data)

    # Print the converted text
    text = converted_text
    print("Converted Text: ", text)
    