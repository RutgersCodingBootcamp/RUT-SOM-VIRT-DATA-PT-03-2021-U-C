from splinter import Browser
from bs4 import BeautifulSoup


def init_browser():
    # @NOTE: Replace the path with your actual path to the chromedriver
    executable_path = {"executable_path": "/usr/local/bin/chromedriver"}
    return Browser("chrome", **executable_path, headless=False)


def scrape():
    browser = init_browser()
    # create surf_data dict that we can insert into mongo
    surf_data = {}

    # visit unsplash.com
    unsplash = "https://unsplash.com/search/photos/surfing"
    browser.visit(unsplash)
    browser.is_element_present_by_id("gridMulti", 1)
    html = browser.html

    # create a soup object from the html
    img_soup = BeautifulSoup(html, "html.parser")
    elem = img_soup.find(id="gridMulti")
    img_src = elem.find("img")["src"]

    # add our src to surf data with a key of src
    surf_data["src"] = img_src

    # visit surfline to get weather report
    weather = (
        "http://www.surfline.com/surf-forecasts/southern-california/santa-barbara_2141"
    )
    browser.visit(weather)

    # grab our new html from surfline
    browser.is_element_present_by_css(".sl-premium-analysis-link", 1)
    analysis_url = browser.find_link_by_partial_href("premium-analysis").first["href"]
    browser.visit(analysis_url)
    browser.is_element_present_by_css(".sl-feed-article", 1)

    # create soup object from html
    html = browser.html
    report = BeautifulSoup(html, "html.parser")
    surf_report = report.find_all("p")
    # add it to our surf data dict
    surf_data["report"] = build_report(surf_report)
    # return our surf data dict

    browser.quit()
    return surf_data


# helper function to build surf report
def build_report(surf_report):
    final_report = ""
    for p in surf_report:
        final_report += " " + p.get_text()
        print(final_report)
    return final_report
