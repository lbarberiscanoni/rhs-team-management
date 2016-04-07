from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

browser = webdriver.Chrome()

browser.get("http://localhost:8000")
time.sleep(4)
buttonsToClick = browser.find_elements_by_class_name("toFix")

for button in buttonsToClick:
    print button.click()

browser.close()
