import { defineStore } from 'pinia'
import { inject, ref } from 'vue'

// Setup Store

export const useSurveyStore = defineStore('survey', () => {

    const emitter = inject('emitter')

    // ————————————————————————————————————————————————————————————————————————————————————————————————————
    // STATE
    // ————————————————————————————————————————————————————————————————————————————————————————————————————

    const enteredName = ref('');
    const chosenRating = ref('');
    const invalidInput = ref(false);
    const err = ref(null);

    // ————————————————————————————————————————————————————————————————————————————————————————————————————
    // GETTERS
    // ————————————————————————————————————————————————————————————————————————————————————————————————————


    // ————————————————————————————————————————————————————————————————————————————————————————————————————
    // ACTIONS
    // ————————————————————————————————————————————————————————————————————————————————————————————————————

    function submitSurvey() {
        if(enteredName.value === '' || chosenRating.value === null) {
            invalidInput.value = true;
            return;
        }

        invalidInput.value = false;

        fetch('https://survey-93121-default-rtdb.europe-west1.firebasedatabase.app/survey.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: enteredName.value, // .value because of ref('')
                rating: chosenRating.value
            })
        }).then(response => {
            if (!response.ok) {
                throw new Error('Data could not be saved! Please try again later.')
            } else {
                emitter.emit('SurveyQuestionsSaved', ['prvi', 'drugi']);
            }
        }).catch(error => {
            err.value = error.message;
        })

        enteredName.value = '';
        chosenRating.value = null;
    }

    // ————————————————————————————————————————————————————————————————————————————————————————————————————
    // RETURN
    // ————————————————————————————————————————————————————————————————————————————————————————————————————

    return {enteredName, chosenRating, invalidInput, err, submitSurvey }
})
