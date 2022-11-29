<template>
    <TheHeader />
    <div class="max-w-2xl mx-auto my-16 flex flex-col gap-8">
        <SurveyQuestions />
        <UserExperiences />
    </div>
</template>

<script setup>
import TheHeader from './Components/Survey/TheHeader.vue';
import SurveyQuestions from "./Components/Survey/SurveyQuestions.vue";
import UserExperiences from "./Components/Survey/UserExperiences.vue";


</script>
