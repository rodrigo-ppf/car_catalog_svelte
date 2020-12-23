<script>
export let newCar;
export let flagInsertCar;

import {
    createEventDispatcher
} from "svelte";

const dispatch = createEventDispatcher();

function insertHandler(newCar) {
    dispatch("insertHandler", newCar);
}

function isInsertCar(flagInsertCar) {
    flagInsertCar = false;
    dispatch("isInsertCar", flagInsertCar);
}
</script>

<div class="row">
    <div class="col-md-4">
        <div class="card mb-2 shadow-sm">
            <div class="card-header">
                <h4 class="my-0 fw-normal">Edition mode</h4>
            </div>

            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <label for="validationCustom04" class="form-label">Brand</label>
                        <input type="text" bind:value={newCar.brand} class="form-control" placeholder="Brand" aria-label="Brand">
                    </div>
                    <div class="col">
                        <label for="validationCustom04" class="form-label">Model</label>
                        <input type="text" bind:value={newCar.model} class="form-control" placeholder="Model" aria-label="Model">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="validationCustom04" class="form-label">Year</label>
                        <input type="number" bind:value={newCar.year} class="form-control" placeholder="Year" aria-label="Model">
                    </div>
                    <div class="col">
                        <label for="validationCustom04" class="form-label">Price</label>
                        <span class="input-group-addon">$</span>
                        <input type="number" bind:value={newCar.price} class="form-control currency" />
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label for="validationCustom04" class="form-label-left">Fuel</label>
                        <input type="text" bind:value={newCar.fuel} class="form-control" placeholder="Fuel" aria-label="Fuel">
                    </div>
                </div>

                <button type="button" on:click={insertHandler(newCar)} class="w-100 btn btn-lg btn-outline-danger">Submit</button>
                <button type="button" on:click={isInsertCar(flagInsertCar)} class="w-100 btn btn-lg btn-outline-primary">Cancel</button>

            </div>
        </div>
    </div>
</div>
