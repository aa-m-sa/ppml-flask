from flask import Flask, redirect, url_for, render_template, request

# even flask is a bit overblown for this I guess
# we could just serve static webpage this far

application = Flask(__name__)

@application.route("/")
def index():
    return redirect(url_for('map'))

@application.route("/map")
def station_map():
    return render_template('map.html')

if __name__ == "__main__":
    application.run(host='0.0.0.0')
