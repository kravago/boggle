from boggle import Boggle
from flask import Flask, render_template, session

# game setup
boggle_game = Boggle()

app = Flask(__name__)
app.config['SECRET_KEY'] = 'letsplayboggle'


@app.route('/')
def home():
    session['board'] = boggle_game.make_board()
    return render_template('board.html')
