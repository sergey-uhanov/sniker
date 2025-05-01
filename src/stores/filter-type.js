import {defineStore} from "pinia";
import {ref} from "vue";

export const useTypeFilterStore = defineStore('typeFilter', () => {
   const allFilterType = ['woman', 'men', 'all']
    const filterType = ref('all')

    function changeFilterType(newValue) {
        if(allFilterType.includes(newValue)) {
            filterType.value = newValue
        }
    }

    return { filterType, allFilterType,changeFilterType }
})
