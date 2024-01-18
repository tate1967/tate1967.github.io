import os
from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "GET":
        return render_template("index.html")
    else:
        president = request.form.get("president")
        return render_template(president, president=president)


@app.route("/quiz", methods=["GET", "POST"])
def quiz():
        return render_template("/quiz.html")

@app.route("/quiz2", methods=["GET", "POST"])
def quiz2():
        return render_template("/quiz2.html")

@app.route("/washington", methods=["GET", "POST"])
def washington():
        return render_template("/washington.html")

@app.route("/jefferson", methods=["GET", "POST"])
def jefferson():
        return render_template("/jefferson.html")

@app.route("/jackson", methods=["GET", "POST"])
def jackson():
        return render_template("/jackson.html")

@app.route("/polk", methods=["GET", "POST"])
def polk():
        return render_template("/polk.html")

@app.route("/lincoln", methods=["GET", "POST"])
def lincoln():
        return render_template("/lincoln.html")

@app.route("/teddy", methods=["GET", "POST"])
def teddy():
        return render_template("/teddy.html")

@app.route("/wilson", methods=["GET", "POST"])
def wilson():
        return render_template("/wilson.html")

@app.route("/fdr", methods=["GET", "POST"])
def fdr():
        return render_template("/fdr.html")

@app.route("/truman", methods=["GET", "POST"])
def truman():
        return render_template("/truman.html")

@app.route("/eisenhower", methods=["GET", "POST"])
def eisenhower():
        return render_template("/eisenhower.html")
