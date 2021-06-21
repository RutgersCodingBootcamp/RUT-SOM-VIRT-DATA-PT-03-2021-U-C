from splinter import Browser
from bs4 import BeautifulSoup
from webdriver_manager.chrome import ChromeDriverManager


def scrape():
    # browser = init_browser()
    executable_path = {'executable_path': ChromeDriverManager().install()}
    browser = Browser('chrome', **executable_path, headless=False)

    listings = {}

    url = "https://webscraper.io/test-sites/e-commerce/allinone/phones/touch"
    browser.visit(url)

    html = browser.html
    soup = BeautifulSoup(html, "html.parser")

    listings["headline"] = soup.find("a", class_="title").get_text()
    listings["price"] = soup.find("h4", class_="price").get_text()
    listings["reviews"] = soup.find("p", class_="pull-right").get_text()

    # Quit the browser
    browser.quit()

    return listings
