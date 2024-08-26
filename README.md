# google-sheets-diff-tool
A Google Sheets Apps Script to allow performing a smart diff comparison on two cells

To add this capability to your Google Sheet:

1. Open your Google Sheet and click Extensions->Apps Script.
2. Create an HTML file and paste the `DiffSidebar.html` code. Save it.
3. Create a Code file and paste the `DiffSidebarcode.gs` code. Save it. Click the "Run" button and accept permissions.

From the Google Sheet, highlight any two cells and click the "Diff Two Cells" menu option.

![image](https://github.com/user-attachments/assets/66173cea-9935-43f7-9511-a05f52ac0bb8)

<img width="1421" alt="image" src="https://github.com/user-attachments/assets/c8fecf2c-531b-4f21-ab03-9d19014113f2">

This uses Google's diff-match-patch JavaScript implementation to perform a diff using levenshtein distance. https://github.com/google/diff-match-patch
