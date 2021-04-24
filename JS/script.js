 
//  Onload this function is called.
 function excuteCode() {

    // Getting values by id of the container and the ul tag where list is shown.
    const listContainer = document.getElementById("listContainer");
    const possibleDishes = document.getElementById("possibleDishes");

    // Variable Declaration
    // whichClicks checks wether the button is clicked first time or not.
    let whichClick =0;
    // The final result is stored in finalDishes Array.
    var finalDishes = [];

    // recipeList is an array of object to store the name,ingredients array and a lin to the recipe page.
    var recipeList = [
        { name: "Sweet Corn Soup", ingredients: ["carrot", "bean", "corn"], steps: "./recipe.html" },
        { name: "Yam Ginger Soup", ingredients: ["sweet potato,ginger"], steps: "https://www.epicurious.com/recipes/food/views/roasted-sweet-potato-and-ginger-soup" },        { name: "Hot and Sour Soup", ingredients: ["carrot", "bean", "cabbage", "mushroom"], steps: "https://www.vegrecipesofindia.com/veg-hot-and-sour-soup-recipe/#wprm-recipe-container-137369" },
        { name: "Classic Red Pasta", ingredients: ["tomato", "pepper"], steps: "https://www.foodnetwork.com/recipes/classic-red-sauce-3362824" },
        { name: "Vegetable Lasagna", ingredients: ["carrot", "zucchini", "spinach", "pepper"], steps: "https://cookieandkate.com/best-vegetable-lasagna-recipe/" },
        { name: "Burrito Bowl", ingredients: ["avacado", "pepper", "tomato"], steps: "https://cookieandkate.com/best-vegetable-lasagna-recipe/" },
        { name: "Lettuce Salad", ingredients: ["pepper", "lettuce", "tomato"], steps: "https://ifoodreal.com/lettuce-salad/" },
        { name: "Veg Noodles", ingredients: ["pepper", "carrot", "cabbage"], steps: "https://www.indianhealthyrecipes.com/veg-noodles-recipe/" },
        { name: "Cauliflower Stir Fry", ingredients: ["cauliflower", "peas", "carrot"], steps: "https://vegcookbook.net/2019/12/23/cauliflowercarrots-peas-stir-fry/" },
        { name: "Vegetable Paratha", ingredients: ["potatoes","peas","carrot", "cauliflower"], steps: "https://www.spiceupthecurry.com/vegetable-paratha-recipe/" },
        { name: "Vegetable Fried Rice", ingredients: ["carrot","cabbage","bean", "spring onion"], steps: "https://www.spiceupthecurry.com/vegetable-paratha-recipe/" },
        { name: "Avacado Toasties", ingredients: ["avacado","tomato"], steps: "https://cookieandkate.com/avocado-toast-recipe/" },
        { name: "Greek Salad", ingredients: ["cucumber","tomato","pepper"], steps: "https://www.loveandlemons.com/greek-salad/#wprm-recipe-container-43127" },
        { name: "Quinoa Salad", ingredients: ["cucumber","pepper"], steps: "https://cookieandkate.com/best-quinoa-salad-recipe/" }
    ];

    // This variable helps to fetch  the HTML form.
    var formHandle = document.forms.myform;

    //Once the form is submitted processForm function is called.
    formHandle.onsubmit = processForm;

    //Function to excute on submission of form.
    function processForm() {
        // Getting the value of user input.
        const item1 = formHandle.item1.value.toLowerCase();
        const item2 = formHandle.item2.value.toLowerCase();
        const item3 = formHandle.item3.value.toLowerCase();

        // Getting the value of each Label.
        const label1 = document.getElementById("item1Lbl");
        const label2 = document.getElementById("item2Lbl");
        const label3 = document.getElementById("item3Lbl");

        // To check number of errors.
        let flag = 1;


        // Checks whether user input 1 is not null.
        if (!(item1)) {
            // If yes then an error message is displayed in label.
            label1.innerHTML = " Please enter atleast one ingredient.";
            flag = 0;
            return false;
        }


        // Checks whether user input 2 is not null.
        if (!(item2)) {
            // If yes then an error message is displayed in label.
            label2.innerHTML = " Please enter atleast one ingredient.";
            flag = 0;
            return false;
        }

        // Checks whether user input 3 is not null.
        if (!(item3)) {
            // If yes then an error message is displayed in label.
            label3.innerHTML = " Please enter atleast one ingredient.";
            flag = 0;
            return false;
        }

        // If there are no errors then we need to diplay the list.
        if (flag == 1) {

            // This for loop is used to iterate through recipe List and check whether the input item is included or not. 
            for(i=0;i<recipeList.length;i++){

                // Checks any of the 2 mentioned item matches with the ingredient list then is adds to the finalDishes array.
                if(
                    (recipeList[i].ingredients.includes(item1) && recipeList[i].ingredients.includes(item2))||
                    (recipeList[i].ingredients.includes(item1) && recipeList[i].ingredients.includes(item3))||
                    (recipeList[i].ingredients.includes(item2) && recipeList[i].ingredients.includes(item3))
                 )
                {
                    //Pushes to the final array.
                    finalDishes.push(recipeList[i]);
                }
            }
           
            // The section which contains the list.
            listContainer.style.display = "block";
            
            // Check whether the list shown is not first time.
            if(whichClick!=0){
                // Empties the Ul tag.
                possibleDishes.innerHTML = "";
            }

            // If no matches is found, then this mesage is displayed.
            if(finalDishes.length == 0){
                var list = document.createElement("li");
                var textnode = document.createTextNode("No dishes found. Try again.");
                list.appendChild(textnode);
                possibleDishes.appendChild(list);
            }
            else{

            // Iterates throught the result the array.
            
                for (i = 0; i < finalDishes.length; i++) {

                    // Creates a "li" element.
                    var list = document.createElement("li");
                    // Creates a "a" tag.
                    var link = document.createElement("a");
                    // Assigns value to the a tag create.
                    var textnode = document.createTextNode(finalDishes[i].name);
                    // Assigns link a tag.
                    link.href = finalDishes[i].steps;
                    // Addign attritube to a tag.
                    link.setAttribute('target', '_blank')
    
                    // Appending the text to a tag.
                    link.appendChild(textnode);
                    //Appending a tag to the li
                    list.appendChild(link);
                    // Appends to main ul.
                    possibleDishes.appendChild(list);
                    
                }
            }
        }

        // This variable is used so that it sets the value and tells that it is click once.
        whichClick = 1;

        // Empyting the result array.
        finalDishes = [];

        // To prevent the form.
        return false;
    }   
}

// When the function Loads this function is called.
window.onload = excuteCode;

