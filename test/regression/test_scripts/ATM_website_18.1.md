| ID | Component \ <br> Description  | Designed Steps       |Expected Result     |	Created By \ <br> Last Updated |
| -- | -- | -- | -- | -- |
| ATM_18.1 | ATM API page <br> <br>  Verifies API page subsections (APIs) -> theme-config : Manage theme's configuration | 1. Navigate to https://www-test.adtechmedia.io/api <br> 2. Click on the More button link that is located on the CENTER | 1. Page is opened on API  <br> 2. User is navigated to the page with Guide <br> https://www-test.adtechmedia.io/api-docs/           | Veronica Macovei <br> 13.07.2017 |
|       |       | 3. Check this section <br> -> theme-config : Manage theme's configuration |     3. Contains 3 lines: <br> PUT <br> POST <br> GET |   |  
|       |       | 4. Check controllers of the section that is located on the right |     4. Controllers of the sections are: <br> Show/Hide <br> List Operations <br> Expand Operations |    |  
|       |       | 5. Click on Show/Hide link twice |     5. All subsection should be collapsed and then expanded. Order of expand/collapse depends from initial state |    |  
|       |       | 6. Click on Expand Operations |     6. All Operations should be expanded. Details of each operation are located within one section |    |  
|       |       | 7. Click on Show/Hide link |     7. List of Operations should be shown in expandable mode |    |  
|       |       | 8. Click on List Operations |     8. List of Operations should be collapsed |    |  
|       |       | 9. Check the copy of each operator: <br> PUT <br> POST <br> GET  |     9. Copy of each Operator is: <br> - PUT /atm-admin/theme-config/create <br> Generate Theme Config <br> - POST /atm-admin/theme-config/update <br> Update Theme Config <br> - GET /atm-admin/theme-config/retrieve <br> Retrieve Theme Config  |    |  
