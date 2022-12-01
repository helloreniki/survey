<template>
    <BaseCard>
        <h1 class="text-xl font-semibold mb-6">How was your learning experience?</h1>
        <form @submit.prevent="submitSurvey" class="flex flex-col gap-8">
            <p v-if="invalidInput" class="text-sm text-red-500">Please fill in all fields.</p>
            <div>
                <label for="name">Your name:</label>
                <input type="text" id="name" name="name" class="border ml-2" v-model.trim="enteredName">
            </div>
            <div class="flex flex-col gap-2">
                <h3 class="text-lg">Please rate your learning experience...</h3>
                <div class="flex gap-2 items-center">
                    <input type="radio" id="rating" name="rating" value="poor" v-model="chosenRating">
                    <label for="rating">Poor</label>
                </div>
                <div class="flex gap-2 items-center">
                    <input type="radio" id="rating" name="rating" value="average" v-model="chosenRating">
                    <label for="rating">Average</label>
                </div>
                <div class="flex gap-2 items-center">
                    <input type="radio" id="rating" name="rating" value="great" v-model="chosenRating">
                    <label for="rating">Great</label>
                </div>
            </div>
            <BaseButton type="submit" class="self-start">Submit</BaseButton>
            <p class="text-red-500 text-sm">{{ err }}</p>
        </form>
    </BaseCard>
    {{ enteredName }}
    {{ chosenRating }}
</template>

<script setup>
import { ref, inject } from "vue";

const emitter = inject('emitter');

const enteredName = ref('');
const chosenRating = ref('');
const invalidInput = ref(false);
const err = ref(null);



function submitSurvey() {
    if(enteredName.value === '' || chosenRating.value === null) {
        invalidInput.value = true;
        return;
    }

    invalidInput.value = false;
    // console.log(enteredName.value),
    // console.log(chosenRating.value),
    // console.log('method submitSurvey'),
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

</script>
