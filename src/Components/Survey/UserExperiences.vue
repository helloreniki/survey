<template>
    <BaseCard>
        <h1 class="text-xl font-semibold mb-6">User Experiences</h1>
        <BaseButton @click="dataStore.loadExperiences">Load User Experiences</BaseButton>
        <p v-if="dataStore.err" class="text-sm text-red-500 mt-2">{{ err }}</p>
        <p v-if="dataStore.isLoading" class="my-2">Loading...</p>

        <p v-if="!dataStore.isLoading && (!dataStore.results || dataStore.results.length === 0)" class="my-2">Please add some data...</p>
        <p v-if="!dataStore.isLoading && dataStore.results && dataStore.results.length > 0" v-for="result in dataStore.results" :key="result.id" class="my-4"><span class="font-semibold">{{ result.name}}</span> rated experience <span class="text-violet-700 font-semibold">{{ result.rating }}</span>.</p>
    </BaseCard>
</template>

<script setup>
import { inject, onMounted, ref } from "vue";
import { useDataStore } from "../../Stores/data.js";

const dataStore = useDataStore()

let emitter = inject('emitter');

emitter.on('SurveyQuestionsSaved', (poslanArray) => {
    console.log('data was saved, poslan Array = ', poslanArray)
    dataStore.loadExperiences();
})


onMounted(() => dataStore.loadExperiences());

</script>
