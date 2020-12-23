<script>
    export let catalogs;

    import {
    slide
} from 'svelte/transition'

import {
    Confirm
} from 'svelte-confirm'

import {
    createEventDispatcher
} from "svelte";

const dispatch = createEventDispatcher();


function updateHandler(newCar) {
    dispatch("updateHandler", newCar);
}

function deleteHandler(id) {
    dispatch("deleteHandler", id);
}

</script>

<div class="card">
    <div class="card-body">
        <div class="col-md-12">
            <div class="row row-cols-1 row-cols-md-5 mb-5 text-center">
                {#each catalogs as car}
                <div
                    class="item"
                    transition:slide
                    >
                    <Confirm
                        confirmTitle="Delete"
                        cancelTitle="Cancel"
                        let:confirm="{confirmThis}"
                        >
                        <div class="col">
                            {#if car.editing}
                            <div class="card mb-2 shadow-sm">
                                <div class="card-header">
                                    <h4 class="my-0 fw-normal">Edition mode</h4>
                                </div>

                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <label for="validationCustom04" class="form-label">Brand</label>
                                            <input type="text" bind:value={car.brand} class="form-control" placeholder="Brand" aria-label="Brand">
                                        </div>
                                        <div class="col">
                                            <label for="validationCustom04" class="form-label">Model</label>
                                            <input type="text" bind:value={car.model} class="form-control" placeholder="Fuel" aria-label="Fuel">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <label for="validationCustom04" class="form-label">Year</label>
                                            <input type="number" bind:value={car.year} class="form-control" placeholder="Year" aria-label="Year">
                                        </div>
                                        <div class="col">
                                            <label for="validationCustom04" class="form-label">Price</label>
                                            <span class="input-group-addon">$</span>
                                            <input type="number" bind:value={car.price} class="form-control" placeholder="Price" aria-label="Price"/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <label for="validationCustom04" class="form-label-left">Fuel</label>
                                            <input type="text" bind:value={car.fuel} class="form-control" placeholder="Fuel" aria-label="Fuel">
                                        </div>
                                    </div>

                                    <button type="button" on:click={updateHandler(car)} class="w-100 btn btn-lg btn-outline-danger">Submit</button>
                                    <button type="button" on:click={() => car.editing = false} class="w-100 btn btn-lg btn-outline-primary">Cancel</button>

                                </div>
                            </div>
                            {:else}
                            <div class="card mb-2 shadow-sm">
                                <div class="card-header">
                                    <h4 class="my-0 fw-normal">{car.brand}</h4>
                                </div>

                                <div class="card-body">
                                    <h1 class="card-title pricing-card-title">€{car.price}</h1>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>Model: {car.model}</li>
                                        <li>year: {car.year} </li>
                                        <li>fuel: {car.fuel}</li>
                                    </ul>
                                    <button type="button" on:click={() => car.editing = true} class="w-100 btn btn-lg btn-outline-primary">Edit</button>
                                    <button on:click="{() => confirmThis(deleteHandler, car.id)}" class="w-100 btn btn-lg btn-outline-danger">Remove</button>
                                </div>
                            </div>
                            {/if}
                        </div>

                        <span slot="title">
                            Delete this item?
                        </span>
                        <span slot="description">
                            You won't be able to revert this!
                        </span>

                    </Confirm>
                </div>
                {/each}
            </div>
        </div>
    </div>
</div>