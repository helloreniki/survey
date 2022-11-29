<template>
    <BaseCard>
        <h1 class="text-xl font-semibold mb-6">How was your learning experience?</h1>
        <form action="" class="flex flex-col gap-8">
            <div>
                <label for="name">Your name:</label>
                <input type="text" id="name" name="name" class="border ml-2">
            </div>
            <div class="flex flex-col gap-2">
                <h3 class="text-lg">Please rate your learning experience...</h3>
                <div class="flex gap-2 items-center">
                    <input type="radio" id="rating" name="rating" value="poor">
                    <label for="rating">Poor</label>
                </div>
                <div class="flex gap-2 items-center">
                    <input type="radio" id="rating" name="rating" value="average">
                    <label for="rating">Average</label>
                </div>
                <div class="flex gap-2 items-center">
                    <input type="radio" id="rating" name="rating" value="great">
                    <label for="rating">Great</label>
                </div>
            </div>
            <BaseButton class="self-start">Submit</BaseButton>
        </form>
    </BaseCard>
</template>
