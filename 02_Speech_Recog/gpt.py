import openai
from dotenv import load_dotenv
import os
from speech import text  # Import the generated_text variable from speech module

# Load environment variables from .env file

def notes():
    load_dotenv()

    # Retrieve OpenAI API token from environment variable
    GPT_API_TOKEN = os.getenv("GPT_API_TOKEN")
    if not GPT_API_TOKEN:
        raise ValueError("GPT_API_TOKEN is not set in the environment variables")

    # Set the OpenAI API key
    openai.api_key = GPT_API_TOKEN

    # Prepare and send the request to OpenAI
    completion = openai.ChatCompletion.create(
        model="gpt-4",  # Using GPT-4 model as specified
        messages=[
        # {"role": "system", "content": "You are good at breaking down text into notes."},
            {"role": "user", "content": f"Can you convert this into readable notes: {text}"}
        ]
    )

    # Get the generated notes
    generated_notes = completion.choices[0].message['content'].strip()

    # Print the generated notes
    print("Generated Notes:", generated_notes)

    # # Optionally, save the generated notes to a file
    # with open("generated_notes.txt", "w") as notes_file:
    #     notes_file.write(generated_notes)
