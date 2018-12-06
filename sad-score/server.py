#!/usr/bin/env python2
"""
Server code to track number of visitors.
"""
import logging
from flask import Flask, request, send_from_directory, g
from pymongo import MongoClient

# Database key
import dbKey

app = Flask(__name__)


# Load default config and override config from an environment variable
app.config.update(dict(
    DATABASE=dbKey.dbKey,
    USERNAME=dbKey.username,
    PASSWORD=dbKey.password
))


def connect_db():
    """Connects to the signinucsd database on mlab servers."""
    db = MongoClient(app.config['DATABASE'])
    return db


def get_db():
    """Opens a new database connection if there is none yet for the
    current application context.
    """
    if not hasattr(g, 'dbConnection'):
        g.dbConnection = connect_db()
    return g.dbConnection.sadscore


@app.teardown_appcontext
def close_db(error):
    """Closes the database again at the end of the request."""
    if hasattr(g, 'dbConnection'):
        g.dbConnection.close()


@app.route('/')
def index():
    db = get_db()
    visits_col = db.visits
    visits_col.find_one_and_update(
        {'_id': 'visits'},
        {'$inc': {'count': 1}},
        upsert=True)
    logging.info("IP Address: {}".format(request.remote_addr))

    return send_from_directory('.', 'index.html')


@app.route('/index.js')
def javascript():
    return send_from_directory('.', 'index.js')

@app.route('/stylesheet.css')
def stylesheet():
    return send_from_directory('.', 'stylesheet.css')


@app.route('/favicon.ico')
def favicon():
    return send_from_directory('.', 'favicon.ico')


def main():
    logging.basicConfig(filename='sadscore.log', level=logging.INFO)
    app.run(host='0.0.0.0', port=5050)


if __name__ == '__main__':
    main()
