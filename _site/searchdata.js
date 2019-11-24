
var jsondata=[
  
  ,
  
   {
     
     
        "title"    : "404.md",
        "category" : "",
        "tags"     : "",
        "url"      : "/404.html",
        "date"     : "",
        "content"  : ""
     
   } ,
  
   {
     
     
        "title"    : "index.html",
        "category" : "",
        "tags"     : "",
        "url"      : "/blog/",
        "date"     : "",
        "content"  : ""
     
   } ,
  
   {
     
     
        "title"    : "main_page.md",
        "category" : "",
        "tags"     : "",
        "url"      : "/main_page",
        "date"     : "",
        "content"  : "1) rename it in main_page.md2) Edit this page with your contentNOTE:  do not delete “redirect_from” rule from the front matter of this file"
     
   } ,
  
   {
     
     
        "title"    : "redirect.html",
        "category" : "",
        "tags"     : "",
        "url"      : "/",
        "date"     : "",
        "content"  : ""
     
   } 
  
];

var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: jsondata,
    searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
    noResultsText: 'No results found',
    limit: 10,
    fuzzy: false,
    exclude: []
  })


