<template>
    <BaseCard>
        <h1 class="text-xl font-semibold mb-6">How was your learning experience?</h1>
        <form @submit.prevent="surveyStore.submitSurvey" class="flex flex-col gap-8">
            <p v-if="surveyStore.invalidInput" class="text-sm text-red-500">Please fill in all fields.</p>
            <div>
                <label for="name">Your name:</label>
                <input type="text" id="name" name="name" class="border ml-2" v-model.trim="surveyStore.enteredName">
            </div>
            <div class="flex flex-col gap-2">
                <h3 class="text-lg">Please rate your learning experience...</h3>
                <div class="flex gap-2 items-center">
                    <input type="radio" id="rating" name="rating" value="poor" v-model="surveyStore.chosenRating">
                    <label for="rating">Poor</label>
                </div>
                <div class="flex gap-2 items-center">
                    <input type="radio" id="rating" name="rating" value="average" v-model="surveyStore.chosenRating">
                    <label for="rating">Average</label>
                </div>
                <div class="flex gap-2 items-center">
                    <input type="radio" id="rating" name="rating" value="great" v-model="surveyStore.chosenRating">
                    <label for="rating">Great</label>
                </div>
            </div>
            <BaseButton type="submit" class="self-start">Submit</BaseButton>
            <p v-if="surveyStore.err" class="text-red-500 text-sm">{{ surveyStore.err }}</p>
        </form>
    </BaseCard>
    <!-- {{ surveyStore.enteredName }}
    {{ surveyStore.chosenRating }} -->
</template>

<script setup>
import { ref, inject } from "vue";
import { useSurveyStore } from "../../Stores/survey.js";

const surveyStore = useSurveyStore()

</script>
