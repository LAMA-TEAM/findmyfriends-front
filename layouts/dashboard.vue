<template>
    <MobileNavbar/>
    <div class="flex flex-row h-screen">
        <Sidebar/>
        <slot/>
    </div>
    <MobileFooter/>
</template>
