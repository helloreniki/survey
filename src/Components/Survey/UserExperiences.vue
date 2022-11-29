<template>
    <BaseCard>
        <h1 class="text-xl font-semibold mb-6">User Experiences</h1>
        <BaseButton @click="loadExperiences">Load User Experiences</BaseButton>
        <p v-if="isLoading">Loading...</p>
        <!-- {{ results.length }}
        {{ isLoading }} -->
        <p v-if="!isLoading && (!results || results.length === 0)">Please add some data...</p>
        <p v-if="!isLoading && results && results.length > 0" v-for="result in results" :key="result.id" class="my-4"><span class="font-semibold">{{ result.name}}</span> rated experience <span class="text-violet-700 font-semibold">{{ result.rating }}</span>.</p>
    </BaseCard>
</template>

<script setup>
import { onMounted, ref } from "vue";

const results = ref([]);
const isLoading = ref(false);


function loadExperiences() {
    // console.log('loadexp');
    isLoading.value = true;
    fetch('https://survey-93121-default-rtdb.europe-west1.firebasedatabase.app/survey.json')
    .then(response => {
        if(response.ok){
            // console.log(response);
            return response.json();
        }
    })
    .then(data => {
        // console.log(data)
        isLoading.value = false;
        const x = [];
        for(const id in data) {
            // console.log(id.name)
            x.push({
                id: id,
                name: data[id].name,
                rating: data[id].rating
            });
        }
        // console.log(x)
        results.value = x;
    })

}

onMounted(() => loadExperiences());

</script>
