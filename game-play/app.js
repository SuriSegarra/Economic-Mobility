// import all question objects
import renderQuestion from './render-question.js';
import lifeEvents from './life-events.js';
import findById from '../common/find-by-id.js';

  //Need specific objects (i.e. import 'race' object) Look at Colls file structure. 

//set life events object into local storage.
  const eventJSON = localStorage.setItem('life-events', JSON.stringify(lifeEvents));

// get user from local storage
// 



//Look at JSON function.

// get query parameter from URL (this assumes that initial query parameter has been set to 100 for all values, race is set on game page.
//We would need to pull a specific ID from the splash page. 



// get question id from URL and store as variable

// find matching id using findById function (taking in search param and array)
//const questionObject = findById(characterObject, raceId)
// get form from DOM
// get results elements from DOM
const continueButton = document.getElementById('continue-button');

const form = document.querySelector('form');
lifeEvents.forEach((event)=>{
    const section = renderQuestion(event);
    form.appendChild(section);
});

// ensure that first three questions are 'user profile' questions; then ask remaining questions at random

    //We will iterate through an array. 
    
    // create array of asked questions
            //Coll has outlined this type of array in lifeEvents.js and medicalIssueOutcomes.js
            
        // ==================================================================================== TABLEED
        // set question array in local storage
        //We have function to acomplish this. 
        
        // if race is not in the array, then pass in raceObject; otherwise, pass in genderObject
        //
        
        // if gender is not in the array, then pass in genderObject; otherwise, pass in regionObject
        
        // if region is not in the array, then pass in regionObject; otherwise, use getRandomQuestion function (passing in lifeEvents array) to randomly assign a question
//==========================================================================================================================================

// event listener on form submission -- Will look at the Event Listener - Needs to update state -

form.addEventListener('submit', (e) => {
    e.preventDefault();

const formData = new FormData(form);
const selectionID = formData('option');
const option = findById()
})

// updateUserObject() function:
    // update user object based on choice -- Coll and Dorje function
        
// displayResults() function makes results appear on screen 
//results box is statically rendered. We will only be dynamically rendering the h3 and p tags. In that container. See game-play | index.html for hardcoded. The results would you findElementById to locate the text for h3 and p. 

    //set lifeEvent object into QueryParams and description 

//<div class="results-container">
// <h3 id="results-header"></h3>
//<p id="results-description"></p>
//</div>

// toggle on display of results 

// connect textContent of heading and paragraph to corresponding result

    function createLifeEventLink(choices) {

        const resultsDescription = document.getElementById('results-description');

        link.href = '../choices/?id=' + choices.id;

        return resultsDescription;

}

export default createLifeEventLink;





const searchParams = new URLSearchParams(window.location.search); 

const resultsId = searchParams.get('')

const resultsSection = document.getElementById('result-section');
const resultsDiv = document.getElementById('results-container');
    const resultsHeader = document.getElementById('results-header');

   

    // insert corresponding image
    
    // renderChart() function:
    // Will update chart based on choice (note: we will need two arrays: one for labels, the other with the corresponding scores)




// prevent default behavior


// get formData object

    // use formData object to get data for generated prompt
    
    // push mutated user object back into local storage
    
    // if there are no remaining questions, go to results page

    //The continue button will generate the next question.

continueButton.addEventListener('click', () => {
    window.location = '../game-play/?id=' + gender.id.
        
        
});
    