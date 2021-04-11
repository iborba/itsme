from flask import Flask, flash, redirect, render_template, request, session
from classes.about import About
app = Flask(__name__)

@app.route('/')
def presentation():
  return render_page('presentation', False)

@app.route('/home')
def home():
  return render_page('home')

@app.route('/about')
def about():
  t = About()
  print(t.x)
  return render_page('about')

@app.route('/game')
def game():
  return render_page('game')

def render_page(html_page_name, has_menu = True):
  if has_menu:
    return render_template(f"{html_page_name}.html", menus=set_menu())

  return render_template(f"{html_page_name}.html")

def set_menu():
  return [
    {'name': 'Home', 'url': 'home'},
    {'name': 'Game', 'url': 'game'},
    {'name': 'About', 'url': 'about'},
    {'name': 'Intro', 'url': '/'},
  ]