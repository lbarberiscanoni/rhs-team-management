from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

browser = webdriver.Chrome()

browser.get("http://points.speechanddebate.org/points_application/index.php")
usernameInput = browser.find_element_by_name("username")
usernameInput.send_keys("ddejesa")
passwordInput = browser.find_element_by_name("passwd")
passwordInput.send_keys("1dream")
submitButton = browser.find_element_by_name("Submit")
submitButton.click()

graduatedStudentsAnchor = browser.find_element_by_xpath("//a[@href='graduated.php?id=']")
graduatedStudentsAnchor.click()

alumniList = []
for year in range(1996, 2015):
    browser.get("http://points.speechanddebate.org/points_application/graduated.php?id=")
    gradYear = browser.find_element_by_name("gradyr")
    gradYear.send_keys(year)
    searchButton = browser.find_element_by_name("search")
    searchButton.click()
    studentList = browser.find_element_by_class_name("subitem")
    studentListInfo = studentList.text
    studentListInfo = studentListInfo.split("\n")
    for student in studentListInfo:
        studentInfo = student.split(" ")
        graduationYear = studentInfo[len(studentInfo) - 1]
        points = studentInfo[len(studentInfo) - 2]
        meritDate = studentInfo[len(studentInfo) - 3]
        degree = studentInfo[len(studentInfo) - 4]

        #let's get the student name by removing all other info. This way accounts for ppl with middle names and stuff
        studentInfo.pop(studentInfo.index(graduationYear))
        studentInfo.pop(studentInfo.index(points))
        studentInfo.pop(studentInfo.index(meritDate))
        studentInfo.pop(studentInfo.index(degree))
        studentInfo.pop(0)
        studentName = " ".join(studentInfo)

        #let's submit this info through the form
        browser.get("http://localhost:8000/")

        nameInput = browser.find_element_by_id("name")
        nameInput.send_keys(studentName)

        degreeInput = browser.find_element_by_id("degree")
        degreeInput.send_keys(degree)

        meritDateInput = browser.find_element_by_id("meritDate")
        meritDateInput.send_keys(meritDate)

        pointsInput = browser.find_element_by_id("points")
        pointsInput.send_keys(points)

        gradYearInput = browser.find_element_by_id("gradYear")
        gradYearInput.send_keys(graduationYear)

        formButton = browser.find_element_by_id("submit")
        formButton.click()

print alumniList
print str(len(alumniList)) + " alumni found"

browser.close()
