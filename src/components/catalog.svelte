<script>
import FormCatalogSearch from "./catalogFormSearch.svelte"
import FormCatalogInsert from "./catalogFormInsert.svelte"
import FormCatalogDetail from "./catalogDetail.svelte"

import {
    getCatalog,
    deleteCar,
    updateCar,
    insertCar
} from "../services/catalogService.js"

let catalogs = []
let newCar = {}
let searchCar = {}
let flagInsertCar = false;

async function getHandler(car) {
    try {
        catalogs = await getCatalog(car.detail);
    } catch (e) {
        alert("There was an error");
    }
}

async function deleteHandler(id) {
    try {
        let result = await deleteCar(id.detail);;
        if (!result.ok) {
            const message = `An error has occured: ${result.status}`;
            return;
        } else {
            var index = catalogs.findIndex(function(o) {
                return o.id === id.detail;
            })

            if (index !== -1) catalogs.splice(index, 1);
            catalogs = catalogs
        }
    } catch (e) {
        alert("There was an error");
    }
}

async function updateHandler(car) {

    try {
        let response = await updateCar(car.detail);
        let result = await response.json()

        if (!response.ok) {
            const message = `An error has occured: ${result}`;
            alert(message);
            return;
        }
        alert("Updated Successfully!");
    } catch (e) {
        alert("There was an error");
    }
}

async function insertHandler(car) {

    try {
        let response = await insertCar(car.detail);
        let result = await response.json()

        if (!response.ok) {
            const message = `An error has occured: ${result}`;
            alert(message);
            return;
        }

        catalogs.push(result);
        catalogs = catalogs;

    } catch (e) {
        alert("There was an error");
    }

}

function isInsertCar(param) {
    flagInsertCar = param.detail;
}

</script>

<FormCatalogSearch on:getHandler={getHandler} {searchCar} {flagInsertCar} on:isInsertCar={isInsertCar} />

{#if flagInsertCar}
<FormCatalogInsert on:insertHandler={insertHandler} {newCar} {flagInsertCar} on:isInsertCar={isInsertCar} />
{/if}

<FormCatalogDetail on:deleteHandler={deleteHandler} {catalogs} on:updateHandler={updateHandler} />
