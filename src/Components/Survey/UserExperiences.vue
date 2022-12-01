<template>
    <BaseCard>
        <!-- <pre>{{ results }}</pre> -->
        <h1 class="text-xl font-semibold mb-6">User Experiences</h1>
        <BaseButton @click="loadExperiences">Load User Experiences</BaseButton>
        <p v-if="err" class="text-sm text-red-500 mt-2">{{ err }}</p>
        <p v-if="isLoading" class="my-2">Loading...</p>
        <!-- {{ results.length }}
        {{ isLoading }} -->
        <p v-if="!isLoading && (!results || results.length === 0)" class="my-2">Please add some data...</p>
        <p v-if="!isLoading && results && results.length > 0" v-for="result in results" :key="result.id" class="my-4"><span class="font-semibold">{{ result.name}}</span> rated experience <span class="text-violet-700 font-semibold">{{ result.rating }}</span>.</p>
    </BaseCard>
</template>

<script setup>
import { onMounted, ref } from "vue";

const results = ref([]);
const isLoading = ref(false);
const err = ref(null);

// error.value = 'lala'


// get data
// fetch('http://localhost:3001/assignments')
//     .then(response => response.json())
//     .then(assignments => {
//         this.assignments = assignments;
//     });
// },
// data is not an array -> for loop


function loadExperiences() {
    // console.log('loadexp');
    isLoading.value = true;
    fetch('https://survey-93121-default-rtdb.europe-west1.firebasedatabase.app/survey.son')
    .then(response => {
        if(response.ok){
            // console.log(response);
            return response.json();
        } else {
            throw new Error('Sth went wrong!')
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
        // console.log('results loaded ok, x = ', x)
        results.value = x;
    }).catch(error => {
        // console.log (error);
        // napaka.value = 'Sth went wrong. Try again later.'
        err.value = error.message;
    })

}

onMounted(() => loadExperiences());

</script>
