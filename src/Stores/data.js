import { defineStore } from 'pinia'
import { inject, ref } from 'vue'

// Setup Store

export const useDataStore = defineStore('data', () => {

    const emitter = inject('emitter')

    // ————————————————————————————————————————————————————————————————————————————————————————————————————
    // STATE
    // ————————————————————————————————————————————————————————————————————————————————————————————————————

    const results = ref([]);
    const isLoading = ref(false);
    const err = ref(null);


    // ————————————————————————————————————————————————————————————————————————————————————————————————————
    // GETTERS
    // ————————————————————————————————————————————————————————————————————————————————————————————————————


    // ————————————————————————————————————————————————————————————————————————————————————————————————————
    // ACTIONS
    // ————————————————————————————————————————————————————————————————————————————————————————————————————

    function loadExperiences() {
        // console.log('loadexp');
        isLoading.value = true;
        fetch('https://survey-93121-default-rtdb.europe-west1.firebasedatabase.app/survey.json')
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


    // ————————————————————————————————————————————————————————————————————————————————————————————————————
    // RETURN
    // ————————————————————————————————————————————————————————————————————————————————————————————————————

    return { results, isLoading, err, loadExperiences }

})
