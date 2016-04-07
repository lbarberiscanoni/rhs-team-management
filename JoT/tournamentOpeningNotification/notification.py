from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import subprocess
import time

browser = webdriver.Chrome()

while True:
    #browser.get("http://www.joyoftournaments.com/bystate.asp?state=SC")
    browser.get("http://www.joyoftournaments.com/bystate.asp?state=NY")

    tournamentTable = browser.find_element_by_id("tlist")
    tableInfo = browser.find_elements_by_xpath("//table[@id='tlist']/tbody/tr/td")
    tableInfo.insert(0, "filler space")

    tournamentInfo = []
    i = 0
    while i < len(tableInfo) / 3:
        tournament = tableInfo[3 * i + 1].text 
        date = tableInfo[3 * i + 2].text 
        status = tableInfo[3 * i + 3].text
        print tournament + " " + date + " " + status
        tournamentInfo.append([tournament, date, status])
        i += 1

    print tournamentInfo
    for tournament in tournamentInfo:
        if tournament[2] == "Open":
            message = tournament[0] + " on " + tournament[1] + " is Open"
            update = "python gmailText.py -u hllbck7@gmail.com -p l0ll02012 -t 8642436724@text.att.net -b '" + message + "'"
            subprocess.call(update, shell=True)
    print "-----------------------------------------------------"
