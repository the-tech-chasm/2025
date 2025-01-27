<template>
    <div class="flex flex-col items-center gap-2 p-3 rounded-lg">
        <!-- Profile Image with Yellow Ring -->
        <img :src="profileImage" :alt="`${name}'s Profile Photo`"
            class="w-32 h-32 rounded-full object-cover border-4 border-yellow-400" />

        <!-- Name with Dark Orange -->
        <h2 class="text-xl font-bold text-orange-400">{{ name }}</h2>

        <!-- Role and Company Section -->
        <div class="text-center flex items-center space-x-2">
            <p class="text-lg text-gray-300 font-medium">{{ role }} @</p>
            <a :href="companyLink" target="_blank" rel="noopener noreferrer">
                <img :src="companyLogo" :alt="`${companyName} Logo`" class="w-6 h-6" />
            </a>
        </div>

        <!-- Description -->
        <p class="text-center text-gray-400 text-sm">
            {{ description }}
        </p>
    </div>
</template>

<script setup>
defineProps({
    profileImage: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    companyLogo: {
        type: String,
        required: true,
    },
    companyLink: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
        default: "",
    },
});
</script>
