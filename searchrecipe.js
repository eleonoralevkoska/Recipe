//Search for recipe 
let foundRecipe = [];
$(document).ready(function () {
    $("#btnSearch").click(function () {
      
        $("#loginpage").hide();
        let input = $('#searchInput').val()

        if (input != '') {
            for (const r of allrecipes) {
                let titler = r.recipeTitle.toLowerCase();
                if (titler.includes(input)) {
                    foundRecipe.push(r);
                }
            }
            if (foundRecipe.length > 0) {
                for (const f of foundRecipe) {
                    $("#result").append(`      
                      
                     <div class="card" style="width: 18rem;">
                     <div class="card-body"> 
                     <h5 class="card-title">${f.recipeTitle}</h5>
                     </div>                  
                     <h6>Ingredients:</h6>
                     <a>${f.ingredients}</a>
                     <h6>How to:</h6>
                     <a>${f.howTo}</a>
                     <h6>Meal Type:</h6>
                     <a>${f.mealType}</a>
                     <h6>World cuisine:</h6>
                     <a>${f.worldCuisine}</a></div>`)
                }
            } else {
                alert("Recipe name not valid");
            }
        } else {
            console.log("enter something");
        }
    });
});

//Dropdown search
let browseRecipe = [];
$(document).ready(function () {
    $('#dropdownMenu a').click(function () {
        let browseText = ($(this).text());
        for (const r of allrecipes) {
            if ((r.mealType || r.howTo) === browseText) {
                browseRecipe.push(r);
            }
        }
        if (browseRecipe.length > 0) {
            for (const b of browseRecipe) {
                $("#result").append(`            
                    <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${b.recipeTitle}</h5>
                    </div>                    
                    <h6>Ingredients:</h6>
                    <a>${b.ingredients}</a>
                    <h6>How to:</h6>
                    <a>${b.howTo}</a>
                    <h6>Meal Type:</h6>
                    <a>${b.mealType}</a>
                    <h6>World cuisine:</h6>
                    <a>${b.worldCuisine}</a></div>`)
            }
        } else {
            alert("There aren't recipes for that search");
        }
    });
});