from flask import Flask
import youtube_dl
import sys
lists = []


app = Flask(__name__)

def run(url):
	complete_url = 'https://youtube.com/watch?v='+url
	print(complete_url)
	ydl_opts = {}
	with youtube_dl.YoutubeDL(ydl_opts) as ydl:
		try:
			ydl.download([complete_url])
		except Exception as e:
			print(e)

@app.route('/<url>/', methods=['GET'])
def home(url):
	url_ = url
	print(url) 
	run(url)
	return "Downloaded.."