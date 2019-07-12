//add recipe
let database = firebase.database();
let ref = database.ref('recipes');
$(document).on("click", "#buttonSaveChanges", function (e) {
    e.preventDefault();
    let data = {
        recipeTitle: $('#exampleInputTitleRecipe').val(),
        ingredients: $('#IngredientsInput').val(),
        howTo: $('#howTo').val(),
        mealType: $(".form-group-mealtype #mealtype:checked").val(),
        worldCuisine: $(".form-group-worldcuisine #worldcuisine:checked").val(),
    };
    ref.push(data)
    $('#addRecipes').modal('toggle');
});

let allrecipes = [];
$(document).ready(function () {
    fetch("https://recipe-app1.firebaseio.com/recipes/.json", {
        method: 'GET'
    })
        .then((response) => {
            return response.json()
        }).then(result => {
            let keys = [];
            keys.push(Object.keys(result));
            let flag = 0;
            for (let i = 0; i < keys[0].length; i++) {
                //console.log(result[keys[0][i]]);
                allrecipes.push(result[keys[0][i]]);
            }
        }).catch(err => {
            console.log(err);
        });
});