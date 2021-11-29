from boggle import Boggle
from flask import Flask, render_template


boggle_game = Boggle()
board = boggle_game.make_board()

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('board.html', board=board)
