<script>
export let searchCar;
export let flagInsertCar;

import {
    createEventDispatcher
} from "svelte";

const dispatch = createEventDispatcher();

function getHandler(searchCar) {
    dispatch("getHandler", searchCar);
}

function isInsertCar(flagInsertCar) {
    flagInsertCar = true;
    dispatch("isInsertCar", flagInsertCar);
}
</script>

<div class="card">
    <div class="card-body">
        <div class="col-md-12">
            <form class="row g-3 needs-validation" on:submit|preventDefault={getHandler(searchCar)} novalidate>
                <div class="col-md-2">
                    <label for="validationCustom01" class="form-label">Brand</label>
                    <input type="text" bind:value={searchCar.Brand} class="form-control" placeholder="Brand" aria-label="Brand">
                </div>
                <div class="col-md-2">
                    <label for="validationCustom02" class="form-label">Model</label>
                    <input type="text" bind:value={searchCar.Model} class="form-control" placeholder="Model" aria-label="Model">
                </div>
                <div class="col-md-2">
                    <label for="validationCustom03" class="form-label">Year</label>
                    <input type="number" bind:value={searchCar.Year} class="form-control" placeholder="Year" aria-label="Model">
                </div>
                <div class="col-md-2">
                    <label for="validationCustom03" class="form-label">Price</label>
                    <input type="number" bind:value={searchCar.Price} class="form-control currency" id="c2" />
                </div>
                <div class="col-md-3">
                    <label for="validationCustom03" class="form-label">Fuel</label>
                    <input type="text" bind:value={searchCar.Fuel} class="form-control" placeholder="Fuel" aria-label="Fuel">
                </div>

                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Search</button>
                    <button type="button" class="btn btn-primary" on:click={isInsertCar(flagInsertCar)} >Add new Car</button>
                </div>
            </form>
        </div>
    </div>
</div>
