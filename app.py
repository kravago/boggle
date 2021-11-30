from boggle import Boggle
from flask import Flask, render_template, session, request
from flask_debugtoolbar import DebugToolbarExtension

# game setup
boggle_game = Boggle()

app = Flask(__name__)
app.config['SECRET_KEY'] = 'letsplayboggle'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)


@app.route('/')
def home():
    session['board'] = boggle_game.make_board()
    return render_template('board.html')

@app.route('/submit-word', methods=['POST'])
def submit_word():
    '''Handle the submission of guesses'''
    guess = request.args['guess']
    print(guess)