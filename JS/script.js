window.onload = function () {
    const listContainer = document.getElementById("listContainer");
    const possibleDishes = document.getElementById("possibleDishes");
    const errorMsg = document.getElementById("errorMsg")
    var recipeList = [
        {name: "Cream of Broccoli Soup", ingredients: ["broccoli", "celery"], steps: "https://www.allrecipes.com/recipe/13313/best-cream-of-broccoli-soup/" },
        {name: "Cream of Mushroom Soup", ingredients: ["mushroom"], steps: "https://cafedelites.com/creamy-mushroom-soup/" },
        {name: "Hot and Sour Soup", ingredients: ["carrots","beans","cabbage","mushroom"], steps: "https://www.vegrecipesofindia.com/veg-hot-and-sour-soup-recipe/#wprm-recipe-container-137369" },
        {name: "Classic Red Pasta", ingredients: ["tomatoes","peppers"], steps: "https://www.foodnetwork.com/recipes/classic-red-sauce-3362824" },
        {name: "Vegetable Lasagna", ingredients: ["carrots","zucchini","spinach","peppers"], steps: "https://cookieandkate.com/best-vegetable-lasagna-recipe/" },
        {name: "Burrito Bowl", ingredients: ["Avacado","peppers","tomatoes"], steps: "https://cookieandkate.com/best-vegetable-lasagna-recipe/" },
        {name: "Lettuce Salad", ingredients: ["Cucumbers","Lettuce","tomatoes"], steps: "https://ifoodreal.com/lettuce-salad/" },
        {name: "Veg Noodles", ingredients: ["Peppers","Carrot","cabbage"], steps: "https://www.indianhealthyrecipes.com/veg-noodles-recipe/" },
        {name: "Veg Noodles", ingredients: ["Peppers","Carrot","cabbage"], steps: "https://www.indianhealthyrecipes.com/veg-noodles-recipe/" }
    ];
    var formHandle = document.forms.myform;
    console.log(formHandle);
    formHandle.onsubmit = processForm;
    function processForm() {
        const item1 = formHandle.item1.value;
        const item2= formHandle.item2.value;
        if(!(item1))
        {
            errorMsg.innerHTML=" Please enter atleast one ingredient.";
        }
        else{
            listContainer.style.display = "block";
            for (i = 0; i < recipeList.length; i++) {
                var list = document.createElement("li");
                var link = document.createElement("a");
                var textnode = document.createTextNode(recipeList[i].name);
                link.href = recipeList[i].steps;
                link.setAttribute('target', '_blank')
                link.appendChild(textnode);
                list.appendChild(link);
                possibleDishes.appendChild(list);
            }
        }
        console.log(item1,item2)

        return false;
    }
}

