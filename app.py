from flask import Flask, flash, redirect, render_template, request, session
from classes.connection import Connection

app = Flask(__name__)

@app.route('/')
def presentation():
  return render_page('presentation', '', False)

@app.route('/home')
def home():
  conn = Connection()
  rows = conn.query('SELECT * FROM "public"."About";')

  return render_page('home', data=rows)

@app.route('/about')
def about():
  t = About()
  print(t.x)
  return render_page('about', '')

@app.route('/game')
def game():
  return render_page('game', '')

def render_page(html_page_name, data, has_menu = True):
  if has_menu:
    return render_template(f"{html_page_name}.html", data=data, menus=set_menu())

  return render_template(f"{html_page_name}.html", data=data)

def set_menu():
  return [
    {'name': 'Home', 'url': 'home'},
    {'name': 'Game', 'url': 'game'},
    {'name': 'About', 'url': 'about'},
    {'name': 'Intro', 'url': '/'},
  ]