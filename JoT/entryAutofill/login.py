from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time


browser = webdriver.Chrome()

browser.get("http://www.joyoftournaments.com/user/login.asp?tid=4000")
emailInput = browser.find_element_by_name("email")
emailInput.send_keys("ddejesa@greenville.k12.sc.us")
passwordInput = browser.find_element_by_name("passwd")
passwordInput.send_keys("1dream")
passwordInput.submit()

browser.get("http://www.joyoftournaments.com/tourneys/sample/entry.asp")
listOfStudents_raw = browser.find_elements_by_class_name("edit")
listOfStudents_names = []
nonParticipatingSquadMembers = browser.find_element_by_xpath("//table[1]")
for student in listOfStudents_raw:
    listOfStudents_names.append(student.text)

for student in listOfStudents_names:
    thisStudent = browser.find_element_by_link_text(student)
    thisStudent.click()
    LD_button = browser.find_element_by_id("25806")
    LD_button.click()
    saveButton = browser.find_element_by_name("save")
    saveButton.click()
