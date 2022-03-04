cd ..;
ng build;
Copy-Item .\gh-resources\CNAME .\docs\CNAME
Copy-Item .\docs\index.html .\docs\404.html