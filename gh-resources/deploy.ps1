cd ..;
ng build;
Copy-Item .\gh-resources\CNAME .\docs\CNAME;
Copy-Item .\docs\index.html .\docs\404.html;
git add .;
git commit -m "deploy to github pages";
git push;