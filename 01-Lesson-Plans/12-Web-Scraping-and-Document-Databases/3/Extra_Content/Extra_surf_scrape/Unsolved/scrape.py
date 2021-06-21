import time
from splinter import Browser
from bs4 import BeautifulSoup
import pandas as pd
from selenium import webdriver


def init_browser():
    executable_path = {'executable_path': '/usr/local/bin/chromedriver'}
    return Browser('chrome', **executable_path, headless=False)


def scrape_url():
    # create a Browser instance
    browser = init_browser()

    # @TODO
    # 1. create an empty dictionary
    # 2. visit a url
    # 3. scrape it with BeautifulSoup
    # 4. find three specific elements and add them to your dictionary
    # 5. return your dictionary
