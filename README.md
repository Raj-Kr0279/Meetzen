user will enter company id.
1. request will be sent to server with that id
server will find if valid , and then send the company object
set the company with that object
then user will login with his id and temp password, request will go with his id, pass, and companyId
server will check if the companyId is matching with the userDetails, password is same or not, userId existes or not,
then login will be done

frontend:
companyId will be saved in local state, 
if server gives the correct response then response object of company will be set in selectedcompany
redirected to login,
if success login , getting and setting the userobject and preview the data in setup pages and edited,